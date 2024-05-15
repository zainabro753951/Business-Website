document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
  
    window.addEventListener("scroll", function() {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      var elements = document.querySelectorAll('.float');
  
      if (currentScroll > lastScrollTop) {
        // Downscroll code
        elements.forEach(function(element) {
          var elementPosition = element.offsetTop;
          var windowHeight = window.innerHeight;
  
          if (currentScroll > elementPosition - windowHeight + 50) {
            element.classList.add("show");
          }
        });
      } else {
        // Upscroll code
        elements.forEach(function(element) {
          var elementPosition = element.offsetTop;
          var windowHeight = window.innerHeight;
  
          if (currentScroll < elementPosition - windowHeight + 200) {
            element.classList.remove("show");
          }
        });
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
  });



  let lastScrollTop = 0;
window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop){
    // Scroll down
    document.querySelector("#header").classList.add("hidden");
  } else {
    // Scroll up
    document.querySelector("#header").classList.remove("hidden");
  }
  lastScrollTop = currentScroll;
});
