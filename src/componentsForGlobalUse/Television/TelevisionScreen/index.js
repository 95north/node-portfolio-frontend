import React, { Component } from 'react';
import styles from './index.scss';
import fs from 'browserify-fs';
// var fs = require('browserify-fs');
import loadingImg from './Images/TvStaticAnimated.gif';

// import fs from 'fs';  // fs is only for server side, you can't use on frontend!!! 
// var fs = require('fs'); // 
// const Binary = require('mongodb').Binary;  // ?????? 
// import CSSModules from 'react-css-modules';



class TelevisionScreen extends Component {
    // TV Screen in orig 1200x800 tv is 487px high x 607px wide. 
    // 261px to the right, up 137px to start of tv frame in vector
        // tvScreenContents=this.props.screenContents
        // channelNumber=this.props.channelNumber


    returnResponsiveScreenImage = () =>{
        console.log("TvSCreen this.props", this.props)
        let tvScreenImagesArray = this.props.tvScreenImagesArray;
        let pic = (this.props.channelNumber || this.props.channelNumber==0) ? tvScreenImagesArray[this.props.bottomButtonChannel] : "backup image" // ZERO is FaLSEY !!!!                

        if (this.props.tvScreenImagesArray == "backup image"){     // Or use  typeof <<< == "string"? This prob faster.
            return (
                <img 
                    className = "screen-responsive"
                    src={loadingImg} 
                    alt="Animated TV Static"
                />
            )
        } else {
                let buff = new Buffer(pic, 'binary');
                console.log("TvScreen - buff is: ", buff)           // Uint8Array(1429265) [137, 80, ... 
                var blob = new Blob([buff], {'type': 'image/png'});
                var url = URL.createObjectURL(blob); //possibly `webkitURL` or another vendor prefix for old browsers.
            return(
                <img 
                    src={url}
                    className = "screen-responsive"
                /> 
            )
        }
    }


    render(){
        let responsiveScreen = this.returnResponsiveScreenImage();
        return responsiveScreen
        
        
        // Was used for 1 breakpoint @ 800px : 
        // return this.returnScreenSizeForDisplayBreakpoint();  // CALLS screen600x900 
    }



























// DEADCODE

    returnScreenImageBackUpImages = () =>{
        // let pic = this.props.channelNumber % 1 ? "tv.jpg" : "TvStaticAnimated.gif";
        let pic

        // NEED TO REFACTOR THIS TO USE IMAGE FROM MULTIDIMENSION ARRAY PROP. 
        switch (this.props.channelNumber){
            case 0 :
                pic = "TvStaticAnimated.gif"
                break;
            case 1 : 
                pic = "tv.jpg"
                break;
            case 2 : 
                pic = "TvStaticBW.jpg"
                break;
            default: 
                pic = "TvStaticAnimated.gif"
        }
        console.log( "pic RvSCreen is BACKUP pic -- : ", pic)
        return pic;
    }


    screen600x900 = ()  => {
        console.log("Tv SCreen - this.props.channelNumber", this.props.channelNumber)
        let pic = this.returnScreenImage()
        return pic;

        // return(
        //     // <div className="screen-shape-600-900">
        //             <img 
        //                 className = "screen-shape-600-900"
        //                 src={this.returnScreenImage()}
        //                 alt="Photo of an old television"
        //                 // height="600"
        //                 // width="900" 
        //             >
        //             </img>
        //     // </div>
        // )
    }   


    oldScreen600x900 = ()  => {
        return(
            // <div className="screen-shape-600-900">
                    <img 
                        className = "screen-shape-600-900"
                        src={this.returnScreenImage()}
                        alt="Photo of an old television"
                        // height="600"
                        // width="900" 
                    >
                    </img>
            // </div>
        )
    }    

    screen400x600 = ()  => {
        return(
            <div className="screen-shape-400-600">
            </div>
        )
    }    


    returnScreenSizeForDisplayBreakpoint = () => {
        let screen;
        switch (this.props.size){
            case "600x900":
                screen = this.screen600x900();
                break;
            case "400x600": 
                screen = this.screen400x600();
                break;
        }
        return screen;
    }









