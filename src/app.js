function handleSubmit(event) {
    event.preventDefault();
    let postcode = document.querySelector("#postcode-input").value;

    if (postcode.length > 0) {
        search(postcode);
    } else {
        alert('Please enter a valid UK postcode');
    }
}

let postcodeSearch = document.querySelector("form");
postcodeSearch.addEventListener("submit", handleSubmit)

function search(postcode) {
    let apiUrl = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;

    fetch(apiUrl).then(function (response) {
      console.log(response);
      if (response) {
        axios.get(apiUrl).then(display);
      } else {
        handleErrors();
      }
    })

  function handleErrors() {
    alert('No matches!');
    }
};

function display(response) {
    let searchResults = response.data.restaurants;
    let cuisineResults = null;

     let searchResultsContainer = document.querySelector(".search-results");
     let searchResultsHTML = `<div class="row">`;

     searchResults.forEach(function (something, index) {
        if (index <= 10) {

          cuisineResults = searchResults[index].cuisines;
           console.log(cuisineResults.length);

          for (let i = 0; i < cuisineResults.length; i++) {
            if (cuisineResults.length > 1) {
                cuisineResults.push(cuisineResults[i].name);
              console.log(cuisineResults);
            } else {
              console.log("só 1");
            }
          }

          searchResultsHTML =
            searchResultsHTML +
            `<div class="col-6 search-results">
              <h2 class="restaurant-name">${searchResults[index].name}</h2>
              <p class="cuisines">
              ${cuisineResults}</p>
              <p class="rating">${searchResults[index].rating.starRating}</p>
              <p class="address">${searchResults[index].address.firstLine}
              <br />
              ${searchResults[index].address.postalCode}
              <br />
              ${searchResults[index].address.city}
              </p>
          </div>`;
          searchResultsHTML = searchResultsHTML + `</div>`;
          searchResultsContainer.innerHTML = searchResultsHTML;
        }
     })
}

search();