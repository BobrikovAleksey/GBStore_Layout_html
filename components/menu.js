template = `
    <ul class="menu__container">
        <li class="menu__list menu__list_empty">
            <a href="./index.html" class="menu__link">Главная</a>
        </li>

        <li class="menu__list">
            <a href="#" class="menu__link">Женщинам</a>
            <span class="menu__join"></span>

            <div class="dropdown menu__dropdown">
                <div class="dropdown__content">
                    <h3 class="dropdown__title">Одежда</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Блузки и рубашки</a></li>
                        <li><a class="dropdown__link" href="#">Брюки</a></li>
                        <li><a class="dropdown__link" href="#">Верхняя одежда</a></li>
                        <li><a class="dropdown__link" href="#">Водолазки</a></li>
                        <li><a class="dropdown__link" href="#">Джемперы и кардиганы</a></li>
                        <li><a class="dropdown__link" href="#">Джинсы</a></li>
                        <li><a class="dropdown__link" href="#">Жилеты</a></li>
                        <li><a class="dropdown__link" href="#">Карнавальные костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Комбинезоны</a></li>
                        <li><a class="dropdown__link" href="#">Костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Лонгсливы</a></li>
                        <li><a class="dropdown__link" href="#">Пиджаки и жакеты</a></li>
                        <li><a class="dropdown__link" href="#">Платья</a></li>
                        <li><a class="dropdown__link" href="#">Свитшоты</a></li>
                        <li><a class="dropdown__link" href="#">Толстовки</a></li>
                        <li><a class="dropdown__link" href="#">Туники</a></li>
                        <li><a class="dropdown__link" href="#">Футболки и топы</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Одежда</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Худи</a></li>
                        <li><a class="dropdown__link" href="#">Юбки</a></li>
                        <li><a class="dropdown__link" href="#">Шорты</a></li>
                    </ul>
                    <span class="dropdown__break"/>

                    <h3 class="dropdown__title">Обувь</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Балетки</a></li>
                        <li><a class="dropdown__link" href="#">Ботильоны</a></li>
                        <li><a class="dropdown__link" href="#">Ботинки</a></li>
                        <li><a class="dropdown__link" href="#">Кеды и кроссовки</a></li>
                        <li><a class="dropdown__link" href="#">Мокасины</a></li>
                        <li><a class="dropdown__link" href="#">Сандалии</a></li>
                        <li><a class="dropdown__link" href="#">Сапоги</a></li>
                        <li><a class="dropdown__link" href="#">Туфли</a></li>
                        <li><a class="dropdown__link" href="#">Шлепанцы и аквасоки</a></li>
                    </ul>
                    <span class="dropdown__break"/>

                    <h3 class="dropdown__title">Категории</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Большие размеры</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Категории</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Будущие мамы</a></li>
                        <li><a class="dropdown__link" href="#">Для высоких</a></li>
                        <li><a class="dropdown__link" href="#">Для невысоких</a></li>
                        <li><a class="dropdown__link" href="#">Белье</a></li>
                        <li><a class="dropdown__link" href="#">Новые поступления</a></li>
                        <li><a class="dropdown__link" href="#">Одежда для дома</a></li>
                        <li><a class="dropdown__link" href="#">Офис</a></li>
                        <li><a class="dropdown__link" href="#">Пляжная одежда</a></li>
                        <li><a class="dropdown__link" href="#">Религиозная</a></li>
                        <li><a class="dropdown__link" href="#">Свадьба</a></li>
                        <li><a class="dropdown__link" href="#">Спецодежда</a></li>
                    </ul>

                    <a class="dropdown__offer" href="#">
                        <img src="./images/banners/super_sale.jpg" alt="sale" />

                        <span class="dropdown__offer_text">Super Sale!</span>
                    </a>
                </div>
            </div>
        </li>

        <li class="menu__list">
            <a href="#" class="menu__link">Мужчинам</a>
            <span class="menu__join"></span>

            <div class="dropdown menu__dropdown">
                <div class="dropdown__content">
                    <h3 class="dropdown__title">Одежда</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Брюки</a></li>
                        <li><a class="dropdown__link" href="#">Верхняя одежда</a></li>
                        <li><a class="dropdown__link" href="#">Водолазки</a></li>
                        <li><a class="dropdown__link" href="#">Джемперы и кардиганы</a></li>
                        <li><a class="dropdown__link" href="#">Джинсы</a></li>
                        <li><a class="dropdown__link" href="#">Жилеты</a></li>
                        <li><a class="dropdown__link" href="#">Карнавальные костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Комбинезоны и полукомбинезоны</a></li>
                        <li><a class="dropdown__link" href="#">Костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Лонгсливы</a></li>
                        <li><a class="dropdown__link" href="#">Пиджаки и жакеты</a></li>
                        <li><a class="dropdown__link" href="#">Рубашки</a></li>
                        <li><a class="dropdown__link" href="#">Свитшоты</a></li>
                        <li><a class="dropdown__link" href="#">Толстовки</a></li>
                        <li><a class="dropdown__link" href="#">Футболки и майки</a></li>
                        <li><a class="dropdown__link" href="#">Худи</a></li>
                        <li><a class="dropdown__link" href="#">Шорты</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Обувь</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Ботинки</a></li>
                        <li><a class="dropdown__link" href="#">Кеды</a></li>
                        <li><a class="dropdown__link" href="#">Кроссовки</a></li>
                        <li><a class="dropdown__link" href="#">Мокасины</a></li>
                        <li><a class="dropdown__link" href="#">Слипоны</a></li>
                        <li><a class="dropdown__link" href="#">Туфли</a></li>
                        <li><a class="dropdown__link" href="#">Шлепанцы</a></li>
                    </ul>
                    <span class="dropdown__break"/>

                    <h3 class="dropdown__title">Категории</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Большие размеры</a></li>
                        <li><a class="dropdown__link" href="#">Для высоких</a></li>
                        <li><a class="dropdown__link" href="#">Для невысоких</a></li>
                        <li><a class="dropdown__link" href="#">Белье</a></li>
                        <li><a class="dropdown__link" href="#">Новые поступления</a></li>
                        <li><a class="dropdown__link" href="#">Одежда для дома</a></li>
                        <li><a class="dropdown__link" href="#">Офис</a></li>
                        <li><a class="dropdown__link" href="#">Пляжная одежда</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Категории</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Религиозная</a></li>
                        <li><a class="dropdown__link" href="#">Свадьба</a></li>
                        <li><a class="dropdown__link" href="#">Спецодежда</a></li>
                    </ul>

                    <a class="dropdown__offer" href="#">
                        <img src="./images/banners/super_sale.jpg" alt="sale" />

                        <span class="dropdown__offer_text">Super Sale!</span>
                    </a>
                </div>
            </div>
        </li>

        <li class="menu__list">
            <a href="#" class="menu__link">Детям</a>
            <span class="menu__join"></span>

            <div class="dropdown menu__dropdown">
                <div class="dropdown__content">
                    <h3 class="dropdown__title">Для мальчиков</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Белье</a></li>
                        <li><a class="dropdown__link" href="#">Брюки и шорты</a></li>
                        <li><a class="dropdown__link" href="#">Верхняя одежда</a></li>
                        <li><a class="dropdown__link" href="#">Водолазки</a></li>
                        <li><a class="dropdown__link" href="#">Джемперы и кардиганы</a></li>
                        <li><a class="dropdown__link" href="#">Джинсы</a></li>
                        <li><a class="dropdown__link" href="#">Жилеты</a></li>
                        <li><a class="dropdown__link" href="#">Карнавальные костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Комбинезоны и полукомбинезоны</a></li>
                        <li><a class="dropdown__link" href="#">Костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Лонгсливы</a></li>
                        <li><a class="dropdown__link" href="#">Одежда для дома</a></li>
                        <li><a class="dropdown__link" href="#">Пиджаки и жакеты</a></li>
                        <li><a class="dropdown__link" href="#">Плавки и бордшорты</a></li>
                        <li><a class="dropdown__link" href="#">Рубашки</a></li>
                        <li><a class="dropdown__link" href="#">Свитшоты</a></li>
                        <li><a class="dropdown__link" href="#">Толстовки</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Для мальчиков</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Фартуки</a></li>
                        <li><a class="dropdown__link" href="#">Футболки и майки</a></li>
                        <li><a class="dropdown__link" href="#">Худи</a></li>
                    </ul>
                    <span class="dropdown__break"/>

                    <h3 class="dropdown__title">Для девочек</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Белье</a></li>
                        <li><a class="dropdown__link" href="#">Блузки и рубашки</a></li>
                        <li><a class="dropdown__link" href="#">Брюки и шорты</a></li>
                        <li><a class="dropdown__link" href="#">Верхняя одежда</a></li>
                        <li><a class="dropdown__link" href="#">Водолазки</a></li>
                        <li><a class="dropdown__link" href="#">Джемперы и кардиганы</a></li>
                        <li><a class="dropdown__link" href="#">Джинсы и джеггинсы</a></li>
                        <li><a class="dropdown__link" href="#">Для крещения</a></li>
                        <li><a class="dropdown__link" href="#">Жилеты</a></li>
                        <li><a class="dropdown__link" href="#">Карнавальные костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Комбинезоны и полукомбинезоны</a></li>
                        <li><a class="dropdown__link" href="#">Костюмы</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Для девочек</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Купальные костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Лонгсливы</a></li>
                        <li><a class="dropdown__link" href="#">Одежда для дома</a></li>
                        <li><a class="dropdown__link" href="#">Пиджаки и жакеты</a></li>
                        <li><a class="dropdown__link" href="#">Платья</a></li>
                        <li><a class="dropdown__link" href="#">Сарафаны</a></li>
                        <li><a class="dropdown__link" href="#">Свитшоты</a></li>
                        <li><a class="dropdown__link" href="#">Толстовки</a></li>
                        <li><a class="dropdown__link" href="#">Туники</a></li>
                        <li><a class="dropdown__link" href="#">Фартуки</a></li>
                        <li><a class="dropdown__link" href="#">Футболки и топы</a></li>
                        <li><a class="dropdown__link" href="#">Худи</a></li>
                        <li><a class="dropdown__link" href="#">Юбки</a></li>
                    </ul>
                    <span class="dropdown__break"/>

                    <h3 class="dropdown__title">Для новорожденных</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Белье</a></li>
                        <li><a class="dropdown__link" href="#">Боди и ползунки</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Для новорожденных</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Брюки и шорты</a></li>
                        <li><a class="dropdown__link" href="#">Верхняя одежда</a></li>
                        <li><a class="dropdown__link" href="#">Жакеты и болеро</a></li>
                        <li><a class="dropdown__link" href="#">Комбинезоны и полукомбинезоны</a></li>
                        <li><a class="dropdown__link" href="#">Конверты</a></li>
                        <li><a class="dropdown__link" href="#">Костюмы и комплекты</a></li>
                        <li><a class="dropdown__link" href="#">Карнавальные костюмы</a></li>
                        <li><a class="dropdown__link" href="#">Кофточки и джемперы</a></li>
                        <li><a class="dropdown__link" href="#">Носки, колготки</a></li>
                        <li><a class="dropdown__link" href="#">Одежда для дома</a></li>
                        <li><a class="dropdown__link" href="#">Пинетки</a></li>
                        <li><a class="dropdown__link" href="#">Платья и юбки</a></li>
                        <li><a class="dropdown__link" href="#">Распашонки</a></li>
                    </ul>
                </div>
            </div>
        </li>

        <li class="menu__list">
            <a href="#" class="menu__link">Аксессуары</a>
            <span class="menu__join"></span>

            <div class="dropdown menu__dropdown">
                <div class="dropdown__content">
                    <h3 class="dropdown__title">Головные уборы</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Балаклавы</a></li>
                        <li><a class="dropdown__link" href="#">Бейсболки</a></li>
                        <li><a class="dropdown__link" href="#">Береты</a></li>
                        <li><a class="dropdown__link" href="#">Капоры</a></li>
                        <li><a class="dropdown__link" href="#">Кепи</a></li>
                        <li><a class="dropdown__link" href="#">Козырьки</a></li>
                        <li><a class="dropdown__link" href="#">Колпаки медицинские</a></li>
                        <li><a class="dropdown__link" href="#">Комплекты</a></li>
                        <li><a class="dropdown__link" href="#">Маски ветрозащитные</a></li>
                        <li><a class="dropdown__link" href="#">Наушники утепленные</a></li>
                        <li><a class="dropdown__link" href="#">Панамы</a></li>
                        <li><a class="dropdown__link" href="#">Повязки на голову</a></li>
                        <li><a class="dropdown__link" href="#">Фуражки</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Головные уборы</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Хиджабы</a></li>
                        <li><a class="dropdown__link" href="#">Чалма</a></li>
                        <li><a class="dropdown__link" href="#">Шапки</a></li>
                        <li><a class="dropdown__link" href="#">Шапки-ушанки</a></li>
                        <li><a class="dropdown__link" href="#">Шапки-шлемы</a></li>
                        <li><a class="dropdown__link" href="#">Шляпы</a></li>
                    </ul>
                    <span class="dropdown__break"/>

                    <h3 class="dropdown__title">Перчатки и варежки</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Варежки</a></li>
                        <li><a class="dropdown__link" href="#">Манжеты</a></li>
                        <li><a class="dropdown__link" href="#">Митенки</a></li>
                        <li><a class="dropdown__link" href="#">Муфты</a></li>
                        <li><a class="dropdown__link" href="#">Перчатки</a></li>
                    </ul>
                </div>

                <div class="dropdown__content">
                    <h3 class="dropdown__title">Сумки и рюкзаки</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Аксессуары для сумок</a></li>
                        <li><a class="dropdown__link" href="#">Клатчи</a></li>
                        <li><a class="dropdown__link" href="#">Косметички</a></li>
                        <li><a class="dropdown__link" href="#">Несессеры</a></li>
                        <li><a class="dropdown__link" href="#">Папки-сумки</a></li>
                        <li><a class="dropdown__link" href="#">Портфели</a></li>
                        <li><a class="dropdown__link" href="#">Рюкзаки и ранцы</a></li>
                        <li><a class="dropdown__link" href="#">Сумки</a></li>
                        <li><a class="dropdown__link" href="#">Для ноутбука</a></li>
                        <li><a class="dropdown__link" href="#">Сумки хозяйственные</a></li>
                        <li><a class="dropdown__link" href="#">Сумки-тележки</a></li>
                    </ul>
                </div>
            </div>
        </li>

        <li class="menu__list menu__list_empty">
            <a href="#" class="menu__link">Рекомендации</a>
        </li>

        <li class="menu__list">
            <a href="#" class="menu__link">Тренды</a>
            <span class="menu__join"></span>

            <div class="dropdown menu__dropdown">
                <div class="dropdown__content">
                    <h3 class="dropdown__title">Направления</h3>

                    <ul>
                        <li><a class="dropdown__link" href="#">Выбор стилиста</a></li>
                        <li><a class="dropdown__link" href="#">Мастер-класс</a></li>
                        <li><a class="dropdown__link" href="#">Женские образы</a></li>
                        <li><a class="dropdown__link" href="#">Мужские образы</a></li>
                        <li><a class="dropdown__link" href="#">Детские образы</a></li>
                        <li><a class="dropdown__link" href="#">Галерея стиля</a></li>
                        <li><a class="dropdown__link" href="#">Эволюция стиля</a></li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
`;

el = document.querySelector('.menu');

if (el) {
    el.insertAdjacentHTML('afterbegin', template);
}


const menuList = el.querySelectorAll('.menu__list');
menuList.forEach((el) => el.addEventListener('mouseenter', (event) => {
    const menu = document.querySelector('.menu__container');
    const el = event.target;
    const join = el.querySelector('.menu__join');
    const dropdown = el.querySelector('.menu__dropdown');

    if (!dropdown) return;

    join.style.width = `${el.offsetWidth - 5}px`;
    join.style.left = `${el.offsetLeft + 2}px`;

    const center = Math.floor(el.offsetLeft + el.offsetWidth / 2);
    const width = dropdown.offsetWidth;

    let left = Math.floor(center - width / 2);
    if (left < 0) {
        left = 0;
    } else if (left + width > menu.offsetWidth) {
        left -= left + width - menu.offsetWidth;
    }

    dropdown.style.left = `${left}px`;
}));
