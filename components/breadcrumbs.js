template = `
    <div class="breadcrumbs__container">
        <h2 class="breadcrumbs__title">Новые поступления</h2>

        <ul class="breadcrumbs__menu">
            <li><a href="./index.html" class="breadcrumbs__link">Главная</a></li>

            <li><a href="#" class="breadcrumbs__link">Женщинам</a></li>

            <li><a href="#" class="breadcrumbs__link">Новые поступления</a></li>
        </ul>
    </div>
`;

el = document.querySelector('.breadcrumbs');

if (el) {
    el.insertAdjacentHTML('afterbegin', template);
}
