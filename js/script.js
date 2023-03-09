const imageContainerEl = document.getElementById("image-container");
const thumbnailsContainerEl = document.getElementById("thumbnails-container");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let activeImageIndex = 0;
let thumbnailsImageContainer;

let imageBig = document.createElement("img");
imageBig.classList.add("active-image");
imageBig.src = images[activeImageIndex].image;
imageContainerEl.append(imageBig);

for( let i = 0; i < images.length; i++){

    let thumbnailsImageContainer = document.createElement("img");
    thumbnailsImageContainer.classList.add("thumbnails-image");
    thumbnailsImageContainer.src = images[i].image;
    thumbnailsContainerEl.append(thumbnailsImageContainer);
}

const thumbnailsImageContainerEl = document.querySelectorAll(".thumbnails-image");
thumbnailsImageContainerEl[activeImageIndex].classList.add("active");

let titleImageContainer = document.createElement("h3");
titleImageContainer.classList.add("image-title");
titleImageContainer.innerText = images[activeImageIndex].title;
imageContainerEl.append(titleImageContainer);

let textImageContainer = document.createElement("p");
textImageContainer.classList.add("image-text");
textImageContainer.innerText = images[activeImageIndex].text;
imageContainerEl.append(textImageContainer);


arrowDownEl.addEventListener("click", function(){
    forward();
});

arrowUpEl.addEventListener("click", function(){
    backwards();
});


//____________FUNZIONI_____________


function forward(){
    thumbnailsImageContainerEl[activeImageIndex].classList.remove("active");
    if(activeImageIndex == images.length - 1){
        activeImageIndex = 0;

    } else {
        activeImageIndex++;
    }

    thumbnailsImageContainerEl[activeImageIndex].classList.add("active");
    imageBig.src = images[activeImageIndex].image;
    titleImageContainer.innerText = images[activeImageIndex].title
}

function backwards(){
    thumbnailsImageContainerEl[activeImageIndex].classList.remove("active");
    if(activeImageIndex == 0){
        activeImageIndex = images.length - 1;

    } else {
        activeImageIndex--;
    }

    thumbnailsImageContainerEl[activeImageIndex].classList.add("active");
    imageBig.src = images[activeImageIndex].image;
    textImageContainer.innerText = images[activeImageIndex].text;
}


