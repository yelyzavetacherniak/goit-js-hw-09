const formData = {
  email: '',
  message: '',
};

const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);

function handleInput(event) {
  const name = event.target.name;
  const value = event.target.value.trim();
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const savedData = localStorage.getItem(storageKey);
let parsedData = null;

if (savedData) {
  parsedData = JSON.parse(savedData);
}

if (parsedData) {
  if (parsedData.email) {
    form.elements.email.value = parsedData.email;
    formData.email = parsedData.email;
  }
  if (parsedData.message) {
    form.elements.message.value = parsedData.message;
    formData.message = parsedData.message;
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(storageKey);

  formData.email = '';
  formData.message = '';
}
