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
            slidesToShow:2,
            centerMode:true
            
            });

            $('.archive-slider_m').slick({

                autoplay:false,
                swipe:true,
                pauseOnHover:false,
                dots:false,
                arrows:false,
                slidesToShow:1.2
                
                });

        


    $(window).on("scroll",function(){
        let num = $(this).scrollTop();
        console.log(num);

        let bar = $('.graphBox li span p');
        let bar2 = $('.graphBox li span .p2');
        let bar3 = $('.graphBox_m li span p');
        let bar4 = $('.graphBox_m li span .p2');
        let archive = $('.archive-slider')
        let archive2 = $('.archive-slider_m')
        
        if(num >= 934){
            $(bar).addClass('on');
            $(bar2).addClass('on');
        }else if(num == 0){
            $(bar).removeClass('on');
            $(bar2).removeClass('on');
        }
        if(num >= 2101){
            $(bar3).addClass('on');
            $(bar4).addClass('on');
        }else if(num == 0){
            $(bar3).removeClass('on');
            $(bar4).removeClass('on');
        }
        if(num >= 1667){
            $(archive).addClass('on');
        }else if(num == 0){
            $(archive).removeClass('on');
        }
        if(num >= 3102){
            $(archive2).addClass('on');
        }else if(num == 0){
            $(archive2).removeClass('on');
        }
    });

         
});