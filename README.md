# Movie Application

## Overview

This is a front-end for the movie browsing application. The objective is provide an interface to help our users discover movies on theather easily and provide options for them to book their prefered movie.


## Design Descriptions

Minimal and clean design to provide better user experience (less disturbance).
Using dark color to symbolize the experience in movie theather.
San-serif font to express the modern element.
The use of rounded element to emit sense of friendly and easygoing.

## General Architecture

Calling API --> Save data to state variable using setStateAction() --> Pass and use saved data and functions using Context API to the components.

## Feature Available

- Sort movies by release date, ratings and alphabetically.
- Infinite loads to feed user more movies when on scrolling.
- Show list of movie avaiable on theather.
- Show more info of specific movie.
- Mobile responsive design.

## Technical Description

-Typescript base React App.
- The use of Axios module to fetch the API.
- Passing data using Context API.
- The use of setState() to declare state variable and it's setter.
- The use of useEffect() to monitor dependencies update in order to trigger some functionalities.


## How to start? 

This is the avaiable script to be use for development purposed.

## Available Scripts

In the project directory, you can run:
### `npm install`

Firstly, need to install all the dependencies before able to run the app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

