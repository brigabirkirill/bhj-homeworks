arrForTab = Array.from(document.querySelectorAll(".tab"));
arrForTabContent = Array.from(document.querySelectorAll(".tab__content"));


arrForTab.forEach(elem1 => {
  elem1.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(elem2=>elem2.classList.remove("tab_active"))
    arrForTabContent.forEach(elem3 => {
      if (elem3.classList.contains("tab__content_active")) {
        elem3.classList.remove("tab__content_active")
      }
      if ( arrForTab.indexOf(elem1) === arrForTabContent.indexOf(elem3)) {
        elem1.classList.add("tab_active");
        elem3.classList.add("tab__content_active");
      }
    })
  })
})