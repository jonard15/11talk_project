var arrLang = {
    "en": {
      "Home": "Home",
      "About": "About 11talk",
      "Book": "Book",
      "Tuition": "Tuition",
      "Teacher": "Teacher",
      "FAQ's": "FAQ's",
      "Testimonials": "Testimonials",
      "Blog": "Blog",
      "Class system": "Class System",
      "language": "English (US)"
    },
    "ch": {
      "home": "家",
      "About": "关于 11talk",
      "Book": "书",
      "Tuition": "学费",
      "Teacher": "老师",
      "FAQ's": "常问问题",
      "Testimonials": "感言",
      "Blog": "博客",
      "Class system": "类系统",
      "language": "中文 (Chinese)",
    }
  };


// The default language is English
var lang = "en";
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