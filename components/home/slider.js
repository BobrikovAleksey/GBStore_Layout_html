template = `
    <div class="slider__container">
        <img class="slider__image" src="./images/banners/slider_home.jpg" alt="slider" />

        <div class="slider__text">
            <h2 class="slider__title">The Brand</h2>

            <h3 class="slider__subtitle">Of Luxerious<span class="slider__subtitle_brand">Fashion</span></h3>
        </div>
    </div>
`;

el = document.querySelector('.slider');

if (el) {
    el.insertAdjacentHTML('afterbegin', template);
}
