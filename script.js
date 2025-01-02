let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('#header');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}


const first_order = document.getElementById('one_dozen');

first_order.addEventListener("click", function(event){

    event.preventDefault();
    const message = encodeURIComponent('I want 1 Dozen mangoes');
    const dynamicPath1 = `https://wa.me/9892900645?text=${message}`; 
    first_order.href = dynamicPath1;

    //console.log(dynamicPath1);
    window.open(dynamicPath1, '_blank');

})


const second_order = document.getElementById('three_dozen');

second_order.addEventListener("click", function(event){

    event.preventDefault();
    const message = encodeURIComponent('I want 3 Dozen mangoes');
    const dynamicPath2 = `https://wa.me/9892900645?text=${message}`; 
    second_order.href = dynamicPath2;

    //console.log(dynamicPath1);
    window.open(dynamicPath2, '_blank');

})

const third_order = document.getElementById('five_dozen');

third_order.addEventListener("click", function(event){

    event.preventDefault();
    const message = encodeURIComponent('I want 5 Dozen mangoes');
    const dynamicPath3 = `https://wa.me/9892900645?text=${message}`; 
    third_order.href = dynamicPath3;

    //console.log(dynamicPath1);
    window.open(dynamicPath3, '_blank');

})




// window.onscroll = () =>{

//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');

//   if(window.scrollY > 20){
//     document.querySelector('#scroll-top').classList.add('active');
//     document.querySelector('#header').classList.add('active');
//   }else{
//     document.querySelector('#scroll-top').classList.remove('active');
//   }

// }

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut();

// var className = "inverted";
// var scrollTrigger = 60;

// window.onscroll = function() {
//   // We add pageYOffset for compatibility with IE.
//   if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
//     document.getElementsByTagName("header")[0].classList.add(className);
//   } else {
//     document.getElementsByTagName("header")[0].classList.remove(className);
//   }
// };


