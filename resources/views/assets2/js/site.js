jQuery(document).ready(function($) {

  jQuery('.venobox').venobox();

  $("#up-btn").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
});

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.main-menu').addClass('main-scrolled');
            $('.topbar').addClass('topbar-scrolled');
            $('#header').addClass('logo-scrolled');
            $('.up-btn').addClass('up-btn-scroll');
        } else {
            $('.main-menu').removeClass('main-scrolled');
            $('.topbar').removeClass('topbar-scrolled');
            $('#header').removeClass('logo-scrolled');
            $('.up-btn').removeClass('up-btn-scroll');
        }
    });

    $('.navbar-toggler').click(function() {
        $(".fa", this).toggleClass("fa-bars fa-times");
    });

    $('input').focus(function(){
		$(this).parents('.form-group').addClass('focused');
	  });
	  
	  $('input').blur(function(){
		var inputValue = $(this).val();
		if ( inputValue == "" ) {
		  $(this).removeClass('filled');
		  $(this).parents('.form-group').removeClass('focused');  
		} else {
		  $(this).addClass('filled');
		}
	  });

    $(".read-more-btn").click(function() {
        var elem = $(".read-more-btn").text();
        if (elem == "Read More") {
          $(".read-more-btn").text("Read Less");
        } else {
          $(".read-more-btn").text("Read More");
        }
      });

      $(".read-more-btn").click(function () {
        $(this).text(function(i, text){
            return text === "PUSH ME" ? "DON'T PUSH ME" : "PUSH ME";
        })
     });

    $(document).on('click','.js-videoPoster',function(e) {
        //отменяем стандартное действие button
        e.preventDefault();
        var poster = $(this);
        // ищем родителя ближайшего по классу
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
      });
      
      //вопроизводим видео, при этом скрывая постер
      function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        // Берем ссылку видео из data
        var src = iframe.data('src');
        // скрываем постер
        wrapper.addClass('videoWrapperActive');
        // подставляем в src параметр из data
        iframe.attr('src',src);
      }

      $('.vedio-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<div class="slider-prev slider-btn"><img src="https://www.rnhealth.lk/wp-content/themes/rnhealth/assets/img/prev.png" alt=""></div>', '<div class="slider-next slider-btn"><img src="https://www.rnhealth.lk/wp-content/themes/rnhealth/assets/img/next.png" alt=""></div>'],
        dots:false,
        center:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                center:false,
            },
            767:{
                items:1,
                center:false,
            },
            991:{
                items:3
            }
        }
    });


      $('.testimonials-slider').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        navText: ['<div class="slider-prev slider-btn"><img src="https://www.rnhealth.lk/wp-content/themes/rnhealth/assets/img/prev.png" alt=""></div>', '<div class="slider-next slider-btn"><img src="https://www.rnhealth.lk/wp-content/themes/rnhealth/assets/img/next.png" alt=""></div>'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.advertistment-slider').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        navText: ['<div class="slider-prev slider-btn"><img src="https://www.rnhealth.lk/wp-content/themes/rnhealth/assets/img/prev.png" alt=""></div>', '<div class="slider-next slider-btn"><img src="https://www.rnhealth.lk/wp-content/themes/rnhealth/assets/img/next.png" alt=""></div>'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.gallery-items').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        items:1,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        mouseDrag: true,
        singleItem: true,
        animateOut: 'fadeOut',
    });

    function AddReadMore() {
        //This limit you can set after how much characters you want to show Read More.
        var carLmt = 300;
        // Text to show when text is collapsed
        var readMoreTxt = "Read More >>";
        // Text to show when text is expanded
        var readLessTxt = " Read Less >>";


        //Traverse all selectors with this class and manupulate HTML part to show Read More
        $(".addReadMore").each(function() {
            if ($(this).find(".firstSec").length)
                return;

            var allstr = $(this).text();
            if (allstr.length > carLmt) {
                var firstSet = allstr.substring(0, carLmt);
                var secdHalf = allstr.substring(carLmt, allstr.length);
                var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
                $(this).html(strtoadd);
            }

        });
        //Read More and Read Less Click Event binding
        $(document).on("click", ".readMore,.readLess", function() {
            $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
        });
    }
    $(function() {
        //Calling function after Page Load
        AddReadMore();
    });

});


jQuery(document).ready(function($) {
	$(".gal-div-btn").slice(0,8).addClass('display');
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".gal-div:hidden").slice(0,5).addClass('display');
		var numItems = $('.gal-div-btn').length;
		var numItemsdisply = $('.gal-div-btn.display').length;
		if(numItems==numItemsdisply){
			$("#loadMore").addClass('display-none');
		}
    });
  });



const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
