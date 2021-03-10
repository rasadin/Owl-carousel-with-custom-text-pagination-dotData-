;(function($) {
    "use strict";

    /**
     * Home Page Main slider
     */

    // this code for home slider pagination -start
        var owl = $("#homeSliderOwlJs");
        owl.on('changed.owl.carousel', function (e) {
                console.log("current: ",e.relatedTarget.current() + 1)
                console.log("current: ",e.item.index + 1) //same
                console.log("total: ",e.item.count)   //total
                var total = (e.item.count);
                var current = (e.item.index + 1); 
                $(".current").html(current);
                $(".slider-number-title").html(current);
                $(".total").html(total);
        });
    // this code for home slider pagination - end

    var victusGlobalHomeSlider = function($scope, $) {
        var $_this = $scope.find('.owl-carousel');
        $_this.owlCarousel({
            loop: false,
            rewind: true,
            // margin:0,
            // nav:false,
            // items: 1,
            // dots: true,
            // autoplay: true
            items:1,
            nav: true,
            dots: true,
            dotsData: true,
        });
        // $(document).ready(function(){
        //     $('.homeSliderOwl').owlCarousel({
        //           items:1,
        //           nav: true,
        //           dots: true,
        //           dotsData: true,
        //       });
        //   });
    }

   




    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/victusglobal-hero-carousel.default', victusGlobalHomeSlider);
    });
})(jQuery);
