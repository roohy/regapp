var datesInt = {'M':1 , 'T':2,'W':3,'H':4 , 'F':5 , 'S':6 , 'U':0 };
var calendarTable = '#calendarTable';

function addToCalendar(startTime,endTime, dates){ //13:30
    //parsing the strings of startTime and endTime to getout everithing about where to start and where to end.
    var parsedStart = parseInt(startTime.split(":")[0]);
    var parsedStartChange = parseInt(startTime.split(":")[1].split(" ")[0]);
    var startAMPM = startTime.split(":")[1].split(" ")[1];
    
    var parsedEnd = parseInt(endTime.split(":")[0]);
    var parsedEndChange = parseInt(startTime.split(":")[1].split(" ")[0]);
    var endAMPM = endTime.split(":")[1].split(" ")[1];
    
    //Starting to get the coordinations
    var startRowCount = (parsedStart-6)*2+ parsedStartChange/20;
    var endRowCount = (parsedEnd-6)*2 + parsedEndChange/20;
    //extracting the dates
    var columnList = [];
    for(var  i in dates){
        var day = dates[i]; 
        columnList.push(datesInt[day]+1);
        console.log("day is " +day);
    }
    
    
    var startPosition;
    var endPosition = {};
    var width;
    var height;
    
    var startRow = $(calendarTable+' tr')[startRowCount+1];
    var endRow = $(calendarTable+' tr')[endRowCount+1];
    startRow = $(startRow);
    endRow =$(endRow);
    for(i in columnList){
        var day = columnList[i];
        startPosition = $(startRow.children("td")[day]).position();
        endPosition.right= $(endRow.children("td")[day]).position().left+$(endRow.children("td")[day]).width();
        endPosition.bottom= $(endRow.children("td")[day]).position().top+$(endRow.children("td")[day]).height();
        width = endPosition.right-startPosition.left;
        height = endPosition.bottom-startPosition.top;
        var result = $('<div class="timeBlock"></div>').css({
            position: 'absolute',
            top: startPosition.top+'px',
            left: startPosition.left+'px',
            width: width+'px',
            height: height+'px',
            background: '#FF5533'
        });
        result.appendTo($('#content'));
        console.log(result);
        console.log(result.position());
        console.log(result.height());
        console.log("day is "+day);
        return result;
    }
    
}
function registerConfirmation(){
    $('#regConPopup').popup('open',{transition: 'pop'});
}

function initialize(){
    $('.ctrl-btn').click(function(){
        console.log($(this).attr('id'));
        if ($(this).attr('id') == 'regButton')
            registerConfirmation();
    });
    $ ('#regConPopup #yes-button').click(function(){
       registerAll();
        
        
    }); 
    
//    $('#regButton').click(function(){alert('haha');}) ; 
}



