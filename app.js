const mobile_nav = document.querySelector(".mobile-navbar-btn");
const navLinks = document.getElementsByClassName("navbar-link");

mobile_nav.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("active");
});

// add click event on navLinks
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("active");
  });
}

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
  Vue: 80,
  AWS: 80,
  "AI / ML": 80,
};
const skillsContainer = document.querySelector(".skills-container");

displaySkill = () => {
  const skillsList = Object.keys(skills).map((skill) => {
    return `
    <div class="skill" data-aos="fade-up">
      <div class="skill-name">${skill}</div>
      <div class="skill-bar">
        <div class="skill-progress" style="width:calc(${skills[skill]}% )"></div>
      </div>
    </div>
  `;
  });
  skillsContainer.innerHTML = skillsList.join("");
};
displaySkill();

const projects = [
  {
    name: "Portfolio Website",
    description:
      "This is my portfolio website. I have used plain HTML, CSS, JavaScript,  to create this website.",
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

const itemContainer = document.querySelector(".items");
const projectsContainer = document.querySelector(".all-projects");

displayProjects = () => {
  const projectsList = projects.map((project) => {
    return `
    <div class="items" 
    style="background-image: url(${project.thumbnail});" data-aos="fade-down"  >

    <div class="name">
        <h1>${project.name}</h1>
    </div>

    <div class="know-more">
        <i class="fa-solid fa-magnifying-glass-plus fa-8x"></i>
    </div>
    <div class="popup" style="display: none">
        <div class="popup-content">

            <img src="${project.thumbnail}" alt="">
            <div class="info">

                <h1>${project.name}</h1>
                <p>${project.description}</p>
                <h3>Tech Stack :</h3>
                <p>${project.techStack.map((items) => {
                  return ` ${items}`;
                })}</p>
                <div class="buttons">
                    <a href="${project.link}" target="_blank">
                        <div class="visit-website">Visit</div>
                    </a>
                    <div class="close-popup">Close</div>
                </div>
            </div>
        </div>
    </div>

</div>
`;
  });
  projectsContainer.innerHTML = projectsList.join("");

  //   const projectsList = projects.map((project) => {
  //     return `
  //     <div class="items" style="background: url(${project.thumbnail})";>

  //     <div class="name">
  //         <h1>${project.name}</h1>
  //     </div>

  //     <div class="know-more">
  //         <i class="fa-solid fa-magnifying-glass-plus fa-8x"></i>
  //     </div>
  //     <div class="popup" style="display: none">
  //         <div class="popup-content">

  //             <img src="${project.thumbnail}" alt="${project.name}">
  //             <div class="info">

  //                 <h1>${project.name}</h1>
  //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sunt. Libero possimus
  //                     quod
  //                     aspernatur, animi sequi est, sint laboriosam quo, eveniet autem perferendis
  //                     accusantium
  //                     ducimus consequatur ipsum odit quibusdam labore?</p>
  //                 <h3>Tech Stack :</h3>
  //                 <p>Python Flask JavaScript Machine Learning </p>
  //                 <div class="buttons">
  //                     <a href="/" target="_blank">
  //                         <div class="visit-website">Visit Site</div>
  //                     </a>
  //                     <div class="close-popup">Close</div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>

  // </div>`;
  //   });
  projectsContainer.innerHTML = projectsList.join("");
};

displayProjects();

let isExpanded = false;
const moreskills = document.querySelector(".more-skills");
// const addmoreskills = () => {
moreskills.addEventListener("click", () => {
  // alert("Coming Soon");
  skills = { ...skills, ...extraSkills };
  if (isExpanded) {
    // Hide additional items
    skills = {
      HTML: 90,
      CSS: 90,
      JavaScript: 80,
      Python: 95,
      "C++": 90,
      "Node JS": 80,
      SQL: 85,
      MongoDB: 85,
    };
    displaySkill();
    isExpanded = false;
    moreskills.innerText = "View More";
  } else {
    // Show additional items
    console.log(skills);
    displaySkill();
    isExpanded = true;
    moreskills.innerText = "View Less";
  }
});
// };

const popupClose = document.querySelectorAll(".close-popup");
const knowMoreBtns = document.querySelectorAll(".know-more");
const popup = document.querySelectorAll(".popup");

for (let i = 0; i < knowMoreBtns.length; i++) {
  knowMoreBtns[i].addEventListener("click", () => {
    console.log(`clicked ${i}`);
    // document.body.classList.add("greyed");
    popup[i].style.display = "flex";
    popup[i].style.visibility = "visible";
  });
}
// document.querySelector(".know-more").addEventListener("click", () => {
//   document.body.classList.add("greyed");
//   popup.style.display = "flex";
// });
// }
for (let i = 0; i < popupClose.length; i++) {
  popupClose[i].addEventListener("click", () => {
    popup[i].style.display = "none";
    // document.body.classList.remove("greyed");
  });
}

// popupClose.addEventListener("click", () => {
//   popup.style.display = "none";
//   document.body.style.backgroundColor = "while";
//   document.body.classList.remove("greyed");
// });
