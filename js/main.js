// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      statusMessage.textContent = "Message sent successfully!";
      statusMessage.style.color = "green";
      form.reset();
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    statusMessage.textContent = "An error occurred. Try again later.";
    statusMessage.style.color = "red";
  }
});

  const modal = document.getElementById("portfolio-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalTags = document.getElementById("modal-tags");
  const closeBtn = document.querySelector(".close-btn");

  // Ambil semua item portofolio
  const portfolioItems = document.querySelectorAll(".portfolio");

  portfolioItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgElement = item.querySelector("img");
      const imgSrc = imgElement.getAttribute("data-full") || imgElement.src;
      const title = item.querySelector("h4").innerText;
      const desc = item.querySelector("p").innerText;
      const tags = item.querySelector(".portfolio-tags").innerText;
  
      modalImg.src = imgSrc;
      modal.style.display = "block";
    });
  });
  

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Optional: klik di luar modal
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });