function openCollection(evt, collectionName) {
    var i, collectionContent, tablinks;
    collectionContent = document.getElementsByClassName("collection-content");
    for (i = 0; i < collectionContent.length; i++) {
      collectionContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(collectionName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  