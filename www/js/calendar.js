var datesInt = {'M':1 , 'T':2,'W':3,'H':4};
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
}

function setGraded(){
    $('<select><option value="4">4 Units</option><option value="0">Credit</option><option value="-1">Audit</option </select>').appendTo($('.unitDiv'));
}

function renderCourseTable(sections){

    for ( var s in sections){   
        var section = sections[s] ;
     //   console.log('section is ' , section ) ; 
        var class_details = $('<div class="class-details"></div>') ;
        var class_section = $('<div class="class-sections"></div>'); 
        var class_section2 = $('<div class="class-section">'); 
        var row = $('<div class=" row"></div>');
        var table = $('<table class="table"></table>'); 
        var thead = $('<thead ><tr class="info"><td>Code</td><td>Type</td><td>Instr.</td><td>Place</td></tr></thead>'); 
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
        var add_bottun = $('<button class="btn  btn-danger ui-btn ui-shadow ui-corner-all">Add</button>');
//                add_bottun.trigger("create");
//<div class="ui-btn ui-input-btn ui-shadow">
//The Button
//<input type="button" data-corners="false" data-enhanced="true" value="The Button"></input>
//</div>


        add_bottun.button();
        add_bottun[0].__section = section ; 
        add_bottun.click(function(event){
           //TODO-----------------------------------------------------------------------------------------------------------
        });
        row.append(table); 
        row.append(table2) ; 
        row.append(add_bottun);
        class_section2.append(row);
        class_section.append(class_section2);
        class_details.append(class_section);
    }


}


$(function(){
    var list = ['M'];
  //  addToCalendar("8:00","10:00",list);
//    alert("haha");
    initialize(); 
    setGraded(); 
    
    
});