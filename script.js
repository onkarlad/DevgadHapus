let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("#header");
let anchors = document.querySelectorAll("a.nav_items");

menu.onclick = () => {
  //   menu.classList.toggle('fa-times');
  navbar.classList.toggle("active");
};

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

const first_order = document.getElementById("one_dozen");

first_order.addEventListener("click", function (event) {
  event.preventDefault();
  const message = encodeURIComponent("I want 1 Dozen mangoes");
  const dynamicPath1 = `https://wa.me/9892900645?text=${message}`;
  first_order.href = dynamicPath1;

  //console.log(dynamicPath1);
  window.open(dynamicPath1, "_blank");
});

const second_order = document.getElementById("three_dozen");

second_order.addEventListener("click", function (event) {
  event.preventDefault();
  const message = encodeURIComponent("I want 3 Dozen mangoes");
  const dynamicPath2 = `https://wa.me/9892900645?text=${message}`;
  second_order.href = dynamicPath2;

  //console.log(dynamicPath1);
  window.open(dynamicPath2, "_blank");
});

const third_order = document.getElementById("five_dozen");

third_order.addEventListener("click", function (event) {
  event.preventDefault();
  const message = encodeURIComponent("I want 5 Dozen mangoes");
  const dynamicPath3 = `https://wa.me/9892900645?text=${message}`;
  third_order.href = dynamicPath3;

  //console.log(dynamicPath1);
  window.open(dynamicPath3, "_blank");
});
