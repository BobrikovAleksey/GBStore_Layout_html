template = `
    <div class="product">
        <div class="product__image">
            <img src="#" alt="image-">
        </div>

        <table class="product__description">
            <tr>
                <td class="product__title" colspan="2"></td>
            </tr>

            <tr>
                <td class="product__price"><i class="fa fa-rub"></i></td>

                <td class="product__rating">
                    <span>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                        <i class="fa fa-star-o"></i>
                    </span>
                </td>
            </tr>
        </table>

        <div class="product__control">
            <button class="control-button control-button__cart" type="button">
                <svg class="svg-cart svg-cart_small svg-cart_white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" x="0" y="0" width="32px" height="29px" viewBox="-1 -1 34 31">
                    <path d="M31.899,7.565 L26.493,19.977 C26.296,20.410 25.882,20.686 25.409,20.686 L10.554,20.686 C10.021,20.686 9.548,20.331 9.410,19.819 L4.577,2.364 L1.184,2.364 C0.533,2.364 -0.000,1.832 -0.000,1.182 C-0.000,0.532 0.533,-0.000 1.184,-0.000 L5.464,-0.000 C5.997,-0.000 6.471,0.354 6.609,0.867 L11.442,18.322 L24.620,18.322 L28.999,8.274 L14.401,8.274 C13.750,8.274 13.217,7.742 13.217,7.092 C13.217,6.442 13.750,5.910 14.401,5.910 L30.814,5.910 C31.208,5.910 31.583,6.107 31.800,6.442 C32.017,6.777 32.057,7.191 31.899,7.565 ZM9.429,23.641 C10.909,23.641 12.112,24.843 12.112,26.320 C12.112,27.798 10.909,29.000 9.429,29.000 C7.950,29.000 6.747, 27.798 6.747,26.320 C6.747,24.843 7.950,23.641 9.429,23.641 ZM26.020,23.641 C27.500,23.543 28.782,24.666 28.881,26.124 C28.920,26.852 28.703,27.542 28.230,28.074 C27.756,28.626 27.105,28.941 26.395,29.000 C26.336, 29.000 26.257,29.000 26.198,29.000 C24.797,29.000 23.633,27.897 23.535,26.498 C23.436,25.040 24.541,23.740 26.020,23.641 Z" />
                </svg>
                <span class="control-button__icon_left">
                    В корзину
                </span>
            </button>

            <button class="control-button" type="button">
                <svg class="svg-refresh svg-refresh_white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="12px">
                    <path d="M21.702,7.179 C21.325,6.788 20.714,6.788 20.338,7.179 L18.986,8.582 L18.986,1.001 C18.986,0.448 18.554, -0.000 18.021,-0.000 L8.582,-0.000 C8.050,-0.000 7.618,0.448 7.618,1.001 C7.618,1.553 8.050,2.002 8.582,2.002 L17.057,2.002 L17.057,8.582 L15.705,7.178 C15.328,6.787 14.718,6.787 14.342,7.178 C13.965,7.569 13.965,8.202 14.341,8.594 L17.339,11.705 C17.521,11.894 17.766,11.999 18.021,11.999 C18.278,11.999 18.522,11.893 18.704, 11.705 L21.702,8.594 C22.078,8.203 22.078,7.569 21.702,7.179 ZM13.401,9.998 L4.926,9.998 L4.926,3.418 L6.278, 4.821 C6.467,5.017 6.713,5.114 6.960,5.114 C7.207,5.114 7.454,5.017 7.642,4.821 C8.019,4.430 8.019,3.797 7.642, 3.406 L4.644,0.293 C4.463,0.106 4.218,0.000 3.962,0.000 C3.705,0.000 3.460,0.106 3.279,0.293 L0.282,3.406 C-0.095,3.797 -0.095,4.430 0.282,4.821 C0.659,5.212 1.268,5.212 1.645,4.821 L2.998,3.418 L2.998,10.999 C2.998, 11.551 3.429,12.000 3.962,12.000 L13.401,12.000 C13.934,12.000 14.365,11.551 14.365,10.999 C14.365,10.446 13.934,9.998 13.401,9.998 Z" />
                </svg>
            </button>

            <button class="control-button" type="button">
                <svg class="svg-like svg-like_white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px" height="22px">
                    <path d="M11.500,18.500 C11.349,18.500 11.206,18.437 11.103,18.326 L4.708,11.411 C4.707,11.409 4.705,11.407 4.704, 11.405 C3.927,10.543 3.500,9.400 3.500,8.187 C3.500,6.974 3.927,5.831 4.704,4.969 L4.801,4.861 C5.591,3.983 6.646,3.500 7.771,3.500 C8.897,3.500 9.952,3.983 10.742,4.861 L11.500,5.703 L12.258,4.861 C13.048,3.983 14.103,3.500 15.229,3.500 C16.354,3.500 17.409,3.983 18.199,4.861 L18.296,4.969 C19.072,5.831 19.500,6.974 19.500,8.187 C19.500,9.400 19.072,10.543 18.296,11.405 C18.295,11.407 18.293,11.409 18.291,11.411 L11.897, 18.326 C11.794,18.437 11.651,18.500 11.500,18.500 ZM5.505,10.674 L11.500,17.158 L17.495,10.674 C18.729,9.301 18.728,7.069 17.493,5.697 L17.396,5.589 C16.814,4.942 16.044,4.586 15.229,4.586 C14.413,4.586 13.644,4.942 13.061,5.589 L11.902,6.878 C11.799,6.991 11.653,7.056 11.500,7.056 C11.347,7.056 11.201,6.991 11.098,6.878 L9.939,5.589 C9.356,4.942 8.587,4.586 7.771,4.586 C6.956,4.586 6.186,4.942 5.604,5.589 L5.507,5.697 C4.272, 7.069 4.271,9.301 5.505,10.674 Z" />
                </svg>
            </button>
        </div>
    </div>
`;

