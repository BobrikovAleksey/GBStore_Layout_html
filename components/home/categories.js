template = `
    <table class="categories__container">
        <tr>
            <td class="categories__cell" rowspan="2">
                <a href="#" class="categories__item">
                    <img class="categories__image" src="./images/banners/men.jpg" alt="Category for men">

                    <div class="categories__title">
                        <h4 class="categories__title_h4">Hot Deal</h4>

                        <h3 class="categories__title_h3">For Men</h3>
                    </div>
                </a>
            </td>

            <td class="categories__cell">
                <a href="#" class="categories__item">
                    <img class="categories__image" src="./images/banners/women.jpg" alt="Category for women">

                    <div class="categories__title">
                      <h4 class="categories__title_h4">30% offer</h4>

                      <h3 class="categories__title_h3">Women</h3>
                    </div>
                </a>
            </td>
        </tr>

        <tr>
            <td class="categories__cell" rowspan="2">
                <a href="#" class="categories__item">
                    <img class="categories__image" src="./images/banners/kids.jpg" alt="Category for kids">

                    <div class="categories__title">
                      <h4 class="categories__title_h4">New Arrivals</h4>

                      <h3 class="categories__title_h3">For Kids</h3>
                    </div>
                </a>
            </td>
        </tr>

        <tr>
            <td class="categories__cell">
                <a href="#" class="categories__item">
                    <img class="categories__image" src="./images/banners/accessories.jpg" alt="Category for accessories">

                    <div class="categories__title">
                      <h4 class="categories__title_h4">Luxirous &amp; Trendy</h4>

                      <h3 class="categories__title_h3">Accessories</h3>
                    </div>
                </a>
            </td>
        </tr>
    </table>
`;

el = document.querySelector('.categories');

if (el) {
    el.insertAdjacentHTML('afterbegin', template);
}
