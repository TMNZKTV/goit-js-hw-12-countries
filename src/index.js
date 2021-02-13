import "./styles.css";

import fetchCountries from "./js/fetch-Countries";
import refs from "./js/refs";
import updateCountriesMarkup from "./js/update-Countries-Markup";
import debounce from "lodash.debounce";
import myError from "./js/notification";

const debouncedInput = debounce((event) => {
  const searchField = event.target;
  const searchValue = searchField.value;
  clearCountriesContainer();

  fetchCountries(searchValue)
    .then(updateCountriesMarkup)
    .catch((error) => myError(error));
}, 300);

refs.searchInput.addEventListener("input", debouncedInput);

function clearCountriesContainer() {
  refs.countriesContainer.innerHTML = "";
}
