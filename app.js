// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const root = document.documentElement;

// Load theme from localStorage
const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
};

// Update theme icon
const updateThemeIcon = (theme) => {
  if (theme === "dark") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }
};

// Toggle theme
themeToggle?.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

// Initialize theme on page load
loadTheme();

// Typing Animation Effect
const typingText = document.getElementById("typing-text");
const roles = [
  "Full Stack Web Developer",
  "Mobile App Developer",
  "UI/UX Designer",
  "Cloud Engineer",
  "Content Creator",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const typeRole = () => {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    // Pause at end of word
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500;
  }

  setTimeout(typeRole, typingSpeed);
};

// Start typing animation after a short delay
setTimeout(typeRole, 1000);

// Scroll Progress Indicator
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + "%";
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Mobile navigation functionality
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const navLinks = document.getElementsByClassName("navbar-link");
const header = document.querySelector(".header");

// Toggle mobile menu
mobile_nav?.addEventListener("click", () => {
  header.classList.toggle("active");
});

// Close mobile menu when nav link is clicked
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    header.classList.remove("active");
  });
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!header.contains(e.target) && header.classList.contains("active")) {
    header.classList.remove("active");
  }
});

// Skills data
let skills = {
  HTML: 90,
  CSS: 90,
  JavaScript: 80,
  Python: 95,
  "C++": 90,
  "Node JS": 80,
  SQL: 85,
  MongoDB: 85,
};

let extraSkills = {
  Flutter: 90,
  Firebase: 80,
  Java: 80,
  React: 80,
  NextJs: 80,
  AWS: 80,
  "AI / ML": 80,
};

const skillsContainer = document.querySelector(".skills-container");

// Display skills with animation
const displaySkill = () => {
  const skillsList = Object.keys(skills).map((skill) => {
    return `
    <div class="skill" data-aos="fade-up">
      <div class="skill-name">${skill}</div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 0%" data-width="${skills[skill]}%"></div>
      </div>
    </div>
  `;
  });
  skillsContainer.innerHTML = skillsList.join("");

  // Animate skill bars after a short delay
  setTimeout(() => {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  }, 100);
};

// Initialize skills display
displaySkill();

// Projects data
const projects = [
  {
    name: "PingXD",
    description:
      "A cutting-edge website testing tool that empowers you to optimize performance and troubleshoot issues with your website, ensuring a seamless user experience.",
    thumbnail: "svg/undraw_profile_re_4a55.svg",
    link: "https://www.pingxd.com",
    techStack: ["NextJS", "TailwindCSS", "AWS lambda", "AWS S3", "AWS ECS"],
  },
  {
    name: "LinkMeow",
    description:
      "A Link in Bio and URL Shortener tool that allows you to generate unique and short URLs for your social media profiles, making it easy to share and connect with others.",
    thumbnail: "svg/undraw_election_day_w842.svg",
    link: "https://www.linkmeow.com",
    techStack: [
      "NextJS",
      "TailwindCSS",
      "AWS EC2",
      "AWS S3",
      "AWS SES",
      "Cloudfront",
      "Redis",
    ],
  },
  {
    name: "Nice Offers",
    description:
      "Discover a curated collection of limited-time free courses and apps on our online platform. These resources are available for a limited time only, after which they revert back to their regular paid prices. Take advantage of this opportunity to enhance your knowledge and skills at no cost!",
    thumbnail: "svg/undraw_trends_re_2bd0.svg",
    link: "https://niceoffers.arenabear.com",
    techStack: ["Python", "ECS", "RDS", "Cloudfront", "Next JS", "Flutter"],
  },
  {
    name: "Expense Tracker App",
    description:
      "Track your daily and monthly expenses effortlessly with our ad-free expense tracker app. Get detailed analytics and comparisons through interactive charts and graphs, all without the need for sign-up. Take control of your finances with our user-friendly app.",
    thumbnail: "svg/undraw_medical_research_qg4d.svg",
    link: "https://play.google.com/store/apps/details?id=com.arenabear.expense_tracker_app",
    techStack: ["Flutter", "Dart", "Sqflite", "Provider"],
  },
  {
    name: "Ecommerce Flutter App",
    description:
      "An ecommerce app built with Flutter that features a user-friendly interface, secure payment processing, and a responsive design for a seamless shopping experience.",
    thumbnail: "svg/undraw_weather_re_qsmd.svg",
    link: "https://github.com/Snehasis4321/ecommerce_app_flutter_firebase",
    techStack: ["Flutter", "Dart", "Firebase", "Cloudinary", "Provider"],
  },
  {
    name: "Realtime Chat App",
    description:
      "A realtime chat app built with Flutter that features a user-friendly interface, secure payment processing, and a responsive design for a seamless shopping experience.",
    thumbnail: "svg/undraw_web_shopping_re_owap.svg",
    link: "https://github.com/Snehasis4321/realtime_chatapp_appwrite",
    techStack: ["Flutter", "Dart", "Appwrite", "Websockets", "Provider"],
  },
];

