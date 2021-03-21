
// Hooks can only be called inside of the body of a function component.

import React, { Component, useEffect, useRef } from 'react';
const MONGO_URL = "http://localhost:27017"
// let fileInput = React.createRef();

class ProjectForm extends Component{
    constructor(props) {
        super(props);
        this.addImageHandler = this.addImageHandler.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            name: "",
            description: "",
            link: "",
            languages: [],
            year: 0,
            images: []
        }
      }



    changeHandler = (event)=>{                  // form input field changes, that is. 
        let inputName = event.target.name
        this.setState(
            {[inputName]: event.target.value}
        )
    }



    read = (file, callback) => {
        var reader = new FileReader();

        reader.onload = function() {
          callback(reader.result);
        }
      
        reader.readAsText(file);   /// SB Diff READ AS function ??? 
        // content = fr.readAsDataURL(img);    // is one of the 4 load methods fileReader offers. 
    }


    callBack = (readerResult) => {
        // console.log("Callback called!, reader.result: ", readerResult)  // WORKS!!!!   is a PNG as TEXT TEXT TEXT 
        console.log("Callback called!, typeof reader.result: ", typeof readerResult)  // WORKS!!!! 

        this.setState(              // is this async?  maybe file is there, just a race issue vs c.log ?
            // {"images": [...this.state.images, fr]}  // is calling 'this' within 'this' an issue? I should know. 
            {"images": [...this.state.images, readerResult]}  // is calling 'this' within 'this' an issue? I should know. 

        , () => console.log("this.state.images is: ", this.state.images) )

        return readerResult
    }



    // FileReader can only access the contents of files that the user has expl\icitly selected, 
    // either using an HTML <input type="file"> element or by drag and drop.  I AM USING INPUT TYPE=FILE
    // It cannot be used to read a file by pathname from the user's file system. 
    // To read files on the client's file system by pathname, use the File System Access API.

    // moving FileReader to img upload, versus calling once on all images. 
    addImageHandler = async (file) => {   // add Image to State.  POST button adds images to FileReader instance.  
        console.log(" addImageHandler file is: ", file);
        console.log(" addImageHandler file.target.files is: ", file.target.files);  // the file list! 
        console.log(" addImageHandler file.target.files.fileList is: ", file.target.files[0] );  // returns a file. 

        let img = file.target.files[0]
        let content = "DEFAULT VAL";
        // COMMENTED OUT 12:28 AM  - March 21 Sun. 
        // let fr = await new FileReader();   //   use await ??  need FileReader bc sending >1 file, not FormData(); 
        // fr.result - This property is only valid after the read operation is complete, 
        // and the format of the data depends on which of the methods was used to initiate the read operation.


        content = await this.read(img, this.callBack)  // NOT USED! 
            console.log ("addImageHandler -- Content is : ", content)   // undefined
            // console.log ("addImageHandler -- fr is : ", fr) //  null 
            // console.log ("addImageHandler -- fr is : ", fr.result)  //  a PNG as text. 
        // consumes a File or Blob and generates a base64 encoded data string
        // can be used to display the thumbnail preview in web and mobile browsers locally.
        // fr.onerror = this.errorHandler;

        // COMMENTED OUT 12:28 AM  - March 21 Sun. 
        // this.setState(              // is this async?  maybe file is there, just a race issue vs c.log ?
        //     // {"images": [...this.state.images, fr]}  // is calling 'this' within 'this' an issue? I should know. 
        //     {"images": [...this.state.images, fr.result]}  // is calling 'this' within 'this' an issue? I should know. 

        // , () => console.log("this.state.images is: ", this.state.images) )
    }



    // processFile = (file) => {
    // }



    errorHandler = (e) => {
        console.log("Error: " + e.target.error.name)
    }



    // Submitting forms without the FormData API does not require other APIs for most use cases. 
    // The only case where you need an additional API is if you want to upload one or more files, where you use the FileReader API.
    postNewProject = async (e) =>{
        e.preventDefault();
        // let data = await this.processStateImagesToFileReader();

        fetch(`${MONGO_URL}/project/project`, {
            method: "POST",
            mode: 'cors', 
            headers: { 
                'Content-Type': 'application/json',  // including this will break it.  single or double quotes breaks..
                "Authorization":this.props.user.user_token
            },
            // body: this.state.images
            body: JSON.stringify(this.state.images)
        })
    }





    newProjectForm = () => {                    // Mirror Entry 
        // newProjectForm = async () => {         // if have this ASYNC, get err: Objects are not valid as a React child (found: [object Promise]) 
            return(
                <>
                <form onSubmit={(e) => this.addImageHandler(e) } >
                {/* <form onSubmit={(e) => this.addImageHandler(e).then(console.log("state.images is: ", this.state.images))} > */}
    
                    <input 
                        type='file' 
                        id='image1' 
                        // ref={this.fileInput}
                        placeholder='Image1'
                        accept="image/png, image/jpeg, image/jpg"
                        // accept=".json"
                        onChange={(file)=> {this.addImageHandler(file)}}   // syntax correct?
                    />
                    <button> Upload Image 1 </button>
                </form>
                    <br/>
                <form onSubmit={(e) => this.addImageHandler(e)} >
                    <input 
                        type='file' 
                        id="image2"
                        // value='image2' 
                        // ref={this.fileInput}
                        placeholder='Image2'
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(file)=> {this.addImageHandler(file)}}
                    />
                    <button> Upload Image 2 </button>
                </form>
                    <br/>
                <form onSubmit={(e) => this.addImageHandler(e)} >
                    <input 
                        type='file' 
                        id="image3"
                        // value='image3' 
                        // ref={this.fileInput}
                        placeholder='Image3'
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(file)=> {this.addImageHandler(file)}}
                    />
                    <button> Upload Image 3 </button>
                    <br/>
                </form>
                <br/>
                <form onSubmit={(e) => this.postNewProject(e)} >
                    <input 
                        type='text' 
                        id='name' 
                        placeholder='Project Name'
                        onChange={this.changeHandler}
                    />
                    <input 
                        type='textarea' 
                        id='description' 
                        placeholder='Description: Several Sentences About What the Project Does'
                        onChange={this.changeHandler}
                    />
                    <input 
                        type='text' 
                        id='link' 
                        placeholder='URL To Try the App'
                        onChange={this.changeHandler}
                    />
                    <input 
                        type='text' 
                        id='language' 
                        placeholder='Pipe Separated List of Languages Used '
                        onChange={this.changeHandler}
                    />
                    <input 
                        type='text' 
                        id='year' 
                        placeholder='Project Year'
                        onChange={this.changeHandler}
                    />
                    {/* file: Because its value is read-only, it is an uncontrolled component in React */}
    
                    {/* <input 
                        type='file' 
                        // id='image1' 
                        ref={this.fileInput}
                        placeholder='Image1'
                        accept="image/png, image/jpeg, image/jpg"
                        // accept=".json"
                        onChange={(file)=> {this.addImageHandler(file)}}   // syntax correct?
                    />
                    <input 
                        type='file' 
                        // value='image2' 
                        ref={this.fileInput}
                        placeholder='Image2'
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(file)=> {this.addImageHandler(file)}}
                    />
                    <input 
                        type='file' 
                        // value='image3' 
                        ref={this.fileInput}
                        placeholder='Image3'
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(file)=> {this.addImageHandler(file)}}
                    /> */}
    
                    {/* <input id="image-file" type="file" onchange="processNewUpload(this)" accept=".json" ></input> */}
                    <br/>
                    <br/>
                    <button> Post New Project </button>
                    <br/>
                </form>
                </>
    
            )
        }





    render(){
        let form = this.newProjectForm();
        return(
            <>
                {form}
            </>
        );
    }









    _DEADCODE_postNewProject_FORM_DATA_Attempt3 = async (e) =>{
        e.preventDefault();
        let data = new FormData();   // need FileReader bc sending >1 file. 
        this.state.images.forEach( (img, index) => {
            console.log("In Post New Project - img is: ", img)  // a File obj (subclass of Blob),  should work with .append().... 
            data.append(`file${index+1}`, img, `fileName${index+1}.jpg`)   // Appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.
        }) //.then( ()=>{

        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        var request = new XMLHttpRequest();   // getting JWT bad back from this.. 
        request.addEventListener("error", this.serveXmlHttpErrorMessage);   // event listeners must be before open
        request.withCredentials = true;         // this means use CORS
        request.open("POST", `${MONGO_URL}/project/project`, true);
        // request.setRequestHeader('Authorization','Basic ' + base64StringOfUserColonPassword); // for init login.... 
        request.setRequestHeader('Authorization', 'Bearer ' + this.props.user.token);

        request.send(data);
    }








    _DEADCODEpostNewProjectOrig = async (e) => {
        
        e.preventDefault();
        console.log("in postNewProject  this.state.images is: ", this.state.images)

        // need a FormData instance for each image?  How formdata work? 
        let data = new FormData(); 
        // data.append('file', this.state.selectedFile)
        
        // let fileReader = new FileReader();
        // fileReader.onload = function(eventFileLoad){
        //     textFromFileLoaded = JSON.parse(fileReader.result);  // yes we parse JSON then later stringify it, could refactor
        // };
        // fileReader.readAsText(blob, "UTF-8");



            this.state.images.forEach( (img, index) => {
                console.log("img is: ", img)  // a File obj (subclass of Blob),  should work with .append().... 
                // let blob = new Blob([content], { type: "application/json" }); //"text/xml"  });


                // formData.append(name, value);
                // The field's value. This can be a USVString or Blob (including subclasses such as File). 
                // If none of these are specified the value is converted to a string.
                // data.append(`file${index+1}`, blob)   // Appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.

                data.append(`file${index+1}`, img, `fileName${index+1}.jpg`)   // Appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.
                // console.log("data is: ", data)   always returns empty, as you can't log formData.


            }) //.then( ()=>{


        // let r  = await appendImages();
        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        if (this.props.user.user_id === undefined || this.props.user.user_id === ""  ){
            alert("You must be logged in to do that!")
        } else {
            console.log("in postNewProject, fetching...")
            fetch(`${MONGO_URL}/project/project`, {     // **************************************
                method: 'POST',  
                mode: 'cors', 
                headers: {   
                    // 'Content-Type': 'application/json', 
                    // 'Content-Type': 'multipart/form-data',  // Fails w no Content Type, too. 
                    "Authorization":this.props.user.user_token
                },
                body: 
                    JSON.stringify({
                    'name': this.state.name,        //need to append these to formdata outside this? 
                    'description': this.state.description,
                    'link': this.state.link,
                    'languages': this.state.languages,
                    'year': this.state.year,
                    // 'images': this.state.images,
                    'images': data
                })
            }).catch(err => {
                console.log("Error in Fetch request NewProjectForm: ", err)
            }).then(postResp => {
                // Confirm new project somehow. !! 
                console.log("In New Project Scene, postResp is: ", postResp)
            })
        }
    }



    _DEADCODEpostNewProjectV2 = async (e) => {
        e.preventDefault();
        console.log("in postNewProject  this.state.images is: ", this.state.images)

        let data = new FormData(); 
            this.state.images.forEach( (img, index) => {
                console.log("img is: ", img)  // a File obj (subclass of Blob),  should work with .append().... 
                data.append(`file${index+1}`, img, `fileName${index+1}.jpg`)   // Appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.
            }) //.then( ()=>{

        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        if (this.props.user.user_id === undefined || this.props.user.user_id === ""  ){
            alert("You must be logged in to do that!")
        } else {
            console.log("in postNewProject, fetching...")
            fetch(`${MONGO_URL}/project/project`, {     // **************************************
                method: 'POST',  
                mode: 'cors', 
                headers: {   
                    // 'Content-Type': 'application/json', 
                    'Content-Type': 'multipart/form-data', 
                    "Authorization":this.props.user.user_token
                },
                body: 
                    JSON.stringify({
                    'name': this.state.name,        //need to append these to formdata outside this? 
                    'description': this.state.description,
                    'link': this.state.link,
                    'languages': this.state.languages,
                    'year': this.state.year,
                    // 'images': this.state.images,
                    'images': data
                })
            }).catch(err => {
                console.log("Error in Fetch request NewProjectForm: ", err)
            }).then(postResp => {
                // Confirm new project somehow. !! 
                console.log("In New Project Scene, postResp is: ", postResp)
            })
        }
    }




    _DEAD_CODE_addImageHandler_FAILED_IDEAS = (file) => {   // add Image to State.  POST button adds images to FileReader instance. 
        // file.preventDefault();  
        console.log(" addImageHandler file is: ", file);
        console.log(" addImageHandler file.target.files is: ", file.target.files);  // the file list! 
        console.log(" addImageHandler file.target.files.fileList is: ", file.target.files[0] );  // returns a file. 
        console.log(" addImageHandler fileInput is: ", this.fileInput);
        // console.log(" addImageHandler file is: ", this.fileInput.current.files[0].name);
        // console.log(" addImageHandler fileInput.files is: ", this.fileInput.current.files);
        // console.log(" addImageHandler file is: ", fileInput.current.files[0].name);
        // const inputRef = useRef();

        let fileContents = file.target.files[0] ? file.target.files[0] : null ;
        this.setState(              // is this async?  maybe file is there, just a race issue vs c.log ?
            {"images": [...this.state.images, fileContents]}  // is calling 'this' within 'this' an issue? I should know. 
        , () => console.log("state.images is: ", this.state.images) )

        console.log("state.images is: ", this.state.images) // arr of File objects - GOOD. It does add them, async issues though? 


        // const blob = new Blob([fileContents], {type:"application/json"}); 
        // console.log("blob is: ", blob)
        // let textFromFileLoaded;
        // let fileReader = new FileReader();
    
        // fileReader.onload = async function(eventFileLoad){   // HOW MAKE THIS ASYNC? 
        //     let res = fileReader.result
        //     console.log("res is: ", res)
        //     textFromFileLoaded = await JSON.parse(res);  // yes we parse JSON then later stringify it, could refactor

        //     // textFromFileLoaded = await JSON.parse(fileReader.result);  // yes we parse JSON then later stringify it, could refactor
        // };
        // fileReader.readAsText(blob);
        // // fileReader.readAsText(blob, "UTF-8");
        // // fileReader.readAsDataURL(blob, file);

        // console.log("textFromFileLoaded is: ", textFromFileLoaded)


        // this.setState(
        //     {"images": [...this.state.images, textFromFileLoaded]}  // is calling 'this' within 'this' an issue? I should know. 
        // )

        // console.log("state.images is: ", this.state.images)
    }





















}

