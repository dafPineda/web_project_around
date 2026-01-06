let buttonEdit = document.querySelector('.profile__button-edit');
let buttonAdd = document.querySelector('.profile__button-add');

let blockForms = document.querySelector('.forms');
let blockFormEdit = blockForms.querySelector("#edit-profile__form");
let blockFormAdd = blockForms.querySelector("#new-element__form");

let formCloseEdit = blockFormEdit.querySelector('#formsCloseEdit');
let formCloseAdd = blockFormAdd.querySelector("#formsCloseAdd");

let profileName = document.querySelector('.profile__name');
let profileWork = document.querySelector('.profile__ocupation');
let formEdit = document.forms.formEdit;
let editName = formEdit.elements.name;
let editWork = formEdit.elements.work;

const elementsContainer = document.querySelector('.element');

const imageWindow = document.querySelector('.image-window');
const imageWindowImg = imageWindow.querySelector('.image-window__image');
const imageWindowClose = imageWindow.querySelector('.image-window__button-close');

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

function openFormEdit() {
  blockForms.style.display = 'block';
  blockFormEdit.style.display = 'block';
  
  editName.value = profileName.textContent;
  editWork.value = profileWork.textContent;

}

function openFormAdd(){
  blockForms.style.display = 'block';
  blockFormAdd.style.display = 'block';
}

function closeForm() { //Se puede mejorar codigo
  blockForms.style.display = 'none';
  blockFormEdit.style.display= 'none';
  blockFormAdd.style.display = 'none';
  /* buttonEditProfileSave.disabled = true;
  buttonNewElementSave.disabled = true; */
}

function createNewPlace(name, link){
  const template = document.querySelector('.template-element').content;
  const placeCard = template.querySelector('.element__card').cloneNode(true);
  const image = placeCard.querySelector('.element__card-image');

  placeCard.querySelector('.element__card-text').textContent = name;
  image.src = link;
  image.alt = name;

  placeCard.querySelector(".element__card-heart").addEventListener("click", function (evt) {
    evt.target.classList.toggle('element__card-heart_active');
  });
  placeCard.querySelector(".element__card-trash").addEventListener("click", function(){
    placeCard.remove();
  })

  image.addEventListener('click', () => {
    imageWindowImg.src = link;
    imageWindowImg.alt = name;
    imageWindow.classList.add('image-window_open');
  });

  return placeCard;
}

buttonEdit.addEventListener('click', openFormEdit);
buttonAdd.addEventListener('click', openFormAdd);

formCloseAdd.addEventListener('click', closeForm);
formCloseEdit.addEventListener('click', closeForm);

imageWindowClose.addEventListener('click', () => {
  imageWindow.classList.remove('image-window_open');
});

initialCards.forEach(card => {
  const cardElement = createNewPlace(card.name, card.link);
  elementsContainer.append(cardElement);
});