const projectsContainer = document.querySelector(".all-projects");

// Display projects with improved accessibility
const displayProjects = () => {
  const projectsList = projects.map((project, index) => {
    return `
    <div class="items" 
    style="background-image: url(${project.thumbnail});" data-aos="fade-down" 
    role="button" tabindex="0" aria-label="View details for ${project.name}">

    <div class="name">
        <h1>${project.name}</h1>
    </div>

    <div class="know-more">
        <i class="fa-solid fa-magnifying-glass-plus fa-8x" aria-hidden="true"></i>
    </div>
    <div class="popup" style="display: none" role="dialog" aria-modal="true" aria-labelledby="project-title-${index}">
        <div class="popup-content">

            <img src="${project.thumbnail}" alt="${
      project.name
    } project screenshot">
            <div class="info">

                <h1 id="project-title-${index}">${project.name}</h1>
                <p>${project.description}</p>
                <h3>Tech Stack:</h3>
                <p>${project.techStack
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join(" ")}</p>
                <div class="buttons">
                    <a href="${
                      project.link
                    }" target="_blank" rel="noopener noreferrer" aria-label="Visit ${
      project.name
    } website">
                        <div class="visit-website">Visit Website</div>
                    </a>
                    <div class="close-popup" role="button" tabindex="0" aria-label="Close popup">Close</div>
                </div>
            </div>
        </div>
    </div>

</div>
`;
  });
  projectsContainer.innerHTML = projectsList.join("");

  // Add keyboard navigation for project items
  const projectItems = document.querySelectorAll(".items");
  projectItems.forEach((item, index) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const popup = item.querySelector(".popup");
        popup.style.display = "flex";
        popup.style.visibility = "visible";
        // Add active class for animation
        setTimeout(() => {
          popup.classList.add("active");
        }, 10);
        // Focus on close button for keyboard navigation
        setTimeout(() => {
          popup.querySelector(".close-popup").focus();
        }, 100);
        document.body.style.overflow = "hidden";
      }
    });
  });
};

// Enhanced popup functionality with keyboard support and animations
const initializePopups = () => {
  const popupClose = document.querySelectorAll(".close-popup");
  const knowMoreBtns = document.querySelectorAll(".know-more");
  const popup = document.querySelectorAll(".popup");

  for (let i = 0; i < knowMoreBtns.length; i++) {
    knowMoreBtns[i].addEventListener("click", () => {
      popup[i].style.display = "flex";
      popup[i].style.visibility = "visible";
      // Add active class for animation
      setTimeout(() => {
        popup[i].classList.add("active");
      }, 10);
      // Focus management for accessibility
      setTimeout(() => {
        popup[i].querySelector(".close-popup").focus();
      }, 100);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    });
  }

  const closePopup = (index) => {
    popup[index].classList.remove("active");
    setTimeout(() => {
      popup[index].style.display = "none";
      popup[index].style.visibility = "hidden";
      document.body.style.overflow = "auto";
    }, 300);
  };

  for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener("click", () => {
      closePopup(i);
    });

    // Keyboard support for close button
    popupClose[i].addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        closePopup(i);
      }
    });
  }

  // Close popup with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popup.forEach((p, index) => {
        if (p.style.display === "flex") {
          closePopup(index);
        }
      });
    }
  });
};

// Initialize projects display and popup functionality
displayProjects();
initializePopups();

// Enhanced skills toggle functionality
let isExpanded = false;
const moreskills = document.querySelector(".more-skills");
const originalSkills = {
  HTML: 90,
  CSS: 90,
  JavaScript: 80,
  Python: 95,
  "C++": 90,
  "Node JS": 80,
  SQL: 85,
  MongoDB: 85,
};

