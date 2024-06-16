const register_modal_form = document.querySelector('.modal-form');
const register_modal_button = document.querySelector('[type="submit"]');
const inner_modal_window_reg = document.querySelector('.inner-register-modal');
const modal_window_reg = document.querySelector('.register-modal');
const modal_window_reg_title = document.querySelector('.register-modal > h2');
const user_data_display = document.querySelector('.user-data');
const header_logout = document.querySelector('.header-logout');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('logout')) {
        logoutUser();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (isLoggedIn && users.length > 0) {
        displayUserData(users[users.length - 1]); // Отображаем данные последнего зарегистрированного пользователя
    }
});

register_modal_form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = register_modal_form.querySelector('[name="name"]').value;
    const email = register_modal_form.querySelector('[name="email"]').value;
    const password = register_modal_form.querySelector('[name="password"]').value;

    const formData = {
        username: name,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('isLoggedIn', 'true'); // Устанавливаем флаг входа в систему

    console.log('User data saved:', formData);

    modal_window_reg.style.gap = "10rem";
    loaderTemplate();
    updateText("Спасибо за предоставление данных!", 2000)
    .then(() => updateText("Загружаем)", 2000))
    .then(() => updateText("Еще немного", 2500))
    .then(() => updateText("Возвращаю вас на главный экран", 2500));

    setTimeout(() => {
        inner_modal_window_reg.classList.remove('show-modal');
        modal_window_reg.classList.remove('register-modal-open');
        displayUserData(formData); // Отображаем данные пользователя
    }, 12000);
});

const updateText = (text, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            modal_window_reg_title.textContent = text;
            resolve();
        }, delay);
    });
};

function loaderTemplate() {
    let html = `
        <div class="socket">
          
		<div class="socket">
			<div class="gel center-gel">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c1 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c2 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c3 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c4 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c5 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c6 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			
			<div class="gel c7 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			
			<div class="gel c8 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c9 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c10 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c11 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c12 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c13 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c14 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c15 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c16 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c17 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c18 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c19 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c20 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c21 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c22 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c23 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c24 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c25 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c26 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c28 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c29 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c30 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c31 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c32 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c33 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c34 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c35 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c36 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c37 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			
		</div>
	
        </div>
    `;
    inner_modal_window_reg.innerHTML = html;
}

function displayUserData(userData) {
    user_data_display.innerHTML = `
        <h3>Данные пользователя:</h3>
        <p>Имя: ${userData.username}</p>
        <p>Email: ${userData.email}</p>
        <button class="logout">Выйти</button>
    `;
    document.querySelector('.auth').style.display = "none";
    document.querySelector('.register').style.display = "none";
    header_logout.style.display = "block"; // Показываем кнопку "Выйти"
}

function logoutUser() {
    localStorage.setItem('isLoggedIn', 'false'); // Сбрасываем флаг входа в систему
    user_data_display.innerHTML = '';
    document.querySelector('.auth').style.display = "block";
    document.querySelector('.register').style.display = "block";
    header_logout.style.display = "none"; // Скрываем кнопку "Выйти"
}