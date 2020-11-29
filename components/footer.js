template = `
    <div class="footer__container">
        <p class="footer__text">
            ${(new Date()).getFullYear()} © Brand — модный интернет-магазин одежды, обуви и аксессуаров.
            Все права защищены. Доставка по всей России.
        </p>

        <nav>
            <ul class="footer__social">
                <li class="footer__link">
                    <a href="https://ru-ru.facebook.com/" target="_blank">
                        <button class="footer__btn footer__btn_default footer__btn_facebook">
                            <i class="fa fa-facebook"></i>
                        </button>
                    </a>
                </li>

                <li class="footer__link">
                    <a href="https://twitter.com/" target="_blank">
                        <button class="footer__btn footer__btn_brand footer__btn_twitter">
                            <i class="fa fa-twitter"></i>
                        </button>
                    </a>
                </li>

                <li class="footer__link">
                    <a href="https://www.linkedin.cn/" target="_blank">
                        <button class="footer__btn footer__btn_default footer__btn_linkedin">
                            <i class="fa fa-linkedin"></i>
                        </button>
                    </a>
                </li>

                <li class="footer__link">
                    <a href="https://www.pinterest.ru/" target="_blank">
                        <button class="footer__btn footer__btn_default footer__btn_pinterest">
                            <i class="fa fa-pinterest-p"></i>
                        </button>
                    </a>
                </li>

                <li class="footer__link">
                    <a href="https://plus.google.com/" target="_blank">
                        <button class="footer__btn footer__btn_default footer__btn_google">
                            <i class="fa fa-google-plus"></i>
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
`;

el = document.querySelector('.footer');

if (el) {
    el.insertAdjacentHTML('afterbegin', template);
}
