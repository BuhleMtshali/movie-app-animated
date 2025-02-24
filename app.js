// responsive navbar
// Toggle the mobile menu when hamburger icon is clicked
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

//making the carousal work
// 1. get the elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

// next button  function
nextDom.addEventListener('click', () => {
    showSlider('next')
})

// prev button function
prevDom.addEventListener('click', () => {
    showSlider('prev')
})


// function runtime
let timeRunning = 3000;
let timeAutoNext = 700;
let runTimeOut;

// let runAutoRun = setTimeout(() => {
//     nextDom.click();
// }, timeAutoNext)


function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    // if user clicks on the next button
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next')
    } else { 
            let positionLastItem = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carouselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev')
    }, timeRunning);

    // clearTimeout(runAutoRun);
 
}