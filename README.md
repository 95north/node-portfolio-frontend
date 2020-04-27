
## How to run this


### 1. Node Back-end DB - MongoDB - In terminal, have one window open to node_express_site
$ mongod

Should get: 
Now listening on url ------------ mongodb://localhost:27017/portfoliodb!
Mongoose launches from node backend?  NO - must launch port via terminal 

### 1. Node Back-end App - In terminal, have one window open to node_express_site
$ node . 
Should also run port for MySQL + KNEX on port 7555. 
sudo kill -9 $(lsof -i :7555 -t)     (If need)


### 1. Frontend - In terminal, have one window open to node_portfolio_frontend
$ npm start   (opens to localhost:3000 is available)


### Troubleshooting :  MongoDB (v. Community)- In terminal, have one window open to node_express_site
> mongo   (to open mongo shell)
> use portfoliodb    (make sure using correct DB.  DB is stored in  /data/db (root))


## TO DO 
    
    Send images from backend through API call. 
    TvScreen - refactor images to display multidimenstional array props. 
    Fix TelevisionLeftSideTextArea/index.js:23 - so button loops through array length

    TelevisionLeftSideTextArea - Once gets thru all Projects fm props array, it crashes.  Make more robust! 

    Style TV Text
    Can still scroll to the right and see nonsense. 
    Make TV Sticky so leftside text scrolls, but TV doesnt? 
    Refactor to flexbox view
    
    rename changeChannel() function 
    rename "TvLeftSideblahh" bc when refactor to responsive design it will be on bottom.. 

    Home Scene  -  value proposition.   Use tv?  What on it?  I kind of like animated gif, gives life!   NYC gif?   Oooh subway monitors photo? d
    Responsive Design |  Varied + Comparative Front- + Back-End Framework Development | Responsive Design | Clean Code 
    Fun and playful UI 

    Add magnifier to TV screen? 
## DONE 
    take Portfolio view API call, pass down as props, slap it on TV / side text, check channel #s consistent everywhere.   ~2 hr. 
    Fix TV Text list items to loop through each.  5 min. 
    Take screenshots of my different projects to use
    Refactor TV Screen to flip through multiple images.  - fix API call in Porfolio Scene Index. 


## STYLE GUIDE 
Function words :    
    generate (returns HTML (among other things??),  and no data is processed).       rename generateChannelNumber ? 
    trigger (event-driven actions)
    assign (CSS classes)
    process (data)
    toggle (a boolean)





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
