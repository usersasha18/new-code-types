document.querySelector('.form-contact').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const message = `Имя: ${formData.get('name')}\nПочта: ${formData.get('email')}\nСообщение: ${formData.get('message')}`;
    const botToken = '7436732682:AAG8VcdgmQ2zFA3IZdpt-wwbbVDke03BW7E';
    const chatId = '-1002160419597'; // Это может быть ваш ID в Telegram или ID группы/канала

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            // Show modal
            const modal = document.getElementById('myModal');
            modal.style.display = 'block';

            // Close modal when close button is clicked
            const closeBtn = document.getElementsByClassName('close-contacts')[0];
            closeBtn.onclick = function() {
                modal.style.display = 'none';
            }

            // Close modal when user clicks outside of it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            }
        } else {
            alert('Ошибка при отправке сообщения.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Ошибка при отправке сообщения.');
    });
});