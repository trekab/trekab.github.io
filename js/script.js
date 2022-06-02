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
    title: "To-Do List",
    summary:
      "This is a To-Do list app where users can add projects and their corresponding task lists they like to work on. This project was built using vanilla JavaScript and a heavy use of the DOM manipulation methods.",
    screenShot: "img/todo-list.png",
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
    liveLink: "https://trekab-js-todo-app.netlify.app/",
    githubRepo: "https://github.com/trekab/js-todo-app",
  },
  {
    title: "Calculator",
    summary:
      "This is a simple calculator for Math-magicians Inc (a fictional company) using create-react-app. ",
    screenShot: "img/react-calculator.png",
    tech: ["JavaScript", "React.js", "CSS3"],
    liveLink: "https://trekabs-react-calculator.netlify.app/",
    githubRepo: "https://github.com/trekab/react-calculator",
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
    title: "Algorithm Sorter",
    summary: "This is simple sorting project which uses some common sorting algorthms to sort a given set of dummy data. i.e. bubble sort, insertion sort, merge sort & quartile sort",
    screenShot: "img/algorithm-sorter.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://trekab.github.io/sortable-table-and-arrays/",
    githubRepo: "https://github.com/trekab/sortable-table-and-arrays",
  },
  {
    title: "Skills e-learning",
    summary: "This is a solution to the Skilled e-learning landing page challenge on Frontend Mentor.",
    screenShot: "img/skills-elearning.jpg",
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
    const projectImg = document.createElement('img');
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
