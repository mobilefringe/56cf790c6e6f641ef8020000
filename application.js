$(document).ready(function(){
    $('#subForm').submit(function(e){
        e.preventDefault();
        $('#fieldName').val($('#first_name').val() + " " + $('#last_name').val() )
        $('.sign_up_btn').prop('disabled', true)
        var post_data = {}
        post_data.mailto = "jamie@mobilefringe.com, steve@mobilefringe.com";
        post_data.subject = "nuStylist Sign up";
        custom = {};
        custom.description = "New sign up on nuStylist Website";
        custom.email = $('#fieldEmail').val();
        custom.name = $('#fieldName').val();
        post_data.custom = custom;
        var ss = false;
        jQuery.ajaxSetup({async:false});
        $.post("http://home.mallmaverick.com/custom_email", post_data, function(data, status, xhr){
            if(status == "success"){
                ss = true
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
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        alert(ss)
        if (iOS){
            $("#subscription_confirmed").fadeIn();
            $('#subscription_confirmed').delay(2000).fadeOut();
            $('#subForm').trigger('reset');
            $('.sign_up_btn').prop('disabled', false)
        }
        jQuery.ajaxSetup({async:true});
    });
});