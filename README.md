# React Movie API Website
Languages and tools
<br />
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&style=flat)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&style=flat)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white&style=flat)
![React-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white&style=flat)
![Chakra-UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white&style=flat)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white&style=flat)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=00C7B7&style=flat)

Built with [Create-React-App](https://create-react-app.dev/), [TypeScript](https://www.typescriptlang.org/), [Cypress](https://www.cypress.io/), [React-router](https://reactrouter.com/), [OMDb API](https://www.omdbapi.com/) and [Chakra UI](https://chakra-ui.com/) and hosted on [Netlify](https://www.netlify.com/)

<b>[See Live Site](https://stunning-shortbread-265257.netlify.app/) </b>
<br />

## 🖥 The Look
Desktop view

https://user-images.githubusercontent.com/93098512/168047143-750b54e6-7864-4347-9c39-86f5e5f0d3f3.mp4

Mobile view

https://user-images.githubusercontent.com/93098512/168047559-f0bf051f-6f61-423d-9fde-c504ba5ff250.mp4


<br />

## 📚 What I've Learned

The goal of this project was to get comfortable with React, React-router and Cypress.

<b>React</b> <br />
Coming from Vue, React definitely had a different tone to it. At some parts, the code that I had to write felt more verbose when compared to Vue, however that wasn't always the case as I usually found React code to be more compact. Getting used to the useState and useEffect logic was interesting. The hardest part was getting used to conditional html rendering as in Vue the same functionality could be achieved by adding "v-if" and "v-else" props to certain components. All in all, I enjoyed working with React nonetheless and will continue using it in my future projects.

<b>Cypress</b> <br />
Testing plays a huge role in a project's lifecyle. I've never really done any kind of testing in any of my projects. Therefore I wanted to change that and ended up researching Cypress and writing some E2E tests. Seeing your aplication go through automated test cases that you wrote and having them pass was pure joy. I'll definitely be implementing more testing in my future projects.

<b>React-router</b> <br />
Setting up routing didn't take that long. The whole logic of react-router reminded me of Vue's routing library. The hardest part was researching how to make use of routing params as I needed them to perform GET requests on certain pages during the mounted lifecycle of React. A useful library to know.
<br />

## ⚙️ Project setup

1. The .env.example file should get renamed to .env and REACT_APP_API_KEY= should be replaced with your own API key from [OMDb API](https://www.omdbapi.com/)

2. Locate the SearchedMovies.jsx file and replace line 19 with the code found in the code snippet below steps 2 and 3
3. Locate the Movie.jsx file and replace line 14 with the code found in the code snippet below steps 2 and 3
<br />

```js
// SearchedMovies.jsx
axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${params.searchTerm}`)

// Movie.jsx
axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${params.searchId}`)
```
<br />

4. Install the project's dependencies
```
npm install
```
5. Start the project on localhost
```
npm start
```
<br />

### Testing with Cypress
1. Change the base URL to http://localhost:3000/
```json
{
  "baseUrl": "http://localhost:3000/",
  "experimentalStudio": true
}

```
2. Run the following command to open Cypress

```
npm test
```

3. Click on 'Run 3 integration specs' or run them separately
![image](https://user-images.githubusercontent.com/93098512/167622281-83b57d97-dfa2-4610-aed6-343be77d4fb7.png)
Note: I set the port to 8888 because I was serving the website locally using "netlify dev", ignore it

<br />

### Other commands that you might be interested in

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
