const projects = [
  {
    title: "Sales Tracker API",
    summary:
      "This is a sales tracker API where users can track specific attributes of their products e.g. orders, sales, inventory. It was built following the T.D.D approach using the Ruby on Rails framework and the PostgreSQL database.",
    screenShot: "img/sales-tracker-api-docs.png",
    tech: ["Ruby on Rails", "PostgreSQL"],
    liveLink: "https://trekab.github.io/my-tracker-api-docs/",
    githubRepo: "https://github.com/trekab/my-tracker-api",
  },
  {
    title: "Todo",
    summary:
      "This is a solution to the Todo app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    screenShot: "img/todo-list.jpg",
    tech: ["JavaScript", "HTML5", "CSS3", "React.js"],
    liveLink: "https://todo-app-trekab.netlify.app/",
    githubRepo: "https://github.com/trekab/todo-app",
  },
  {
    title: "Calculator",
    summary:
      "This is a solution to the Calculator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    screenShot: "img/calculator-app.jpg",
    tech: ["JavaScript", "React.js", "CSS3"],
    liveLink: "https://calculator-app-trekab.netlify.app/",
    githubRepo: "https://github.com/trekab/calculator-app",
  },
  {
    title: "Appointment Manager",
    summary:
      "This is a simple appointment manager for Pets Medicare(a fictional company). The main feature on this project is the filter feature where input data can be filtered using various parameters.",
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
    title: "Suite",
    summary:
      "This is a solution to the Suite landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects. Check out the README.md file in the GitHub Repo to learn more about the challenge.",
    screenShot: "img/suite.jpg",
    tech: ["HTML5", "CSS3"],
    liveLink: "https://suite-landing-page-trekab.netlify.app/",
    githubRepo: "https://github.com/trekab/suite-landing-page",
  },
  {
    title: "Skilled e-learning",
    summary:
      "This is a solution to the Skilled e-learning landing page challenge on Frontend Mentor. Check out the README.md file in the GitHub Repo to learn more about the challenge.",
    screenShot: "img/skilled-elearning.jpg",
    tech: ["HTML5", "CSS3"],
    liveLink: "https://skilled-elearning-trekab.netlify.app/",
    githubRepo: "https://github.com/trekab/skilled-e-learning-landing-page",
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

  const title = document.createElement("h4");
  title.classList = "card-text text-center mb-5 project-title";
  title.textContent = project.title;

  const cardButton = document.createElement("div");
  cardButton.classList = "d-flex justify-content-end";
  const btnContainer = document.createElement("button");
  btnContainer.setAttribute("type", "button");
  btnContainer.setAttribute("data-toggle", "modal");
  btnContainer.setAttribute("data-target", "#projectModal");
  btnContainer.classList =
    "btn btn-sm btn-outline-dark font-weight-bold d-flex  align-items-center see-project-btn";
  btnContainer.innerHTML = `<span>Details</span><i class='fas fa-external-link-alt'></i>`;
  btnContainer.addEventListener("click", () => {
    const modalTitle = document.getElementById("modalLabel");
    const modalBody = document.getElementsByClassName("modal-body")[0];
    const modalFooter = document.getElementsByClassName("modal-footer")[0];
    modalBody.innerHTML = "";
    modalFooter.innerHTML = "";
    const projectImg = document.createElement("img");
    projectImg.classList = "col-lg-6";
    projectImg.setAttribute("src", project.screenShot);
    projectImg.setAttribute("alt", project.title);
    const summary = document.createElement("p");
    summary.classList = "col-lg-6";
    summary.textContent = project.summary;
    modalTitle.innerText = project.title;

    project.tech.forEach((element) => {
      let techBadge = document.createElement("span");
      techBadge.classList = "badge badge-dark m-1";
      techBadge.textContent = element;
      summary.appendChild(techBadge);
    });

    const detailsBtnsContainer = document.createElement("div");
    detailsBtnsContainer.classList = "d-flex justify-content-end";
    const btnGroup = document.createElement("div");
    btnGroup.classList = "btn-group";
    btnGroup.innerHTML = `<a class="btn btn-sm btn-outline-dark font-weight-bold d-flex  align-items-center" href=${project.githubRepo} target="_blank" rel="noopener">
    <i class="far fa-file-code"></i>
    <span>GitHub</span>
  </a>
  <a class="btn btn-sm btn-outline-dark font-weight-bold d-flex  align-items-center" href=${project.liveLink} target="_blank" rel="noopener">
    <i class="far fa-lightbulb"></i>
    <span>Live Link</span>
  </a>`;
    detailsBtnsContainer.append(btnGroup);
    modalBody.append(projectImg, summary);
    modalFooter.append(detailsBtnsContainer);
  });
  cardButton.appendChild(btnContainer);

  cardBody.append(title, cardButton);
  bootstrapCard.append(projectImage, cardBody);
  card.append(bootstrapCard);

  return card;
};

projects.forEach((project) => {
  projectCards.append(buildCard(project));
});
