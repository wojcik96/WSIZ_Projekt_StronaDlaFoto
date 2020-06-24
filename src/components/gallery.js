import * as Macy from 'macy';

const btnGallery = document.querySelector('.gallery__btn-show-all');
const galleryConteiner = document.querySelector('.gallery__image');
let active = false

const msnry = new Macy({
   container: '.gallery__image',
   mobileFirst: true,
   columns: 1,
   breakAt: {
      400: 2,
      700: 3,
      1100: 4,
   },
   margin: {
      x: 10,
      y: 10,
   }
})

const apiUrl = 'https://pixabay.com/api/?key=16737822-9b01c32003d6e10c2cfc30ac1&image_type=photo&per_page=5';
btnGallery.addEventListener('click', () => {
   fetch(apiUrl)
      .then(response => response.json())
      .then(response => addPicture(response.hits))
})

const addPicture = (object) => {
   object.forEach(element => {
      console.log(element.webformatURL);
      const img = document.createElement("img");
      img.classList.add('gallery__img');
      img.setAttribute("src", `${element.webformatURL}`);
      galleryConteiner.append(img);
      msnry.reInit();
   })
}