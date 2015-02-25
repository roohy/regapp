$(function(){
    
    getTerms(NaN , setTerms); 
    $(document).on('click', "#termList li" , function() {
        k = $(this); 
        localStorage.TERM = $(this).attr('term_code'); 
        window.location = ("./departments.html");
        
});
    /*$('div').live('pagebeforeshow',function(){
        alert("I am killing it");
        window.location = ("./departments.html");
    });*/
}); 
function setTerms(data){
    if ( localStorage['ACTIVE_TERMS']== undefined)
        localStorage['ACTIVE_TERMS']= JSON.stringify(data);
    var ul_element = $("#termList"); 
    for ( var i in data){
        var term = data[i] ; 
//        console.log('term is ' , term ) ; 
        var li = $('<li><a href="departments.html" data-transition="slide">' + term.DESCRIPTION + '</a></li>');
//        console.log('li is now ' , li ) ; 
        li.attr('term_code' , term.TERM_CODE) ;
        
        console.log('li is now ' , li ) ; 
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