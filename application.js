$(document).ready(function(){
    $('#subForm').submit(function(e){
        e.preventDefault();
        $('#fieldName').val($('#first_name').val() + " " + $('#last_name').val() )
        $('.sign_up_btn').prop('disabled', true)
        var post_data = {}
        post_data.mailto = "rajbir@mobilefringe.com";
        post_data.subject = "nuStylist Sign up";
        post_data.name = $('#fieldName').val()
        custom = {};
        custom.description = "New sign up on nuStylist Website";
        custom.email = $('#fieldEmail').val();
        post_data.custom = custom;
        $.post("http://home.mallmaverick.com/custom_email", post_data, function(data, status, xhr){
            if(status == "success"){
                $("#subscription_confirmed").fadeIn();
                $('#subscription_confirmed').delay(2000).fadeOut();
                $('#subForm').trigger('reset');
                $('.sign_up_btn').prop('disabled', false)
                $.getJSON(
                    this.action + "?callback=?",
                    $(this).serialize()
                )
            }
            else{
                alert("Unable to process your request. Please try again later.")
            }
        });
    });
});