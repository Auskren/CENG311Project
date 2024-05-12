
// This function shows sent form input on client side for confirmation 
function showReq(){
  alert(
    "Message sent successfully!\n\nName: " +
      name +
      "\nEmail: " +
      email.value +
      "\nMessage: " +
      message.value +
      "\nDate: " +
      date.value
  );

  // Formun geri yüklenmesini engellemek için form alanlarını temizle
  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
  $("#date").val("");
}



$(document).ready(function () { 
    


  /** Initiate validation on each form with class .contant-form */ 
  $('.contact-form').validation({ 
    'autocomplete': 'off', 
    'liveValidation': false 
  }); 

  // jquery Datepicker widget
  $("#date").datepicker();


  // page piling plugin setup
  $('#pagepiling').pagepiling({
    menu: '#navbar', // Selector for your navigation menu
    anchors: ['home', 'blog', 'projects','contact', 'aboutus'], // Array of anchor links for each section
    navigation: {
        'position': 'right', // Position of the navigation bar
        'tooltips': ['Home', 'Blog', 'Projects', 'Contact', 'About Us'] // Tooltips for navigation items
    }
  });

  
  
})

  

