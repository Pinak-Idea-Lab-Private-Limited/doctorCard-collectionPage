// rating functionality
// generate stars according to the rating
function renderStarRating(rating, ratingCard) {
  console.log(ratingCard)
  const starContainer = ratingCard.querySelector('.rating .stars');
  starContainer.innerHTML = "";

  const colorPercentage = Math.round((rating % 1) * 100).toString();
  const grayPercentage = (100 - Number(colorPercentage)).toString();

  let color = "";
  if (rating >= 4) color = "#14532D";
  else if (rating >= 3) color = "#166534";
  else if (rating >= 2) color = "#15803D";
  else if (rating >= 1) color = "#16A34A";
  else color = "#78716C";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");

    if (rating >= i) {
      // star with fill color
      // star.classList.add("fa-star", "star-box");
      star.classList.add("fa-star", "star-box", "w-6", "h-6", "flex", "items-center", "content-center");
      star.style.background = `${color}`;
    } else if (i === Math.ceil(rating)) {
      // half fill color star
      // star.classList.add("fa-star", "star-box");
      star.classList.add("fa-star", "star-box", "w-6", "h-6", "flex", "items-center", "content-center");
      star.style.backgroundImage = `linear-gradient(to right, ${color} 0% ${colorPercentage}%, #78716C ${grayPercentage}% 100%)`;
    } else {
      // star without fill color
      star.classList.add("fa-star", "star-box", "w-6", "h-6", "flex", "items-center", "content-center");
      // star.classList.add("fa-star", "star-box");
      star.style.background = `#78716C`;
    }

    starContainer.appendChild(star);
  }
}

const ratingCards = document.querySelectorAll('[data-type="rating-star"]');
document.addEventListener("DOMContentLoaded", getRatings);
function getRatings() {
  ratingCards.forEach(card => {
    // Access the card or modify its properties
    const numberRating = card.querySelector('.number-rating').textContent;
    // Call the star creating function
    renderStarRating(numberRating, card);
  });
}

// ABOUT content - add three dots when overflowing
const aboutTabContentAll = document.querySelectorAll(".aboutTab-content");
aboutTabContentAll.forEach((each, index) => {
  let rmBtn = document.querySelector("#aboutTab-rmBtn-" + index); //rmBtn: read more btn

  if (each.scrollHeight > each.clientHeight) {
    let computedStyle = window.getComputedStyle(each);
    let lineHeight = computedStyle.lineHeight.replace("px", "");
    let lines = Math.floor(each.clientHeight / lineHeight);
    each.style.height = lines*lineHeight + "px";
    rmBtn.classList.remove("hidden");
  }
});

const showAndHideModal = (state, index) => {
  let dcModal = document.querySelector("#dc-modal");
  let modalTitle = document.querySelector("#modalTitle");
  let modalContent = document.querySelector("#modalContent");

  if (state === "show") {
    let rmBtn = document.querySelector("#aboutTab-rmBtn-" + index); //rmBtn: read more btn
    let shadowDiv = rmBtn.parentElement;
    let aboutDivContent = shadowDiv.parentElement;
    let h3Content = aboutDivContent.previousElementSibling;

    dcModal.classList.remove("hidden");

    modalTitle.innerHTML = h3Content.innerHTML;
    modalContent.innerHTML = (aboutDivContent.textContent).replace("Read More","");
  } else {
    dcModal.classList.add("hidden");
  }
};

// close the about modal on click of ESC button
let dcModal = document.querySelector("#dc-modal");
document.addEventListener("keydown", (e) => {
  if (!dcModal.classList.contains("hidden")) {
    if (e.key === "Escape") {
      showAndHideModal("hide");
    }
  }
});

// rating modal show and hide
const ratingModalToggle = (state) => {
  let rModal = document.querySelector("#ratingInfo-modal");


  if (state === "show") {
    rModal.classList.remove("hidden");

  } else {
    rModal.classList.add("hidden");
  }
};

// close the rating modal on click of ESC button
let rModal = document.querySelector("#ratingInfo-modal");
document.addEventListener("keydown", (e) => {
  if (!rModal.classList.contains("hidden")) {
    if (e.key === "Escape") {
      rModal.classList.add("hidden");
    }
  }
});

// top content display modal 
const infoModalToggle = (state) => {
  let infoModal = document.querySelector("#info-modal");


  if (state === "show") {
    infoModal.classList.remove("hidden");

  } else {
    infoModal.classList.add("hidden");
  }
};

// close the top content info modal on click of ESC button
let infoModal = document.querySelector("#info-modal");
document.addEventListener("keydown", (e) => {
  if (!infoModal.classList.contains("hidden")) {
    if (e.key === "Escape") {
      infoModal.classList.add("hidden");
    }
  }
});