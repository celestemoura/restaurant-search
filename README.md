# restaurant-search
 
This restaurant search uses the Just Eat API to fetch restaurant data based on the UK postcode sent by the form. Enter a valid postcode in the input field and press search to trigger an API call. The search is limited to 10 results and will display restaurant name, cuisines, star rating, and address.


# how to run

1. Make sure to have Node.js and ```npm``` installed.

2. Start the server by running ```npx live-server``` in the terminal. Browser will open automatically.

3. Because of CORS, calls from the browser will fail. To be able to run the app locally: 
    a. on Chrome, download and install the [Allow CORS: Access-Control-Allow-Origin](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) extension. Once extension is active, search again;
    b. on Safari, temporarily disable CORS checks in the browser (Safari > ```Settings``` > ```Advanced``` > enable checkbox ```Show features for web developers``` > ```Developer``` > enable checkbox ```Security``` : ```Disable cross-origin restrictions```). 

4. To stop the live server, ctrl + C in the terminal.

5. Search by UK postcode.


# assumptions or things that were not clear

## assumptions
1. Every request will be handled: no network or server errors.
2. Every valid UK postcode will return results: this has, however, proven to be untrue during testing, so I went back and made changes to the ```display``` function and the error handling.
3. No API key was provided, so the assumption was it was not required.
4. Postcode input value needs to be trimmed since users might enter it by typing (most likely without blank spaces) or by copying and pasting (most likely with at least 1 blank space). There may also be blank spaces at the beginning and/or end of the input value.

## unclarities
The beginning would have been easier if the challenge prompt included some information about CORS.

## possible improvements
1. Smaller commits: they are easier to understand AND to revert if necessary.
2. Error handling for network and server errors.
3. More general refactoring like variable naming, HTML structure and injection, and error handling.
4. Talk about CORS with more experienced developers.
