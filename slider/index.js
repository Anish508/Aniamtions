

document.addEventListener("DOMContentLoaded" , function(){
const images = ["img1.jpg","img2.jpg","img3.jpg"];
let currentIndex = 0;
const slider = document.getElementById('slider');

setInterval(()=>{
  currentIndex = (currentIndex+1) % images.length;
  slider.src = images[currentIndex]
},2000)
})







/* document.addEventListener("DOMContentLoaded", function () {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5..jpg"]; // Add your image URLs here
    let currentIndex = 0;
    const slider = document.getElementById('slider');
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      slider.src = images[currentIndex];
  },2000);
  }); */