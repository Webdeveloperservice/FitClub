// scrollToTop.js
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add a click event listener to the button
scrollToTopBtn.addEventListener("click", () => {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Add a scroll event listener to show/hide the button
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
// WhatsApp button
const whatsappBtn = document.getElementById("whatsappBtn");

// Add a click event listener to the WhatsApp button
whatsappBtn.addEventListener("click", () => {
    // Replace 'https://your-whatsapp-link-here.com' with your actual WhatsApp link
    window.location.href = "https://wa.me/918750793015?text=Hi,%20I%20came%20frome%20your%20website"; target="_blank";
});

// Add a scroll event listener to show/hide the WhatsApp button
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        whatsappBtn.style.display = "block";
    } else {
        whatsappBtn.style.display = "none";
    }
});