function renderCourses(section){
    function getUnitString(mycourse){
        var min_units = mycourse.MIN_UNITS ; 
        var max_units = mycourse.MAX_UNITS ;
        var unitString  ; 
        if (min_units == null || max_units == null){
            return ("0 Units") ;
        }
        if ( min_units == max_units ){
            unitString = parseFloat(min_units).toString() ;
            if (min_units==1) unitString+= " Unit" ; 
            else unitString+= " Units" ;
        }
        else
            unitString = (parseFloat(min_units).toString()) + "-" + (parseFloat(max_units).toString()) + " Units";
        return unitString; 
    }
    function getTime(mysection){
        if (mysection.BEGIN_TIME == null || mysection.END_TIME == null)
            return ("---") ; 
        if (mysection.BEGIN_TIME == "TBA")
            return ("TBA");
        var begin_time = mysection.BEGIN_TIME.split('||')[0]; 
        var end_time = mysection.END_TIME.split('||')[0]; 
    //    console.log('begin time is ' , begin_time , ' and end time is ' , end_time) ;
        return (begin_time + "-" + end_time) ;
    }
    function getDays(mysection){
        if (mysection.DAY == null)
            return ('---');
        return mysection.DAY.split('||')[0]; 
    }
    function getStats(mysection){
        var registered = mysection.REGISTERED; 
        if (registered == null)
            registered = 0 ; 
        var seats = mysection.SEATS ; 
        return registered.toString() + "/" + seats.toString();
    }
    function getType(mysection){
        var type = mysection.TYPE ; 
        if (type == null)
            return ('---');
        return type; 
    }
    function getInstructor(mysection){
        var inst = mysection.INSTRUCTOR ; 
        if (inst == null)
            return ('---');
        var ins = inst.split('||'); 
        var result = ins[0].substr(0,ins[0].search(','));
        for ( var i =1 ; i<ins.length ; i++){
            result += (", " + ins[i].substr(0,ins[i].search(','))) ;  
        }
        return result ;  
        
    }
    function getLocation(mysection){
        var location = mysection.LOCATION; 
        if (location == null)
            return ('---'); 
        location = location.split('||')[0] ; 
        return location ; 
    }
    
//    $('#course-list').empty();
//    mycourse_list = JSON.parse(localStorage[depart]); 
        
    var card = $('<div class="course-card panel row-fluid"></div>');
    var course_heading = $('<div class="panel-heading course-heading"></div>');
    var course_title = $('<h9 class="course-title">' + section.TITLE + '</h9>');
    var label_default = $('<span class="label label-warning">'+ section.SIS_COURSE_ID +'</span>');   
    var label_info = $('<span class="label label-danger">'+ getUnitString(section) +'</span>');
    var unit_div = $('<div class="unitDiv"></div>');

//    $('<select><option value="4">4 Units</option><option value="0">Credit</option><option value="-1">Audit</option </select>')
    var select = $('<select></select>');
    var minUnits = section.MIN_UNITS ; 
    var maxUnits = section.MAX_UNITS ; 
    if ( minUnits != null && maxUnits !=null){
        for ( var k = minUnits ; k <=maxUnits ; k++){
            var u ; 
            if ( k==1) 
                u=" Unit"; 
            else 
                u=" Units"; 
            var option = $('<option value=' + k.toString() + '>' + k.toString() + u +'</option>'); 
            select.append(option); 
        }
    }
    var credit = $('<option value="0">Credit</option>');
    var audit = $('<option value="-1">Audit</option>');
    select.append(credit);
    select.append(audit);
    unit_div.append(select);
    
    course_heading.append(course_title); 
    course_heading.append(label_default) ; 
    course_heading.append(label_info) ; 
    card.append(course_heading) ; 
    card.append(unit_div);


    var class_details = $('<div class="class-details"><div>'); 
    var class_secions = $('<div class="class-sections"></div>') ; 
    var class_section2 = $('<div class="class-section">'); 
    var row = $('<div class=" row"></div>');
    var table = $('<table class="table"></table>'); 
    var thead = $('<thead class="headed"><tr class="info"><td>Code</td><td>Type</td><td>Instr.</td><td>Place</td></tr></thead>'); 
    var tbody = $('<tbody></tbody>') ; 
    var tr = $('<tr></tr>') ;
    var td1 = $('<td>'+ section.SECTION+ '</td>') ;
    var td2 = $('<td>' + getType(section) + '</td>') ; 
    var td3 = $('<td>' + getInstructor(section) + '</td>' ) ; 
    var td4 = $('<td>' + getLocation(section) + '</td>') ; 
    tr.append(td1); 
    tr.append(td2); 
    tr.append(td3); 
    tr.append(td4);
    tbody.append(tr); 
    table.append(thead); 
    table.append(tbody);

    var table2 = $('<table class="table">');
    var thead2 = $('<thead ><tr class="info"><td>Hours</td><td>Days</td><td>Stats</td><td>Wait List</td></tr></thead>');
    var tbody2 = $('<tbody></tbody>') ;
    var tr2 = $('<tr></tr>');
    var td2_1 = $('<td>'+ getTime(section)+'</td>');
    var td2_2 = $('<td>' + getDays(section) +'</td>');
    var td2_3 = $('<td>' + getStats(section) + '</td>');
    var td2_4 = $('<td>0</td>');
    tr2.append(td2_1); 
    tr2.append(td2_2); 
    tr2.append(td2_3); 
    tr2.append(td2_4); 
    tbody2.append(tr2);
    table2.append(thead2) ; 
    table2.append(tbody2);

    row.append(table); 
    row.append(table2) ; 
    class_section2.append(row);

    class_secions.append(class_section2);
    class_details.append(class_secions);
    card.append(class_details) ;

    
    var scheduleButton = $('<button class="schedButton btn  btn-danger ui-btn ui-shadow ui-corner-all" value="schedule">Schedule</button>');
   
    var removeButton = $('<button class="remButton btn  btn-danger ui-btn ui-shadow ui-corner-all" value="schedule">Remove</button>');
    
    scheduleButton[0].__section = section ;
//    scheduleButton[0].sectionID = section.SECTION_ID ;
   scheduleButton.attr('sectionID' , section.SECTION_ID) ; 
   removeButton.attr('sectionID' , section.SECTION_ID) ; 
     scheduleButton.button(); 
    scheduleButton.click(function(event){
        e = event ; 
        ClassButtonClicked(event.target.__section , event.target.getAttribute('value') , event.target); 
    });
    scheduleButton.click(function(event){
    }); 
    
    
    card.append(scheduleButton) ; 
    
    $("#calendar_course-list").append(card);
}

