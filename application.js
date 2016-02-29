$('#subForm').submit(function(e){
    e.preventDefault();
    $('.sign_up_btn').prop('disabled', true)
    var post_data = {}
    post_data.mailto = "info@retailmaverick.com";
    post_data.subject = "RM Sign up";
    custom = {};
    custom.name = $('#full_name').val();
    custom.email = $('#email').val()
    $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert("An error occured while processing your request. Please try again later.");
            } else { // 200
                $.post("http://home.mallmaverick.com/custom_email", post_data, function(data, status, xhr){
                    if(status == "success"){
                        $("#subscription_confirmed").fadeIn();
                        $('#subscription_confirmed').delay(2000).fadeOut();
                        $('#subForm').trigger('reset');
                        $('.sign_up_btn').prop('disabled', false)
                    }
                    else{
                        alert("Unable to process your request. Please try again later.")
                    }
                });
                
            }
    });
});