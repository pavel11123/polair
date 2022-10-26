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
