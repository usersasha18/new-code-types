  const keyButtons = document.querySelectorAll('.key-button');

  document.addEventListener('keydown', (event) => {
      const pressedKey = event.key.toLowerCase();
      const pressedCode = event.code
      keyButtons.forEach(button => {
          const buttonKey = button.getAttribute('data-button').toLowerCase();
          console.log(pressedCode)
          if (buttonKey === pressedKey) {
            button.classList.add('pressed');
            setTimeout(() => {
                button.classList.remove('pressed');
            }, 200); // Убираем класс через 200 миллисекунд
        }
      });
  });
