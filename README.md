# multi step form project

## Requirements:

The goal is to create a multistep form similar to this one: https://preview.pro.ant.design/form/step-form?navTheme=light&primaryColor=%231890ff&layout=mix&fixSiderbar=true&title=Ant+Design+Pro

- fields with [*] are required.
- each step will have next and/or prev buttons depending on whether it is a first, last or any of the page in the middle. The last step will have a submit button as well.
- User can navigate among any steps without filling out any fields. However, when you navigate away from let's say step 1 to step 3, you have to show an error status in step 1 if the required fields are not filled out. As soon as the required fields are filled out that error code must be replaced with a finished/completed status. Example: https://codesandbox.io/s/8u033?file=/index.js
- User can't submit without filling out required fields.
- User can go back to any previous steps of next steps regardless of the required fields are completed or not. Just make sure that you show proper error or finished status as mentioned above.

## Step 1: personal Details

### Creation Date & Time [*]: date-picker default value today

### Name[*]: input

- First
- Last
- Email: input

### Gender[*]: radio button

- Female
- Male
- Undifferentiated

### Age: input

### Mode of transportation: checkbox with multiple choices allowed

- Car
- Motorbike
- Bicycle
- Boat

## Step 2: Residential Details:

### Address: h3 tag as title only

#### Address Line 1[*]: input

#### Address Line 2: input

#### City[*]: input

#### State[*]: input with suggestions in dropdown as user types

#### Country[*]: input with suggestions in dropdown in as user types

## Step 3: Health and Fitness Regime:

### Alcohol use: radio

- No
- Yes
- Not Anymore

### Smoking: radio

- No
- Yes
- Not Anymore

### Exercise[*]: checkbox with multiple selection allowed

- running/jogging
- cardio
- strength training
- idle or no exercise


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
