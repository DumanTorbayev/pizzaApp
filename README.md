# Pizza project

### [Demo Link](https://pizzathor-41687.web.app/)
![](https://i.ibb.co/GH2C1vY/2021-10-30-16-24-36.png)

## Stack
* React ([Create React App](https://create-react-app.dev/))
* [Typescript](https://www.typescriptlang.org/)
* [Redux](https://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [React router](https://reactrouter.com/)
* [Axios](https://github.com/axios/axios)
* [Ant Design](https://ant.design/)
* [Firebase](https://firebase.google.com/) 

## Firebase Setup

You need to create a firebase configuration file holding the firebase settings in the path `/src/firebase/config.ts`. The required format is:

```javascript
const firebaseConfig = {
	apiKey: "API-KEY",
	authDomain: "AUTH-DOMAIN.firebaseapp.com",
	databaseURL: "DATABASE-URL.firebaseio.com",
	projectId: "PROJECT-ID",
	storageBucket: "STORAGE-BUCKET.appspot.com",
	messagingSenderId: "MESSAGING-SENDER-ID",
	appId: "APP-ID",
	measurementId: "MEASUREMENT-ID",
};

export default firebaseConfig;
```

Data needs to be stored in the following format:

```javascript
{
  "menu": [
    {
      "id": "981e0abe-f7fd-4e0d-a644-0dcd68e439f4",
      "name": "Margarita",
      "description": "Tomato sauce, tomatoes, herbs, Mozzarella cheese",
      "price": 199,
      "imageUrl": "https://316024.selcdn.ru/wiget/4d6b7077-8400-11e8-80e1-d8d38565926f/be15861a-378c-40be-869d-cda5e487ab24_Medium_.jpg"
    },
    {
      "id": "82a89627-e240-45f3-b7b5-fd7c1816fbcd",
      "name": "Vegano",
      "description": "BBQ sauce, tomatoes, mushrooms, bell peppers, gherkins, herbs, Mozzarella cheese",
      "price": 259,
      "imageUrl": "https://316024.selcdn.ru/wiget/4d6b7077-8400-11e8-80e1-d8d38565926f/2dcf9637-e41b-4a8d-a77f-4d67d97c62c0_Medium_.jpg"
    }
  ]
}
```

An example data is given in `/src/firebase/exampleData.json`

## Beginning of work
* ```git clone https://github.com/DumanTorbayev/pizzaApp```
* ```yarn install``` or ```npm install```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
