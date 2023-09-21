
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