export default ProjectForm;




// For myFile.txt,  whose contents are "File content!"  I need what to do for img.. 
//     // In many browsers, Files have Blob properties/functions. These functions allows us to read the file.
//     transformFileReturnsText = async (file) => {                    // file not in params of orig. 
//         // .text() transforms the file into a stream and then into a string
//         const fileContent = await file.text();
//         console.log(fileContent);
//         // logs "File content!"

//         // .stream() returns a ReadableStream
//         const fileContentStream = await file.stream();
//         console.log(await this.streamToText(fileContentStream));
//         // logs "File content!"

//         const buffer = await file.arrayBuffer();
//         console.log(this.bufferToText(buffer))
//         // logs "File content!"

//         // .slice() allows you to get slices of the file here we take a slice of the entire file
//         const fileSliceBlob = file.slice(0, file.length);
//         // we convert to blob to a stream
//         const fileSliceBlobStream = await fileSliceBlob.stream();
//         console.log(await this.streamToText(fileSliceBlobStream));
//         // logs "File content!"
//     } //()

//     // We just use this function to convert streams to text
//    streamToText = async (blob) => {
//         const readableStream = await blob.getReader();
//         const chunk = await readableStream.read();
//         return new TextDecoder('utf-8').decode(chunk.value);
//     }

//     // Not the best way to get text from a file!
//     bufferToText = (buffer) => {
//         const bufferByteLength = buffer.byteLength;
//         const bufferUint8Array = new Uint8Array(buffer, 0, bufferByteLength);
//         return new TextDecoder().decode(bufferUint8Array);
//     }
