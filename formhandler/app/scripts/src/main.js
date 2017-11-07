import FormHandler from 'formhandler.js';

let FORM_SELECTOR = '[data-coffee-order="form"]';
let formHandler = new FormHandler(FORM_SELECTOR);
formHandler.addSubmitHandler(() => {});
