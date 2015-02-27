$(function() {
    console.log('helloooo we are in filters js' );        
});

// filters : {  WeekDays: ['T', 'W'] , BeginTime: "16:00" , EndTime: "17:30" , 'HasFreeSpace': harchi!! , 'DEPARTMENT_CODES' : ['FAPT' , 'CSCI'] , 'UNITS' : 2}
function filter_courses(filters){    
    var term = localStorage.TERM;
    
    for ( depart in filters.DEPARTMENT_CODES)
        saveDepartmentToDB(filters.DEPARTMENT_CODES[depart] , true); 
    
    var courses = courseFilters(filters);
  //  console.log('coursessssss are ' , courses ); 
    if (courses.length ==0){
        console.log('hichi peida nashod darim return mikonim ' ); 
        return [] ; 
    }
    courses = sectionFilters(courses,filters); 
//    if (courses.length>0 && courses[0].PRIORITY !=undefined){
//        courses = courses.sort(function(current, next){
//            return current.PRIORITY - next.PRIORITY;});
//    }
    return courses; 
}

function keyword_search(keywords){
    
    var courses = JSON.parse(localStorage['CurrentSelection']) ; 
    for ( var w in keywords){
        var word = keywords[w]; 
        var selectedForThisKeyword = [] ; 
        for ( var i in courses){
            var course = courses[i];
        //    console.log('course is ' , course ); 
            p = passKeyword(course,word);
        //    console.log('p is ' , p); 
            if (p == true){
               // course['PRIORITY'] = p[1]; 
                selectedForThisKeyword.push(course); 
            }
        }
        courses = selectedForThisKeyword ;
    }
    localStorage['CurrentSelection'] = JSON.stringify(courses);
    renderCourses(courses);
}


function courseFilters(filters){
    
    
    if (filters.UNITS != undefined){
        selectedCourses2 = [] ;
        for (var j in selectedCourses){
            var course = selectedCourses[j]; 
            if (passUnit(course, filters.UNITS))
                selectedCourses2.push(course); 
        }
        return selectedCourses2 ; 
    }
    return selectedCourses; 
    
}

function sectionFilters(courses,filters){
    var MyFilters = [] , selectedCourses = [] ; 

    if (filters.WeekDays !=undefined)
        MyFilters.push(passWeekDays);
    if (filters.BeginTime != undefined)
        MyFilters.push(passTime); 
    if (filters.Professor !=undefined)
        MyFilters.push(passProf); 
    if (filters.HasFreeSpace !=undefined)
        MyFilters.push(passHasFreeSpace);
    
    outerloop:
    for (var i in courses){
        var course = courses[i]; 
        var sections = course.V_SOC_SECTION; 
        for ( var j in MyFilters){
            var filterFunc = MyFilters[j] ; 
            sections = filterFunc(sections , filters); 
            if (sections.length == 0)
                continue outerloop; 
        }
        course.V_SOC_SECTION = sections; 
        selectedCourses.push(course); 
        
    }
    return selectedCourses ;
}

function getAllCourses(departments , term){
    var arr = [] ; 
//    console.log('in the getAll Courses hastim ' , departments); 
    for (var i  in departments){
        var dep = departments[i] ; 
//        console.log( ' geting the dep = ,' , dep , ' and term = ' , term ) ; 
        arr = arr.concat(JSON.parse(localStorage[term +dep]));
    }
//    console.log('returning arrr ' , arr); 
    return arr ;
}

function passUnit(course, units){
    return (units>=course.MIN_UNITS && units<=course.MAX_UNITS); 
}

function passKeyword(course, query){
//    console.log('pass keyword') ; 
    
    if (course.TITLE.toLowerCase().search(query.toLowerCase())!=-1)
        return true; 
    for (var c in course.V_SOC_SECTION){
        var section = course.V_SOC_SECTION[c] ; 
        if (section.INSTRUCTOR !=null)
            if (section.INSTRUCTOR.toLowerCase().search(query.toLowerCase())!=-1)
                return true ; 
    }
    if (course.DESCRIPTION !=null)
        if (course.DESCRIPTION.toLowerCase().search(query.toLowerCase())!=-1)
            return true ;
    return false; 
    
        
}

function passHasFreeSpace(sections , filter){
    console.log('pass free space '); 
    var result = [] ; 
    for (var i in sections){
        var section = sections[i]
        if (section['REGISTERED'] == null)
            result.push(section);
        if (section['REGISTERED'] < section['SEATS'])
            result.push(section); 
    } 
    return result ;
}

function getTime(str){
    return parseInt( str.replace(":","")); 
}

function passTime(sections , filter){
    console.log('pass time'); 
    
    var filter_beginTime = getTime(filter.BeginTime) ; 
    var filter_endTime = getTime(filter.EndTime); 
    var result = [] ; 
    for (var i in sections){
        var section = sections[i] ; 
        if (section.BEGIN_TIME== "TBA")
            continue;
        var course_beginTime = getTime(section.BEGIN_TIME); 
        var course_endTime = getTime(section.END_TIME); 
        if ( (filter_beginTime <= course_beginTime) && (course_endTime <= filter_endTime) ){
            result.push(section); 
        }
    }
    return result ; 

}
    
//    
//function passProf(sections , filter){
//    console.log('pass proff'); 
//    function getInstructor(sec){
//        return sec['INSTRUCTOR'].toLowerCase() ;  
//    }
//    
//    var professor = filter.Professor.toLowerCase(); 
//    var result = [] ; 
//    for (var i in sections){
//        var section = sections[i]; 
//        var instructor = getInstructor(section) ; 
//        if ( instructor !=null && instructor.search(professor)!=-1)
//            result.push(section); 
//    }
////    course['V_SOC_SECTION'] = result ;
////    return [result.length>0 , course] ; 
//    return result ; 
//}


function passWeekDays(sections , filter){
    
    console.log('pass week days filter with sections ' , sections , ' and filters ' , filter); 
    function extractDays(inp){
        var list = ['M', 'T', 'W', 'H', 'F','S','U'] ; 
        var result = [] 
        for( var l in list){
            var ind = inp.search(list[l]); 
            if (ind!=-1)
                result.push(list[l]); 
        }
        return result; 
    }

    function isSuperset(arr2, arr1){ 
        return arr2.every(function (val) { return arr1.indexOf(val) >= 0; });
    }
    
    var weekDays = filter.WeekDays; 
    var result = [] ; 
    for (var i in sections){
        section = sections[i];
        if (section['DAY'] == null)
            continue; 
         if (isSuperset(extractDays(section['DAY']),weekDays)){
            result.push(section); 
        }
    }
//    course['V_SOC_SECTIOM'] = result ; 
//    return [(result.length>0), course] ; 
    return result ;

} 