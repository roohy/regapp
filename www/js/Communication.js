var comm = comm | {} ;

$(function() {
    console.log( "ready!" );
 //   localStorage.clear() ;

    $("#setarehTest").html(JSON.stringify(window.localStorage['FAPR'])) ; 
    
});
    
function getSection(sectionID , opt_successFunction , opt_waitFunction){
    getFromServer('Sections/' + sectionID , opt_successFunction , opt_waitFunction) ; 
}

function getTerms(opt_termID, successFunction , opt_waitFunction , opt_additionalInfo){
    opt_termID = opt_termID || "" ; 
    var terms = localStorage['ACTIVE_TERMS'] ; 
    if ( terms == undefined)
        getFromServer('Terms/' + opt_termID , successFunction , opt_waitFunction , opt_additionalInfo); 
    else
        successFunction(JSON.parse(terms) , opt_additionalInfo); 
}
                  
function getSessions(opt_sessionID, opt_successFunction , opt_waitFunction){
    opt_sessionID = opt_sessionID || ""; 
    getFromServer('Sessions/' + opt_sessionID , opt_successFunction , opt_waitFunction);
}

    
function getSchools(successFunction , opt_waitFunction){
    var sch = localStorage['SCHOOLS'] ; 
    if ( sch == undefined)
        getFromServer('Schools/' , successFunction , opt_waitFunction);
    else
        successFunction(JSON.parse(sch)); 
}
    
function getDepartments(school_code , successFunction , opt_waitFunction , opt_additionalInfo){
  //  console.log('we are in getDepartments in communication and additional info is ' , opt_additionalInfo) ; 
    var depts = localStorage['SCHOOL_' + school_code] ; 
    if (depts == undefined)
        getFromServer('Schools/' + school_code, successFunction , opt_waitFunction , opt_additionalInfo) ;
    else
        successFunction(JSON.parse(depts) , opt_additionalInfo);
}
    
function getCourses(term, opt_options , opt_successFunction , opt_waitFunction , opt_additionalInfo){
    options = opt_options || "" ;     
    getFromServer('Courses/' + term +'/'+ options, opt_successFunction , opt_waitFunction , opt_additionalInfo) ;
}


function saveDepartmentToDB(department_code , render){
     
    console.log('saving  ' , department_code,  '  to dB'); 
    term = localStorage.getItem('TERM'); 
    if (window.localStorage.getItem(department_code)!=null){
        console.log('peida shod too local storage :DDDDD ');
        if (render == true){
            renderCourses(JSON.parse(window.localStorage[department_code])); 
        }
        return ; 
    }
    console.log('raftim ke course haro begirim :)' ); 
    
    getCourses(term, department_code, fetchSections , NaN , {'depart':department_code , 'render' : render}) ;
}

counter = 0 ;
counter2 = 0 ; 

function fetchSections(courses , info){
    var depart = info.depart ; 
    window.localStorage[depart] = JSON.stringify(courses);
    var term = localStorage.TERM; 
    for (var i =0 ; i< courses.length ; i++){
        var course_id = courses[i]['COURSE_ID'] ; 
       // console.log('fetching cestions for couse + ' + course_id );
        counter ++ ; 
         getCourses(term, course_id.toString() , setSections , NaN , {'depart':depart, 'index': i , 'render' : info.render});
    }
}

function setSections(sections , info){
    globalSections = sections ;
    globaInfo = info ; 
    var depart = info['depart'] ; 
    index = info['index'];
 //   console.log('index is ' , index);
    a = window.localStorage[depart];
    a = JSON.parse(a);
//    console.log('paresed term_depart is' ,a  );
    
    
//    console.log('sections are ' , sections);
    k = sections['V_SOC_SECTION']; 
  //  console.log('sections of this course are ' , k);
//    console.log('before adding the sections ' , a); 
    a[index]['V_SOC_SECTION']=k;
    localStorage[depart] = JSON.stringify(a); 
    //alert('vaisa inja');
    console.log('after adding the sections ' , a);
    counter2 ++; 
    if ( counter2== counter){
        alert('we are done fetching' ) ; 
        if (info.render == true){
            renderCourses(a); 
        }
    }
}

function getFromServer(url , successFunction , waitFunction , opt_additionalInfo){
//comm.getFromServer = function(url ) {
    var successFunction = successFunction || function(){} ;
    var waitFunction = waitFunction || function(){};  
    $.ajax({
        //type: "POST",
        url: "http://petri.esd.usc.edu/socAPI/" + url,
//        datatype: "json",
    //    async: false, 
        beforeSend: function(){ 
            waitFunction() ; 
        }
       
    })
        .done(function( msg ) {
        })
        .success(function(data){
        //    console.log('we are in the success function and additional info is ' , opt_additionalInfo);  
            successFunction(data, opt_additionalInfo);
        })
        .error(function(data){
            alert("errorrr in ajax " ); 
        });
}


 