    // **************DEADCODE:  MongoDB de-Blobbing woe log 
    DEADCODE_MongoDB_deBlobbing_woe_log_formerly_returnScreenImage = () =>{
        // parallel style of TelevisionAccompanyingText where all projects are passed down, not just relevant one?  
        // https://stackoverflow.com/questions/42395034/how-to-display-binary-data-as-image-in-react

        // let pic = this.props.channelNumber % 1 ? "tv.jpg" : "TvStaticAnimated.gif";
        console.log("TvSCreen this.props", this.props)
        
        
        let tvScreenImagesArray = this.props.tvScreenImagesArray;
        // console.log("tvScreenImagesArray[this.props.bottomButtonChannel]", tvScreenImagesArray[this.props.bottomButtonChannel])
        let pic = (this.props.channelNumber || this.props.channelNumber==0) ? tvScreenImagesArray[this.props.bottomButtonChannel] : "backup image" // ZERO is FaLSEY !!!! 
        console.log("Type of pic is: ", typeof pic)
        console.log("pic === backup image ??: ", pic)  

        if ( pic === "backup image"){
            console.log("Hit pic === backup image if  --else")
            return (
                <img 
                    className = "screen-shape-600-900"
                    src="./Images/tv.jpg"              
                    // src='./Images/TvStaticAnimated.gif'              

                    // src={loadingImg}               
                    alt="Animated TV Static"
                />
            )
        } else {
            // let buff = new Buffer(data, 'base64');
            // let text = buff.toString('ascii');
            // fs.writeFileSync('stack-abuse-logo-out.png', buff);

                let buff = new Buffer(pic, 'binary');
                console.log("TvScreen - buff is: ", buff)           // Uint8Array(1429265) [137, 80, ... 
                // myArray  = your data in a UInt8Array  ( = buff )
                var blob = new Blob([buff], {'type': 'image/png'});
                var url = URL.createObjectURL(blob); //possibly `webkitURL` or another vendor prefix for old browsers.


            // stuff that didn't work

            // let decodedBSONBinary = // something using const Binary  - MongoDB library
            // var bitmap = fs.readFileSync(file);
            // var bitmap = fs.readFileSync(pic);

            // The atob() method decodes a base-64 encoded string.
            // let decodedPic = window.atob(pic);  // InvalidCharacterError: Failed to execute 'atob' on 'Window': The string to be decoded contains characters outside of the Latin1 range.
            // and now get:  The string to be decoded is not correctly encoded.

            // let decodedPic = new Blob(blobParts, options);  -- DIDN'T FINISH TRYING THIS OPTION


            // let decodedPic = fs.writeFileSync('output.png', buff);    // fs is only for server side, you can't use on frontend!!! 
            // but get:  'fs' is not defined error... 

            // https://javascript.info/blob
            // A data url has the form data:[<mediatype>][;base64],<data>. We can use such urls everywhere, on par with “regular” urls.
            // eg:   <img src="data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7">
            // The browser will decode the string and show the image: 
            

            // https://openbase.io/js/browserify-fs
            // let decodedPic = fs.readFile(buff, 'utf-8', function(err, data) {    //  w/o 'fs'.readFile, get 'readFile' is not defined
            //     console.log("fs.readFile  (aka decodedPic) is: ", data);          //  undefined! 
            //     return data
            // });



            return(
                <img 
                    src={url}
                    className = "screen-shape-600-900"
                    // height = "150px"
                /> 

                // stuff that didn't work

                // <img 
                //     className = "screen-shape-600-900"
                //     src={URL.createObjectURL(pic)} 
                //     alt="Screenshot of Project"
                // />

                // <img src={`data:image/png;base64,${pic}`} />
                // <img src="data:image/png;base64,{pic}" />   // Doesn't seem to work. 
                // <img src="decodedPic" /> 
                // <img src={"data:image/png;base64," + buff} />
                // https://stackoverflow.com/questions/25869017/how-to-convert-binary-data-and-mime-to-image-in-javascript
            )
        }
        console.log( "pic RvSCreen is : ", pic)
        return pic;
    }





} 

export default TelevisionScreen; 