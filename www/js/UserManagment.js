function authenticate(username, password){
    console.log('we are authenticating the user ' ) ;
    if (username == 'user1' && password == '123')
        return true ; 
    if (username =='user2' && password == '')
        return true; 
    return false ; 
}

function alreadyExists(section , list){
        for ( var i in list){
            c = list[i] ; 
            if ( c.SECTION_ID == section.SECTION_ID)
                return true; 
        }
        return false ; 
    }



function addToCourseBin(section){
  //  console.log( 'adding section '  , section , ' to the course bin ' ) ; 
    
    if (localStorage.COURSE_BIN == undefined)
        localStorage.COURSE_BIN = JSON.stringify([]) ; 
    var myCurrentSections = JSON.parse(localStorage.COURSE_BIN);
    if (!alreadyExists(section , myCurrentSections)){
        myCurrentSections.push(section) ; 
        localStorage.COURSE_BIN = JSON.stringify(myCurrentSections) ; 
        return "Successfully added to your coursebin.";  
    }
    else
        return "Section already exists in your coursebin."; 
}

function scheduleClass(section){
    function sectionIntersection(section , section2){
        var days1 = section.DAY ; 
        var days2 = section2.DAY; 
        var commonDays = days1.filter(function(value) { 
                                   return (days2.indexOf(value)>-1);
                                    });
        if (commonDays.length ==0)
            return false ;
        var beginTime1 = parseInt(section.BEGIN_TIME.replace(":",""));
        var beginTime2 = parseInt(section2.BEGIN_TIME.replace(":",""));
        var endTime1 = parseInt(section.END_TIME.replace(":",""));
        var endTime2 = parseInt(section.END_TIME.replace(":",""));
        if (beginTime1 < beginTime2){
            if ( endTime1 > beginTime2)
                return true ; 
        }
        else if (endTime2> beginTime1)
            return true ; 
        return false ; 
    }
    
    function hasIntersection(section , sections_list){
        for ( var s in sections_list){
            se = sections_list[s] ;
            if (sectionIntersection(se , section) == true){
                return [true , se ] ;
            }
        }
        return [false , null ] ; 
    }
    console.log('asan seda zade mishe ? ' );
    if (localStorage.SCHEDULED_CLASSES == undefined){
        localStorage.SCHEDULED_CLASSES = JSON.stringify([]) ;
    }
    var myCurrentscheduledClasses = JSON.parse(localStorage.SCHEDULED_CLASSES);
    if (!alreadyExists(section , myCurrentscheduledClasses)){
        var intersect = hasIntersection(section , myCurrentscheduledClasses) ; 
        if ( intersect[0] == true)
            return [false , 'This section has intersection with section ' + intersect[1].SECTION ] ; 
        myCurrentscheduledClasses.push(section) ; 
        localStorage.SCHEDULED_CLASSES = JSON.stringify(myCurrentscheduledClasses); 
        return [true , 'Section scheduled successfully'] ; 
    }
    else 
        return [false , 'course already has been scheduled']  ; 

}

function unscheduleClass(section){
    var myCurrentscheduledClasses = JSON.parse(localStorage.SCHEDULED_CLASSES);
    console.log( 'before unsecehduling ' , myCurrentscheduledClasses) ; 
    for ( var i in myCurrentscheduledClasses){
        var sec = myCurrentscheduledClasses[i] ; 
        if (section.SECTION_ID == sec.SECTION_ID){
            myCurrentscheduledClasses.splice(i,1); 
        }
    }
    console.log( 'after unsecehduling ' , myCurrentscheduledClasses) ; 
    localStorage.SCHEDULED_CLASSES = JSON.stringify(myCurrentscheduledClasses) ; 

}

function RegisterCourses(sections){
    if (localStorage.REGISTERED == undefined)
        localStorage.REGISTERED = JSON.stringify([]) ; 
    var myCurrentRegistered = JSON.parse(localStorage.REGISTERED) ; 
    
    for ( var i in sections){
        var section = sections[i] ; 
        if (!alreadyExists(section , myCurrentRegistered )){
            myCurrentRegistered.push(section) ; 
        }
    }
    localStorage.REGISTERED = JSON.stringify(myCurrentRegistered); 
}

function unRegisterClass(section){
    button = $("#calendar_course-list button[sectionID=" +"'" + section.SECTION_ID+ "']")  
    button.html('Schedule') ; 
    button.attr('value' , 'schedule'); 

    var myCurrentregisteredClasses = JSON.parse(localStorage.REGISTERED );
    console.log( 'before unregistering ' , myCurrentregisteredClasses) ; 
    for ( var i in myCurrentregisteredClasses){
        var sec = myCurrentregisteredClasses[i] ; 
        if (section.SECTION_ID == sec.SECTION_ID){
            myCurrentregisteredClasses.splice(i,1); 
        }
    }
    console.log( 'after unregistering ' , myCurrentregisteredClasses) ; 
    localStorage.REGISTERED= JSON.stringify(myCurrentregisteredClasses) ; 

    
}

function registerAll(){
    $('#regConPopup').popup('close');
    var myScheduledClasses = JSON.parse(localStorage.SCHEDULED_CLASSES); 
    RegisterCourses(myScheduledClasses);
    //Roohy message = "Your courses have been registered successfuly" 
    
    // bayad oono tabdil koni be unregistered 
    for ( var i in myScheduledClasses){
        var section = myScheduledClasses[i] ; 
        button = $("#calendar_course-list button[sectionID=" +"'" + section.SECTION_ID+ "']")  
        button.html('Unregister') ; 
        button.attr('value' , 'unregister'); 
    }
}


function getCourseBin(){
    if (localStorage.COURSE_BIN == undefined)
        return [] ; 
    return JSON.parse(localStorage.COURSE_BIN); 
}

function getRegisteredCourses(){
    if (localStorage.REGISTERED == undefined)
        return [] ; 
    return JSON.parse(localStorage.REGISTERED) ;
}

