'use strict';
var myFirebaseRef = new Firebase('https://popping-inferno-7444.firebaseio.com/');
$('#login').click(function() {
    myFirebaseRef.authWithPassword({
        email: 'jogjayr@gmail.com',
        password: 'pass123'
    }, function(error, authData) {
        if (error) {
            console.log(error);
        } else {
            console.log(authData);

            showLogout();
        }
    });
});
$('#logout').click(function() {
    myFirebaseRef.unauth(function(error, data) {
        if(error) {
            console.log(error);
        } else {
            console.log(data);
            showLogin();
        }
    });
});
function showLogin () {
    $('#logout').hide();
    $('#login').show();
    $('#data-view').hide();   
}
function showLogout () {
    $('#logout').show();
    $('#login').hide();
    $('#data-view').show();
}

$('#data-view').click(function() {
    myFirebaseRef;
});

$('form').submit(function(evt) {
    var formVals = $(this).serializeArray();
    var firebaseObj = {};
    for (var i = 0; i < formVals.length; i++) {
        firebaseObj[formVals[i].name] = formVals[i].value;
    }
    $('#submit-data').addClass('has-spinner');
    myFirebaseRef.push(firebaseObj, function(error, obj) {
        if(error) {
            alert('There was an error saving your data');
        } else {
            alert('Thanks for participating!');
        }
        $('#submit-data').removeClass('has-spinner');
    });
    evt.preventDefault();
    return false;

});