el = document.querySelector('.featured__catalog');

if (el) {
    const catalog = [
        {
            id: 6970387,
            image: 'https://img1.wbstatic.net/big/new/6970000/6970387-1.jpg',
            title: 'Бермуды - CICLY',
            price: 1115,
        },
        {
            id: 11798678,
            image: 'https://img2.wbstatic.net/big/new/11790000/11798678-1.jpg',
            title: 'Блузка - MAURO2',
            price: 1919,
        },
        {
            id: 11645771,
            image: 'https://img1.wbstatic.net/big/new/11640000/11645771-1.jpg',
            title: 'Блузка - FULPLIT',
            price: 1679,
        },
        {
            id: 8986624,
            image: 'https://img2.wbstatic.net/big/new/8980000/8986624-1.jpg',
            title: 'Блузка-боди',
            price: 520,
        },
        {
            id: 4214886,
            image: 'https://img2.wbstatic.net/big/new/4210000/4214886-1.jpg',
            title: 'Болеро',
            price: 1487,
        },
        {
            id: 11645839,
            image: 'https://img1.wbstatic.net/big/new/11640000/11645839-1.jpg',
            title: 'Брюки - RARITY',
            price: 2309,
        },
        {
            id: 11646073,
            image: 'https://img1.wbstatic.net/big/new/11640000/11646073-4.jpg',
            title: 'Брюки - COLA',
            price: 1049,
        },

        {
            id: 11632596,
            image: 'https://img2.wbstatic.net/big/new/11630000/11632596-1.jpg',
            title: 'Брюки - BORELI',
            price: 1847,
        },
    ];

    el.insertAdjacentHTML('afterbegin', template.repeat(8));
    list = el.querySelectorAll('.product');

    for (let i = 0; i < 8; i++) {
        const img = list[i].querySelector('.product__image img');
        const title = list[i].querySelector('.product__title');
        const price = list[i].querySelector('.product__price');

        img.src = catalog[i].image;
        img.alt = `${img.alt}${catalog[i].id}`;
        title.insertAdjacentHTML('afterbegin', catalog[i].title);
        price.insertAdjacentHTML('afterbegin', catalog[i].price);

        list[i].addEventListener('mouseenter', (event) => {
            const product = event.target;
            if (!product.classList.contains('product_mouseenter')) {
                product.classList.add('product_mouseenter');
            }
        });

        list[i].addEventListener('mouseleave', (event) => {
            const product = event.target;
            if (product.classList.contains('product_mouseenter')) {
                product.classList.remove('product_mouseenter');
            }
        });

        list[i].addEventListener('mousedown', (event) => {
            const product = event.target;
            if (!product.classList.contains('product_mousedown')) {
                product.classList.add('product_mousedown');
            }
        });

        list[i].addEventListener('mouseup', (event) => {
            const product = event.target;
            if (product.classList.contains('product_mousedown')) {
                product.classList.remove('product_mousedown');
            }
        });

        document.addEventListener('mouseup', (event) => {
            if (list[i].classList.contains('product_mousedown')) {
                list[i].classList.remove('product_mousedown');
            }
        });
    }
}
