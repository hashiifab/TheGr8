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



// Loading Screen Fade-Out
setTimeout(function () {
  document.getElementById("loadingScreen").classList.add("fade-out");
  setTimeout(function () {
    document.getElementById("loadingScreen").style.display = "none";
  }, 2000); // Adjusted to match the slideUpOut animation duration
}, 100);

gsap.registerPlugin(TextPlugin);

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let element = entry.target;

      let tl = gsap.timeline({ paused: true });
      tl.to(
        element.querySelector("h2"),
        { text: element.dataset.title, duration: 1 },
        0.5
      );
      tl.fromTo(
        element.querySelector("h4"),
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1 },
        1.5
      );
      tl.fromTo(
        element.querySelector("p"),
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1 },
        1.5
      );
      tl.fromTo(
        element.querySelector("img"),
        { filter: "brightness(0)" },
        { filter: "brightness(1)" },
        2
      );

      if (entry.isIntersecting) {
        tl.play(0);
      } else {
        tl.progress(0);
        element.querySelector("h2").innerText = "";
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));

// impact.js

// Existing kode loading screen fade-out
setTimeout(function () {
  document.getElementById("loadingScreen").classList.add("fade-out");
  setTimeout(function () {
    document.getElementById("loadingScreen").style.display = "none";
  }, 2000); // Sesuaikan dengan durasi animasi slideUpOut
}, 100);

gsap.registerPlugin(TextPlugin);




  (entries) => {
    entries.forEach((entry) => {
      let element = entry.target;

      let tl = gsap.timeline({ paused: true });
      tl.to(
        element.querySelector("h2"),
        { text: element.dataset.title, duration: 1 },
        0.5
      );
      tl.fromTo(
        element.querySelector("h4"),
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1 },
        1.5
      );
      tl.fromTo(
        element.querySelector("p"),
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1 },
        1.5
      );
      tl.fromTo(
        element.querySelector("img"),
        { filter: "brightness(0)" },
        { filter: "brightness(1)" },
        2
      );

      if (entry.isIntersecting) {
        tl.play(0);
      } else {
        tl.progress(0);
        element.querySelector("h2").innerText = "";
      }
    });
  },
  {
    threshold: 0.5,
  }

sections.forEach((section) => observer.observe(section));

// Popup Functionality
window.addEventListener("scroll", function() {
    // Check if the user has scrolled to the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showPopup();
    }
});

let popupShown = false; // Untuk memastikan popup hanya ditampilkan sekali

function showPopup() {
    if (!popupShown) {
        popupShown = true;
        const popup = document.getElementById("popup");
        popup.classList.add("show");

        // Animasi popup menggunakan GSAP
        gsap.fromTo(
            popup,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );

        // Menghapus listener scroll setelah popup ditampilkan
        window.removeEventListener("scroll", showPopup);
    }
}

// Handle the button click to navigate to the next page
document.getElementById("navigateButton").addEventListener("click", function() {
    window.location.href = "join.html"; // Ubah ini sesuai URL yang diinginkan
});

// Tambahkan fungsionalitas untuk tombol Lanjut di akhir halaman
document.getElementById("nextButton").addEventListener("click", function() {
    window.location.href = "join.html"; // Ubah ini sesuai URL yang diinginkan
});

// Tambahkan fungsionalitas untuk tombol Kembali
document.getElementById("backButton").addEventListener("click", function() {
  window.location.href = "index.html"; // Ubah ini sesuai URL yang diinginkan
});

// (Opsional) Tambahkan fungsionalitas untuk tombol Kembali di popup
const popupBackButton = document.getElementById("popupBackButton");
if (popupBackButton) {
    popupBackButton.addEventListener("click", function() {
      window.location.href = "index.html"; // Ubah ini sesuai URL yang diinginkan
    });
}


