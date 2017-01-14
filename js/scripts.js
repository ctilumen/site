(function($){
    
    $('document').ready(function(){
        
        // banner home
        $('.home-slider ul').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            lazyLoad: 'ondemand'
        });
        
        // pagina sobre
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            lazyLoad: 'ondemand',
            asNavFor: '.slider-nav'
        });
        
        
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            focusOnSelect: true
        });
    
    });
    
})(jQuery);