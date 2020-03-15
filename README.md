# Asure UI Engineer Coding Exercise
This is the first iteration of an app that displays taco resturaunts. 

## Running the app
1. use node version v8.16.0
2. run `npm install`
3. run `npm start`

## Architecture
1. This is a pretty simple app, so I chose to use clean, functional components with all the logoc and state passed down from App.js.
2. I went with bootstrap as a design system for a consistent look and no need for further styling.
3. Any functions that don't directly deal with the UI live in a helper.js file to keep the components clean.
4. The fetcher funtion was made reusable for further iterations when there is a need to call the endpoint again for business details.

## UI
1. The UI is fully responsive.
2. I didn't feel the need to use multiple pages of results with only 20 coming back. A responsive grid that the user can scroll through seemed simple and useable.

### Future improvements
1. A UI element that lets the user change locations without refreshing the page.
2. Open this up to any search term instead of just tacos.

## Known bugs
1. Right now the 'sort by price' doesn't work. Another data point could be added to each business, equal to the length of the price string and that could be used to sort, rather than the string itself.  
