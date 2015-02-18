var comm = comm | {} ;

$(function() {
    console.log( "ready!" );
//    getSchools(); 
    
});
    

function getSection(sectionID , opt_successFunction , opt_waitFunction){
    getFromServer('Sections/' + sectionID , opt_successFunction , opt_waitFunction) ; 
}

function getTerms(opt_termID, opt_successFunction , opt_waitFunction){
    opt_termID = opt_termID || "" ; 
    getFromServer('Terms/' + opt_termID , opt_successFunction , opt_waitFunction); 
}
                  
function getSessions(opt_sessionID, opt_successFunction , opt_waitFunction){
    opt_sessionID = opt_sessionID || ""; 
    getFromServer('Sessions/' + opt_sessionID , opt_successFunction , opt_waitFunction);
}
    
function getSchools(opt_successFunction , opt_waitFunction){
    getFromServer('Schools/' , opt_successFunction , opt_waitFunction); 
}
    
function getDepartments(school_code , opt_successFunction , opt_waitFunction){
    getFromServer('Schools/' + school_code, opt_successFunction , opt_waitFunction) ; 
}
    
function getCourses(term, opt_options , opt_successFunction , opt_waitFunction){
    options = options || "" ;     
    getFromServer('Courses/' + term +'/'+ options, opt_successFunction , opt_waitFunction) ;
}


function getFromServer(url , successFunction , waitFunction){
//comm.getFromServer = function(url ) {
    successFunction = successFunction || function(){} ;
    waitFunction = waitFunction || function(){};  
    
    $.ajax({
        type: "POST",
        url: "http://petri.esd.usc.edu/socAPI/" + url,
        datatype: "jsonp",
        beforeSend: function(){ 
            waitFunction() ; 
        }
       
    })
        .done(function( msg ) {
            
        })
        .success(function(data){
            successFunction(data);
//            output= "" ; 
            /*for (var i=0; i <data.length; i++) {
                var t = data[i]; 
                for(var key in t){
                    output += key + ': ' + t[key]+'; ';    
                }
                
            }*/
            /*$("#setarehTest").html(output); 
            alert("recieved this data" + output); */
        })
        .error(function(data){
            alert("errorrr in ajax " ); 
        });
}


 
