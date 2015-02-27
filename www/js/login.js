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
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        $('#login-button').click(app.loginClick);
    },
    loginClick: function(){
        
       if ( navigator.onLine == false){
           console.log('show alerting with false ');
           app.showAlert(false);
            return ;
       }
        var username = $('#login-name').val();
        var password = $("#login-pass").val(); 
        var auth = authenticate(username , password); 
        if ( auth == true)
            window.location = './termSelect.html' ; 
        else{
            console.log('show alert with true'); 
            app.showAlert(true);
        }
    },
    showAlert: function(type){
        var id;
        if(type == true){
            id = "#wrong-cred";
        }
        else{
            id = "#no-connection";
        }
        $(id).slideDown(500, function(){
            setTimeout(function(){
                $(id).slideUp(500,function(){});
            } , 2000);
        });
    }
};


    
function checkConnection() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: '+ states[networkState]);
}


$(function(){
    $('#login-button').click(app.loginClick);
    if ( navigator.onLine){
        console.log('yesss online hastim ') ; 
    }
    //$('#login-button').html('<img id="login-spinner" src="img/379.GIF">');
    $('.ui-loader.ui-body-a').hide(1);
});