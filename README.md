# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

-Fonts
- <link rel="preconnect" href="https://fonts.gstatic.com">

- <link href="https://fonts.googleapis.com/css2?fam..." rel="stylesheet">

- <link href="https://fonts.googleapis.com/css2?fam..." rel="stylesheet">


## Understanding of the working and important concepts

[Why is create-react-app used?]
As the browser does not understand JSX, so to save developers from the monotony of babble or numerous other transpilers, we use creat-react-app.
Not only it integrates a transpiler but also a bundler.

[Class-component]
Class component provides lifecycle, states, props attribute.


[What are states?]
States are piece of data that we might need to save because it might change in the future.

!IMPORTANT!
Changing a state manually does not re-render it to change at the place of origin.
To trigger a re-render use state_name.setstate i.e. setState function!!!!!

Maintaing state
>declare object(key value pair).
state={
    key: value
}
//
[What are props?]
States are not props. States are js objects where we save data we might change in the future.

Prop is a data that we can transfer/teleport/communicate from parent to child component. So if there is a state in parent, which is to be consumed by child component, we use prop to transfer the state from parent to child.
if class component this.props.name
if functional pass props as an args and then {props.name}

[What to do if child to parent communicaiton?]
Reverse props X
Callback Method has to be passed as a prop

[TEMPLATE LITERALS]
Aloow us to inject our variables inside a string using backquote ``!!