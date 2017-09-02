$(document).ready(function () {

    $('#signUp').click(function () {
        $.get('/doSignUp', {
            'user': $("#user").val(),
            'password': $('#password').val()
        }, function (result) {
            console.log(result)
        })
    })
})