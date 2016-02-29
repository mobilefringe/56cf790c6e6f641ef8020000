$('#subForm').submit(function(e){
    e.preventDefault();
    $('.sign_up_btn').prop('disabled', true)
    $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert("An error occured while processing your request. Please try again later.");
            } else { // 200
                $("#subscription_confirmed").fadeIn();
                $('#subscription_confirmed').delay(2000).fadeOut();
                $('#subForm').trigger('reset');
                $('.sign_up_btn').prop('disabled', false)
            }
    });
});