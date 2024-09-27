// Daftar ucapan Hello dalam bahasa dari negara yang terkenal AI-nya
const greetings = [
  "Hello!", // USA
  "नमस्ते!", // India
  "مرحبا", // Arab
  "Halo!", // Indonesia
  "你好!", // China
  "こんにちは!", // Jepang
  "안녕하세요!", // Korea Selatan
  "Привет!", // Rusia
  "Bonjour", // Prancis
  "Hola!", // Spanyol
];

let currentGreeting = 0; // Untuk melacak ucapan saat ini

// Fungsi untuk menampilkan ucapan secara berurutan
function showNextGreeting() {
  if (currentGreeting < greetings.length) {
    // Ganti teks ucapan
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greetings[currentGreeting];

    // Reset animasi fade-in
    const h1Element = greetingElement.parentElement; // Ambil elemen h1 yang membungkus span
    h1Element.style.opacity = 0;
    setTimeout(() => {
      h1Element.style.opacity = 1;
    }, 100); // Timer untuk memulai fade-in lagi

    currentGreeting++;

    // Panggil lagi setelah beberapa detik
    setTimeout(showNextGreeting, 300); // Ubah angka ini untuk mengatur durasi antar ucapan
  } else {
    // Setelah semua ucapan selesai, animasi slide-up pada seluruh layar intro
    document.getElementById("intro").classList.add("slide-up");

    setTimeout(() => {
      document.getElementById("mainContent").style.display = "flex"; // Konten utama ditampilkan
      startDynamicTitle(); // Mulai animasi judul dinamis
    }, 500); // Kurangi durasi menjadi 500ms atau sesuaikan dengan kecepatan animasi slide-up
  }
}

// Panggil fungsi saat halaman dimuat
window.onload = function () {
  showNextGreeting();
};

const words = ["A Smart", "A Sustainable", "An Innovative", "A Better"];
let currentIndex = 0;
let isAnimating = false; // Untuk menghindari animasi ganda

function startDynamicTitle() {
  function changeWord() {
    if (isAnimating) return; // Hentikan fungsi jika animasi sedang berlangsung
    isAnimating = true;

    // Ambil elemen dengan ID 'dynamic-word'
    const dynamicWordElement = document.getElementById("dynamic-word");

    // Tambahkan kelas untuk animasi slide-out
    dynamicWordElement.classList.add("slide-out");

    setTimeout(() => {
      // Ganti teks setelah animasi slide-out selesai
      currentIndex = (currentIndex + 1) % words.length;
      dynamicWordElement.innerText = words[currentIndex];

      // Hapus kelas animasi slide-out dan tambahkan slide-in
      dynamicWordElement.classList.remove("slide-out");
      dynamicWordElement.classList.add("slide-in");

      setTimeout(() => {
        // Hapus kelas animasi slide-in setelah selesai
        dynamicWordElement.classList.remove("slide-in");
        isAnimating = false; // Izinkan animasi berikutnya
      }, 1000); // Durasi animasi slide-in
    }, 1000); // Durasi animasi slide-out
  }

  setInterval(changeWord, 1500); // Ubah kata setiap 3 detik
}

// Daftar warna
const colors = ["rgb(222, 254, 249)", "rgb(255, 255, 227)"];
let currentColorIndex = 0; // Untuk melacak indeks warna saat ini

function changeColor() {
  // Ambil elemen dengan kelas 'big-c'
  const element = document.querySelector(".big-c");

  // Ganti warna teks dengan warna berikutnya dalam array
  element.style.color = colors[currentColorIndex];

  // Update indeks warna untuk warna berikutnya
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Jika indeks melebihi jumlah warna, kembali ke awal
}

setInterval(changeColor, 2000);

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = {
    home: "Home",
    about: "About",
    technology: "AI Impact",
    join: "Join Us",
    resources: "Resources",
  };

  // Change text when navbar is small
  const navSmallLinks = {
    home: "Home",
    about: "What is a Smart City?",
    technology: "AI & Sustainability",
    join: "Get Involved",
    resources: "Resources",
  };

  if (window.scrollY > 50) {
    navbar.classList.add("small");

    // Change the text when scrolling down
    Object.keys(navLinks).forEach((id) => {
      document.getElementById(id).querySelector("a").textContent = navLinks[id];
    });
  } else {
    navbar.classList.remove("small");

    // Restore original text when scrolling up
    Object.keys(navSmallLinks).forEach((id) => {
      document.getElementById(id).querySelector("a").textContent =
        navSmallLinks[id];
    });
  }
});

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

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



