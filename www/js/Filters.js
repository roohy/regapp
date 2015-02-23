$(function() {
    console.log('helloooo we are in filters js' ); 
  //  courses11  = [{"COURSE_ID":10514,"SIS_COURSE_ID":"FAPT-105","TITLE":"Painting I","MIN_UNITS":4,"MAX_UNITS":4,"TOTAL_MAX_UNITS":null,"DESCRIPTION":"Practical introduction to oil and acrylic pigments, painting equipment, processes and media. Primary experience in color, composition, and perception through representational and abstract painting. Duplicates credit in the former FA-105.","DIVERSITY_FLAG":"N","EFFECTIVE_TERM_CODE":"20113","V_SOC_SECTION":[{"SECTION_ID":17554,"TERM_CODE":"20151","COURSE_ID":10514,"SIS_COURSE_ID":"FAPT-105","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33217D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"09:00","END_TIME":"11:50","DAY":"TH","LOCATION":"HAR203","REGISTERED":null,"INSTRUCTOR":"Liebowitz, Karen","SEATS":18,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null},{"SECTION_ID":17587,"TERM_CODE":"20151","COURSE_ID":10514,"SIS_COURSE_ID":"FAPT-105","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33218D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"14:00","END_TIME":"16:50","DAY":"MW","LOCATION":"HAR203","REGISTERED":null,"INSTRUCTOR":"Parker, Richard","SEATS":18,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null}]},{"COURSE_ID":4396,"SIS_COURSE_ID":"FAPT-205","TITLE":"Painting II","MIN_UNITS":4,"MAX_UNITS":4,"TOTAL_MAX_UNITS":null,"DESCRIPTION":"Continuation of practical and theoretical skills introduced in Painting I. Color in personal expression, perception, and content; cultural subjects-objects and symbols signifying a personal language. Duplicates credit in the former FA-205a.","DIVERSITY_FLAG":"N","EFFECTIVE_TERM_CODE":"20113","V_SOC_SECTION":[{"SECTION_ID":17170,"TERM_CODE":"20151","COURSE_ID":4396,"SIS_COURSE_ID":"FAPT-205","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33220D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"18:00","END_TIME":"20:50","DAY":"TH","LOCATION":"HAR203","REGISTERED":null,"INSTRUCTOR":"McDonald, David","SEATS":18,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null},{"SECTION_ID":17151,"TERM_CODE":"20151","COURSE_ID":4396,"SIS_COURSE_ID":"FAPT-205","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33221D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"14:00","END_TIME":"16:50","DAY":"TH","LOCATION":"HAR203","REGISTERED":null,"INSTRUCTOR":"Roske, Rachel","SEATS":18,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null}]},{"COURSE_ID":10253,"SIS_COURSE_ID":"FAPT-305","TITLE":"Advanced Painting","MIN_UNITS":4,"MAX_UNITS":4,"TOTAL_MAX_UNITS":null,"DESCRIPTION":"Directed examination of aesthetic concepts; investigation into personal ideas related to the development of a creative visual language in painting. Duplicates credit in the former FA-305.","DIVERSITY_FLAG":"N","EFFECTIVE_TERM_CODE":"20113","V_SOC_SECTION":[{"SECTION_ID":17181,"TERM_CODE":"20151","COURSE_ID":10253,"SIS_COURSE_ID":"FAPT-305","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33224D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"14:00","END_TIME":"16:50","DAY":"TH","LOCATION":"HAR202","REGISTERED":null,"INSTRUCTOR":"Allen, Thomas","SEATS":15,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null}]},{"COURSE_ID":7064,"SIS_COURSE_ID":"FAPT-405","TITLE":"Topics in Advanced Painting","MIN_UNITS":4,"MAX_UNITS":4,"TOTAL_MAX_UNITS":12,"DESCRIPTION":"Directed painting with continued emphasis on personal choices regarding the appropriation of conceptual images and arrangement, material processes scale, number of paintings. Ongoing critical response to paintings. Duplicates credit in the former FA-405.","DIVERSITY_FLAG":"N","EFFECTIVE_TERM_CODE":"20113","V_SOC_SECTION":[{"SECTION_ID":13528,"TERM_CODE":"20151","COURSE_ID":7064,"SIS_COURSE_ID":"FAPT-405","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33412D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"14:00","END_TIME":"16:50","DAY":"TH","LOCATION":"HAR201","REGISTERED":null,"INSTRUCTOR":"Allen, Thomas","SEATS":15,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null}]},{"COURSE_ID":7177,"SIS_COURSE_ID":"FAPR-311","TITLE":"Printmaking","MIN_UNITS":4,"MAX_UNITS":4,"TOTAL_MAX_UNITS":null,"DESCRIPTION":"Introductory course in various printmaking techniques; necessary skills and inherent expressive qualities of different printmaking methods are explored. Duplicates credit in the former FA-311.","DIVERSITY_FLAG":"N","EFFECTIVE_TERM_CODE":"20113","V_SOC_SECTION":[{"SECTION_ID":16185,"TERM_CODE":"20151","COURSE_ID":7177,"SIS_COURSE_ID":"FAPR-311","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33283D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"18:00","END_TIME":"20:50","DAY":"TH","LOCATION":"HAR117","REGISTERED":null,"INSTRUCTOR":"Lahti, Christopher","SEATS":4,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null},{"SECTION_ID":16149,"TERM_CODE":"20151","COURSE_ID":7177,"SIS_COURSE_ID":"FAPR-311","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33282D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"18:00","END_TIME":"20:50","DAY":"MW","LOCATION":"HAR117","REGISTERED":null,"INSTRUCTOR":"Fumat, Xavier","SEATS":18,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null}]},{"COURSE_ID":11744,"SIS_COURSE_ID":"FAPR-411","TITLE":"Topics in Advanced Printmaking","MIN_UNITS":4,"MAX_UNITS":4,"TOTAL_MAX_UNITS":12,"DESCRIPTION":"Directed examination of specific printmaking media in relation to personal aesthetic goals and expressive concepts. Duplicates credit in the former FA-411.","DIVERSITY_FLAG":"N","EFFECTIVE_TERM_CODE":"20113","V_SOC_SECTION":[{"SECTION_ID":16170,"TERM_CODE":"20151","COURSE_ID":11744,"SIS_COURSE_ID":"FAPR-411","MIN_UNITS":4,"MAX_UNITS":4,"NAME":null,"SECTION":"33284D","SESSION":"001","TYPE":"Lecture-Lab","BEGIN_TIME":"18:00","END_TIME":"20:50","DAY":"TH","LOCATION":"HAR117","REGISTERED":null,"INSTRUCTOR":"Lahti, Christopher","SEATS":15,"ADD_DATE":"2014-05-19T00:00:00","CANCEL_DATE":null,"PUBLISH_FLAG":"Y","PUBLISH_SECTION_FLAG":"Y","V_SOC_COURSE":null}]}]
       
    console.log(courses11) ; 
    alert('vaisa injaaa    ');
});

