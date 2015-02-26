/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //alert("hahaha");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        */
        console.log('Received Event: ' + id);
        $('.course-card').click(function(event){
            //app.courseClick(event);
        });
    },
    courseClick: function(event){
        alert("hahaha");
        $(event.target).children(".course-details").slideToggle("slow",function(){return;});
        //TODO: set something to store the visibility of the damn thing
    }
};

function courseClick(event){
        //alert();
        $(event).children(".class-details").slideToggle(1000,function(){return;});
}

function renderCourses(course_list){
    function getUnitString(mycourse){
        var min_units = mycourse.MIN_UNITS ; 
        var max_units = mycourse.MAX_UNITS ;
        var unitString  ; 
        if ( min_units == max_units ){
            unitString = parseFloat(min_units).toString() ;
            if (min_units==1) unitString+= " Unit" ; 
            else unitString+= " Units" 
        }
        else
            unitString = (parseFloat(min_units).toString()) + "-" + (parseFloat(max_units).toString()) + " Units";
        return unitString; 
    }
    console.log('in rendering coursessssssss ' , course_list);
    
    $('#course-list').empty();
//    mycourse_list = JSON.parse(localStorage[depart]); 
        for ( var d in course_list){
//            if (d>3)
//                return ; 
            var course = course_list[d] ; 
            console.log(' rendering course : ' , course  ) ;
            var card = $('<div class="course-card panel row-fluid"></div>');
            var course_heading = $('<div class="panel-heading course-heading"></div>');
            var course_title = $('<h9 class="course-title">' + course.TITLE + '</h9>');
            var label_default = $('<span class="label label-default">'+ course.SIS_COURSE_ID +'</span>');   
            var label_info = $('<span class="label label-info">'+ getUnitString(course) +'</span>');
            var pull_right = $('<span class="pull-right glyphicon glyphicon-plus"></span>') ; 
            
            course_heading.append(course_title); 
            course_heading.append(label_default) ; 
            course_heading.append(label_info) ; 
            course_heading.append(pull_right) ; 
            card.append(course_heading) ; 
             

            var class_details = $('<div class="class-details"><div>'); 
            var class_description = $('<p class="class-description">' + course.DESCRIPTION + '</p>'); 
            
            
            var class_secions = $('<div class="class-sections"></div>') ; 
            var panel_default = $('<div class="panel panel-default"></div>'); 
            var panel_header = $('<div class="panel-header"><h5>Sections</h5></div>'); 
            var panel_body = $('<div class="panel-body"></div>');
            
            for ( var s in course.V_SOC_SECTION){   
                var section = course.V_SOC_SECTION[s] ;
                console.log('section is ' , section ) ; 
                var class_section2 = $('<div class="class-section">'); 
                var row = $('<div class=" row"></div>');
                var table = $('<table class="table"></table>'); 
                var thead = $('<thead ><tr class="info"><td>Code</td><td>Type</td><td>Instr.</td><td>Place</td></tr></thead>'); 
                var tbody = $('<tbody></tbody>') ; 
                var tr = $('<tr></tr>') ;
                var td1 = $('<td>'+ section.SECTION+ '</td>') ;
                var td2 = $('<td>' + section.TYPE + '</td>') ; 
                var td3 = $('<td>' + section.INSTRUCTOR + '</td>' ) ; 
                var td4 = $('<td>' + section.LOCATION + '</td>') ; 
                tr.append(td1); 
                tr.append(td2); 
                tr.append(td3); 
                tr.append(td4);
                tbody.append(tr); 
                table.append(thead); 
                table.append(tbody);
                
                var table2 = $('<table class="table">');
                var thead2 = $('<thead ><tr class="info"><td>Hours</td><td>Days</td><td>Stats</td><td>Wait List</td></tr></thead>');
                var tbody2 = $('<tbody></tbody>') ;
                var tr2 = $('<tr></tr>');
                var td2_1 = $('<td>Timeeeee</td>');
                var td2_2 = $('<td> dayssss </td>');
                var td2_3 = $('<td>capacityyyy</td>');
                var td2_4 = $('<td>capacityy</td>');
                tr2.append(td2_1); 
                tr2.append(td2_2); 
                tr2.append(td2_3); 
                tr2.append(td2_4); 
                tbody2.append(tr2);
                table2.append(thead2) ; 
                table2.append(tbody2);
                var add_bottun = $('<button class="btn  btn-danger ui-btn ui-shadow ui-corner-all">Add</button>');
//                add_bottun.trigger("create");
//<div class="ui-btn ui-input-btn ui-shadow">
//The Button
//<input type="button" data-corners="false" data-enhanced="true" value="The Button"></input>
//</div>
                
                
                add_bottun.button();
                row.append(table); 
                row.append(table2) ; 
                row.append(add_bottun);
                class_section2.append(row);
                panel_body.append(class_section2);
            }
            panel_default.append(panel_header);
            panel_default.append(panel_body);
            class_secions.append(panel_default);
            class_details.append(class_description);
            class_details.append(class_secions);
            card.append(class_details) ;
            $("#course-list").append(card);
        }
//    alert("alert");
    $('.course-card').click(function(event){
        courseClick(this);
    });
}

