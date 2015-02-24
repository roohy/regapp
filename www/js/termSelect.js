$(function(){
    
    getTerms(NaN , setTerms); 
    
}); 

function setTerms(data){
    if ( localStorage['ACTIVE_TERMS']== undefined)
        localStorage['ACTIVE_TERMS'] = JSON.stringify(data);
    var ul_element = $("#termList"); 
    for ( var i in data){
        var term = data[i] ; 
        console.log('term is ' , term ) ; 
        var li = $('<li><a href="#">' + term.DESCRIPTION + '</a></li>'); 
        ul_element.append(li); 
    }
    ul_element.listview('refresh'); 
}



//
//<ul data-role="listview" id="termList">
//    <li><a href="#">Fall 2014</a></li>
//    <li><a href="#">Spring 2015</a></li>
//    <li><a href="#">Summer 2015</a></li>
//</ul>