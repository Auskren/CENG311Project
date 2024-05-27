

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

function fetchBlogs(page, path) {
  const host = window.location.hostname;
  const port = location.port
  console.log("page: ", page)
  const url = `http://${host}:${port}/content/${path}/${path}${page}.json`;

  $.ajax({
      url: url,
      method: 'GET',
      success: function(data) {
          console.log("data is ", data.post)
          const posts = data.posts;
          const post_list = $('.post-list');
          post_list.empty()
          posts.forEach(post => {
              post_list.append(`
                  <div class="post">
                    <img src="${post.photo}" alt="${post.title}" class="post-image" />
                    <div class="post-content">
                      <h2 class="post-title">${post.title}</h2>
                      <p class="post-date">${post.date}</p>
                      <p class="post-excerpt">
                        ${post.excerpt}
                      </p>
                    </div>
                  </div>
              `);
          });
      },
      error: function(error) {
          console.log('Error fetching blogs:', error);
      }
  });
}

let page = 1

function pageUp(page,path){
  page+=1
  fetchBlogs(page,path)
  return page
}

function pageDown(page,path){
  page-=1
  fetchBlogs(page,path)
  return page
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

  

