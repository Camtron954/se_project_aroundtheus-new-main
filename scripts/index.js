const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
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
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
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

console.log(initialcards);

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");


profileEditButton.addEventListener('click', () => {
    profileEditModal.classList.add('modal_opened');
});


// const profileEditButton = document.querySelector(".profile__edit-button");

// const editProfileModal = document.querySelector("#edit-profile-modal");
// const editModalClosedButton = document.querySelector(".modal__close-button");

// function openModal() {
//   console.log("hey are we hitting this");
//   editProfileModal.classList.add("modal__opened");
// }

// function closeModal() {
//   editProfileModal.classList.remove("modal__opened");
// }

// profileEditButton.addEventListener("click", () => {
//   console.log("open the modal");
//   openModal();
// });

// editModalClosedButton.addEventListener("click", closeModal);

