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
    console.log( 'adding section '  , section , ' to the course bin ' ) ; 
    
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
                                   return days2.indexOf(value) > -1;
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
    
    if (localStorage.SCHEDULED_CLASSES == undefined)
        localStorage.SCHEDULED_CLASSES = [] ;
    var myCurrentscheduledClasses = JSON.parse(localStorage.SCHEDULED_CLASSES);
    if (!alreadyExists(section , myCurrentSections)){
        var intersect = hasIntersection(section , myCurrentscheduledClasses) ; 
        if ( intersect[0] == true)
            return [false , 'This section has intersection with section ' + intersect[1].SECTION ] ; 
        myCurrentSections.push(course) ; 
        localStorage.COURSE_BIN = JSON.stringify(myCurrentSections); 
        return [true , 'Section scheduled successfully'] ; 
    }
    else 
        return [false , 'course already has been scheduled']  ; 

}

function RegisterCourse(sections){
    if (localStorage.REGISTERED == undefined)
        localStorage.REGISTERED = [] ; 
    var myCurrentRegistered = JSON.parse(localStorage.REGISTERED) ; 
    if (!alreadyExists(section , myCurrentRegistered )){
        myCurrentRegistered.push(section) ; 
        localStorage.REGISTERED = JSON.stringify(myCurrentRegistered); 
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

