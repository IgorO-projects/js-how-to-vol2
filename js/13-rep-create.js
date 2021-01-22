
const product = {
    name: 'тест драйв',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nihil corporis necessitatibus reiciendis, iste fugiat rem blanditiis autem magnam labore, mollitia omnis, culpa cupiditate consectetur laudantium! Laborum, numquam. Beatae, sequi?',
    price: 2000,
    available: false,
};

const containerRef = document.createElement('div');
containerRef.classList.add('product__card');

const titleRef = document.createElement('h2');
titleRef.textContent = product.name;
titleRef.classList.add('product__title');
console.log(titleRef); 

const descrRef = document.createElement('p');
descrRef.textContent = product.description;
descrRef.classList.add('product__description');
console.log(descrRef);

const priceRef = document.createElement('p');
priceRef.textContent = `цена ${product.price} кредитов за одну штуку товара`;
priceRef.classList.add('product__price');
console.log(priceRef);


// appending all together like grappes.

containerRef.append(titleRef, descrRef, priceRef);
// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);
console.log(containerRef);

const rootContainer = document.querySelector('#root');

rootContainer.appendChild(containerRef)
/**************************************************************************/

const navRef = document.querySelector('.nav');

const newLiRef = document.createElement('li');
newLiRef.textContent = 'About us';
newLiRef.classList.add('helloThere');
navRef.prepend(newLiRef);

const cloneLiRef = newLiRef.cloneNode(true);
cloneLiRef.textContent = 'Gallery';
navRef.append(cloneLiRef);