var arrLang = {
    'en': {
      'home': 'Top Online',
      'about': 'About Us English',
      'contact': 'Contact Us',
      'desc': 'This is my description'
    },
    'km': {
      'home': 'ទំព័រដើម',
      'about': 'អំពីយើង',
      'contact': 'ទំនាក់ទំនងយើងខ្ញុំ',
      'desc': 'នេះគឺជាអត្ថបទរបស់ខ្ញុំ'
    }
  };

// The default language is English
var lang = "en-gb";
// Check for localStorage support
if('localStorage' in window){
   
   var usrLang = localStorage.getItem('uiLang');
   if(usrLang) {
       lang = usrLang
   }

}


console.log(lang);


$(document).ready(function() {

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  // get/set the selected language
  $(".translate").click(function() {
    var lang = $(this).attr("id");

    // update localStorage key
    if('localStorage' in window){
         localStorage.setItem('uiLang', lang);
         console.log( localStorage.getItem('uiLang') );
    }

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  }); 