// filters : { 'Professor': 'dfdf' , WeekDays: ['T', 'W'] , BeginTime: "16:00" , EndTime: "17:30" , 'HasFreeSpace': harchi!! , 'DEPARTMENT_CODES' : ['FAPT' , 'CSCI']}
function filter_courses(filters){    
    var term = localStorage.TERM;
    var department_codes = filters.SOC_DEPARTMENT_CODE; 
    
    for ( depart in filters.DEPARTMENT_CODES){
        
        saveDepartmentToDB(filters.DEPARTMENT_CODES[depart]); 
    }
    
    
    var MyFilters = [] ; 

    if (filters.WeekDays !=undefined)
        MyFilters.push(passWeekDays);
    if (filters.BeginTime != undefined)
        MyFilters.push(passTime); 
    if (filters.Professor !=undefined)
        MyFilters.push(passProf); 
    if (filters.HasFreeSpace !=undefined)
        MyFilters.push(passHasFreeSpace);

    console.log('my filters are ' , MyFilters); 
    var courses = getAllCourses(filters.DEPARTMENT_CODES); 
    console.log('courses are ' , courses ); 
    var selectedCourses = [] ; 
    outerloop:
    for (var i in courses){
        var course = courses[i]; 
        var sections = course.V_SOC_SECTION; 
        console.log('sections are ' , sections) ; 
        for ( var j in MyFilters){
            var filterFunc = MyFilters[j] ; 
            sections = filterFunc(sections , filters); 
            console.log('after filtering sections are ' , sections); 
            if (sections.length == 0)
                continue outerloop; 
        }
        course.V_SOC_SECTION = sections; 
        selectedCourses.push(course); 
        
    }
    return selectedCourses ;
    
}

function getAllCourses(departments){
    var arr = [] ; 
    console.log('in the getAll Courses hastim ' , departments); 
    for (var i  in departments){
        var dep = departments[i] ; 
        arr = arr.concat(JSON.parse(localStorage.getItem(dep)));
    }
    return arr ;
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
    
    
    
function passProf(sections , filter){
    console.log('pass proff'); 
    function getInstructor(sec){
        return sec['INSTRUCTOR'].toLowerCase() ;  
    }
    
    var professor = filter.Professor.toLowerCase(); 
    var result = [] ; 
    for (var i in sections){
        var section = sections[i]; 
        var instructor = getInstructor(section) ; 
        if ( instructor !=null && instructor.search(professor)!=-1)
            result.push(section); 
    }
//    course['V_SOC_SECTION'] = result ;
//    return [result.length>0 , course] ; 
    return result ; 
}


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