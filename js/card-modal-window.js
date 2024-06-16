const card_buttons = document.querySelectorAll(".lang-button");
const modal_card_container = document.querySelector(".modal-card-container");
const lang_title = document.querySelector('.lang-name');
const resources_container = document.querySelector('.resources-container'); // Предполагается, что у вас есть элемент для отображения ресурсов

const languageResources = {
  Js: [
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "JavaScript.info", url: "https://javascript.info/" },
    { name: "Дока JS", url: "https://doka.guide/" },
    { name: "Самый лучший учебник по JS", url: "https://learn.javascript.ru/" },
    { name: "Видео урок - 1", url: "https://www.youtube.com/watch?v=t5zkYgaEN0E" },
    { name: "Видео урок - 2", url: "https://www.youtube.com/watch?v=fcMcf_4PjfI" },
    { name: "Видео урок - 3", url: "https://www.youtube.com/watch?v=CxgOKJh4zWE" },
  ],
  Python: [
    { name: "Python.org", url: "https://www.python.org/" },
    { name: "Real Python", url: "https://realpython.com/" },
    { name: "Учебник по Python", url: "https://pythonworld.ru/samouchitel-python" },
    { name: "Видео урок - 1", url: "https://www.youtube.com/watch?v=CxgOKJh4zWE" },
    { name: "Видео урок - 2", url: "https://www.youtube.com/watch?v=CxgOKJh4zWE" },
    { name: "Видео урок - 3", url: "https://www.youtube.com/watch?v=CxgOKJh4zWE" },
  ],
  Java: [
    { name: "Oracle Java Documentation", url: "https://docs.oracle.com/javase/tutorial/" },
    { name: "JavaWorld", url: "https://www.javaworld.com/" }
  ],
    Cs: [
    { name: "Microsoft C# Documentation", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    { name: "C# Station", url: "https://csharp-station.com/" }
  ],
  php: [
    { name: "PHP.net", url: "https://www.php.net/" },
    { name: "PHP The Right Way", url: "https://phptherightway.com/" }
  ]
};

card_buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    const data_button = button.dataset.lang;
    showTypingTrainerModal(data_button);
  });
});

function showTypingTrainerModal(lang) {
  modal_card_container.style.display = 'block';
  lang_title.innerHTML = lang;
  displayResources(lang);
}

function displayResources(lang) {
  const resources = languageResources[lang];
  if (resources) {
    let resourcesHTML = '<ul>';
    resources.forEach(resource => {
      resourcesHTML += `<li><a href="${resource.url}" target="_blank">${resource.name}</a></li>`;
    });
    resourcesHTML += '</ul>';
    resources_container.innerHTML = resourcesHTML;
  } else {
    resources_container.innerHTML = '<p>Пока нет источников</p>';
  }
}

function closeModal() {
  modal_card_container.style.display = 'none';
}

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("close-card-button")) {
    closeModal();
  }
});