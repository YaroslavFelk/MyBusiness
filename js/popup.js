$(document).ready( () => {
    $( () => {
        $('.btn-popup').click( () => {
            $('.popup').show();
        
            $("body").addClass("fixed");
        })

        $('.popup').click( function(event) {
            if (event.target == this) {
                $(this).hide();

                $("body").removeClass("fixed");
            }
        })
    })    
})