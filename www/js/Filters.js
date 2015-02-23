// filters : { 'Professor': 'dfdf' , WeekDays: ['T', 'W'] , BeginTime: "16:00" , EndTime: "17:30" , 'HasFreeSpace': harchi!! , 'DEPARTMENT_CODES' : ['FAPT' , 'CSCI']}

function filter_courses(filters){    
    var term = localStorage.TERM;
    var department_codes = filters.SOC_DEPARTMENT_CODE; 
    
    for ( depart in filters.DEPARTMENT_CODES)
        saveDepartmentToDB(term , depart); 
    
    
    var MyFilters = [] ; 

    if (filters.WeekDays !=undefined)
        MyFilters.push(passWeekDays);
    if (filters.BeginTime != undefined)
        MyFilters.push(passTime); 
    if (filters.Professor !=undefined)
        MyFilters.push(passProf); 
    if (filters.HasFreeSpace !=undefined)
        MyFilters.push(passHasFreeSpace);

    var courses = getAllCourses(filters.DEPARTMENT_CODES); 
    var selectedCourses = [] ; 
    outerloop:
    for (course in courses){
        var sections = course.V_SOC_SECTION; 
        for ( filterFunc in MyFilters){
            sections = filterFunc(sections , filters); 
            if (sections.length == 0)
                coninue outerloop; 
        }
        selectedCourses.push(course); 
        
    }
    return selectedCourses ;
    
}

function getAllCourses(departments){
    var arr = [] ; 
    for (dep in departments){
        arr.concat(JSON.parse(localStorage.getItem(dep)));
    }
    return arr ;
}


function passHasFreeSpace(sections , filter){
    var result = [] ; 
    for (section in sections){
        if (section['REGISTERED'] == null)
            result.push(section);
        if (section['REGISTERED'] < section['SEATS'])
            result.push(section); 
    } 
    return result ;
}

function passTime(sections , filter){
    fucntion getTime(str){
        return parseInt( str.replace(":","")); 
    }
    
    var filter_beginTime = getTime(filter.BeginTime) ; 
    var filter_endTime = getTime(filter.EndTime); 
    var result = [] ; 
    for (section in sections){
        if (section.BEGIN_TIME == "TBA")
            continue;
        var course_beginTime = getTime(section.BEGIN_TIME); 
        var course_endTime = getTime(section.END_TIME); 
        if ( (filter_beginTime <= course_beginTime) && (course_endTime <= filter_endTime) ){
            result.push(section); 
        }
    }
    return result ; 

}
    
    
    
function passProf(sections , filter){
    function getInstructor(sec){
        return sec['INSTRUCTOR'].toLowerCase() ;  
    }
    
    var professor = filter.Professor.toLowerCase(); 
    var result = [] ; 
    for (section in sections){
        var instructor = getInstructor(section) ; 
        if ( instructor !=null && instructor.search(professor)!=-1)
            result.push(section); 
    }
//    course['V_SOC_SECTION'] = result ;
//    return [result.length>0 , course] ; 
    return result ; 
}


function passWeekDays(sections , filter){
    function extractDays(inp){
        var list = ['M', 'T', 'W', 'H', 'F','S','U'] ; 
        var result = [] 
        for( l in list){
            var ind = inp.search(l); 
            if (ind!=-1)
                result.push(l); 
        }
        return result; 
    }

    function isSuperset(arr2, arr1){ 
        return arr2.every(function (val) { return arr1.indexOf(val) >= 0; });
    }
    
    var weekDays = filter.Weekdays; 
    var result = [] ; 
    for (section in sections){
        if (section['DAY'] == null)
            continue; 
         if (isSuperset(extractDays(section['DAY'])),weekDays){
            result.push(section); 
        }
    }
//    course['V_SOC_SECTIOM'] = result ; 
//    return [(result.length>0), course] ; 
    return result ;

} 