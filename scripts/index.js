let buttonEdit = document.querySelector('.profile__button-edit');
let buttonNewElement = document.querySelector('.profile__button-add');

let shadow = document.querySelector('.form');
let blockEdiProfile = document.querySelector("#edit-profile__form");
let blockNewElement = document.querySelector("#new-element__form");

let editProfileClose = document.querySelector('#edit-profile__close');
let newElementClose = document.querySelector('#new-element__close');

let buttonEditProfileSave = document.querySelector('#edit-profile__button');
let buttonNewElementSave = document.querySelector('#new-element__button');

let inputName = document.querySelector('#profile-name');
let inputOcupacion = document.querySelector('#profile-work'); 
let userName = document.querySelector('.profile__name');
let userWork = document.querySelector('.profile__ocupation');

let newElementInputName = document.querySelector('#new-element__input-name');
let newElementInputLink = document.querySelector('#new-element__input-link');
const elementsContainer = document.querySelector('.element');
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

buttonEditProfileSave.disabled = true;
buttonNewElementSave.disabled = true;

function editProfile() {
  shadow.style.display = 'block';
  blockEdiProfile.style.display = 'block';
  inputName.value = userName.textContent;
  inputOcupacion.value = userWork.textContent;
}

function newElement(){
  shadow.style.display = 'block';
  blockNewElement.style.display = 'block';
}

function closeBlock() {
  shadow.style.display = 'none';
  blockEdiProfile.style.display= 'none';
  blockNewElement.style.display = 'none';
  buttonEditProfileSave.disabled = true;
  buttonNewElementSave.disabled = true;
  newElementInputName.value='';
  newElementInputLink.value='';
}

function profileValidarCampos() {
    let nameFull = inputName.value.trim();
    let ocupationFull = inputOcupacion.value.trim();
    if( nameFull !== "" && ocupationFull !== ""){
        buttonEditProfileSave.disabled = false;
    }else{
        buttonEditProfileSave.disabled = true;
    }
}

function newElementValidation() {
    let newName = newElementInputName.value.trim();
    let newLink = newElementInputLink.value.trim();
    if( newName !== "" && newLink !== ""){
        buttonNewElementSave.disabled = false;
    }else{
        buttonNewElementSave.disabled = true;
    }
}

function saveProfile(){
    userName.textContent = inputName.value.trim();
    userWork.textContent = inputOcupacion.value.trim();

    inputName.value = "";
    inputOcupacion.value = "";
    buttonEditProfileSave.disabled = true;
    closeBlock();
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

  return placeCard;
}

function saveNewElement(){
  const newCard = createNewPlace(newElementInputName.value, newElementInputLink.value);
  elementsContainer.prepend(newCard);
  newElementInputName.value='';
  newElementInputLink.value='';
  
  
  closeBlock();
}

buttonEdit.addEventListener('click', editProfile);
buttonNewElement.addEventListener('click',newElement);

editProfileClose.addEventListener('click', closeBlock);
newElementClose.addEventListener('click', closeBlock);

inputName.addEventListener('input', profileValidarCampos);
inputOcupacion.addEventListener('input', profileValidarCampos);

newElementInputName.addEventListener('input',newElementValidation);
newElementInputLink.addEventListener('input', newElementValidation);

buttonEditProfileSave.addEventListener('click', saveProfile);
buttonNewElementSave.addEventListener('click', saveNewElement);

initialCards.forEach(card => {
  const cardElement = createNewPlace(card.name, card.link);
  elementsContainer.append(cardElement);
});
