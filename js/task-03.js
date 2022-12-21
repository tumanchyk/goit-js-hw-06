const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery')
galleryEl.style.display = 'flex';
galleryEl.style.alignItems = 'center';
galleryEl.style.justifyContent = 'space-around';

const makeGalleryItem = (arr) => {
  return arr.map(imgItem => `<li class = "gallery__item" style = "list-style: none"><img src = "${ imgItem.url}" alt = "${imgItem.alt}" class ="gallery__img" style = "display: block; width: 400px"></li>`).join("")
}

const imgs = makeGalleryItem(images)
galleryEl.insertAdjacentHTML('afterbegin', imgs)
console.log(galleryEl)


