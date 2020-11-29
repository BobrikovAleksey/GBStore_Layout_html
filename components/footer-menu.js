template = `
    <div class="footer-menu__container">
        <div>
            <a href="./index.html" class="logo footer-logo"></a>

            <div class="footer-menu__about">
                <p class="footer-menu__about_text">
                    Интернет-магазин <b>BRAND</b> – это доступные цены, широкий, регулярно обновляемый ассортимент.
                    В онлайн-каталоге <b>BRAND</b> представлено около <b>10 000</b> ведущих брендов женской, мужской и 
                    детской одежды и обуви.
                </p>

                <p class="footer-menu__about_text">
                    Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду 
                    критериев: цена, материал изготовления, сезонность, бренд.
                </p>
            </div>
        </div>

        <nav>
            <ul class="footer-menu__menu">
                <li class="footer-menu__list">
                    <h2 class="footer-menu__title">Компания</h2>

                    <ul>
                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="./index.html">Главная</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Магазин</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">О нас</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Как мы работаем</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Контакты</a>
                        </li>
                    </ul>
                </li>

                <li class="footer-menu__list">
                    <h2 class="footer-menu__title">Информация</h2>

                    <ul>
                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Условия и положения</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Политика конфиденциальности</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Как купить</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Как продать</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Реклама</a>
                        </li>

                    </ul>
                </li>

                <li class="footer-menu__list">
                    <h2 class="footer-menu__title">Категории</h2>

                    <ul>
                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Женщинам</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Мужчинам</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Детям</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Аксессуары</a>
                        </li>

                        <li class="footer-menu__sublist">
                            <a class="footer-menu__link" href="#">Показать все товары</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
`;


el = document.querySelector('.footer-menu');

if (el) {
    el.insertAdjacentHTML('afterbegin', template);
}


el = document.querySelector('.footer-logo');

if (el) {
    el.insertAdjacentHTML('afterbegin', logo);
}
