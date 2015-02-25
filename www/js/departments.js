$(function(){
    //alert("I am getting the depts");
    console.log('in dapartments.js file' );
    schools = getSchools(setSchools); 
    
});
function setSchools(data){
    
    if ( localStorage['SCHOOLS']== undefined)
        localStorage['SCHOOLS'] = JSON.stringify(data);
    
    for ( var i in data){ 
        collapsible = $('<div data-role="collapsible"></div>');
        var school = $('<h2>' + data[i].SOC_SCHOOL_DESCRIPTION + '</h2>'); 
        collapsible.append(school);
        var ul = $('<ul data-role="listview"  data-divider-theme="b"></ul>'); 
        collapsible.append(ul); 
        
        sch_code = data[i].SOC_SCHOOL_CODE; 
        
        $("#collapsible-list").append(collapsible);
        $("#collapsible-list").collapsibleset();
        
        getDepartments(sch_code , setDepartments , NaN , ul) ; 
    }
}

function setDepartments(data, ul_element){
    var school = data[0] ; 
    if ( localStorage['SCHOOL_' + school.SOC_SCHOOL_CODE]== undefined)
        localStorage['SCHOOL_' + school.SOC_SCHOOL_CODE] = JSON.stringify(data);
    
    for ( var i in school.SOC_DEPARTMENT_CODE){
        var dept = school.SOC_DEPARTMENT_CODE[i]; 
        var li = $('<li><a href="index.html">'+ dept.SOC_DEPARTMENT_DESCRIPTION + '</a></li>');
        ul_element.append(li); 
    }
    ul_element.listview(); 
}

/*
<div data-role="collapsibleset" data-theme="a" data-content-theme="b">
    <div data-role="collapsible">
        <h2>Viterbi School Of Eng</h2>
            <ul data-role="listview"  data-divider-theme="b">
                <li><a href="index.html">CSCI Department</a></li>
                <li><a href="index.html">Petroleum Eng</a></li>
                <li><a href="index.html">blah blah</a></li>
            </ul>
    </div>
</div>*/


