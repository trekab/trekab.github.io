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
    summary: `<p>This is a classic todo app with a few twists!</p>
      <p>Users are able to:</p>
      <ul>
        <li>Add new todos to the list</li>
        <li>Mark todos as complete</li>
        <li>Delete todos from the list</li>
        <li>Filter by all/active/complete todos</li>
        <li>Clear all completed todos</li>
        <li>Toggle light and dark mode</li>
        <li>Drag and drop to reorder items on the list</li>
      </ul>`,
    screenShot: "img/todo-list.jpg",
    tech: ["JavaScript", "HTML5", "CSS3", "React.js"],
    liveLink: "https://todo-app-trekab.netlify.app/",
    githubRepo: "https://github.com/trekab/todo-app",
  },
  {
    title: "Calculator",
    summary: `<p>This is a simple calculator app the performs basic calculations. It was a great test of my CSS and JS skills.</p>
      <p>Users are able to:</p>
      <ul>
        <li>Perform mathematical operations like addition, subtraction, multiplication, and division</li>
        <li>Adjust the color theme based on their preference</li>
      </ul>
      `,
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
    summary: `<p>This is a small-ish HTML and CSS only landing page that includes some interesting layout decisions. It was a perfect in terms of testing my layout and responsive skills!</p>
      <p>Users are able to:</p>
      <ul>
      <li>View the optimal layout depending on their device's screen size</li>
      <li>See hover states for interactive elements</li>
      </ul>
      `,
    screenShot: "img/suite.jpg",
    tech: ["HTML5", "CSS3"],
    liveLink: "https://suite-landing-page-trekab.netlify.app/",
    githubRepo: "https://github.com/trekab/suite-landing-page",
  },
  {
    title: "Skilled e-learning",
    summary: `<p>This responsive page was a perfect of understanding of the fundamentals of HTML & CSS.</p>
      <p>Users are able to:</p>
      <ul>
      <li>View the optimal layout depending on their device's screen size</li>
      <li>See hover states for interactive elements</li>
      </ul>
      `,
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
    summary.innerHTML = project.summary;
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
