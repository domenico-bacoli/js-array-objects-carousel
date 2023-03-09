
//preparo gli elementi in js che corrispondono all'html
const imageContainerEl = document.getElementById("image-container");
const thumbnailsContainerEl = document.getElementById("thumbnails-container");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");
const startAutoPlayEl = document.getElementById("start-auto-play");
const stopAutoPlayEl = document.getElementById("stop-auto-play");
const reverseAutoPlayEl = document.getElementById("reverse-auto-play");


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

//memorizzo una variabile di index
let activeImageIndex = 0;

let thumbnailsImageContainer;

//inserisco un immagine di default in pagina
let imageBig = document.createElement("img");
imageBig.classList.add("active-image");
imageBig.src = images[activeImageIndex].image;
imageContainerEl.append(imageBig);

//ciclo l'array di oggetti per generare le thumbnail
for( let i = 0; i < images.length; i++){
    let thumbnailsImageContainer = document.createElement("img");
    thumbnailsImageContainer.classList.add("thumbnails-image");
    thumbnailsImageContainer.src = images[i].image;
    thumbnailsContainerEl.append(thumbnailsImageContainer);
}

//prendo le thumbnails
const thumbnailsImageContainerEl = document.querySelectorAll(".thumbnails-image");
//aggiungo la classe active alla prima thumbnails
thumbnailsImageContainerEl[activeImageIndex].classList.add("active");

//genero il titolo all'interno dell'immagine grande
let titleImageContainer = document.createElement("h3");
titleImageContainer.classList.add("image-title");
titleImageContainer.innerText = images[activeImageIndex].title;
imageContainerEl.append(titleImageContainer);

//genero il testo all'interno dell'immagine grande
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

let autoPlayInterval;
let reverseAutoPlay;

startAutoPlayEl.addEventListener("click", function(){
    autoPlayInterval = setInterval(forward, 3000);
    clearInterval(reverseAutoPlay);
});

stopAutoPlayEl.addEventListener("click", function(){
    clearInterval(autoPlayInterval);
    clearInterval(reverseAutoPlay);
})

reverseAutoPlayEl.addEventListener("click", function(){
    reverseAutoPlay = setInterval(backwards, 3000)
    clearInterval(autoPlayInterval);
        
});
let btnEl = document.querySelectorAll(".btn");


//____________FUNZIONI_____________

//funzione avanti 
function forward(){
    //rimuovo la classe active alla miniatura corrispondente all'activeImageIndex
    thumbnailsImageContainerEl[activeImageIndex].classList.remove("active");
    if(activeImageIndex == images.length - 1){
        activeImageIndex = 0;

    } else {
        //aumento di un'unità il valore di activeImageIndex
        activeImageIndex++;
    }
    //aggiungo la classe active alla miniatura corrispondente all'indice
    thumbnailsImageContainerEl[activeImageIndex].classList.add("active");
    //mostro l'immagine relativa al valore dell'indice corrente prendendola dall'array di oggetti
    imageBig.src = images[activeImageIndex].image;
    //scrivo a display il titolo relativo all'indice corrente prendendolo dall'array di oggetti
    titleImageContainer.innerText = images[activeImageIndex].title;
    //scrivo a display il testo relativo all'indice corrente prendendolo dall'array di oggetti
    textImageContainer.innerText = images[activeImageIndex].text;
    //stile dei button
    imageUrl = images[activeImageIndex].image
    startAutoPlayEl.style.backgroundImage = `url(../${imageUrl})`;
    stopAutoPlayEl.style.backgroundImage = `url(../${imageUrl})`;
    reverseAutoPlayEl.style.backgroundImage = `url(../${imageUrl})`;
}

//funzione indietro 
function backwards(){
    thumbnailsImageContainerEl[activeImageIndex].classList.remove("active");
    if(activeImageIndex == 0){
        activeImageIndex = images.length - 1;

    } else {
        activeImageIndex--;
    }
    //aggiungo la classe active alla miniatura corrispondente all'indice
    thumbnailsImageContainerEl[activeImageIndex].classList.add("active");
    //mostro l'immagine relativa al valore dell'indice corrente prendendola dall'array di oggetti
    imageBig.src = images[activeImageIndex].image;
    //scrivo a display il titolo relativo all'indice corrente prendendolo dall'array di oggetti
    titleImageContainer.innerText = images[activeImageIndex].title;
    //scrivo a display il testo relativo all'indice corrente prendendolo dall'array di oggetti
    textImageContainer.innerText = images[activeImageIndex].text;
    //stile dei button
    imageUrl = images[activeImageIndex].image
    startAutoPlayEl.style.backgroundImage = `url(../${imageUrl})`;
    stopAutoPlayEl.style.backgroundImage = `url(../${imageUrl})`;
    reverseAutoPlayEl.style.backgroundImage = `url(../${imageUrl})`;
}


