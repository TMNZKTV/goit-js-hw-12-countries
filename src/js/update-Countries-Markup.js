import refs from "./refs";
import countryTpl from "../templates/country.hbs";
import countriesTpl from "../templates/countries.hbs";
import myError from "./notification";

function updateCountriesMarkup(countriesArray) {
  if (countriesArray.length > 10) {
    myError();
  }

  if (countriesArray.length > 1 && countriesArray.length < 10) {
    const markup = countriesTpl(countriesArray);
    refs.countriesContainer.insertAdjacentHTML("beforeend", markup);
    return;
  }

  if (countriesArray.length === 1) {
    const markup = countryTpl(countriesArray);
    refs.countriesContainer.insertAdjacentHTML("beforeend", markup);
    return;
  }
}

export default updateCountriesMarkup;
