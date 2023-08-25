
// rating functionality

const ratings = {
  doc1: 3.6,
  doc2: 4.5,
  doc3: 2.6,
  doc4: 1.5,
  doc5: 3.6,
  doc6: 4.5
};
const starsTotal = 5;
document.addEventListener("DOMContentLoaded", getRatings);
function getRatings() {
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10
      }%`;

    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;
    document.querySelector(
      `.${rating} .number-rating`
    ).innerHTML = `(${ratings[rating]})`;
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