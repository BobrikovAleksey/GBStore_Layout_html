const template = `
    <div class="header__container">
        <div class="header__block">
            <a href="./index.html" class="logo"></a>

            <details class="browse">
                <summary class="browse__summary">Обзор<i class="fa fa-caret-down"></i></summary>

                <div class="dropdown browse__dropdown">
                    <div class="dropdown__content">
                        <span class="dropdown__triangle dropdown__triangle_shadow"></span>
                        <span class="dropdown__triangle"></span>

                        <div class="browse__dropdown_elem">
                            <h2 class="dropdown__title">Женщинам</h2>

                            <ul>
                                <li><a href="#" class="dropdown__link">Одежда</a></li>

                                <li><a href="#" class="dropdown__link">Обувь</a></li>
                            </ul>
                        </div>

                        <div class="browse__dropdown_elem">
                            <h2 class="dropdown__title">Мужчинам</h2>

                            <ul>
                                <li><a href="#" class="dropdown__link">Одежда</a></li>

                                <li><a href="#" class="dropdown__link">Обувь</a></li>
                            </ul>
                        </div>

                        <div class="browse__dropdown_elem">
                            <h2 class="dropdown__title">Детям</h2>

                            <ul>
                                <li><a href="#" class="dropdown__link">Для девочек</a></li>

                                <li><a href="#" class="dropdown__link">Для мальчиков</a></li>

                                <li><a href="#" class="dropdown__link">Для новорожденных</a></li>
                            </ul>
                        </div>

                        <div class="browse__dropdown_elem">
                            <h2 class="dropdown__title">Аксессуары</h2>

                            <ul>
                                <li><a href="#" class="dropdown__link">Головные уборы</a></li>

                                <li><a href="#" class="dropdown__link">Перчатки и варежки</a></li>

                                <li><a href="#" class="dropdown__link">Сумки и рюкзаки</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </details>

            <form class="search" action="#">
                <input class="search__field" type="text" placeholder="Поиск товара...">

                <button class="search__button" type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>

        <div class="header__block">
            <div class="h-cart">
                <a href="#" class="h-cart__icon">
                    <svg class="cart-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32px" height="29px" viewBox="-1 -1 34 31" xml:space="preserve">
                        <path d="M31.899,7.565 L26.493,19.977 C26.296,20.410 25.882,20.686 25.409,20.686 L10.554,20.686 C10.021,20.686 9.548,20.331 9.410,19.819 L4.577,2.364 L1.184,2.364 C0.533,2.364 -0.000,1.832 -0.000,1.182 C-0.000,0.532 0.533,-0.000 1.184,-0.000 L5.464,-0.000 C5.997,-0.000 6.471,0.354 6.609,0.867 L11.442,18.322 L24.620,18.322 L28.999,8.274 L14.401,8.274 C13.750,8.274 13.217,7.742 13.217,7.092 C13.217,6.442 13.750,5.910 14.401,5.910 L30.814,5.910 C31.208,5.910 31.583,6.107 31.800,6.442 C32.017,6.777 32.057,7.191 31.899,7.565 ZM9.429,23.641 C10.909,23.641 12.112,24.843 12.112,26.320 C12.112,27.798 10.909,29.000 9.429,29.000 C7.950,29.000 6.747, 27.798 6.747,26.320 C6.747,24.843 7.950,23.641 9.429,23.641 ZM26.020,23.641 C27.500,23.543 28.782,24.666 28.881,26.124 C28.920,26.852 28.703,27.542 28.230,28.074 C27.756,28.626 27.105,28.941 26.395,29.000 C26.336, 29.000 26.257,29.000 26.198,29.000 C24.797,29.000 23.633,27.897 23.535,26.498 C23.436,25.040 24.541,23.740 26.020,23.641 Z"/>
                    </svg>

                    <div class="h-cart__count">
                        <p class="h-cart__count_text">3</p>
                    </div>
                </a>

                <div class="dropdown h-cart__dropdown">
                    <div class="dropdown__content">
                        <span class="dropdown__triangle dropdown__triangle_shadow"></span>
                        <span class="dropdown__triangle"></span>

                        <div class="h-product">
                            <a href="#" class="h-product__link">
                                <img class="h-product__image" src="https://img1.wbstatic.net/big/new/6970000/6970387-1.jpg" alt="product">

                                <div class="h-product__description">
                                    <h2 class="h-product__title">Бермуды - CICLY</h2>

                                    <p class="h-product__rating">
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </p>

                                    <h3 class="h-product__size">Размер: S</h3>

                                    <h3 class="h-product__price">1 x 1115<i class="fa fa-rub"></i></h3>
                                </div>
                            </a>

                            <div class="h-product__delete">
                              <button class="h-product__remove"><i class="fa fa-times-circle"></i></button>
                            </div>
                        </div>

                        <div class="h-product">
                            <a href="#" class="h-product__link">
                                <img class="h-product__image" src="https://img1.wbstatic.net/big/new/11640000/11645771-1.jpg" alt="product">

                                <div class="h-product__description">
                                    <h2 class="h-product__title">Блузка - FULPLIT</h2>

                                    <p class="h-product__rating">
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star-o" ></i>
                                    </p>

                                    <h3 class="h-product__size">Размер: S</h3>

                                    <h3 class="h-product__price">1 x 1679<i class="fa fa-rub"></i></h3>
                                </div>
                            </a>

                            <div class="h-product__delete">
                              <button class="h-product__remove"><i class="fa fa-times-circle"></i></button>
                            </div>
                        </div>

                        <div class="h-product">
                            <a href="#" class="h-product__link">
                                <img class="h-product__image" src="https://img2.wbstatic.net/big/new/11630000/11632596-1.jpg" alt="product">

                                <div class="h-product__description">
                                    <h2 class="h-product__title">Брюки - BORELI</h2>

                                    <p class="h-product__rating">
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star-half-o" ></i>
                                        <i class="fa fa-star-o" ></i>
                                    </p>

                                    <h3 class="h-product__size">Размер: S</h3>

                                    <h3 class="h-product__price">1 x 1847<i class="fa fa-rub"></i></h3>
                                </div>
                            </a>

                            <div class="h-product__delete">
                              <button class="h-product__remove"><i class="fa fa-times-circle"></i></button>
                            </div>
                        </div>

                        <div class="h-cart__total">
                          <span>Итог</span>

                          <span>4641 <i class="fa fa-rub"></i></span>
                        </div>

                        <button class="button button__brand-board button__checkout" type="button">
                            Регистрация
                        </button>

                        <button class="button button__silver-board button__go-to-cart" type="button">
                            Перейти в корзину
                        </button>
                      </div>
                </div>
            </div>
            
            <button class="button button__brand button__account" type="button">
                Профиль<i class="fa fa_right fa-caret-down"></i>
            </button>
        </div>
    </div>
`;

let el = document.querySelector('.header');

if (el) {
    el.innerHTML = template;
}


const logo = `
    <img class="logo__image" src="./images/logo.png" alt="logo">
    <p class="logo__text">Bran<span class="logo__text_brand">d</span></p>
`;

el = document.querySelector('.logo');

if (el) {
    el.innerHTML = logo;
}


let cartTimer = null;

const cartEnter = () => {
    if (cartTimer !== null) {
        clearTimeout(cartTimer);
        cartTimer = null;
    }
    const cart = document.querySelector('.h-cart__dropdown');
    if (cart.style.display !== 'flex') {
        cart.style.display = 'flex';
    }
};

const cartLeave = () => {
    if (cartTimer === null) {
        const cart = document.querySelector('.h-cart__dropdown');
        cartTimer = setTimeout(() => {
            cart.style.display = 'none';
        }, 333);
    }
};

el = document.querySelector('.h-cart__icon');
el.addEventListener('mouseenter', cartEnter);
el.addEventListener('mouseleave', cartLeave);

el = document.querySelector('.h-cart__dropdown');
el.addEventListener('mouseenter', cartEnter);
el.addEventListener('mouseleave', cartLeave);
