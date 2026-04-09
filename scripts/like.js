// Like icon handling
const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

// Toggle is-liked class on click
iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () => {
    likeHeartArray[index].classList.toggle('is-liked');
  };
});

// Like button handling
likeButtonArray.forEach((likeButton, index) => {
  likeButton.onclick = () => {
    likeHeartArray[index].classList.toggle('is-liked');
  };
});

// Modal dialog handling
const modal = document.querySelector('.modal');
const openDialogButtons = document.querySelectorAll('[data-dialog-open]');

openDialogButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.showModal();
  });
});

// Close modal on submit button
const modalForm = modal.querySelector('form');
modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.close();
});

// Close modal on backdrop click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.close();
  }
});
