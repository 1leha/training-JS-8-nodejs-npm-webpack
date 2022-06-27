// import { ChunkGraph } from 'webpack';
import { refs } from './teamplate/refs.js';

const TODO_KEY = 'toDoList';
refs.form.addEventListener('submit', onSubmit);
loadFromLocaleStorage();
function onSubmit(e) {
  e.preventDefault();
  const el = createMarkupElement(refs.input.value);
  putElementToList(el);
  clearInput();
  saveToLocaleStorage();
}

function createMarkupElement(text) {
  return `<li data-id-${text}>${text}</li>`;
}

function putElementToList(el) {
  refs.list.insertAdjacentHTML('beforeend', el);
}

function clearInput() {
  refs.input.value = '';
}

function saveToLocaleStorage() {
  const toDoList = [...refs.list.childNodes].map(e => e.textContent);
  localStorage.setItem(TODO_KEY, confertToJson(toDoList));
}

function loadFromLocaleStorage() {
  if (localStorage.getItem(TODO_KEY)) {
    try {
      const loadedToDoList = JSON.parse(localStorage.getItem(TODO_KEY));
      const loadedMarkup = loadedToDoList.reduce((acc, e) => acc + createMarkupElement(e), '');
      putElementToList(loadedMarkup);
    } catch (e) {
      console.log('error');
    }
  }
}

function confertToJson(str) {
  return JSON.stringify(str);
}
