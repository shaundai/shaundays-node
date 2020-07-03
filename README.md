## ShaunDays Back End

#### Node Back End for ShaunDays React App

Node back end for ShaunDays React App.

#### Live project

See live project on Surge here: http://shaundays-weather.surge.sh/

## Project Screen Shots
![Main screen screenshot](./public/screenshot1.png?raw=true "Main Screen")

Main Weather Screen

![Search for weather screenshot](./public/screenshot2.png?raw=true "Search for misspelled city")

Search for misspelled city (user) brings up corrected search results

## Reflection

Key Learnings:

    * How to stand up a server using Node and Express.
 
    * How to deploy the server to Heroku.

    * How to get my React app to make API calls to my server.

Deploying the server to Heroku was more challenging than I originally thought it would be!  One thing I wasn’t thinking about was that I was hiding my API key in a .env, but Heroku is reading from my Git repo.  There is an option in the Heroku dashboard called config vars which is where you store your API keys safely.  Wasn’t able to easily find this information in their documentation or anywhere on the web, so I’m going to write a blog post about this for anyone who runs into this issue in the future.

Another ‘gotcha’ was that Dark Sky STILL wanted to block CORS after putting together this server.   Was able to resolve this by using cors anywhere in my call on the CLIENT side (tried server side and that didn’t work!)