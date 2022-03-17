
$(document).ready(function(){
        
   // for navbar active class
        $('.navbar-nav li').click(function(){
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
        });

    // search field
        $('.search').click(function(){
            $(this).toggleClass('icolor');
            $('.search-field').toggle();
        // $('.search-field').fadeToggle();
        
        });

    // scroll top show hide option
        $(window).scroll(function(){
          if($(this).scrollTop() > 1000){
              $('.scrolltop').fadeIn();
          }else{
              $('.scrolltop').fadeOut();
          }
        });
    // scroll top smooth scrolling
        $('.scrolltop').click(function(){
        $('html,body').animate({
            scrollTop:0            
            },3000,'linear');
        });

     // stiky navbar
     $(window).scroll(function(){
        var ourwindow = $(window).scrollTop();
        if(ourwindow > 150){
            $('body').addClass('stiky');
        }else{
            $('body').removeClass('stiky');
        }
     });

     // smooth scrolling
     $('.navbar-nav a[href^="#"]').click(function(e){
        e.preventDefault();

        var target = this.hash;
        $('html,body').animate({
            scrollTop: $(target).offset().top -70
        },2000);
     });

});