function ClassButtonClicked(section , value , element){
    console.log('hello? section is ' , section); 
    if ( value == "schedule"){
        var result = scheduleClass(section); 
        //Roohy message = result[1]; 
        if ( result[0] == true){
            console.log( 'scheduled successfuly ') ; 
            element.innerText = 'Uneschedule';
            element.setAttribute('value' , 'unschedule'); 
            if (section.BEGIN_TIME ==null || section.END_TIME ==null || section.DAY == null){
                return; 
            }
            var domObject = addToCalendar(section.BEGIN_TIME , section.END_TIME , section.DAY.split('')); 
            element.__dom = domObject; 
        }
    }
    else if(value == 'unschedule'){
        unscheduleClass(section) ; 
        element.innerText = 'Schedule';
        element.setAttribute('value' , 'schedule'); 
        element.__dom.hide() ///or whatever the function is!!!!
        $('#donePopup').popup('open', {transtion:'pop'});
        setTimeout(function(){
                   $('#donePopup').popup('close');
    },1500);
        //Roohy message = "Section has been unscheduled"
    }
    else if (value == 'unregister'){
        unRegisterClass(section) ; 
        unscheduleClass(section) ; 
        element.innerText = 'Schedule';
        element.setAttribute('value' , 'schedule'); 
        // Roohy message = "Section was successfuly unregistered" 
    }
    else
        alert( ' value was something not expected : ' + value ) ; 
}



$(function(){
    var list = ['M'];
  //  addToCalendar("8:00","10:00",list);
//    alert("haha");
    initialize(); 
    
    var test = {"SECTION_ID":17554,"TERM_CODE":"20151","COURSE_ID":10514,"TITLE":"title e alakiiii " , "SIS_COURSE_ID":"FAPT-105","MIN_UNITS":4.0,"MAX_UNITS":4.0,"NAME":null,"SECTION":"33217D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"09:00","END_TIME":"11:50","DAY":"TH","LOCATION":"HAR203","REGISTERED":null,"INSTRUCTOR":"Liebowitz, Karen","SEATS":18,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null};
    
    if ( localStorage.COURSE_BIN == undefined)
        localStorage.COURSE_BIN = JSON.stringify([]);
    
    var myCourseBin = JSON.parse(localStorage.COURSE_BIN); 
    for ( var i in myCourseBin){
        var section = myCourseBin[i] ; 
        renderCourses(section) ;
    }
    
    
    
});