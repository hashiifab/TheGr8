// Function to check the browser viewport size
function checkViewportSize() {
    // Minimum and maximum viewport dimensions
    const minWidth = 1502;
    const minHeight = 905;
    const maxWidth = 1512;
    const maxHeight = 945;
  
    // Get current viewport dimensions
    const currentWidth = window.innerWidth;  
    const currentHeight = window.innerHeight;
  
    // Check if current viewport is smaller or larger than the required size
    if (currentWidth < minWidth || currentHeight < minHeight || currentWidth > maxWidth || currentHeight > maxHeight) {
      // Create a blocking overlay if it doesn't already exist
      if (!document.getElementById("block-overlay")) {
        // Create the overlay container
        const overlay = document.createElement("div");
        overlay.id = "block-overlay"; 
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.9))";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = 9999;
        overlay.style.transition = "opacity 0.5s ease";
        overlay.style.opacity = 0;
        document.body.appendChild(overlay);
        
        // Prevent scrolling and interaction completely
        document.body.style.overflow = "hidden"; 
        document.body.style.pointerEvents = "none"; // Disable interactions
        
        // Create the content card
        const card = document.createElement("div");
        card.style.padding = "20px 40px";
        card.style.backgroundColor = "#fff";
        card.style.borderRadius = "10px";
        card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        card.style.textAlign = "center";
        card.style.maxWidth = "600px";
        card.style.animation = "fadeInUp 0.5s ease";
  
        // Add warning text to the card
        const heading = document.createElement("h1");
        heading.textContent = "Your browser window size is incorrect!";
        heading.style.color = "#333";
        heading.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        heading.style.marginBottom = "10px";
  
        const message = document.createElement("p");
        message.innerHTML = `Please use a resolution between <strong>${minWidth} x ${minHeight}</strong> and <strong>${maxWidth} x ${maxHeight}</strong> pixels.`;
        message.style.fontSize = "1.2rem";
        message.style.color = "#666";
        message.style.lineHeight = "1.5";
        
        // Append text elements to the card
        card.appendChild(heading);
        card.appendChild(message);
        
        // Append card to the overlay
        overlay.appendChild(card);
  
        // Fade-in the overlay
        requestAnimationFrame(() => {
          overlay.style.opacity = 1;
        });
  
        // Disable right-click, keyboard events, and mouse events while the overlay is active
        document.addEventListener("contextmenu", blockEvent);
        document.addEventListener("keydown", blockEvent);
        document.addEventListener("mousedown", blockEvent);
        document.addEventListener("touchstart", blockEvent);
      }
    } else {
      // Remove the overlay and restore functionality if the size is within the range
      const overlay = document.getElementById("block-overlay");
      if (overlay) {
        overlay.style.opacity = 0; // Fade out the overlay
        setTimeout(() => {
          document.body.removeChild(overlay);
          document.body.style.overflow = ""; // Re-enable scrolling
          document.body.style.pointerEvents = ""; // Re-enable interactions
          removeEventBlockers(); // Remove event listeners for blocking
        }, 500);
      }
    }
  }
  
  // Helper function to block events (right-click, keyboard, mouse)
  function blockEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  
  // Remove event blockers once overlay is removed
  function removeEventBlockers() {
    document.removeEventListener("contextmenu", blockEvent);
    document.removeEventListener("keydown", blockEvent);
    document.removeEventListener("mousedown", blockEvent);
    document.removeEventListener("touchstart", blockEvent);
  }
  
  // Call the function on page load
  document.addEventListener("DOMContentLoaded", checkViewportSize);
  
  // Check the viewport size on window resize
  window.addEventListener("resize", checkViewportSize);
  
  // Add periodic checking to account for any changes via DevTools or other interactions
  setInterval(checkViewportSize, 500);
  
  // Add a keyframe animation for the card to pop up
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeInUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  
  

document.addEventListener("DOMContentLoaded", () => {
    const bgs = ["#8b48c8", "#2c2c2c", "#3d3d3d"]; // Background colors
  
    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      speed: 500,
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: {
        forceToAxis: true,
        thresholdDelta: 30,
      },
      on: {
        slideChange: (swiper) => {
          // Log active index and background color change
          console.log(`Active Slide Index: ${swiper.activeIndex}`);
          console.log(`Changing Background Color to: ${bgs[swiper.activeIndex]}`);
          
          // Change background color based on the active slide index
          document.body.style.backgroundColor = bgs[swiper.activeIndex];
  
          // Show or hide the back button based on the active slide
          const backButton = document.querySelector(".back-button");
          if (swiper.activeIndex === swiper.slides.length - 1) {
            backButton.classList.add("show"); // Show button on last slide
          } else {
            backButton.classList.remove("show"); // Hide button otherwise
          }
        },
      },
    });
  
    // Attach hover effects to buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.closest(".character").querySelector("img").classList.add("color");
      });
      button.addEventListener("mouseleave", () => {
        button.closest(".character").querySelector("img").classList.remove("color");
      });
    });
  
    // Back button click event
    document.querySelector(".back-button").addEventListener("click", function () {
      window.location.href = "/html/impact.html"; // Change this path if necessary
    });
  });


  
  