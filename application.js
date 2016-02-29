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
        custom.name = $('#fieldName').val()
        post_data.custom = custom;
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
    });
});