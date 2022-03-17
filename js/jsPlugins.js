
$(document).ready(function(){

    
        //============= for mix it up plugin ====================
        var mixer = mixitup('.filtering',{
            animation: {
                duration: 800
            }
        });

            //============= for jquery plugin tab==================

            //default function with default setting
            //$(".js-tabs-link").aniTabs();

            $(".js-tabs-link").aniTabs({
            
                //setting here

                //Change the default animation to 'slide'.
            animation:"slide",
            slideDirection:"left", // or right

            //Set the animation speed in milliseconds
            animationSpeed: 1500// default: 500

            //Enable/disable the autoheight functionality
            //autoHeight:false // default: true
            });

        //================ for circle progress bar =============

        // 'pie' is class name div
        const circle = new CircularProgressBar("pie");
        circle.initial();
        // all property for configaration of the plugin from: https://github.com/tomik23/circular-progress-bar

         // =================owl carousel plugin ======================   
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            center:true,
            autoplayHoverPause:true,
            slideTransition: 'linear',
            autoplayTimeout: 2000,
            autoplaySpeed: 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });  

//================== counter up =============================
        
        $('.count').counterUp({
            delay: 10,
            time: 1500
        });
         

//      //================ menu bar =============
     
//      $('.navbar-nav li').click(function(){
//          $(this).addClass('active');
//          $(this).siblings().removeClass('active');
//      });


//       // ================== scrool top =============
//  $('.scroll-top').click(function(){
//     $('html,body').animate({
//         scrollTop: 0,
//     },3000);
//   });
    
});



