// 1. About content - modal
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
  
  // 2. rating modal show and hide
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
  
  // 3. top content display modal 
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