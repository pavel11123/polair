const search = () => {
  let searchFrom = document.querySelector(".js-search__button");
  let searchInput = document.querySelector(".js-search__input");

  searchFrom.onclick = function (evt) {
    searchInput.classList.toggle("js-search__open");
    evt.preventDefault();
  };
};

search();
