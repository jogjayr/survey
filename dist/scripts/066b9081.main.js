"use strict";function showLogin(){$("#logout").hide(),$("#login").show(),$("#data-view").hide()}function showLogout(){$("#logout").show(),$("#login").hide(),$("#data-view").show()}var myFirebaseRef=new Firebase("https://popping-inferno-7444.firebaseio.com/");$("#login").click(function(){myFirebaseRef.authWithPassword({email:"jogjayr@gmail.com",password:"pass123"},function(a,b){a?console.log(a):(console.log(b),showLogout())})}),$("#logout").click(function(){myFirebaseRef.unauth(function(a,b){a?console.log(a):(console.log(b),showLogin())})}),$("#data-view").click(function(){}),$("form").submit(function(a){for(var b=$(this).serializeArray(),c={},d=0;d<b.length;d++)c[b[d].name]=b[d].value;return $("#submit-data").addClass("has-spinner"),myFirebaseRef.push(c,function(a){alert(a?"There was an error saving your data":"Thanks for participating!"),$("#submit-data").removeClass("has-spinner")}),a.preventDefault(),!1});