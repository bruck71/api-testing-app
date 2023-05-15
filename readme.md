To run this app you must install axios
    $ npm install axios
    Also don't forget your API key

API Testing App

Nearby Search:  the nearby-search.html displays a list of nearby restaurants.

Text Search:  This App runs the text search function of google places api to find Laux Brickhouse Grille in Bethalto IL

the text-search.html file is the file created with chat GPT and made to work using the proxy server to get around the cors issues.  to use I had to go to the page:  https://cors-anywhere.herokuapp.com/corsdemo and request a temporary access to the demo server.  Then the app is working like it is supposed to.  Update - no longer working when file name changed from ai-index to text-search

The index.js file uses text search to display laux brickhouse grille in the console.


node -v
v14.21.3

npm -v
6.14.18