import myError from "./notification";

function fetchCountries(searchValue) {
  const url = `https://restcountries.eu/rest/v2/name/${searchValue}`;

  return fetch(url).then(
    (response) => response.json().catch((error) => myError())
    // .then((data) => (data.length < 10 ? data : myError))
  );
}

export default fetchCountries;
