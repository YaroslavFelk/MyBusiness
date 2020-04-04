$(document).ready( () => {
    $( () => {
        $('.dropdow__button').click( () => {
            console.log(5 + 2);
            $( '.dropdow__button_top' ).stop().toggleClass('top-rotate');

            $( '.dropdow__button_bottom' ).stop().toggleClass('bottom-rotate');

            $( '.dropdow__button_middle' ).stop().toggleClass('middle-rotate');
        })
    })
});