//                                <div class="class-sections">
//                                <div class="panel panel-default">
//                                    <div class="panel-header">
//                                        <h5>Sections</h5>
//                                    </div>
//                                    <div class="panel-body">

//                            <div class="class-sections">
//                                <div class="panel panel-default">
//                                    <div class="panel-header">
//                                        <h5>Sections</h5>
//                                    </div>
//                                    <div class="panel-body">
//                                        <div class="class-section">
//                                            
//                                            <div class=" row">
//                                                
//                                                <table class="table">
//                                                    <thead >
//                                                        <tr class="info">
//                                                        <td>Hours</td>
//                                                        <td>Days</td>
//                                                        <td>Stats</td>
//                                                        <td>Wait List</td>
//                                                        </tr>
//                                                    </thead>
//                                                    <tbody>
//                                                        <tr >
//                                                            <td>2:00pm 3:15PM</td>
//                                                            <td>WThF</td>
//                                                            <td>23/26</td>
//                                                            <td>0</td>
//                                                        </tr>
//                                                    </tbody>
//                                                </table>
//                                                <button class="btn  btn-danger">Add</button>
//                                            </div>
//                                        </div>
//                                    </div>
//                                </div>
//                            </div>

//    <div id="course-list">
//       <div class="course-card panel row-fluid">
//           <div class="panel-heading course-heading">
//                <h9 class="course-title">Introduction To programming</h9>
//                <span class="label label-default">CSCI-101 L</span>
//                <span class="label label-info">3 Units</span>
//               <span class="pull-right glyphicon glyphicon-plus"></span></div>

//                        <div class="class-details">
//                            <p class="class-description">
//                                30399-This section of CSCI 101 is 
//                                reserved for non-majors. It is a 
//                                terminal course in basic programming 
//                                and does not prepare students for 
//                                continuing on to CSCI 104.
//                            </p>




$(function(){
//    $('.course-card').click(function(event){
//        courseClick(this);
//    });
//        
    console.log('heellooo??') ; 
    
    $('<div class="input-group">'+
                          '<input class="form-control" id="navbarInput-01" type="search" placeholder="Search">'+
                          '<span class="input-group-btn"><button type="submit" class="btn"><span class="fui-search"></span></button></span></div>').appendTo('#navbar');
    
    //$('#navbar').navbar();
    
    //initializing the time picker
     $('#start-time').mobiscroll().time({
                    theme: $.mobiscroll.defaults.theme,     // Specify theme like: theme: 'ios' or omit setting to use default 
                    mode: 'scroller',       // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
                    display: 'modal', // Specify display mode like: display: 'bottom' or omit setting to use default 
                    lang: 'pl'        // Specify language like: lang: 'pl' or omit setting to use default 
                });
    $('#end-time').mobiscroll().time({
                    theme: $.mobiscroll.defaults.theme,     // Specify theme like: theme: 'ios' or omit setting to use default 
                    mode: 'scroller',       // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
                    display: 'modal', // Specify display mode like: display: 'bottom' or omit setting to use default 
                    lang: 'pl'        // Specify language like: lang: 'pl' or omit setting to use default 
                });
    saveDepartmentToDB(localStorage.DEPT_CODE, true) ;
    


});


