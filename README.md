[![forthebadge](https://forthebadge.com/images/badges/cc-0.svg)](https://forthebadge.com)
[![forthebadge](./made-with-react-create-app.svg)](https://create-react-app.dev/)
[![forthebadge](./uses-recharts.svg)](https://recharts.org/en-US/)

# SportSee - User's Dashboard

SportSee is a startup dedicated to sport's coaching. The purpose of this project is to developp a brand new Dashboard's version of their application, where the user can check any important data about his sport's practice.

This project has been developped with React and <a href="https://recharts.org/en-US/">Recharts librairie</a>.

Two repositories are needed to enable the project to run:

&nbsp;

## 1. BACK-END

An alternative to the use of this back-end API is available, see below at [USE WITHOUT BACKEND](#use-without-backend) in front-end section.

The back-end project requires nodeJS installed and any package manager such as npm or yarn. Please refer to the README available on the repository for further informations.

* You have to clone the back-end locally with either/or :

HTTPS :
```git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git```

SSH :
```git clone git@github.com:OpenClassrooms-Student-Center/P9-front-end-dashboard.git```

* Then ```cd``` inside your local repository and install dependencies with : ```npm install```.
* launch the back-end with : ``` npm start ``` or ```npm run dev```.

### URL/PORT

The default URL used by the micro-API is <http://localhost:3000>.

&nbsp;

## 2. FRONT-END

The present repository contains this part of the project. Any package manager such as npm or yarn is required.

* You have to clone the project locally with either/or :

HTTPS :
``` git clone https://github.com/Peanuts-83/P12_SportSee_front.git ```

SSH :
```git clone git@github.com:Peanuts-83/P12_SportSee_front.git```

* Then ```cd``` inside your local repository and install dependencies using : ```npm install```.
* Launch the application with : ``` npm start ```.

### Use the application

You can change USER'S PROFILE by clicking on the logo. This is for demonstration purpose ONLY.

### URL/PORT

The default URL used by the application is <http://localhost:3005>.
You can change the port modifying the *.env* file at root, simply by changing the port number referenced at **PORT** variable. *If the application is already launched, you shall stop it and re-launch it*.

If you use a different API URL(back-end part) than the default one, you can set the right URL in the *.env* file at root by changing the value of the **REACT_APP_API_URL** variable. *If the application is already launched, you shall stop it and re-launch it*.

### USE WITHOUT BACKEND

You can test the application without the back-end part, using a mocked file placed in the folder *"./src/assets/mockedData/data.js"* containing two default users. Access the *.env* file at root, and change the **REACT_APP_MOCKED_DATA** variable to *true*. *If the application is already launched, you shall stop it and re-launch it*.

&nbsp;

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
