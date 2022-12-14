
const menu__open = () => {
  function menu__openjs() {
    document.querySelector(".phone__menu-nav").classList.add("js-open__menu");
    document
      .querySelector(".phone__menu-nav")
      .classList.remove("js-close__menu");
    document.getElementById("phone__menu-id-body").style.overflow = "hidden";
  }

  function menu__closejs() {
    document.querySelector(".phone__menu-nav").classList.add("js-close__menu");
    document
      .querySelector(".phone__menu-nav")
      .classList.remove("js-open__menu");
    document.getElementById("phone__menu-id-body").style.overflow = "visible";
  }

  const phoneOpen = document.querySelector(".js-phone__open");
  const phoneClose = document.querySelectorAll(".js-phone__close");

  for (var i = 0; i < phoneClose.length; i++) {
    phoneClose[i].addEventListener("click", menu__closejs);
  }

  phoneOpen.addEventListener("click", menu__openjs);
};

menu__open();

const search = () => {
  let searchFrom = document.querySelector(".js-search__button");
  let searchInput = document.querySelector(".js-search__input");

  searchFrom.onclick = function (evt) {
    searchInput.classList.toggle("js-search__open");
    evt.preventDefault();
  };
};

search();

const slider = () => {
  $(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 1,
      autoplay: false,
      speed: 800,
      infinity: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false,
      initialSlide: 2,
    });
  });
};

slider();
