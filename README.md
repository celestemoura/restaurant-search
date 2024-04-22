# restaurant-search
 
This restaurant search uses the Just Eat API to fetch restaurant data based on the UK postcode sent by the form. Enter a valid postcode in the input field and press search to trigger an API call. The search is limited to 10 results and will display restaurant name, cuisines, star rating, and address.


# how to run

1. Make sure to have Node.js and ```npm``` installed.

2. Start the server by running ```npx live-server``` in the terminal. Browser will open automatically.

3. Because of CORS, calls from the browser might fail. The error message in the console should look something like this:

```Access to XMLHttpRequest at 'https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}' from origin '[localhost]' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.```

To overcome this issue:

>> 3a. on Chrome, download and install the [Allow CORS: Access-Control-Allow-Origin](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) extension. Once extension is active, search again;

>> 3b. on Safari, temporarily disable CORS checks in the browser (Safari > ```Settings``` > ```Advanced``` > enable checkbox ```Show features for web developers``` > ```Developer``` > enable checkbox ```Security``` : ```Disable cross-origin restrictions```). 

As of right now, these are the 3 possible outcomes for a successful API request and search:

>> 3c. postcode ```null``` or invalid: you will see a browser alert;
>> 
>> 3d. postcode valid:
>> 
>>> 3d.1 but returns 0 results: DOM is updated, "no restaurants in the area";
>>> 
>>> 3d.2 and returns more than 0 results: DOM is updated with search results.

4. Search by UK postcode. Blank spaces will be trimmed and the search is case-insensitive.

5. To stop the live server, ctrl + C in the terminal.
   

# assumptions
1. Every request will be handled: no network or server errors.
2. Every valid UK postcode will return results: this has, however, proven to be untrue during testing, so I went back and made changes to the ```display``` function and the error handling.
3. No API key was provided, so the assumption was it was not required.

# unclarities
The beginning would have been easier if the challenge prompt included some information about CORS.

# possible improvements
1. Smaller commits: they are easier to understand AND to revert if necessary.
2. Error handling for network and server errors (including retries).
3. More general refactoring like in variable naming, HTML structure and injection, and error handling.
4. Talk about CORS with more experienced developers.
