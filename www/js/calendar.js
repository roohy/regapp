var datesInt = {'M':1 , 'T':2,'W':3,'H':4};
var calendarTable = '#calendarTable';

function addToCalendar(startTime,endTime, dates){
    //parsing the strings of startTime and endTime to getout everithing about where to start and where to end.
    var parsedStart = parseInt(startTime.split(":")[0]);
    var parsedStartChange = parseInt(startTime.split(":")[1].split(" ")[0]);
    var startAMPM = startTime.split(":")[1].split(" ")[1];
    
    var parsedEnd = parseInt(endTime.split(":")[0]);
    var parsedEndChange = parseInt(startTime.split(":")[1].split(" ")[0]);
    var endAMPM = endTime.split(":")[1].split(" ")[1];
    
    //Starting to get the coordinations
    var startRowCount = (parsedStart-6)*2+ parsedStartChange/20;
    var endRowCount = (parsedEnd-6)*2 + parsedEndChange/20;
    //extracting the dates
    var columnList = [];
    for(var  day in dates){
        columnList.push(datesInt[day]+1);
    }
    
    
    var startPosition;
    var endPosition;
    var width;
    var height;
    
    var startRow = $(calendarTable+' tr')[startRowCount+1];
    var endRow = $(calendarTable+' tr')[endRowCount+1]; 
    for(day in columnList){
        startPosition = startRow.children("td")[day].position();
        endPosition.right= endRow.children("td")[day].position().left+endRow.children("td")[day].width();
        endPosition.bottom= endRow.children("td")[day].position().top+endRow.children("td")[day].height();
        width = endPosition.right-startPosition.left;
        height = endPosition.bottom-startPosition.top;
        $('<div class="timeBlock"></div>').css({
            position: absolute,
            top: startPosition.top+'px',
            left: startPosition.left+'px',
            width: width+'px',
            height: height+'px'
        }).appendTo($('body'));
    }
    
}

$(function(){
    alert("starting to print");
    addToCalendar("8:00","10:00",['M']);
    alert("haha");
});