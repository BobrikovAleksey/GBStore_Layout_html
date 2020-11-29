template = `
    <div class="feedback__container">
        <div class="review">
            <figure class="review__figure" data-review="1">
                <img class="review__photo" src="./images/photos/user001.jpg" alt="Photo">

                <div class="review__block">
                    <p class="review__message">
                        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ea, quasi.”
                    </p>

                    <h3 class="review__user_name">Татьяна Г.</h3>

                    <h4 class="review__user_city">Москва, Россия</h4>
                </div>
            </figure>

            <figure class="review__figure review__figure_active" data-review="2">
                <img class="review__photo" src="./images/photos/user002.jpg" alt="Photo">

                <div class="review__block">
                    <p class="review__message">
                        “Accusantium amet atque commodi consequatur delectus doloremque ea eos est et facilis illo illum
                        in incidunt laborum laudantium minima, nam nemo, odit possimus quaerat quidem ratione sapiente 
                        vitae voluptatem voluptatum!”
                    </p>

                    <h3 class="review__user_name">Марина С.</h3>

                    <h4 class="review__user_city">Санкт-Петербург, Россия</h4>
                </div>
            </figure>

            <figure class="review__figure" data-review="3">
                <img class="review__photo" src="./images/photos/user003.jpg" alt="Photo">

                <div class="review__block">
                    <p class="review__message">
                        “Animi asperiores at aut consequatur cum cumque ea earum eos esse excepturi explicabo facilis 
                        fugiat in iusto magnam magni maxime modi necessitatibus obcaecati quam quos recusandae 
                        repellendus repudiandae, soluta vel velit veritatis, voluptas voluptates?”
                    </p>

                    <h3 class="review__user_name">Екатерина М.</h3>

                    <h4 class="review__user_city">Москва, Россия</h4>
                </div>
            </figure>

            <nav class="review__navigation">
                <button class="review__switch review__switch_inactive" data-review="1" />

                <button class="review__switch" data-review="2" />

                <button class="review__switch review__switch_inactive" data-review="3" />
            </nav>
        </div>

        <div class="subscribe">
            <h2 class="subscribe__title">Подписаться</h2>

            <p class="subscribe__description">Для получения наших предложений и промо акций</p>

            <form class="subscribe__form" action="#">
                <input class="subscribe__input" type="email" autocomplete="off" placeholder="Введите Ваш Email">

                <button class="subscribe__button" type="submit">Подписаться</button>
            </form>
        </div>
    </div>
`;

el = document.querySelector('.feedback');

if (el) {
    el.insertAdjacentHTML('afterbegin', template);
}


const review = {
    reviewList: el.querySelectorAll('.review__figure'),
    switchList: el.querySelectorAll('.review__switch'),
};

review.switchList.forEach((el) => el.addEventListener('click', (event) => {
    const button = event.target;
    const id = button.getAttribute('data-review');

    review.switchList.forEach((el) => {
        if (el.getAttribute('data-review') === id) {
            el.className = 'review__switch';
        } else {
            el.className = 'review__switch review__switch_inactive';
        }

    });

    review.reviewList.forEach((el) => {
        if (el.getAttribute('data-review') === id) {
            el.className = 'review__figure review__figure_active';
        } else {
            el.className = 'review__figure';
        }
    });
}));


const email = {
    confirmed: false,
    button: el.querySelector('.subscribe__button'),
    input: el.querySelector('.subscribe__input'),
    message: `${Validator.errorMessage('email')}\nПри вводе корректного адреса цвет поля станет зеленым.`,
};

email.button.title = email.message;

email.input.addEventListener('keydown', (event) => {
    if (!Validator.verifyEmailSymbol(event.key)) {
        event.preventDefault();
    }
});

email.input.addEventListener('input', () => {
    email.confirmed = Validator.verifyEmail(email.input.value);

    if (email.confirmed) {
        email.input.classList.add('subscribe__input_enabled');
        email.button.title = '';
        email.button.classList.add('subscribe__button_enabled');
    } else {
        email.input.classList.remove('subscribe__input_enabled');
        email.button.title = email.message;
        email.button.classList.remove('subscribe__button_enabled');
    }
});

email.button.addEventListener('click', (event) => {
    event.preventDefault();

    if (!email.confirmed) {
        return;
    }

    email.input.classList.remove('subscribe__input_enabled');
    email.button.title = this.description;
    email.button.classList.remove('subscribe__button_enabled');
    email.input.value = '';
    email.confirmed = false;
});
