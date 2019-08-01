$( document ).ready(function() {
    var repeated = 0;
    var iterate;
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function animate(){
        $('.owner-address input').css('border-color','transparent');
        await sleep(300);
        $('.owner-address input').css('border-color','#ff2a60');
        repeated++
        if(repeated === 3)
            clearInterval(iterate)
    }

    function displayOwnerAddress() {
        $('#contribute-button').css('display', 'none');
        $('.owner-address').css('display', 'block');
    }

    $('input:checkbox').change(function(){
        ($('#checkbox1').is(':checked') && $('#checkbox2').is(':checked')) ? $('#terms-submit').show(300) : $('#terms-submit').hide(300);
    });

    $("#terms-submit").click(function(){
        $('#presale-modal .mfp-close').trigger('click');
        displayOwnerAddress();
        iterate = setInterval(()=>animate(),500)
    })
    
    $('.owner-address i').click(function(){
        var copyText = document.getElementById("contribution-address");
        copyText.select();
        document.execCommand("copy");
        $('#copied-div').css('display', 'block')
        setTimeout(()=>$('#copied-div').css('display', 'none'),2000)
    })
});
