# restaurant-search
 
This restaurant search uses the Just Eat API to fetch restaurant data based on the UK postcode sent by the form. Enter a valid postcode in the input field and press search to trigger an API call. The search is limited to 10 results and will display restaurant name, cuisines, star rating, and address.

<!-- Add how to build, compile and run your solution into the README
● Include any assumptions or things that were not clear to you in the README
● Include any improvements you’d make to your solution in the README -->


# how to run

1. Is Node.js already installed? To verify, run ``` which npm``` in the terminal. If you see anything there, it is installed. If you do not see anything, go to ```nodejs.org``` and download Node.js, then follow instructions to install.

2. Install live-server: ```npm install -g live-server```

3. Start the server by running ```live-server```

4. Browser will open automatically.

5. To stop the live server, ctrl + C in the terminal.

6. Search by UK postcode.


# assumptions or things that were not clear

## assumptions
1. Every request will be handled: no network or server errors.
2. Every valid UK postcode will return results: this has, however, proven to be untrue during testing, so I went back and made changes to the ```display``` function and the error handling.
3. No API key was provided, so the assumption was it was not required.
4. Postcode input value needs to be trimmed since users might enter it by typing (most likely without blank spaces) or by copying and pasting (most likely with at least 1 blank space). There may also be blank spaces at the beginning and/or end of the input value.

## possible improvements
1. Smaller commits: they are easier to understand AND to revert if necessary.
2. Error handling for network and server errors.
3. More general refactoring like variable naming, HTML structure and injection, and error handling.