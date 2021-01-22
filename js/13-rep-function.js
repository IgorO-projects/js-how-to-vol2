const products = [
    {
        name: 'Сервоприводы',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nihil corporis necessitatibus reiciendis, iste fugiat rem blanditiis autem magnam labore, mollitia omnis, culpa cupiditate consectetur laudantium! Laborum, numquam. Beatae, sequi?',
        price: 2000,
        available: true,
    },
    {
        name: 'генератор поля',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nihil corporis necessitatibus reiciendis, iste fugiat rem blanditiis autem magnam labore, mollitia omnis, culpa cupiditate consectetur laudantium! Laborum, numquam. Beatae, sequi?',
        price: 3000,
        available: false,
    },
    {
        name: 'гипердрайв',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nihil corporis necessitatibus reiciendis, iste fugiat rem blanditiis autem magnam labore, mollitia omnis, culpa cupiditate consectetur laudantium! Laborum, numquam. Beatae, sequi?',
        price: 1000,
        available: false,
    },
    {
        name: 'нулевой элемент',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nihil corporis necessitatibus reiciendis, iste fugiat rem blanditiis autem magnam labore, mollitia omnis, culpa cupiditate consectetur laudantium! Laborum, numquam. Beatae, sequi?',
        price: 6000,
        available: true,
    },
];

console.table(products);

const createProductCard = product => {
    const containerRef = document.createElement('div');
    containerRef.classList.add('product__card');

    const titleRef = document.createElement('h2');
    titleRef.textContent = product.name;
    titleRef.classList.add('product__title', product.available ? 'product__title-available' : 'product__title-unavailable');

    const descrRef = document.createElement('p');
    descrRef.textContent = product.description;
    descrRef.classList.add('product__description');

    const priceRef = document.createElement('p');
    priceRef.textContent = `цена ${product.price} кредитов за одну штуку товара`;
    priceRef.classList.add('product__price');

    // appending all together like grappes.

    containerRef.append(titleRef, descrRef, priceRef);
    // containerRef.appendChild(titleRef);
    // containerRef.appendChild(descrRef);
    // containerRef.appendChild(priceRef);
    
    return containerRef;
};

products.forEach(product => console.log(createProductCard(product)));

const productCards = products.map(product => createProductCard(product));
const productsListRef = document.querySelector('.js-products');

productsListRef.append(...productCards);