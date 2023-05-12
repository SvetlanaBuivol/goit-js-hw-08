import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);

const formData = {};

populateFormFields();

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    
    formData.email = email.value;
    formData.message = message.value;
    
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (email.value && message.value) {
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
      alert('Not all fields are filled')
      }
}

function populateFormFields() {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
  if (localData) {
      
    email.value = localData.email || "";
    message.value = localData.message || "";
  }
}
