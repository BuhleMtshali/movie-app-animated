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
let productionDom = document.querySelector('.author');
let movieNameDom = document.querySelector('.title');
let primaryGenre = document.querySelector('.topic');
let description = document.querySelector('.description');


//creating the funvtion to get movies from the API
//1. Add the event listener
// window.onload = refreshData;


// //2. Creating the function to get the data
// function refreshData () {
//         const options = {
//           method: 'GET',
//           params: {
//             with_genres: '80',
//             page: '1'
//           },
//           headers: {
//             'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
//             'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
//           }
//         };

//       const feedUrlData = 'https://advanced-movie-search.p.rapidapi.com/discover/movie'

//       axios.get(feedUrlData, options)
//       .then(response => renderData(response.data.results))
//       .catch(error => console.error('Error while fetching results', error))

// }


// //3. Rendering function
// function renderData(data){
//   let movieTemplate = ''
//     console.log(data);
//     carouselDom.innerHTML = ''

//     data.forEach((movie) => {
//       movieTemplate += `
//                         <div class="list">
//                         <div class="item carousel-item" >
//                         <div class="img-wrapper">
//                         <img src=${movie.poster_path} alt="image one">
//                         <div class="overlay"></div>
//                         </div>
//                         <div class="content">
//                         <div class="author">${movie.vote_average}</div>
//                         <div class="title">${movie.original_title}</div>
//                         <div class="topic">${movie.release_date}</div>
//                         <div class="description">${movie.overview}</div>
//                         <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>Subscribe</button>
//                         </div>
//                         </div>  
//                         <!-- ↑END OF CONTENT -->
//                         </div>
//                         <!-- end of item 1 -->
//                         </div>
//                         <!-- ↑END OF LIST DIV -->


//                         <!-- ↓ thumbmail images -->
//                         <div class="thumbnail">
//                         <div class="item">
//                         <img src=${movie.poster_path} alt="img one">
//                         <div class="content">
//                         <div class="title">${movie.original_title}</div>
//                         <div class="des">${movie.overview}</div>
//                         </div>
//                         <!-- end of content -->
//                         </div>
//                         <!-- end of item 1 -->
//                         </div>  
//                         <!-- end of  thumbnail-->

//                         <!-- arrow buttons to move the slider -->
//                         <div class="arrows">
//                         <button id="prev"><</button>
//                         <button id="next">></button>
//                         </div>
//                         <!-- end of arrows -->

//                         <!-- timeclass to check the running time of the animation -->
//                         <div class="time"></div>

//                         </div>
//                         <!-- end of carousel -->
//                         `

//                         carouselDom.innerHTML = movieTemplate;
//     })
    
// }












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