function handleSubmit(event) {
    event.preventDefault();
    let postcode = document.querySelector("#postcode-input").value;

    let formattedPostcode = "";
    for (let i = 0; i < postcode.length; i++) {
        if (postcode[i] !== " ") {
            formattedPostcode += postcode[i];
        }
    }
    console.log(formattedPostcode);

    if (formattedPostcode.length > 0) {
      search(formattedPostcode);
    } else {
      handleErrors();
    }
}

let postcodeSearch = document.querySelector("form");
postcodeSearch.addEventListener("submit", handleSubmit)

function search(postcode) {
    let apiUrl = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;

   axios.get(apiUrl).then(display);
       console.log(apiUrl);

};

function handleErrors() {
     alert("Please enter a valid UK postcode");
}

function display(response) {
  let searchResults = response.data.restaurants;

  if (searchResults.length < 1) {
    handleErrors();
  } else {
     let searchResultsCol = document.querySelector(".search-results");
     let searchResultsHTML = `<h1>Restaurants near you</h1>`;

     searchResults.forEach(function (restaurant, index) {
       if (index <= 10) {
         let cuisines = restaurant.cuisines
           .map((cuisine) => cuisine.name)
           .join(", ");

         searchResultsHTML += `<div class="col-6 text-center restaurant-content"><h2 class="restaurant-name">${restaurant.name}</h2>
      <p class="cuisines">${cuisines}</p>
          <p class="rating">Average rating: ${restaurant.rating.starRating}</p>
          <p class="address">Address: <br /> ${restaurant.address.firstLine}<br />
          ${restaurant.address.postalCode}<br />
          ${restaurant.address.city}</p>
        </div>`;
       }
     });

     searchResultsHTML += `</div>`;
     searchResultsCol.innerHTML = searchResultsHTML;
  }
}

search("EC4M7RF");