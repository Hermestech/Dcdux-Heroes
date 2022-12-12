# DCdux HEROES

It is a simple react application that consumes a DC comics superheroes api and renders in the browser, is responsive with the help of ant-design and handles global state with redux/toolkit.

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install application.

```bash
yarn install
```

to run the application locally use the following command:

```bash
yarn start
```

## Folder Structure

```
└── src/
    ├── api/
        |__index.js
    ├── components/
    │   │   # I'm omitting the files inside most folders for readability
    │   ├── Card.jsx
    │   ├── CardList.jsx
    │   ├── InputSearch.jsx
    │   ├── MainLayout.jsx
    │   ├── StarButton.jsx
    │   ├── Card/
            |__ Card.jsx
            |__ Card.css
            |
    │   └── CardList/
    │       ├── CardList.jsx
    │       └── HeroesList.css
    ├── middlewares/
    │   │   # this gonna print in console, which action has been executed
    │   └── index.js
    └── pages/
        │   # This gonna render the main login for our heroes and routings to 
         see details 
        └── HeroDetails.jsx
        └── Home.jsx
    |
    ├── reducers/
      |__ rootReducer.js
    |__ slices/
      |__ dataSlice.js
      |__ uiSlice.js
    |__ statics/
      |__ logo.png
```

