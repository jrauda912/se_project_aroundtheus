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
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const closeModalButtons = document.querySelectorAll(".modal__close-button");

//Forms
const profileForm = document.forms["profile-form"];
const addCardForm = document.forms["add-form"];

//Modals
const modal = document.querySelector(".modal");
const modals = document.querySelectorAll(".modal");
const modalAddCard = document.querySelector("#modal-add");
const modalProfile = document.querySelector("#modal-profile");
const modalImagePreview = document.querySelector("#modal-image-viewer");

//Profile Inputs
const profileName = document.querySelector(".profile__username");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);

//AddCard inputs
const addCardTitle = document.querySelector(".card__text");
const addCardLink = document.querySelector(".card__image");
const inputCardTitle = document.querySelector(".modal__input_type_title");
const inputCardLink = document.querySelector(".modal__input_type_link");

//Image inputs
const modalImg = document.querySelector(".modal__image");
const modalSubtitle = document.querySelector(".modal__subtitle");

//Card data
//Having a secondary .querySelector is important for the browser to retrieve
//the HTML within the template, and not the template itself
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardGallery = document.querySelector(".gallery__cards");

/* --------------------------------------------------------------------------------------------- */
/*                                      Functions                                                */
/* --------------------------------------------------------------------------------------------- */

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function openProfileModal() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openModal(modalProfile);
}

function openAddModal() {
  inputCardTitle.value = "";
  inputCardLink.value = "";
  openModal(modalAddCard);
}

function openImagePreviewModal() {
  openModal(modalImagePreview);
}

function renderCard(data, gallery) {
  const cardElement = getCardElement(data);
  gallery.prepend(cardElement);
}

function handleProfileModalSubmit(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  closeModal(modalProfile);
}

function handleAddCardModalSubmit(event) {
  event.preventDefault();
  const name = inputCardTitle.value;
  const link = inputCardLink.value;
  renderCard({ name, link }, cardGallery);
  closeModal(modalAddCard);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    modalSubtitle.textContent = data.name;
    modalImg.src = cardImageElement.src;
    modalImg.alt = cardImageElement.alt;

    openImagePreviewModal();
  });

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

editProfileButton.addEventListener("click", openProfileModal);

addCardButton.addEventListener("click", openAddModal);

profileForm.addEventListener("submit", handleProfileModalSubmit);

addCardForm.addEventListener("submit", handleAddCardModalSubmit);

initialCards.forEach((data) => {
  renderCard(data, cardGallery);
});

closeModalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    closeModal(modalAddCard);
    closeModal(modalProfile);
    closeModal(modalImagePreview);
  });
});
