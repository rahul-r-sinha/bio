'use strict'

function onPageLoad() {
    console.log("documnet loaded");
    let mnu = document.getElementById("check");
    mnu.addEventListener("click", onBrgMenuClick);
    mnu.checked = false;
}

// Attach the function to the window.onload event
window.onload = onPageLoad;
document.addEventListener('DOMContentLoaded', function () {
    console.log("documnet loaded");
    let mnu = document.getElementById("check");
    mnu.addEventListener("click", onBrgMenuClick);
    mnu.checked = false;
});

function onBrgMenuClick(e) {
    console.log("menu clicked");
    let content = document.getElementById("device_menu");
    //content.style="transform: translateY(100px);";
    //content.classList.toggle("opacity-100");//("paragraphClass"); 
    content.classList.toggle("tog");//("paragraphClass"); 
}


function scrollToContent() {
    // Get the target element by its ID ("content" in this case)
    var contentElement = document.getElementById('content');

    // Scroll to the top of the target element smoothly
    window.scrollTo({
        top: 0,
      behavior: 'smooth'
    });
  }