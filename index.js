// rating functionality

const ratings = {
  doc1: 3.1,
  doc2: 4.7,
  doc3: 2.5,
  doc4: 1.9,
  doc5: 4.2,
  doc6: 3.8,
};

// generate stars according to the rating
function renderStarRating(rating, ratingCard) {
  const starContainer = document.querySelector(`.${ratingCard} .rating .stars`);
  starContainer.innerHTML = "";

  const colorPercentage = Math.round((rating % 1) * 100).toString();
  // const colorPercentage = '50%'
  const grayPercentage = (100 - Number(colorPercentage)).toString();
  // const grayPercentage = '50%'

  console.log(rating, colorPercentage, grayPercentage);
  // star.style.background = `linear-gradient(to right, ${color} ${colorPercentage}, #A8A29E ${grayPercentage})`

  let color = "";
  if (rating >= 4) color = "#052E16";
  else if (rating >= 3) color = "#14532D";
  else if (rating >= 2) color = "#166534";
  else if (rating >= 1) color = "#15803D";
  else color = "#A8A29E";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");

    if (rating >= i) {
      // star with fill color
      star.classList.add("fa-star", "star-box");
      star.style.background = `${color}`;
    } else if (i === Math.ceil(rating)) {
      // half fill color star
      star.classList.add("fa-star", "star-box");
      star.style.backgroundImage = `linear-gradient(to right, ${color} 0%, ${color} ${colorPercentage}%, #A8A29E ${grayPercentage}%)`;
    } else {
      // star without fill color
      star.classList.add("fa-star", "star-box");
      star.style.background = `#A8A29E`;
    }

    starContainer.appendChild(star);
  }
}

const starsTotal = 5;
document.addEventListener("DOMContentLoaded", getRatings);
function getRatings() {
  for (let rating in ratings) {
    document.querySelector(
      `.${rating} .number-rating`
    ).innerHTML = `(${ratings[rating]})`;
    renderStarRating(ratings[rating], rating);
  }
}

// ABOUT content - add three dots when overflowing
const aboutTabContentAll = document.querySelectorAll(".aboutTab-content");
aboutTabContentAll.forEach((each, index) => {
  let rmBtn = document.querySelector("#aboutTab-rmBtn-" + index); //rmBtn: read more btn

  if (each.scrollHeight > each.clientHeight) {
    let computedStyle = window.getComputedStyle(each);
    let lineHeight = computedStyle.lineHeight.replace("px", "");
    let lines = Math.floor(each.clientHeight / lineHeight);

    each.style.cssText = `display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: ${lines};`;
    rmBtn.classList.remove("hidden");
  }
});

const showAndHideModal = (state, index) => {
  let dcModal = document.querySelector("#dc-modal");
  let modalTitle = document.querySelector("#modalTitle");
  let modalContent = document.querySelector("#modalContent");

  if (state === "show") {
    let rmBtn = document.querySelector("#aboutTab-rmBtn-" + index); //rmBtn: read more btn
    let aboutDivContent = rmBtn.previousElementSibling;
    let h3Content = aboutDivContent.previousElementSibling;

    dcModal.classList.remove("hidden");

    modalTitle.innerHTML = h3Content.innerHTML;
    modalContent.innerHTML = aboutDivContent.innerHTML;
  } else {
    dcModal.classList.add("hidden");
  }
};

// close the modal on click of ESC button
let dcModal = document.querySelector("#dc-modal");
document.addEventListener("keydown", (e) => {
  if (!dcModal.classList.contains("hidden")) {
    if (e.key === "Escape") {
      showAndHideModal("hide");
    }
  }
});
