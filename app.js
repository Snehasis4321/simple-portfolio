// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const root = document.documentElement;

// Load theme from localStorage or system preference
const loadTheme = () => {
  // Check if user has previously set a preference
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    // Use saved preference
    root.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? "dark" : "light";
    
    // Set theme based on system preference
    root.setAttribute("data-theme", systemTheme);
    updateThemeIcon(systemTheme);
    
    // Save the system preference as the initial theme
    localStorage.setItem("theme", systemTheme);
  }
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

// Listen for system theme changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', (e) => {
  // Only update if user hasn't manually set a preference
  if (!localStorage.getItem("theme")) {
    const newTheme = e.matches ? "dark" : "light";
    root.setAttribute("data-theme", newTheme);
    updateThemeIcon(newTheme);
  }
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

// Create a single global modal for project details
const createProjectModal = () => {
  const modal = document.createElement("div");
  modal.className = "popup";
  modal.id = "project-modal";
  modal.style.display = "none";
  modal.style.visibility = "hidden";
  modal.innerHTML = `
    <div class="popup-content">
      <img id="project-modal-image" alt="Project screenshot">
      <div class="info">
        <h1 id="project-modal-title"></h1>
        <p id="project-modal-description"></p>
        <h3>Tech Stack:</h3>
        <p id="project-modal-tech"></p>
        <div class="buttons">
          <a id="project-modal-link" target="_blank" rel="noopener noreferrer" aria-label="Visit project website">
            <div class="visit-website">Visit Website</div>
          </a>
          <div class="close-popup" role="button" tabindex="0" aria-label="Close popup">Close</div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modal);
  return modal;
};

const projectModal = createProjectModal();

// Setup scroll indicators and overflow behavior for modal content
const setupModalOverflowHandling = () => {
  const content = projectModal.querySelector(".popup-content");
  const tech = document.getElementById("project-modal-tech");
  if (!content) return;

  const updateIndicators = () => {
    const canScroll = content.scrollHeight > content.clientHeight ||
                      content.scrollWidth > content.clientWidth;
    content.classList.toggle("scrollable", canScroll);
    const atTop = content.scrollTop <= 1;
    const atBottom = (content.scrollTop + content.clientHeight) >= (content.scrollHeight - 1);
    content.classList.toggle("at-top", atTop);
    content.classList.toggle("at-bottom", atBottom);
  };

  if (!content.dataset.scrollHandlerSetup) {
    content.addEventListener("scroll", updateIndicators);
    window.addEventListener("resize", updateIndicators);
    content.dataset.scrollHandlerSetup = "true";
  }
  updateIndicators();

  const updateTechIndicators = () => {
    if (!tech) return;
    const canScrollH = tech.scrollWidth > tech.clientWidth;
    tech.classList.toggle("scrollable", canScrollH);
    const atLeft = tech.scrollLeft <= 1;
    const atRight = (tech.scrollLeft + tech.clientWidth) >= (tech.scrollWidth - 1);
    tech.classList.toggle("at-left", atLeft);
    tech.classList.toggle("at-right", atRight);
  };

  if (tech && !tech.dataset.scrollHandlerSetup) {
    tech.addEventListener("scroll", updateTechIndicators);
    tech.dataset.scrollHandlerSetup = "true";
  }
  updateTechIndicators();
};

const openProjectModal = (project) => {
  const img = document.getElementById("project-modal-image");
  const title = document.getElementById("project-modal-title");
  const desc = document.getElementById("project-modal-description");
  const tech = document.getElementById("project-modal-tech");
  const link = document.getElementById("project-modal-link");

  img.src = project.thumbnail;
  img.alt = `${project.name} project screenshot`;
  title.textContent = project.name;
  desc.textContent = project.description;
  tech.innerHTML = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join(" ");
  link.href = project.link;
  link.setAttribute("aria-label", `Visit ${project.name} website`);

  projectModal.style.display = "flex";
  projectModal.style.visibility = "visible";
  setTimeout(() => projectModal.classList.add("active"), 10);
  // Apply overflow handling after content is laid out
  setTimeout(() => setupModalOverflowHandling(), 30);
  setTimeout(() => projectModal.querySelector(".close-popup").focus(), 100);
  document.body.style.overflow = "hidden";
};

const closeProjectModal = () => {
  projectModal.classList.remove("active");
  setTimeout(() => {
    projectModal.style.display = "none";
    projectModal.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  }, 300);
};

projectModal.querySelector(".close-popup").addEventListener("click", closeProjectModal);
projectModal.querySelector(".close-popup").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    closeProjectModal();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.style.display === "flex") {
    closeProjectModal();
  }
});

// Display projects with improved accessibility (cards only; modal is global)
const displayProjects = () => {
  const projectsList = projects.map((project, index) => {
    return `
    <div class="items" 
    style="background-image: url(${project.thumbnail});" data-aos="fade-down" 
    role="button" tabindex="0" aria-label="View details for ${project.name}">

    <div class="name">
        <h1>${project.name}</h1>
    </div>
</div>
`;
  });
  projectsContainer.innerHTML = projectsList.join("");

  // Keyboard navigation to open global modal
  const projectItems = document.querySelectorAll(".items");
  projectItems.forEach((item, index) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(projects[index]);
      }
    });
  });
};

// Hook up click handlers to open global modal
const initializePopups = () => {
  const projectItems = document.querySelectorAll(".items");
  projectItems.forEach((item, i) => {
    item.addEventListener("click", () => openProjectModal(projects[i]));
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

// Particle System
const createParticles = () => {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  document.body.appendChild(particlesContainer);

  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.6 + 0.3;
    
    particlesContainer.appendChild(particle);
  }
};

// Initialize particle system
createParticles();

// Ripple effect for buttons
const createRipple = (event) => {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.submit-btn, .cert-link, .close-popup, .more-skills');
buttons.forEach(button => {
  button.addEventListener('click', createRipple);
});

// Scroll Animation Observer
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all scroll-animate elements
document.querySelectorAll('.scroll-animate').forEach(el => {
  scrollObserver.observe(el);
});

// Parallax effect on scroll
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallaxBg = document.querySelector('.parallax-bg');
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');
  
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
  
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
  
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
  
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener('scroll', requestTick);

// Enhanced scroll progress with easing
function updateScrollProgress() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  // Add easing to the progress
  const easedProgress = easeOutCubic(scrollPercent / 100) * 100;
  
  if (scrollProgress) {
    scrollProgress.style.width = easedProgress + '%';
  }
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

window.addEventListener('scroll', updateScrollProgress);
function animateCircularProgress() {
  const circularProgressBars = document.querySelectorAll('.circular-progress');
  
  circularProgressBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    const degree = (percentage / 100) * 360;
    
    // Animate the conic gradient
    let currentDegree = 0;
    const increment = degree / 60; // 60 frames for 1 second animation
    
    const animation = setInterval(() => {
      currentDegree += increment;
      if (currentDegree >= degree) {
        currentDegree = degree;
        clearInterval(animation);
      }
      
      bar.style.background = `conic-gradient(var(--color-primary) ${currentDegree}deg, var(--bg-section) ${currentDegree}deg)`;
    }, 16); // ~60fps
  });
}

// Intersection Observer for circular progress bars
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCircularProgress();
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observe the skills section
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.skill-section');
  if (skillsSection) {
    progressObserver.observe(skillsSection);
  }
});
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.testimonial-card').forEach(card => {
  observer.observe(card);
});

// Add smooth scroll behavior for navigation links
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Observe elements for animation
document.querySelectorAll('.skill, .certification-card, .items').forEach(el => {
  observer.observe(el);
});

// Add animation classes
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    animation: slideInUp 0.6s ease forwards;
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
