
var link = document.querySelector(".btn-write-us");

var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".form-write-us");

var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=e-mail]");


  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
 
   


var mapLink = document.querySelector(".button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {

    if (evt.keyCode === 27){
    evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });




var catLink = document.querySelector(".wont-buy");

var catPopup = document.querySelector(".basket");

catLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    catPopup.classList.add("modal-show");
  });

catClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    catPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {

    if (evt.keyCode === 27){
    evt.preventDefault();
      if (catPopup.classList.contains("modal-show")) {
        catPopup.classList.remove("modal-show");
      }
    }
  });
