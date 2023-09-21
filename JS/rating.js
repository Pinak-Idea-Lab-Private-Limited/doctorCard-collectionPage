// rating functionality
// generate stars according to the rating
function renderStarRating(rating, ratingCard) {
    console.log(rating)
    const starContainer = ratingCard.querySelector('.rating .stars');
    starContainer.innerHTML = "";
  
    const colorPercentage = Math.round((rating % 1) * 100).toString();
    const grayPercentage = (100 - Number(colorPercentage)).toString();
  
    let color = "";
    if (rating >= 4) color = "#14532D";
    else if (rating >= 3) color = "#166534";
    else if (rating >= 2) color = "#15803D";
    else if (rating >= 1) color = "#16A34A";
    else if (rating >= 0) color = "#22C55E";
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
  
  const ratingCards = document.querySelectorAll('[data-star-rating]');
  document.addEventListener("DOMContentLoaded", getRatings);
  function getRatings() {
    ratingCards.forEach(card => {
      // Access the card or modify its properties
      const numberRating = Number(card.getAttribute('data-star-rating'));
      // Call the star creating function
      renderStarRating(numberRating, card);
    });
  }
  