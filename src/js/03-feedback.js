import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);

const formData = {};

populateFormFields();

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateFormFields() {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (localData) {
        email.value = localData.email;
        message.value = localData.message;
    }
};