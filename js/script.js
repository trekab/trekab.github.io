import projects from "./projects.js";

// Constants for string literals
const TECH_BADGE_CLASS = "badge badge-dark m-1";
const CARD_CLASSES = "col-md-6 col-lg-4";
const CARD_BODY_CLASS = "card-body";
const CARD_TEXT_CLASS = "card-text text-center mb-5 project-title";
const SEE_PROJECT_BTN_CLASS = "btn btn-sm btn-outline-dark font-weight-bold d-flex align-items-center see-project-btn";

const projectCards = document.getElementById("project-cards");

// Refactored buildCard function
const buildCard = (project) => {
  const card = document.createElement("div");
  card.classList = CARD_CLASSES;

  const bootstrapCard = document.createElement("div");
  bootstrapCard.classList = "card mb-4 shadow-lg bg-gradient";

  const projectImage = document.createElement("img");
  projectImage.classList = "bd-placeholder-img card-img-top w-100 h-100";
  projectImage.src = project.screenShot;
  projectImage.alt = project.title;

  const cardBody = document.createElement("div");
  cardBody.classList = CARD_BODY_CLASS;

  const title = document.createElement("h4");
  title.classList = CARD_TEXT_CLASS;
  title.textContent = project.title;

  const cardButton = document.createElement("div");
  cardButton.classList = "d-flex justify-content-end";

  const btnContainer = document.createElement("button");
  btnContainer.type = "button";
  btnContainer.dataset.toggle = "modal";
  btnContainer.dataset.target = "#projectModal";
  btnContainer.classList = SEE_PROJECT_BTN_CLASS;
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
  projectCards.appendChild(buildCard(project));
});

const getRandomQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random?tags=technology,famous-quotes");
    if (!response.ok) {
      throw new Error("Failed to fetch the random quote");
    }
    const data = await response.json();
    const { content, author } = data[0];
    return { content, author };
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const updateQuoteInDOM = (quote) => {
  const randomQuoteSection = document.getElementById("random-quote");
  if (randomQuoteSection) {
    randomQuoteSection.innerHTML = `<blockquote>${quote.content}</blockquote> - ${quote.author}`;
  }
};

// Fetch and update the quote when the page loads
(async () => {
  try {
    const quote = await getRandomQuote();
    updateQuoteInDOM(quote);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

const fetchQuotesEveryMinute = () => {
  setInterval(async () => {
    const quote = await getRandomQuote();
    updateQuoteInDOM(quote);
  }, 60000);
};

// Fetch a new quote every minute
fetchQuotesEveryMinute();

