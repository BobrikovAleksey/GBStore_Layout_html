template = `
    <div class="feature__container">
        <div class="feature__banner">
            <img src="./images/banners/banner_feature.jpg" alt="Banner" />

            <div class="feature__title">
                <h3 class="feature__title_h3">30% <span class="feature__title_brand">Offer</span></h3>

                <h4 class="feature__title_h4">For Women</h4>
            </div>
        </div>

        <div class="feature__content">
            <article class="feature__article">
                <div class="feature__icon">
                    <img src="./images/icons/delivery.png" alt="Delivery" />
                </div>

                <div class="feature__direction">
                    <h3 class="feature__direction_h3">Бесплатная доставка</h3>

                    <p class="feature__direction_p">
                        Бесплатная доставка товара в большинство населенных пунктов России.
                    </p>
                </div>
            </article>

            <article class="feature__article">
                <div class="feature__icon">
                    <img src="./images/icons/discount.png" alt="Discount" />
                </div>

                <div class="feature__direction">
                    <h3 class="feature__direction_h3">Распродажи и скидки</h3>

                    <p class="feature__direction_p">
                        Мы регулярно проводим акции и даем скидки на различные группы товаров.
                    </p>
                </div>
            </article>

            <article class="feature__article">
                <div class="feature__icon">
                    <img src="./images/icons/quality.png" alt="Quality" />
                </div>

                <div class="feature__direction">
                    <h3 class="feature__direction_h3">Гарантия качества</h3>

                    <p class="feature__direction_p">
                      Всегда, перед отправлением товара тщательно проверяем качество изделий.
                    </p>
                </div>
            </article>
        </div>
    </div>
`;

el = document.querySelector('.feature');

if (el) {
    el.insertAdjacentHTML('afterbegin', template);
}
