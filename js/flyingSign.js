$(document).ready(function() {
    //  при наведении мыши на header  символы разлетаются. 
    $('.header__main').mouseenter( function () {

        $( ".flying-sign__left" ).animate(
            {marginLeft: '-=938px'}, 1000);

        $( ".flying-sign__left-top" ).animate(
            {marginLeft: '-=1000px'}, 1000);

        $( ".flying-sign__right-top" ).animate(
            {marginTop: '-=1000px'}, 1000);

        $( ".flying-sign__right-bottom" ).animate(
            {marginLeft: "+=2000px"}, 1000);
                        
        $( ".flying-sign__left-bottom" ).animate(
            {marginLeft: '-=1000px'}, 1000);

    });
});