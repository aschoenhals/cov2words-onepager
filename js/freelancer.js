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
      $.i18n({
        locale: 'en'
      });
      $('html').i18n();
    });






    // TODO fill dataset/list (wordlist) with words requested at backend based on selected language
    
    var languagesReq = { "language": "de" };
    //ajax req http://cov2words.eba-ccn5bra4.eu-west-2.elasticbeanstalk.com/api/pair/get

    var wordListEn = {
      "language": "en",
      "words": [
        "man",
        "job",
        "mother",
        "water",
        "morning",
        "night",
        "month"
      ]
    };

    var wordList = {
      "language": "de",
      "words": [
        "Armut",
        "Klima",
        "Guthaben",
        "Fassade",
        "Joel",
        "Spektrum",
        "Pullover",
        "Nachdruck",
        "Klinsmann",
        "Befehl",
        "weiß",
        "Allianz",
        "Intendant",
        "Notiz",
        "Borussia",
        "Elfriede",
        "Luftwaffe",
        "Streichung",
        "Null",
        "Halbjahr",
        "Kundgebung",
        "Magdeburg",
        "Tatort",
        "Fahrplan",
        "Jenseits",
        "Arena",
        "Birgit",
        "Vogel",
        "Kuwait",
        "Claudia",
        "Moderator",
        "Fahrrad",
        "Atelier",
        "Holz",
        "Ingrid",
        "Oberhausen",
        "Trio",
        "Adler",
        "Formular",
        "Leinwand",
        "Kasachstan",
        "Korrektur",
        "Edmund",
        "Jagd",
        "Pass",
        "Euphorie",
        "Autonomie",
        "Barcelona",
        "Champions",
        "Joachim",
        "Akzente",
        "Ludwig",
        "Erwachsene",
        "Kosovo",
        "November",
        "Lediglich",
        "Jonathan",
        "Celsius",
        "Windows",
        "Pistole",
        "Hauptrolle",
        "Paragraph",
        "Luxus",
        "Sydney",
        "Alliierten",
        "Cottbus",
        "Gleichwohl",
        "Elias",
        "Restaurant",
        "Griechen",
        "Gymnasium",
        "Monika",
        "Friseur",
        "Papa",
        "Vorbehalte",
        "Ukraine",
        "Oliver",
        "Adam",
        "Budget",
        "Dollar",
        "Desaster",
        "Jacke",
        "Offenheit",
        "Reichweite",
        "Konkurs",
        "Zuversicht",
        "Ilse",
        "Schottland",
        "Toilette",
        "Joschka",
        "Skandal",
        "Lampe",
        "Industrie",
        "Katholiken",
        "Nudel",
        "Slobodan",
        "Akzeptanz",
        "Bodensee",
        "Weltweit",
        "Singapur",
        "Paderborn",
        "Kaufhaus",
        "Turm",
        "Nikolaus",
        "Amtszeit",
        "Slowenien",
        "Mittwoch",
        "Nigeria",
        "Historiker",
        "Training",
        "Areal",
        "Drittel",
        "Lizenz",
        "Tennis",
        "Bahnsteig",
        "Nordirland",
        "Kampagne",
        "Dividende",
        "Rostock",
        "Atem",
        "Wilhelm",
        "Mitarbeit",
        "Kiosk",
        "Lukas",
        "Fotografen",
        "Irmgard",
        "Dilemma",
        "April",
        "Zentimeter",
        "Labor",
        "Resultat",
        "Schloss",
        "Kommando",
        "Statistik",
        "Arbeitsamt",
        "Francisco",
        "Protokoll",
        "Existenz",
        "Werkstatt",
        "Konjunktur",
        "Villa",
        "Flecken",
        "Noah",
        "Mehrzahl",
        "Einkauf",
        "Weltkrieg",
        "Anzahl",
        "Kampf",
        "Mohamed",
        "Bildschirm",
        "Chile",
        "Elektronik",
        "Verkehr",
        "Kardinal",
        "Mittelfeld",
        "Standpunkt",
        "Ortsbeirat",
        "Aufschwung",
        "Zielgruppe",
        "Washington",
        "Zitat",
        "Vorwurf",
        "Sozialamt",
        "Hunderte",
        "Ursula",
        "Wobei",
        "Focus",
        "Neuseeland",
        "Automat",
        "Kommission",
        "Landsleute",
        "Freispruch",
        "Haftbefehl",
        "Greenpeace",
        "Zone",
        "Olga",
        "Torwart",
        "Tokio",
        "Realschule",
        "Koblenz",
        "Jobs",
        "grün",
        "Benjamin",
        "Justiz",
        "Heiligen",
        "Archiv",
        "Saddam",
        "Kosmetik",
        "Detlef",
        "Veto",
        "Hochzeit",
        "Insgesamt",
        "City",
        "Lebensjahr",
        "Somalia",
        "Vermutlich",
        "Haftstrafe",
        "Harald",
        "Barbara",
        "Nacht",
        "Derzeit",
        "Disziplin",
        "Samstag",
        "Alarm",
        "Original",
        "Optimismus",
        "Plutonium",
        "Klientel",
        "Daraufhin",
        "Treuhand",
        "gelb",
        "Quittung",
        "Sammlung",
        "Business",
        "Darmstadt",
        "Laufzeit",
        "Kenia",
        "Kripo",
        "Metropole",
        "Erstmals",
        "Fazit",
        "Republik",
        "Wahnsinn",
        "Mitleid",
        "Wettbewerb",
        "Literatur",
        "Montenegro",
        "Klar",
        "Erkrankung",
        "Chor",
        "Akademie",
        "Rabatt",
        "Triumph",
        "Gegenteil",
        "Raumfahrt",
        "Zoll",
        "Felix",
        "Potential",
        "Kubikmeter",
        "Griff",
        "Marokko",
        "Johnson",
        "Rivalen",
        "Eisenbahn",
        "Chaos",
        "Datum",
        "Kleinstadt",
        "Irrtum",
        "Oberbayern",
        "Jazz",
        "Definition",
        "Coach",
        "Kriegsende",
        "Schrank",
        "Florenz",
        "Zentrale",
        "Abwehr",
        "Romantik",
        "Florida",
        "Wurzeln",
        "Litauen",
        "Wohnraum",
        "Insassen",
        "Eigentlich",
        "Tagebuch",
        "Mindestens",
        "Februar",
        "Plattform",
        "sepia",
        "Konsortium",
        "Libanon",
        "Multimedia",
        "Wuppertal",
        "Parallel",
        "Helsinki",
        "Witwe",
        "Motivation",
        "Ernte",
        "Bayerische",
        "Jahreszeit",
        "Korea",
        "Konrad",
        "Wahlsieg",
        "Vatikan",
        "pink",
        "Hoffmann",
        "Lothar",
        "Frankreich",
        "Edith",
        "Darlehen",
        "Wechsel",
        "Bischof",
        "Kreuz",
        "Design",
        "Manfred",
        "Pech",
        "Exemplare",
        "Lokal",
        "Halbinsel",
        "Taxi",
        "Therapie",
        "Wiederwahl",
        "Dorf",
        "Selbstmord",
        "Gesundheit",
        "Brigitte",
        "Charakter",
        "Milch",
        "Logistik",
        "Helga",
        "Skepsis",
        "Aufgrund",
        "Hausfrau",
        "Medaille",
        "Residenz",
        "Ballett",
        "Paradies",
        "Stadtteil",
        "Sophia",
        "Bottrop",
        "Halbzeit",
        "Gertrud",
        "Charlotte",
        "Auftakt",
        "Erdgas",
        "Konsum",
        "Propaganda",
        "Tiergarten",
        "Hannover",
        "Zeugnis",
        "Istanbul",
        "Teheran",
        "Dynamik",
        "Erzbischof",
        "Aufenthalt",
        "Landwirte",
        "Ehemann",
        "Ethik",
        "Lyrik",
        "Szenario",
        "Ensemble",
        "Stillstand",
        "Dunkelheit",
        "Rundfunk",
        "Betroffene",
        "Mazedonien",
        "Schwimmbad",
        "Bleistift",
        "Bargeld",
        "Wohnzimmer",
        "Trendwende",
        "Chinesen",
        "Gesamtjahr",
        "Stockholm",
        "Insofern",
        "Konsulat",
        "Quote",
        "Jahresende",
        "Albrecht",
        "Einzelfall",
        "General",
        "Ressourcen",
        "Kopenhagen",
        "UdSSR",
        "Birne",
        "Erwerb",
        "Cursor",
        "Friedhof",
        "Fulda",
        "Private",
        "Heinrich",
        "Schumacher",
        "Kugel",
        "Kaufpreis",
        "Medikament",
        "Erfurt",
        "Dirk",
        "lila",
        "Rufnummer",
        "Zeitplan",
        "Gleis",
        "Alptraum",
        "Peking",
        "Jury",
        "Briefmarke",
        "Dirigent",
        "Votum",
        "Henry",
        "Susanne",
        "Hannelore",
        "Gnade",
        "Peru",
        "Portugal",
        "Schokolade",
        "Schicksal",
        "Hessischen",
        "Lettland",
        "Mercedes",
        "Lufthansa",
        "Bahnhof",
        "Axel",
        "Zweifel",
        "Disco",
        "Thron",
        "Lutz",
        "Elisabeth",
        "Donau",
        "Diagnose",
        "Initiative",
        "Luxemburg",
        "Oslo",
        "Jerusalem",
        "Radio",
        "Englisch",
        "Volkswagen",
        "Jakob",
        "Geheimnis",
        "Jacques",
        "Tour",
        "Weisheit",
        "Sehnsucht",
        "Fahrbahn",
        "Katze",
        "Hildegard",
        "Klang",
        "Kennzahlen",
        "Unterricht",
        "Kairo",
        "Wege",
        "Alkohol",
        "Handtuch",
        "Teppich",
        "Mama",
        "Leverkusen",
        "Alleingang",
        "Einfluss",
        "Ufer",
        "Stuttgart",
        "Trinkgeld",
        "Zensur",
        "Rathaus",
        "Geplant",
        "Toleranz",
        "Offensive",
        "Nordkorea",
        "Supermarkt",
        "Humor",
        "Spielplatz",
        "Netzwerk",
        "Erwin",
        "Menschheit",
        "Motto",
        "Zyklus",
        "Trotz",
        "Wimbledon",
        "Muslime",
        "Asyl",
        "Saal",
        "Ferrari",
        "Hongkong",
        "türkis",
        "Ehefrau",
        "Impulse",
        "Plus",
        "Innerhalb",
        "Zivilisten",
        "Strom",
        "Sofa",
        "Typen",
        "Sportler",
        "Echo",
        "Erreger",
        "Harmonie",
        "Donnerstag",
        "Immerhin",
        "Gitarre",
        "Logik",
        "Ticket",
        "Genau",
        "Kassette",
        "Direktor",
        "Wachstum",
        "Bruno",
        "Dialog",
        "Budapest",
        "Abfahrt",
        "Akteure",
        "Appetit",
        "Inge",
        "Salzgitter",
        "Oskar",
        "Chemnitz",
        "Blockade",
        "Apotheke",
        "Praktikum",
        "Applaus",
        "Seoul",
        "Attacken",
        "Stoiber",
        "Baby",
        "Kreml",
        "Unschuld",
        "Insekten",
        "Bedarf",
        "Fluss",
        "Microsoft",
        "Laufbahn",
        "Resonanz",
        "Natur",
        "Endspiel",
        "Gastgeber",
        "Comeback",
        "Inhaber",
        "Wochenende",
        "Sparpaket",
        "Hobby",
        "Malaysia",
        "Alfred",
        "Rechts",
        "Krefeld",
        "Slowakei",
        "Oldenburg",
        "Nazis",
        "Hollywood",
        "Gramm",
        "Bibliothek",
        "Parameter",
        "Heinz",
        "Sauna",
        "Umbau",
        "Hierarchie",
        "Empfehlung",
        "Mathematik",
        "Hochschule",
        "Research",
        "Allgemeine",
        "Politische",
        "Etat",
        "Sobald",
        "Staatschef",
        "Drama",
        "Nachdenken",
        "Trost",
        "Beihilfe",
        "Kuba",
        "Mexiko",
        "Theo",
        "Oktober",
        "Knapp",
        "Atomwaffen",
        "Venedig",
        "Wolfsburg",
        "Liberalen",
        "Magazin",
        "Biographie",
        "Immobilien",
        "Dimitrios",
        "Athleten",
        "Kunsthalle",
        "Flammen",
        "Basis",
        "Sauerstoff",
        "Entwurf",
        "Ungarn",
        "Lupe",
        "Rhythmus",
        "Handvoll",
        "Klischees",
        "Umzug",
        "Unterlagen",
        "Fahrkarte",
        "Quartal",
        "Saarland",
        "Allee",
        "Diskussion",
        "Kunststoff",
        "Liebhaber",
        "Halbfinale",
        "Vincent",
        "Schauspiel",
        "Group",
        "Instrument",
        "Obst",
        "Fonds",
        "Boykott",
        "Etappe",
        "Brunnen",
        "Nebel",
        "Ambiente",
        "Anrede",
        "Image",
        "Mustafa",
        "Container",
        "Alltag",
        "Heidelberg",
        "Altstadt",
        "Wolfgang",
        "Audi",
        "Ehepaar",
        "Kindergeld",
        "Fundament",
        "Bielefeld",
        "Indonesien",
        "Seehofer",
        "Taktik",
        "Vietnam",
        "Notarzt",
        "Viertel",
        "Astronomen",
        "Transport",
        "Pforzheim",
        "Zitrone",
        "Jutta",
        "Plastik",
        "Langeweile",
        "Finnland",
        "Salzburg",
        "Journalist",
        "Chicago",
        "Nahverkehr",
        "Architekt",
        "Album",
        "Treffpunkt",
        "Polizei",
        "Tanz",
        "Margarete",
        "Major",
        "Olympia",
        "Gorleben",
        "Gift",
        "Eduard",
        "Regensburg",
        "Otto",
        "Horizont",
        "Postbank",
        "GmbH",
        "Pfund",
        "Januar",
        "Geldstrafe",
        "Wunsch",
        "Ankara",
        "Erdbeben",
        "Katharina",
        "Pfarrer",
        "Stadtwerke",
        "Panik",
        "Abwicklung",
        "Taiwan",
        "Schauplatz",
        "Arnold",
        "Elend",
        "Diana",
        "Rundgang",
        "Gentechnik",
        "Nachmittag",
        "Attentat",
        "Spektakel",
        "Philosoph",
        "Amsterdam",
        "Islamisten",
        "Harry",
        "Emma",
        "Freigabe",
        "Uniform",
        "Bochum",
        "Garantie",
        "Niveau",
        "Frankfurt",
        "Hildesheim",
        "Bayreuth",
        "Maastricht",
        "Hartmut",
        "Gouverneur",
        "Kokain",
        "Moral",
        "Texas",
        "Pakistan",
        "Beitritt",
        "Warschau",
        "Bagdad",
        "Amtes",
        "Brauerei",
        "World",
        "Eigentum",
        "Periode",
        "violett",
        "Vielfalt",
        "David",
        "Pfennig",
        "Dublin",
        "Ehrgeiz",
        "Rock",
        "Stichwort",
        "Quartett",
        "Indianer",
        "Miami",
        "Katalog",
        "Arzt",
        "Company",
        "Einerseits",
        "Stadtrat",
        "Jesus"
      ]
    }

    $.each(wordListEn.words, function (i, item) {
      $("#wordlist-1").append($("<option>").attr('value', item).text(item));
      $("#wordlist-2").append($("<option>").attr('value', item).text(item));
    });


  });

  function showPlaceholder() {
    $('#qr-code canvas').remove();
    $('#qr-code-placeholder').show();
  }


  // generate qr code if two words are selected
  $('#list-1').on('input', function() {
    if($('#list-2').val() != "") {
        if(this.value == "") {
          showPlaceholder();
        } else {
          var word1 = this.value;
          var word2 = $('#list-2').val();
          console.log("send request to backend based on " + word1 + " and " + word2 );
          // on success generate code based on answer
          generateCodeBasedOnAnswer(word1 + word2);
        }
    } else {
        showPlaceholder();
    }
  });

  function generateCodeBasedOnAnswer(a) { // TODO
    $('#qr-code-placeholder').hide();
    $('#qr-code canvas').remove();
    $('#qr-code').qrcode({text:a});
  }

  // generate qr code if two words are selected
  $('#list-2').on('input', function() {
    if($('#list-1').val() != "") {
      if(this.value == "") {
        showPlaceholder();
      } else {
        var word2 = this.value;
        var word1 = $('#list-1').val();
        console.log("send request to backend based on " + word1 + " and " + word2 );
        // on success generate code based on answer
        generateCodeBasedOnAnswer(word1 + word2);
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

  });

  $("#toggle-qr-code-request").click(function () {
    $("#qr-code-request").slideToggle();
  });

  

})(jQuery); // End of use strict


/**
 * // TODO request answer xml by selected word pair
    var answerReq = {
      "language": "string",
      "words": [
        {
          "order": 0,
          "word": "string"
        },
        {
          "order": 1,
          "word": "ss"
        }
      ]
    };
    // ajax req   http://cov2words.eba-ccn5bra4.eu-west-2.elasticbeanstalk.com/api/pair/answers/get
 */
