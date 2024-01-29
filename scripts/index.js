const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* --------------------------------------------------------------------------------------------- */
/*                                      Elements                                                 */
/* --------------------------------------------------------------------------------------------- */

//Buttons
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeModalButton = document.querySelectorAll(".modal__close-button");

//Forms
const profileForm = document.forms["profile-form"];
const addCardForm = document.forms["add-form"];

//Modals
const modals = document.querySelectorAll(".modal");
const modalAddCard = document.querySelector("#modal-add");
const modalProfile = document.querySelector("#modal-profile");

//Profile Inputs
const profileName = document.querySelector(".profile__username");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);

//Add inputs
const addCardTitle = document.querySelector(".card__text");
const addCardLink = document.querySelector(".card__image");
const inputCardTitle = document.querySelector(".modal__input_type_title");
const inputCardLink = document.querySelector(".modal__input_type_link");

//Card data
const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__cards");

/* --------------------------------------------------------------------------------------------- */
/*                                      Functions                                                */
/* --------------------------------------------------------------------------------------------- */

function toggleProfileModal() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  modalProfile.classList.toggle("modal_opened");
}

function toggleAddModal() {
  inputCardTitle.value = "";
  inputCardLink.value = "";
  modalAddCard.classList.toggle("modal_opened");
}

function renderCard(data, gallery) {
  const cardElement = getCardElement(data);
  gallery.prepend(cardElement);
}

function handleProfileModalSubmit(Event) {
  Event.preventDefault();

  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  toggleProfileModal();
}

function handleAddCardModalSubmit(Event) {
  Event.preventDefault();
  const name = inputCardTitle.value;
  const link = inputCardLink.value;
  renderCard({ name, link }, cardGallery);
  toggleAddModal();
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  const likeButton = cardElement.querySelector(".card__like-button");

  //find delete button
  //add event listener to delete button
  // element.remove();

  //add click listener to cardImageElement
  //open modal w/ previewImageModal -stored outside of function-

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_clicked");
  });

  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardTextElement.textContent = data.name;
  return cardElement;
}

/* --------------------------------------------------------------------------------------------- */
/*                                    Event Listeners                                            */
/* --------------------------------------------------------------------------------------------- */

editButton.addEventListener("click", toggleProfileModal);

addButton.addEventListener("click", toggleAddModal);

// closeModalButton.addEventListener("click", toggleModal);

profileForm.addEventListener("submit", handleProfileModalSubmit);

addCardForm.addEventListener("submit", handleAddCardModalSubmit);

initialCards.forEach((data) => {
  renderCard(data, cardGallery);
});

closeModalButton.forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest(".modal").classList.toggle("modal_opened");
  });
});
