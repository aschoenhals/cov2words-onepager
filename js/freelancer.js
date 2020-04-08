(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
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
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
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
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });



  $(document).ready(function () {

    $.i18n().load({
      'en': 'i18n/en.json',
      'de': 'i18n/de.json'
    }).done(function () {
      /**$.get("https://api.ipdata.co?api-key=test", function (response) {
        var countryCode = JSON.parse(JSON.stringify(response, null, 4)).country_code;

        if (countryCode == 'DE' || countryCode == 'AT' || countryCode == 'CH') {
          $("#language a").text("EN");
          $.i18n({
            locale: 'de'
          });
          $('html').i18n();
        } else {
          $("#language a").text("DE");
          $.i18n({
            locale: 'en'
          });
          $('html').i18n();
        }
      }, "jsonp");*/
      $("#language a").text("DE");
      $.i18n({
        locale: 'en'
      });
      $('html').i18n();



      // TODO fill dataset/list (wordlist) with words requested at backend based on selected language
      loadWordListIntoSelection();
      loadYoutubeClipBasedOnLanguage();
      loadPhoneNumberBasedOnLanguage();
    

    });

  });

  function loadPhoneNumberBasedOnLanguage() {
    if($("#language a").text() == "DE") {
      // english
      $("#phone-number").attr("href","tel:+18772019777")
    } else {
      // german
      $("#phone-number").attr("href","tel:+3726682808")
    }
  }

 function loadYoutubeClipBasedOnLanguage() {
   if($("#language a").text() == "DE") {
     // english
     $("#youtube-clip").attr("src","https://www.youtube.com/embed/Ng0sAYo9WKw")
   } else {
     // german
     $("#youtube-clip").attr("src","https://www.youtube.com/embed/dhxdjX0_2Ko")
   }
 }

 function loadWordListIntoSelection() {
    $('#wordlist-1').empty();
    $('#wordlist-2').empty();
    var languagesReq = $("#language a").text() == "DE" ? { "language": "en" } : { "language": "de" };
      var wordList;
      $.ajax({
        url: 'https://api.cov2words.com/api/pair/get',
        type: 'POST',
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(languagesReq),
        success: function (data) {
         
          if(data.error_code == 0) {
            wordList = JSON.parse(JSON.stringify(data)).data.words;
            $.each(wordList, function (i, item) {
              $("#wordlist-1").append($("<option>").attr('value', item).text(item));
              $("#wordlist-2").append($("<option>").attr('value', item).text(item));
            })
          } else {
            wordList = wordListEn.words;
            $.each(wordList, function (i, item) {
              $("#wordlist-1").append($("<option>").attr('value', item).text(item));
              $("#wordlist-2").append($("<option>").attr('value', item).text(item));
            })
          };
        }
      });
  }

  function showPlaceholder() {
    $('#qr-code canvas').remove();
    $('#qr-code-placeholder').show();
  }


  // generate qr code if two words are selected
  $('#list-1').on('input', function () {
    if ($('#list-2').val() != "") {
      if (this.value == "") {
        showPlaceholder();
      } else {
        var word1 = this.value;
        var word2 = $('#list-2').val();
        // on success generate code based on answer
        if (word1.toLowerCase() == "job" && word2.toLowerCase() == "morning") {
          generateCodeBasedOnAnswer("<patient><b>1</b><t>2</t><v>1</v></patient>");
        } else {
          generateCodeBasedOnSelectedWords(word1, word2);
        }
      }
    } else {
      showPlaceholder();
    }
  });

  function generateCodeBasedOnAnswer(a) { // TODO
    $('#qr-code-placeholder').hide();
    $('#qr-code canvas').remove();
    $('#qr-code').qrcode({ text: a });
  }

  // generate qr code if two words are selected
  $('#list-2').on('input', function () {
    if ($('#list-1').val() != "") {
      if (this.value == "") {
        showPlaceholder();
      } else {
        var word2 = this.value;
        var word1 = $('#list-1').val();
        // on success generate code based on answer
        if (word1.toLowerCase() == "job" && word2.toLowerCase() == "morning") {
          generateCodeBasedOnAnswer("<patient><b>1</b><t>2</t><v>1</v></patient>");
        } else {
          generateCodeBasedOnSelectedWords(word1, word2);
        }
      }
    } else {
      showPlaceholder();
    }
  });

  $("#language").click(function () {
    if ($("#language a").text() == 'EN') {
      $("#language a").text("DE");
      $.i18n({
        locale: 'en'
      });
      $('html').i18n();
    } else {
      $("#language a").text("EN");
      $.i18n({
        locale: 'de'
      });
      $('html').i18n();
    }
    
    loadWordListIntoSelection();
    loadYoutubeClipBasedOnLanguage();
    loadPhoneNumberBasedOnLanguage();
  });

  function generateCodeBasedOnSelectedWords(word1, word2) {
    var language = $("#language a").text() == "DE" ? "en" : "de";
    var answerReq = {
      "language": language,
      "words": [
        {
          "order": 0,
          "word": word1
        },
        {
          "order": 1,
          "word": word2
        }
      ]
    };
    var answer;
    $.ajax({
      url: 'https://api.cov2words.com/api/pair/answers/get',
      type: 'POST',
      contentType: "application/json",
      dataType: 'json',
      data: JSON.stringify(answerReq),
      success: function (data) {
        if(data.error_code == 0) {
          answer = JSON.parse(JSON.stringify(data)).data.answer;
          generateCodeBasedOnAnswer(answer);
        } else {
          showPlaceholder();
        };
      }
    });
  }

})(jQuery); // End of use strict
