(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

 

  $( document ).ready(function() {
    
    $.i18n().load( {
        'en': 'i18n/en.json',
        'de': 'i18n/de.json'
    } ).done( function() { 
        $.get("https://api.ipdata.co?api-key=test", function (response) {
            var countryCode = JSON.parse(JSON.stringify(response, null, 4)).country_code;
           
            if(countryCode == 'DE' || countryCode == 'AT' || countryCode == 'CH') {
              $("#language a").text("EN");
              $.i18n( {
                locale: 'de'
              } );
              $('html').i18n();     
            } else {
              $("#language a").text("DE");
              $.i18n( {
                locale: 'en'
              } );
              $('html').i18n();     
            }
        }, "jsonp");
    } );

    // fill dataset
    //http://cov2words.eba-ccn5bra4.eu-west-2.elasticbeanstalk.com/api/pair/get
    var languagesReq = { "language": "de"};
    $.ajax({
      url: "http://cov2words.eba-ccn5bra4.eu-west-2.elasticbeanstalk.com/api/pair/get",
      type: "GET",
      
      crossDomain: true,
      data: JSON.stringify(languagesReq),
      dataType: "jsonp",
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', make_base_auth("cov2words", "cov2test"));
      },
      success: function (response) {
          var resp = JSON.parse(response)
          alert(resp.status);
      },
      error: function (xhr, status) {
          alert("error");
      }
    });

    function make_base_auth(user, password) {
      var tok = user + ':' + password;
      var hash = btoa(tok);
      return 'Basic ' + hash;
  }

  });

  $("#language").click(function() {
    if($("#language a").text() == 'EN') {
      $("#language a").text("DE");
      $.i18n( {
        locale: 'en'
      } );
      $('html').i18n();     
    } else {
      $("#language a").text("EN");
      $.i18n( {
        locale: 'de'
      } );
      $('html').i18n();     
    }
    
  });

  $("#toggle-qr-code-request").click(function(){
    $("#qr-code-request").slideToggle();
  });

})(jQuery); // End of use strict

  
