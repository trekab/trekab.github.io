const projects = [
  {
    title: "Sales Tracker API",
    summary:
      "This is a sales tracker API where users can track specific attributes of their products e.g. orders, sales, inventory.",
    screenShot: "img/sales-tracker-api-docs.png",
    tech: ["Ruby on Rails", "PostgreSQL"],
    liveLink: "https://trekab.github.io/my-tracker-api-docs/",
    githubRepo: "https://github.com/trekab/my-tracker-api",
  },
  {
    title: "To-Do List",
    summary:
      "This is a To-Do list app where users can add projects and their corresponding task lists they like to work on.",
    screenShot: "img/todo-list.png",
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
    liveLink: "https://trekab-js-todo-app.netlify.app/",
    githubRepo: "https://github.com/trekab/js-todo-app",
  },
  {
    title: "Calculator",
    summary:
      "This is a simple calculator for Math-magicians Inc (a fictional company) using create-react-app.",
    screenShot: "img/react-calculator.png",
    tech: ["JavaScript", "React.js", "CSS3"],
    liveLink: "https://trekabs-react-calculator.netlify.app/",
    githubRepo: "https://github.com/trekab/react-calculator",
  },
  {
    title: "Appointment Manager",
    summary:
      "This is a simple appointment manager for Pets Medicare(a fictional company).",
    screenShot: "img/pets-medicare.png",
    tech: [
      "JavaScript",
      "React.js",
      "CSS3",
      "React Icons",
      "React Moment",
      "Bootstrap",
    ],
    liveLink: "https://appointments-manager.netlify.app/",
    githubRepo: "https://github.com/trekab/appointments-manager",
  },
  {
    title: "Dashboard Template",
    summary:
      "This is a fully responsive admin dashboard template built with HTML5 & CSS3 and I relied on Line Awesome for all the icons used.",
    screenShot: "img/dashboard-template.png",
    tech: ["HTML5", "CSS3"],
    liveLink: "https://trekab.github.io/dashboard-template/",
    githubRepo: "https://github.com/trekab/dashboard-template",
  },
  {
    title: "uHost",
    summary: "This is a website for a fictional hosting company.",
    screenShot: "img/uhost.png",
    tech: ["Ruby on Rails", "PostgreSQL"],
    liveLink: "https://trekab.github.io/uHost/",
    githubRepo: "https://github.com/trekab/uHost",
  },
];

const projectCards = document.getElementById("project-cards");

const buildCard = (project) => {
  const card = document.createElement("div");
  card.classList = "col-md-6 col-lg-4";

  const bootstrapCard = document.createElement("div");
  bootstrapCard.classList = "card mb-4 shadow-lg bg-gradient";

  const projectImage = document.createElement("img");
  projectImage.classList = "bd-placeholder-img card-img-top w-100 h-100";
  projectImage.setAttribute("src", project.screenShot);
  projectImage.setAttribute("alt", project.title);

  const cardBody = document.createElement("div");
  cardBody.classList = "card-body";

  const summary = document.createElement("p");
  summary.classList = "card-text font-weight-bold";
  summary.textContent = project.summary;

  project.tech.forEach((element) => {
    let techBadge = document.createElement("span");
    techBadge.classList = "badge badge-dark m-1";
    techBadge.textContent = element;
    summary.appendChild(techBadge);
  });

  const cardButton = document.createElement("div");
  cardButton.classList = "d-flex justify-content-end";
  const btnContainer = document.createElement("div");
  btnContainer.classList =
    "btn btn-sm btn-outline-dark font-weight-bold d-flex  align-items-center see-project-btn";
  btnContainer.innerHTML = `<span>See this project</span><i class="fa fa-arrow-right" aria-hidden="true"></i>`;
  cardButton.appendChild(btnContainer);

  cardBody.append(summary, cardButton)
  bootstrapCard.append(projectImage, cardBody)
  card.append(bootstrapCard)

  return card;
};

projects.forEach((project) => {
    projectCards.append(buildCard(project))
})
