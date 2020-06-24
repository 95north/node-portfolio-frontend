
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


## PRIOR "LEFT OFF  AT" Notes. 
    Late Mayleft off:  Tv's Css, making it responsive. 
         .tv-positioning-600-900 {       // Mac Pro : 2880 W x 1800 H
             // WHERE LEFT OFF WORKING ON RESPONSIVE.  ADDED THIS, CHANGED POSITION TO RELATIVE. 
        left: -20%; //% - weird bc as make screen narrower, Left padding gets wider. 
        position: relative; 

        May 15: What do I know about responsive design?    
        


## TO DO  

        June 24: 
            worked on nav bar font left align, started w sm breakpoint
        LEFT OFF June 5: 
        need to fix tv screen and buttons in middle tier alignment. 
       
        Start experimenting with menu before perfect tv positioning!!! 
        Make final remote control graphic. 
        Fix TelevisionLeftSideTextArea/index.js:23 - so button loops through array length

    
    ### PROJECTS 
    
    ####### VIEW RELATED 
    Refactor to flexbox view - don't need?
    Make TV Sticky so leftside text scrolls, but TV doesnt? 
    Can still scroll to the right and see nonsense. 
        --The width is constant!  About 70% of 150px. 

        --NavBar menu-shadow: Added margin-right: 5px; 
          FIXED PROBLEM FOR >800 w SCREEN SIZE! 
        --NavBar menu-shadow CSS class (creates box):
          activating overflow: hidden does nothing.
        --Searched for margin-right:, commented all out, 
          did not work
        
    Fix Remote Beam Fade-In. 
    Style TV Text

    
    Home Scene  -  value proposition.   Use tv?  What on it?  I kind of like animated gif,      gives life!   NYC gif?   Oooh subway monitors photo? d
        Responsive Design |  Varied + Comparative Front- + Back-End Framework Development | Responsive Design | Clean Code 
        Fun and playful UI 
    Add magnifier to TV screen? 
    Lazy loading? 
    Add login + form  for me to submit to "Today, I"? 
    Add form to add new project? 
    Jest tests? 
    CI/CD? 
    Add screen tint / filter to TV? 
    Loading image for TV Screen



     ### ERRORS 
    On front end images, TvScreen - let buff = new Buffer(pic, 'binary');    gets error, 
    ...maybe bc front-end saved images aren't in buffer format? NO  Or, a race condition?
    ...maybe if in image (5) of one project and click into a project with only 3 images?? 
    Press Tv Buttons before loading done - get "header"   undefined   error



    ###  ###  ### CLEAN UP
    Fix order of Yoga Sequencer Pics
    rename changeChannel() function 
    rename "TvLeftSideblahh" bc when refactor to responsive design it will be on bottom.. 
    "TelevisionAccompanyingText" component - change TelevisionLeftSideArea to
    2 breakpoint refactor cleanup: TV comp. JS - rename "size" prop passed down.


## DONE 
    take Portfolio view API call, pass down as props, slap it on TV / side text, check channel #s consistent everywhere.   ~2 hr. 
    Fix TV Text list items to loop through each.  5 min. 
    Take screenshots of my different projects to use
    Refactor TV Screen to flip through multiple images.  - fix API call in Porfolio Scene Index. 
    DONE pending testing- Send images from backend through API call  - DONE - they are string format. 
    Diy or Dont (1st project in seed data), only backup image ever displays. FIXED
    Reset buttom button to 0 when top button pressed. (worked on May 4, might work? )
    TelevisionLeftSideTextArea - Once gets thru all Projects fm props array, it crashes.  Make more robust! 
    Add another breakpoint. 
        #1 - Default -                  // Full size laptop
            full size screen,  
            info on left, 
            **** text width shrinks to fill space next to 800px static tv 
        #2 - Below 2472 -               // Tablety 
            screen below 2472x506 (& > 1244x802)
            (left) text width shrinks to fill space next to dynamic tv 
            tv shrinks 
        #3 - Below 1244                 // Cell phone
            screen < 1244 x 802    -  
            text goes below, 
            both text and tv shrink simply to fill screen 
        Current breakpoint is 800 
        Above 800 - tv width static, text width static. 
        Below 800 - tv width dynamic, 
        I imagine breakpoints lumped together looks smoother? 
        Also easier to manage than diff breakpoints for every design choice. 
    

    ### NOTES FROM DONE TASKS
    left off:   var bitmap = fs.readFileSync(pic);  --- converting Buffer to png if possible... 
    Try playing in Mongo shell and investing what is saved. 
    check that fs. & binary on backend actually render expected image types.  Are imports working? Need to bundle them in terminal? 
    Is imageBin.bin  Base64? 
    Look into  
        browserify-fs  (installed),  
        Jimp ,  
        GridFS ??  (esp for storing files larger than 16 MB, the BSON max doc size)
        Blob to base64, using built-in FileReader :   https://javascript.info/blob   -- WORKED! 

    Diy or Dont (1st project in seed data), only backup image ever displays. FIXED 
        Backup image on front-end : in TvScreen based on 

        What needs to re-render?  TvScreen image to Diy-Or-Dont images after API
        ...call complete.   Portfolio makes the API call.  
        Does Portfolio setState on channel #?  No, sets state on ~rawDataDownload~
        is channel# check triggered when rawDataDownload processed? 
        in Portfolio, Tv does not pass down channelNumber


        Portfolio does API call, ? passes state (data, img arrays) to Tv. 
        TVScreen - this.props.channelNumber is undefined for project 0, so backup img.
        channelNumber={this.state.channel}   Tv's tv600x900() -
        is this.state.channel real?  
        Tv Component  this.props.channelNumber  undefined  -- also when press bottom button (but not top)
        Are we passing channelNumber prop correctly fm Portfolio to Tv? 
        Portfolio calcs data and image arrays, passes them down to Tv

        channelNumber arises in component Tv, where state initially sets it to 0 : 
        channelNumber={this.state.channel}  ( from Tv's tv600x900(, returned HTML ) 
        Tv's channel State - changes when?? 
        If initially 0, when overrode and it became undefined?   
        Tv:  screenImagesArrayofArrays - get once w initial API call 
        tvScreenImagesArray = {this.props.tvScreenImagesArrayOfArrays[this.state.channel]}  

            ??? Do I set state with partial data is no channelNumber? 
        channelNumber is updated in generateChannelNo() funcs which are triggered
        ...by tvButtonClick event. 


        In Tv, channel state initially set to 0: channel: 0,  not undefined. 
        Tv passes to TvScreen prop channelNumber={this.state.channel} 




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
