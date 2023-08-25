
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



// ABOUT content overflowing functionality
const aboutTabContentAll = document.querySelectorAll(".aboutTab-content");
aboutTabContentAll.forEach((each,index)=>{
  if(each.scrollHeight> each.clientHeight){
    let computedStyle = window.getComputedStyle(each);
    let lineHeight = computedStyle.lineHeight.replace("px",'');
    let lines = Math.floor(each.clientHeight/(lineHeight));
    
    each.style.cssText = `display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: ${lines};`
  }
})