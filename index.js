
// rating functionality

// tailwind text color class
const colors = {
  "1" : "text-green-100",
  "1.5" : "text-green-200",
  "2" : "text-green-300",
  "2.5" : "text-green-400",
  "3" : "text-green-500",
  "3.5" : "text-green-600",
  "4" : "text-green-700",
  "4.5" : "text-green-800",
  "5" : "text-green-900",
}


const ratings = {
  doc1: 3.5,
  doc2: 4.5,
  doc3: 2.5,
  doc4: 1.5,
  doc5: 3.5,
  doc6: 4.5
};

// generate stars according to the rating
function renderStarRating(rating, ratingCard) {
  const starContainer = document.querySelector(`.${ratingCard} .rating .stars`);
  starContainer.innerHTML = '';


  for (let i = 1; i <= 5; i++) {
      const star = document.createElement('i');


      if (rating >= i) {
          // star with fill color
          star.classList.add('fa-star', colors[rating]);
      } else if (i === Math.ceil(rating)) {
        // half fill color star
          star.classList.add('fa-star-half-stroke',colors[rating]);
      } else {
        // star without fill color
          star.classList.add('fa-star2','text-gray-400');
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
    renderStarRating(ratings[rating], rating)
  }
}



// ABOUT content - add three dots when overflowing
const aboutTabContentAll = document.querySelectorAll(".aboutTab-content");
aboutTabContentAll.forEach((each,index)=>{
  let rmBtn = document.querySelector("#aboutTab-rmBtn-" + index); //rmBtn: read more btn

  if(each.scrollHeight> each.clientHeight){
    let computedStyle = window.getComputedStyle(each);
    let lineHeight = computedStyle.lineHeight.replace("px",'');
    let lines = Math.floor(each.clientHeight/(lineHeight));
    
    each.style.cssText = `display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: ${lines};`;
    rmBtn.classList.remove("hidden");
  }
});


const showAndHideModal = (state,index)=>{
  let dcModal = document.querySelector("#dc-modal");
  let modalTitle = document.querySelector("#modalTitle");
  let modalContent = document.querySelector("#modalContent");

  
  if(state === "show"){
    let rmBtn = document.querySelector("#aboutTab-rmBtn-" + index); //rmBtn: read more btn
    let aboutDivContent = rmBtn.previousElementSibling;
    let h3Content = aboutDivContent.previousElementSibling;

    dcModal.classList.remove("hidden");

    modalTitle.innerHTML = h3Content.innerHTML;
    modalContent.innerHTML = aboutDivContent.innerHTML;

  }else{
    dcModal.classList.add("hidden");

  }
}

// close the modal on click of ESC button
let dcModal = document.querySelector("#dc-modal");
document.addEventListener('keydown',e=>{
if(!dcModal.classList.contains("hidden")){

  if(e.key==="Escape"){
    showAndHideModal("hide");
  }
}
})