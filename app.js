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
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  }, 100);
};

// Initialize skills display
displaySkill();

// Projects data
const projects = [
  {
    name: "Portfolio Website",
    description:
      "This is my portfolio website. I have used plain HTML, CSS, JavaScript, to create this website.",
    thumbnail: "svg/undraw_profile_re_4a55.svg",
    link: "#",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Online Voting App",
    description:
      "This is a simple online voting app. I have used HTML, CSS, JavaScript for the frontend and MongoDB for the backend to create this website.",
    thumbnail: "svg/undraw_election_day_w842.svg",
    link: "https://github.com/Snehasis4321/Voting-App-Mongo",
    techStack: ["HTML", "CSS", "JavaScript", "MongoDB", "Node JS"],
  },
  {
    name: "Toxic Comment Classifier",
    description:
      "A Toxic comment classifier is a machine learning model that can classify a comment as toxic or non-toxic. I have used Python, Flask, Sklearn, NLTK, and Bulma to create this website.",
    thumbnail: "svg/undraw_trends_re_2bd0.svg",
    link: "https://github.com/Snehasis4321/Toxic-Comment-Web",
    techStack: [
      "Python",
      "Flask",
      "Sklearn",
      "NLTK",
      "Machine Learning",
      "Bulma",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Covid-19 Tracker",
    description:
      "A Covid-19 Tracker is a website that can track the number of covid-19 cases in a country. I have used Flutter & Dart with Firebase and API to create this android app.",
    thumbnail: "svg/undraw_medical_research_qg4d.svg",
    link: "https://github.com/Snehasis4321/covid19_helper_web",
    techStack: ["Flutter", "Dart", "API", "Firebase"],
  },
  {
    name: "Weather App",
    description:
      "This is a simple weather app website. I have used HTML, CSS, JavaScript, and API to create this website.",
    thumbnail: "svg/undraw_weather_re_qsmd.svg",
    link: "https://github.com/Coolmangamer786/SimpleWeatherApp",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    name: "Black-Shop Site",
    description:
      "This is a simple e-commerce website. I have used HTML, CSS, JavaScript, and Firebase to create this website.",
    thumbnail: "svg/undraw_web_shopping_re_owap.svg",
    link: "https://github.com/Snehasis4321/Black-Shop",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
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

            <img src="${project.thumbnail}" alt="${project.name} project screenshot">
            <div class="info">

                <h1 id="project-title-${index}">${project.name}</h1>
                <p>${project.description}</p>
                <h3>Tech Stack:</h3>
                <p>${project.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join(' ')}</p>
                <div class="buttons">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${project.name} website">
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
  const projectItems = document.querySelectorAll('.items');
  projectItems.forEach((item, index) => {
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const popup = item.querySelector('.popup');
        popup.style.display = 'flex';
        popup.style.visibility = 'visible';
        // Focus on close button for keyboard navigation
        setTimeout(() => {
          popup.querySelector('.close-popup').focus();
        }, 100);
      }
    });
  });
};

// Enhanced popup functionality with keyboard support
const initializePopups = () => {
  const popupClose = document.querySelectorAll(".close-popup");
  const knowMoreBtns = document.querySelectorAll(".know-more");
  const popup = document.querySelectorAll(".popup");
  
  for (let i = 0; i < knowMoreBtns.length; i++) {
    knowMoreBtns[i].addEventListener("click", () => {
      popup[i].style.display = "flex";
      popup[i].style.visibility = "visible";
      // Focus management for accessibility
      setTimeout(() => {
        popup[i].querySelector('.close-popup').focus();
      }, 100);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    });
  }
  
  for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener("click", () => {
      popup[i].style.display = "none";
      popup[i].style.visibility = "hidden";
      // Restore body scroll
      document.body.style.overflow = 'auto';
    });
    
    // Keyboard support for close button
    popupClose[i].addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        popup[i].style.display = "none";
        popup[i].style.visibility = "hidden";
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  // Close popup with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      popup.forEach(p => {
        if (p.style.display === 'flex') {
          p.style.display = 'none';
          p.style.visibility = 'hidden';
          document.body.style.overflow = 'auto';
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
    moreskills.innerHTML = 'View More <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
  } else {
    skills = { ...originalSkills, ...extraSkills };
    displaySkill();
    isExpanded = true;
    moreskills.innerHTML = 'View Less <i class="fa-solid fa-chevron-up" aria-hidden="true"></i>';
  }
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form validation and submission handling
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.submit-btn');
const btnText = document.querySelector('.btn-text');
const btnLoading = document.querySelector('.btn-loading');

contactForm?.addEventListener('submit', function(e) {
  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
  
  // Form will submit normally to FormSubmit
  // Loading state will be visible until page redirect
});

// Input validation styling
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
  input.addEventListener('blur', function() {
    if (this.validity.valid) {
      this.style.borderColor = '#28a745';
    } else {
      this.style.borderColor = '#dc3545';
    }
  });
  
  input.addEventListener('input', function() {
    this.style.borderColor = '#e9ecef';
  });
});

// Lazy loading for images
const images = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}