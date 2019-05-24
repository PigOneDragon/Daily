$(function() {
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 8000,
        arrows: true,
        dots: true,
        cssEase: 'linear',
        /*responsive: [{

            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                centerMode: false
            }
        }]*/
    });
    // 名医
    $('.m-doc').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        cssEase: 'linear',
        /*responsive: [{

            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                centerMode: false
            }
        }]*/
    });
     // 资讯
    $('.m-news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        cssEase: 'linear',
        /*responsive: [{

            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                centerMode: false
            }
        }]*/
    });
})