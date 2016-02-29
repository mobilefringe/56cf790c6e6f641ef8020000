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
                $.post("http://home.mallmaverick.com/custom_email", post_data, function(data, status, xhr){
                    if(status == "success"){
                        $("#signup_confirmed").fadeIn();
                            $('#signup_confirmed').delay(2000).fadeOut();
                            $('#signup_form').trigger('reset');
                            $('.send_btn').prop('disabled', false);
                    }
                    else{
                        alert("Unable to process your request. Please try again later.")
                    }
                });
                $("#subscription_confirmed").fadeIn();
                $('#subscription_confirmed').delay(2000).fadeOut();
                $('#subForm').trigger('reset');
                $('.sign_up_btn').prop('disabled', false)
            }
    });
});