# Click the Fox!

A little game in the browser: the user should find a fox among other animal and click on the image. It necessarty to click the fox as many times as user can within 30 seconds.
After 30 seconds of the game a user can see the total score and check the results

## Main technologies/libraries of the app:

- React
- Typescript
- Matherial UI
- Jest
- react-testing-library
- react-hook-form
- react-intl
- react-router-dom

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Main approach

The application is written in React and has 4 pages (_home, welcome, game and score_). For routing, the react-router-dom library was used. Since styles were not a priority according to the requirements, the MUI library was used to keep the application in a user-friendly state.

Internationalization for English and Dutch languages was also added (it didn't take long). According to the requirements, integration tests have also been added for one of the pages in order to verify that the page loads normally, the components on it also work well and requests to the image API sends correctly. There were 2 image API's used in the app:

- https://dog.ceo/api/breeds/image - for random dogs
- https://randomfox.ca/floof - for random foxes

The approach of background preloading of several sets of images during the _registration process_ for the game and during the _waiting time before game starts_ was used in the app. New images are also loaded _in the background every 3 rounds of the game_ so as not to freeze the user interface. React context was used for persisting data (not to overcoplicate it with redux and other stae management libraries)

![Part 1](https://github.com/VasiliyMelnik64/click-the-fox/assets/24418879/3122780c-78ac-4007-b23b-b12c7a4a2e85)

![Part 2](https://github.com/VasiliyMelnik64/click-the-fox/assets/24418879/807c42e7-d9ff-4c81-b5c9-d206a0f2e1c3)


## **Available Scripts**

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Other available script

### `npm test`

### `npm run build`

### `npm run eject`
