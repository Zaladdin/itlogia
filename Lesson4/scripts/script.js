// document.getElementsByClassName("main-title")[0].style.color = "red";
document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

const buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
   if(document.getElementById("name").value === "")  {
       document.getElementById("phone").style.borderColor = "#5d5d5f";
       document.getElementById("car").style.borderColor = "#5d5d5f";
       alert("Заполните поле имя!");
       document.getElementById("name").style.borderColor = "red";
   } else if (document.getElementById("phone").value === "") {
       document.getElementById("name").style.borderColor = "#5d5d5f";
       document.getElementById("car").style.borderColor = "#5d5d5f";
       alert("Заполните поле телефон!");
       document.getElementById("phone").style.borderColor = "red";
   } else if (document.getElementById("car").value === "") {
       document.getElementById("name").style.borderColor = "#5d5d5f";
       document.getElementById("phone").style.borderColor = "#5d5d5f";
       alert("Заполните поле автомобиль!");
       document.getElementById("car").style.borderColor = "red";
   }
   else {

       document.getElementById("name").style.borderColor = "#5d5d5f";
       document.getElementById("phone").style.borderColor = "#5d5d5f";
       document.getElementById("car").style.borderColor = "#5d5d5f";

       alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!");

   }
}

// document.getElementById("price-action").onclick = function () {
//     if ( (document.getElementById("name").value === "") && (document.getElementById("phone").value === "") && (document.getElementById("car").value === "") )
//     {
//         alert("Заполните поле имя!");
//         alert("Заполните поле телефон!");
//         alert("Заполните поле автомобиль!");
//
//         document.getElementById("name").style.borderColor = "red";
//         document.getElementById("phone").style.borderColor = "red";
//         document.getElementById("car").style.borderColor = "red";
//     }
//    else {
//
//         document.getElementById("name").style.borderColor = "#5d5d5f";
//         document.getElementById("phone").style.borderColor = "#5d5d5f";
//         document.getElementById("car").style.borderColor = "#5d5d5f";
//
//         alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!");
//
//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 5) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});
