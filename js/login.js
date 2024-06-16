const user_data_display_log = document.querySelector('.user-data');
const inner_modal_login_c = document.querySelector('.inner-register-modal-login');
const modal_window_login_c = document.querySelector('.login-modal');

document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (isLoggedIn && users.length > 0) {
        displayUserData(users[users.length - 1]); // Отображаем данные последнего зарегистрированного пользователя
    }
});

document.querySelector('.modal-form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем действие по умолчанию

    const emailInput = document.querySelector('[name="email_login"]');
    const passwordInput = document.querySelector('[name="password_login"]');

    const email = emailInput.value;
    const password = passwordInput.value;

    // Получаем данные из localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    console.log('Введенный email:', email);
    console.log('Введенный пароль:', password);

    if (Array.isArray(storedUsers)) {
        let userFound = false;
        for (let i = 0; i < storedUsers.length; i++) {
            const storedUser = storedUsers[i];
            if (storedUser.email === email && storedUser.password === password) {
                console.log('Вы вошли в аккаунт');
                userFound = true;
                localStorage.setItem('isLoggedIn', 'true'); // Устанавливаем флаг входа в систему
                displayUserData(storedUser); // Отображаем данные пользователя
                inner_modal_login_c.style.display = 'none'; // Скрываем модальное окно входа
                modal_window_login_c.style.display = "none";
                break;
            }
        }
        if (!userFound) {
            console.log('Неверный email или пароль');
        }
    } else {
        console.log('Пользователи не найдены в localStorage');
    }
});

function displayUserData(userData) {
    user_data_display_log.innerHTML = `
        <h3>Данные пользователя:</h3>
        <p>Имя: ${userData.username}</p>
        <p>Email: ${userData.email}</p>
        <button class="logout">Выйти</button>
    `;
    document.querySelector('.auth').style.display = "none";
    document.querySelector('.register').style.display = "none";
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('logout')) {
        logoutUser();
    }
});

function logoutUser() {
    localStorage.setItem('isLoggedIn', 'false'); // Сбрасываем флаг входа в систему
    user_data_display_log.innerHTML = '';
    document.querySelector('.auth').style.display = "block";
    document.querySelector('.register').style.display = "block";

    // Сбрасываем форму входа
    const loginForm = document.querySelector('.modal-form-login');
    loginForm.reset();

    // Восстанавливаем модальное окно входа
    inner_modal_login_c.style.opacity = '0';
    modal_window_login_c.style.opacity = "0";
}