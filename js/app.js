let Username =document.querySelector('#register__modal_name')
let Userage =document.querySelector('#register__modal_age')
let Userpass =document.querySelector('#register__modal_password')
let UserpassConfirm =document.querySelector('#register__modal_password-confirm')
// console.log(Userage, Username, Userpass, UserpassConfirm);
function renderCard(register__modal_password) {
    let cardsContainer = document.getElementById('cards-container');

    // Получение информации через промпт
    let imageUrl = prompt('Введите URL изображения:');
    let mainHeading = prompt('Введите заголовок:');
    let subHeading = prompt('Введите подзаголовок:');
    let additionalInfo = prompt('Введите дополнительную информацию:');

    // Создание карточки через innerHTML
    let card = `
      <div class="card">
        <img src="${imageUrl}">
        <h2>${mainHeading}</h2>
        <span>${additionalInfo}</span>
        <h6>${subHeading}</h6>
      </div>
    `;
    
    // Добавление карточки в контейнер
    cardsContainer.innerHTML += card;
  }
  function register() {
    if(Userpass.value != UserpassConfirm.value){
      console.log('ne ok')
      return;
    }
    if(Username.length <= 6){
      console.log(true);
      return;
    }else{
      console.log(false);
      return
    }
  }

// - Авторизация*/Регистрация* - 5 баллов
// - CRUD - 40 баллов
// - Модальное окно для товара - 5 баллов
// - Детальный просмотр для товара - 5 баллов
// - Поиск - 5 баллов
// - Пагинация - 5 баллов
// - Фильтрация - 5 баллов
// - Json-server - 5 баллов
// - Адаптивность  - 5 баллов
// - Дизайн - 20 баллов
// - Роль админа для сайта* - 5 баллов