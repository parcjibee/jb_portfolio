$(document).ready(function(){


    $('.greeting-slide').slick({

        autoplay:true,
        swipe:false,
        pauseOnHover:false,
        autoplaySpeed:1200,
        dots:false,
        speed:900,
        fade:true,
        arrows:false
        
        });
        $('.archive-slider').slick({

            autoplay:false,
            swipe:true,
            pauseOnHover:false,
            dots:false,
            arrows:true,
            slidesToShow:3,
            centerMode:true
            
            });

        


    $(window).on("scroll",function(){
        let num = $(this).scrollTop();
        console.log(num);

        let bar = $('.graphBox li span p');
        let bar2 = $('.graphBox li span .p2');
        let archive = $('.archive-slider')
        
        if(num >= 934){
            $(bar).addClass('on');
            $(bar2).addClass('on');
        }else if(num == 0){
            $(bar).removeClass('on');
            $(bar2).removeClass('on');
        }

        if(num >= 1667){
            $(archive).addClass('on');
        }else if(num == 0){
            $(archive).removeClass('on');
        }
    });
         
});