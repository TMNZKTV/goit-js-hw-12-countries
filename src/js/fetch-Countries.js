import { getError, myError, warn } from './notification';

function fetchCountries(searchValue) {
  const url = `https://restcountries.eu/rest/v2/name/${searchValue}`;

  return fetch(url)
    .then(response => response.json())
    .catch(error => getError(warn));
}

export default fetchCountries;
