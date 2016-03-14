$(document).ready(function(){
    $('#subForm').submit(function(e){
        e.preventDefault();
        $('#fieldName').val($('#first_name').val() + " " + $('#last_name').val() )
        $('.sign_up_btn').prop('disabled', true)
        var post_data = {}
        post_data.mailto = "rajbir@mobilefringe.com";
        post_data.subject = "nuStylist Sign up";
        custom = {};
        custom.description = "New sign up on nuStylist Website";
        custom.email = $('#fieldEmail').val();
        custom.name = $('#fieldName').val();
        post_data.custom = custom;
        if($('#first_name').val() !="" && $('#last_name').val() != "" && $('#fieldEmail').val() != ""){
            if(validateEmail($('#fieldEmail').val())){
                $.post("http://home.mallmaverick.com/custom_email", post_data, function(data, status, xhr){
                    if(status == "success"){
                        $.getJSON("http://mobilefringe.createsend.com/t/d/s/krkjku/?callback=?",$('#subForm').serialize(),function (data) {
                            if (data.Status === 400) {
                                alert("An error occured while processing your request. Please try again later.");
                            }
                            else{
                               $("#subscription_confirmed").fadeIn();
                                $('#subscription_confirmed').delay(2000).fadeOut();
                                $('#subForm').trigger('reset');
                                $('.sign_up_btn').prop('disabled', false)
                           }
                        });
                    }
                    else{
                        alert("Unable to process your request. Please try again later.")
                    }
                });
                var iOS = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;
                if (iOS){
                    $("#subscription_confirmed").fadeIn();
                    $('#subscription_confirmed').delay(2000).fadeOut();
                    $('#subForm').trigger('reset');
                    $('.sign_up_btn').prop('disabled', false)
                }
            }
            else{
                alert("Please enter a valid email.")
                $('.sign_up_btn').prop('disabled', false)
                $('#fieldEmail').focus()
            }
            
        }
        else{
            alert("Please fill out the required fields.")
            $('.sign_up_btn').prop('disabled', false)
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}