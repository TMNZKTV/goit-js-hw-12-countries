import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { notice, success, error, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetch-Countries';

const getError = error;

const myError = {
  text: 'Too many matches found! Please enter a more specific query!',
};
myError.delay = 3000;

const warn = {
  text: 'Please, enter valid data',
};
warn.delay = 3000;

export { getError, myError, warn };
