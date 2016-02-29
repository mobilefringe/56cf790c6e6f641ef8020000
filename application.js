$('#subForm').submit(function(e){
    e.preventDefault();
    if($("#agree_newsletter").is(':checked')){
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
                }
        });
    }
    else{
        $("#agree_newsletter").focus();
        alert("Please agree to receive newsletter before continuing.")
    }
});