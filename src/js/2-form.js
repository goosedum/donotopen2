let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', e => {
  formData.email = e.currentTarget.email.value.trim();
  formData.message = e.currentTarget.message.value.trim();
  saveToLS('feedback-form-state', formData);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    form.reset();

    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    console.log(formData);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const data = getFromLS('feedback-form-state');

  form.elements.email.value = data?.email ?? '';
  form.elements.message.value = data?.message ?? '';
  formData.email = data?.email ?? '';
  formData.message = data?.message ?? '';
});

//*===================================================

function saveToLS(key, value) {
  const dataJson = JSON.stringify(value);
  localStorage.setItem(key, dataJson);
}

function getFromLS(key) {
  const dataJson = localStorage.getItem(key);
  try {
    const data = JSON.parse(dataJson);
    return data;
  } catch {
    return dataJson;
  }
}

//*===================================================
