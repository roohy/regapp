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
        //alert("hahaha");
        $(event.target).children(".course-details").slideToggle("slow",function(){return;});
        //TODO: set something to store the visibility of the damn thing
    }
};

function courseClick(event){
        //alert();
        $(event).children(".class-details").slideToggle(1000,function(){return;});
}

function renderCourses(depart){
    function getUnitString(mycourse){
        var min_units = mycourse.MIN_UNITS ; 
        var max_units = mycourse.MAX_UNITS ;
        var unitString  ; 
        if ( min_units == max_units )
            unitString = parseFloat(min_units).toString() ; 
        else
            unitString = (parseFloat(min_units).toString()) + "-" + (parseFloat(max_units).toString()) ;
        console.log(' unit string is ' , unitString) ;
        return unitString; 
    }
    console.log('in rendering coursessssssss ' , depart ) ; 
    mycourse_list = JSON.parse(localStorage[depart]); 
        for ( var d in mycourse_list){
            if (d>3)
                return ; 
            var course = mycourse_list[d] ; 
            console.log(' rendering course : ' , course  ) ;
            var card = $('<div class="course-card panel row-fluid"></div>');
            var course_heading = $('<div class="panel-heading course-heading"></div>');
            var course_title = $('<h9 class="course-title">' + course.TITLE + '</h9>');
            var label_default = $('<span class="label label-default">'+ course.SIS_COURSE_ID +'</span>');   
            var label_info = $('<span class="label label-info">'+ getUnitString(course) +' Units</span>');
            var pull_right = $('<span class="pull-right glyphicon glyphicon-plus"></span>') ; 
            
            course_heading.append(course_title); 
            course_heading.append(label_default) ; 
            course_heading.append(label_info) ; 
            course_heading.append(pull_right) ; 
            card.append(course_heading) ; 
            $("#course-list").append(card); 
//            class_details.append(class_description);
//            
//            var class_details = $('<div class="class-details"><div>'); 
//            var class_description = $('<p class="class-description">' + course.DESCRIPTION + '</p>'); 
            
            
        }
}
//    <div id="course-list">
//       <div class="course-card panel row-fluid">
//           <div class="panel-heading course-heading">
//                <h9 class="course-title">Introduction To programming</h9>
//                <span class="label label-default">CSCI-101 L</span>
//                <span class="label label-info">3 Units</span>
//               <span class="pull-right glyphicon glyphicon-plus"></span></div>




//                            <div class="class-sections">
//                                <div class="panel panel-default">
//                                    <div class="panel-header">
//                                        <h5>Sections</h5>
//                                    </div>
//                                    <div class="panel-body">
//                                        <div class="class-section">
//                                            
//                                            <div class=" row">
//                                                <table class="table">
//                                                    <thead >
//                                                        <tr class="info">
//                                                        <td>Code</td>
//                                                        <td>Type</td>
//                                                        <td>Prof</td>
//                                                        <td>Place</td>
//                                                        </tr>
//                                                    </thead>
//                                                    <tbody>
//                                                        <tr >
//                                                            <td>29901R</td>
//                                                            <td>Lec</td>
//                                                            <td>Redekopp</td>
//                                                            <td>RTH115</td>
//                                                        </tr>
//                                                    </tbody>
//                                                </table>
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


$(function(){
    $('.course-card').click(function(event){
        courseClick(this);
    });
        
    console.log('heellooo??') ; 
    
    $('<div class="input-group">'+
                          '<input class="form-control" id="navbarInput-01" type="search" placeholder="Search">'+
                          '<span class="input-group-btn"><button type="submit" class="btn"><span class="fui-search"></span></button></span></div>').appendTo('#navbar');
    
    $('#navbar').navbar();
    
    saveDepartmentToDB(localStorage.DEPT_CODE, true) ;
    
    
    
});


