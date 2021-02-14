import refs from './refs';
import countryTpl from '../templates/country.hbs';
import countriesTpl from '../templates/countries.hbs';
import { getError, myError, warn } from './notification';

function updateCountriesMarkup(countriesArray) {
  const arrLen = countriesArray.length;

  if (arrLen > 1 && arrLen < 10) {
    const markup = countriesTpl(countriesArray);
    refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
  } else if (arrLen === 1) {
    const markup = countryTpl(countriesArray);
    refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
  } else if (arrLen > 10) {
    getError(myError);
  } else {
    getError(warn);
  }
}

export default updateCountriesMarkup;
