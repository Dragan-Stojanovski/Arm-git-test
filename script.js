//Navigation

const dropdownBg=document.querySelector(".dropdown-bg");

Array.from(document.querySelectorAll(".nav-item"))
.forEach(item=>{
    item.onmouseover=()=>{
        dropdownBg.style.opacity='1';
        dropdownBg.style.visibility="visible";

        dropdownBg.style.width=getComputedStyle
        (item.lastElementChild).width;
        dropdownBg.style.height=getComputedStyle
        (item.lastElementChild).height;
        dropdownBg.style.top = `${item.lastElementChild.offsetTop}px`;
        dropdownBg.style.left =  `${item.lastElementChild.offsetLeft}px`;
    }
    item.onmouseout=()=>{
        dropdownBg.style.opacity="0";
        dropdownBg.style.visiblity="hidden";
    }
})

//Here Ends Navigation


const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }



   //Simple Slider

   var i = 0; 			// Start Point
   var images = [];	// Images Array
   var time = 3000;	// Time Between Switch
   
   // image list
   images[0] = 'images/galerija.jpg';
   images[1] = 'images/diamond-cup.jpg';
   images[2] = 'images/diamond-cup2.jpg';
   
   
   // Change Image
   function changeImg(){
       document.slide.src = images[i];
   
       // Check If Index Is Under Max
       if(i < images.length - 1){
         // Add 1 to Index
         i++; 
       } else { 
           // Reset Back To O
           i = 0;
       }
   
       // Run function every x seconds
       setTimeout("changeImg()", time);
   }
   
   // Run function when page loads
   window.onload=changeImg;


   //Modul btns
var modulBtn1=document.querySelector(".modul-btn1");
var modulBtn2=document.querySelector(".modul-btn2");
var modulBtn3=document.querySelector(".modul-btn3");

var modul1=document.querySelector(".modul-main1");
var modul2=document.querySelector(".modul-main2");
var modul3=document.querySelector(".modul-main3");
modul2.style.visibility="hidden";
modul3.style.visibility="hidden";
modulBtn1.style.backgroundColor="gold";
modulBtn1.style.color="black";
modulBtn1.addEventListener('click',function(){
    modul1.style.visibility="visible";

    modul2.style.visibility="hidden";
    modul3.style.visibility="hidden";

    modulBtn1.style.backgroundColor="gold";

    modulBtn1.style.color="black";

    modulBtn2.style.backgroundColor="black";

    modulBtn2.style.color="gold";

    modulBtn3.style.backgroundColor="black";

    modulBtn3.style.color="gold";


})

modulBtn2.addEventListener('click',function(){
    modul1.style.visibility="hidden";

    modul2.style.visibility="visible";
    modul3.style.visibility="hidden";

    modulBtn1.style.backgroundColor="black";

    modulBtn1.style.color="gold";

    modulBtn2.style.backgroundColor="gold";

    modulBtn2.style.color="black";

    modulBtn3.style.backgroundColor="black";

    modulBtn3.style.color="gold";
})

modulBtn3.addEventListener('click',function(){
    modul1.style.visibility="hidden";

    modul2.style.visibility="hidden";
    modul3.style.visibility="visible";

    modulBtn1.style.backgroundColor="black";

    modulBtn1.style.color="gold";

    modulBtn2.style.backgroundColor="black";

    modulBtn2.style.color="gold";

    modulBtn3.style.backgroundColor="gold";

    modulBtn3.style.color="black";
})
