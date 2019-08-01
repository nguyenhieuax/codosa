$(".bl-subscribe-form").on("submit", function(e) {
    e.preventDefault();
    subscribe();
});

function subscribe(){
    $("#hdn_email_txt").val(new Date().getTime());
    var theForm = $('#theform');
    var requestUrl = theForm.attr('action');
    var postData = theForm.serialize();
    $.ajax({
        url:requestUrl,
        data : postData,
        dataType:'json',
        type:'GET',
        beforeSend:function(){ 
            $('#subscribe_button').css('display','none');
            $('#subscribe_spin').css('display','block');
        },
        success:function(data){
            if(data.success){
                setTimeout(function() {
                    $(".bl-modal__thanks").addClass("bl-modal__thanks--show");
                    $("#theform #email").val('');
                    $('#subscribe_spin').css('display','none');
                    $('#subscribe_button').css('display','block');
                }, 500);
            }
            else{
                $('#subscribe_error').html('Some error occured !');
                $('#subscribe_spin').css('display','none');
                $('#subscribe_button').css('display','block');
                setTimeout(() => {
                    $('#subscribe_error').html('');
                }, 5000);
            }
        }
    });
}
