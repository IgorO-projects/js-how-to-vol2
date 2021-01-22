const titleRef = document.querySelector('h1');

titleRef.style.color = 'blue';
titleRef.style.backgroundColor = 'pink';
console.dir(titleRef);
const navlistRef = document.querySelector('.nav');

const arrOfAllNavItemRefs = navlistRef.childNodes;
console.log(arrOfAllNavItemRefs);

const linksRefs = document.querySelectorAll('.nav__link');

linksRefs.forEach(item => item.textContent += ' :)');
console.log(linksRefs);

const activeLinkRef = document.querySelector('.nav__link-active');

activeLinkRef.textContent ='amigo, check this beast =3'
activeLinkRef.href = 'https://www.1addicts.com/forums/showthread.php?t=731080';

const previousLinkRef = activeLinkRef.parentNode;
const firstItem = previousLinkRef.previousElementSibling;

const portfolioRef = firstItem.firstElementChild;
console.log(portfolioRef);

portfolioRef.classList.add('abrakatabra');


const imageRef  = document.querySelector('.hero__image');

imageRef.src = 'https://cdn.bmwblog.com/wp-content/uploads/2015/11/Alpine-White-BMW-1M-Project-Showcase-1.jpg';
imageRef.alt = 'it`s my dream car, vrom vrom';

// console.log(imageRef);

// console.log(imageRef.hasAttribute('src'));
// console.log(imageRef.getAttribute('src'));
// // imageRef.setAttribute('src',
// //  'https://cdn.bmwblog.com/wp-content/uploads/2015/11/Alpine-White-BMW-1M-Project-Showcase-1.jpg');
// console.log(imageRef.attributes);