moreskills?.addEventListener("click", () => {
  if (isExpanded) {
    skills = { ...originalSkills };
    displaySkill();
    isExpanded = false;
    moreskills.innerHTML =
      'View More <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
  } else {
    skills = { ...originalSkills, ...extraSkills };
    displaySkill();
    isExpanded = true;
    moreskills.innerHTML =
      'View Less <i class="fa-solid fa-chevron-up" aria-hidden="true"></i>';
  }
});

// Certifications data
const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "December 2024",
    exam: "SAA-C03",
    icon: "fa-brands fa-aws",
    verifyLink:
      "https://www.credly.com/badges/9d0213bf-4937-4202-8baf-c9d45c8b6915",
    credentialLink:
      "https://www.credly.com/badges/9d0213bf-4937-4202-8baf-c9d45c8b6915",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft Azure",
    date: "July 2022",
    exam: "DP-900",
    icon: "fa-brands fa-microsoft",
    verifyLink:
      "https://www.credly.com/badges/af81f64e-ce37-4967-b11f-77ea2936055d",
    credentialLink:
      "https://www.credly.com/badges/af81f64e-ce37-4967-b11f-77ea2936055d",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft Azure Cloud",
    date: "July 2022",
    exam: "AZ-900",
    icon: "fa-brands fa-microsoft",
    verifyLink:
      "https://www.credly.com/badges/1172dd87-8ca3-4f6b-a287-2394cfc74507",
    credentialLink:
      "https://www.credly.com/badges/1172dd87-8ca3-4f6b-a287-2394cfc74507",
  },
];

const certificationsContainer = document.querySelector(
  ".certifications-container"
);

// Display certifications
const displayCertifications = () => {
  const certificationsList = certifications.map((cert) => {
    return `
      <div class="certification-card" data-aos="fade-up">
        <div class="cert-header">
          <div class="cert-icon">
            <i class="${cert.icon}"></i>
          </div>
          <div class="cert-info">
            <h3 class="cert-name">${cert.name}</h3>
            <div class="cert-issuer">
              <i class="fa-solid fa-building"></i>
              <span>${cert.issuer}</span>
            </div>
          </div>
        </div>
        <div class="cert-details">
          <div class="cert-date">
            <i class="fa-solid fa-calendar"></i>
            <span>Issued: ${cert.date}</span>
          </div>
          <div class="cert-id">
            <i class="fa-solid fa-fingerprint"></i>
            <span>Exam ID: ${cert.exam}</span>
          </div>
        </div>
        <div class="cert-actions">
          <a href="${cert.verifyLink}" target="_blank" rel="noopener noreferrer" class="cert-link">
            <i class="fa-solid fa-shield-halved"></i>
            <span>Verify</span>
          </a>
          <a href="${cert.credentialLink}" target="_blank" rel="noopener noreferrer" class="cert-link secondary">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>View Credential</span>
          </a>
        </div>
      </div>
    `;
  });
  certificationsContainer.innerHTML = certificationsList.join("");
};

// Initialize certifications display
displayCertifications();

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Toast Notification System
const toastContainer = document.getElementById("toast-container");

const showToast = (message, type = "success") => {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icon =
    type === "success"
      ? '<i class="fa-solid fa-circle-check toast-icon"></i>'
      : '<i class="fa-solid fa-circle-exclamation toast-icon"></i>';

  toast.innerHTML = `
    ${icon}
    <div class="toast-message">${message}</div>
  `;

  toastContainer.appendChild(toast);

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
};

// Form validation and submission handling
const contactForm = document.querySelector(".contact-form");
const submitBtn = document.querySelector(".submit-btn");
const btnText = document.querySelector(".btn-text");
const btnLoading = document.querySelector(".btn-loading");

// Check for success parameter in URL
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success") === "true") {
    showToast(
      "Message sent successfully! Thank you for reaching out.",
      "success"
    );
    // Clean URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});

contactForm?.addEventListener("submit", function (e) {
  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = "none";
  btnLoading.style.display = "inline";

  // Form will submit normally to FormSubmit
  // Loading state will be visible until page redirect
});

// Input validation styling
const inputs = document.querySelectorAll("input, textarea");
const successColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-success")
  .trim();
const errorColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-error")
  .trim();
const borderColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--border-color")
  .trim();

inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.validity.valid) {
      this.style.borderColor = successColor;
    } else {
      this.style.borderColor = errorColor;
    }
  });

  input.addEventListener("input", function () {
    this.style.borderColor = borderColor;
  });
});

// Lazy loading for images
const images = document.querySelectorAll('img[loading="lazy"]');
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}
