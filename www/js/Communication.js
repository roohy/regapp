var comm = comm | {} ;

$(function() {
    console.log( "ready!" );
 //   localStorage.clear() ;

 //   $("#setarehTest").html(JSON.stringify(window.localStorage['FAPR'])) ; 
    
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


function saveDepartmentToDB(department_code ,render , successFunction, filters){
    console.log(' in save department and render is ' , render ) ; 
    term = localStorage.getItem('TERM'); 
    if (window.localStorage.getItem(term + department_code)!=null){
        if (render == true){
            var a = JSON.parse(window.localStorage[term + department_code]); 
            renderCourses(a); 
            initialStage = a ; 
        }
        mycounter2++;
        console.log( 'added mycounter2 for dpeartment ' , mycounter2 , ' for  ' , department_code , ' mycounter1 is ' , mycounter) ; 
        if (mycounter == mycounter2){
            console.log( 'all the departments are fetched now ' ) ; 
            mycounter = 0 ; 
            mycounter2 = 0 ; 
            s = successFunction || function(a){} ; 
            s(filters) ; 
        }
        return ; 
    }
  //  console.log('raftim ke course haro begirim :) department code = ' , department_code ); 
    
    getCourses(term, department_code, fetchSections , NaN , {'depart':department_code ,  'term':term ,'render' : render , 'successFunction': successFunction , 'filters': filters}) ; // ,
}

counter1 = 0 ;
counter2 = 0 ; 

function fetchSections(courses , info){
    console.log('in fetch section and the info is ' , info ) ; 
    var depart = info.depart ; 
    var term = info.term ; 
//    console.log(' in fetch sections and depart is ,' , depart , ' and term is ' , term ) ; 
    window.localStorage[term + depart] = JSON.stringify(courses); 
//    console.log('after adding to localStorage ' , localStorage); 
    counter1 = courses.length ; 
    counter2=0 ; 
    for (var i =0 ; i< courses.length ; i++){
        var course_id = courses[i]['COURSE_ID'] ; 
       // console.log('fetching cestions for couse + ' + course_id );
    //    counter ++ ; 
         getCourses(term, course_id.toString() , setSections , NaN , {'depart':depart, 'index': i  , 'term': term ,'render' : info.render , 'successFunction': info.successFunction , 'filters': info.filters}); // 
    }
}

function setSections(sections , info){
 //   console.log(' in set section and info i s ' , info ) ; 
    var depart = info.depart ; 
    var term = info.term ;
    index = info.index;
 //   console.log('index is ' , index);
    a = window.localStorage[term + depart];
    a = JSON.parse(a);
//    console.log('paresed term_depart is' ,a  );
    
    
//    console.log('sections are ' , sections);
    k = sections['V_SOC_SECTION']; 
  //  console.log('sections of this course are ' , k);
//    console.log('before adding the sections ' , a); 
    a[index]['V_SOC_SECTION']=k;
    localStorage[term + depart] = JSON.stringify(a); 
    //alert('vaisa inja');
  //  console.log('after adding the sections ' , a);
    counter2 ++; 
    if ( counter2== counter1){
        counter1 = 0 ; 
        counter2 = 0 ;
        
        alert('we are done fetching' ) ; 
        if (info.render == true){
       //     alert('helloo?????');
            renderCourses(a);
            initialStage = a ; 
//            localStorage['CurrentSelection'] = JSON.stringify(a);     
        }
        mycounter2 = mycounter2+1;
        console.log( 'added mycounter 2 for dpeartment ' , depart , ' mycounter1 is ' , mycounter) ; 
        
        if (mycounter == mycounter2){
            console.log( 'all the departments are fetched now ' ) ; 
            mycounter = 0 ; 
            mycounter2 = 0 ; 
            var s = info.successFunction || function(){} ; 
            var e = info.filters || NaN ; 
            s(e) ; 
        }
    }
}

function getFromServer(url , successFunction , waitFunction , opt_additionalInfo){
//comm.getFromServer = function(url ) {
//    console.log(' in get From server and url is ' , url ) ;
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
            alert("errorrr in ajax and data is " , data); 
        });
}


 
