import React from 'react'
import {useState} from "react";
import axios from "axios"


function FileUploads() {

    const[singleUpload, setSingleUpload] = useState(null)
    const[multipleUpload, setMultipleUpload] = useState([]);
    const[message, setMessage] = useState("");

    function handleUploadSingleFile(e) {
        setSingleUpload(e.target.files[0])
    }

    function handleUploadMultipleFile(e) {
        setMultipleUpload(e.target.files);
    }

    async function handleClickSingleFile (e){
        if(!singleUpload) {
            setMessage("Please select a File first")
            return;
        }

        const formData = new FormData();
        formData.append("file", singleUpload);

        try{
            const res = await axios.post("http://localhost:5000/api/upload-single", formData, {
                headers : {"content-Type" : "multipart/form-data"}
            })
            setMessage(res.data.message)
        }catch(error) {
            setMessage("File upload failed!")
        }
    }

    async function handleClickMultipleFile (e){
        if(!multipleUpload){
            setMessage("Please upload some files !")
            return;
        }

        const formData = new FormData();
        for(let i = 0; i< multipleUpload.length; i++){
            formData.append("files", multipleUpload[i])
        }
        try {
            const res = await axios.post("http://localhost:5000/api/upload-multiple", formData, {
                headers : {"content-Type" : "multipart/form-data"}
            })
            setMessage(res.data.message);
        }catch(error){
            setMessage("Multiple file Uploads Failed !")
        }
        

    }

  return (
    <div className='text-black'>
      <h2>File uploads in Reacts</h2>
      <div>
        <h3>Single file uploads</h3>
        <input placeholder='upload the file...' type='file' name='file' onChange={handleUploadSingleFile} />
        <button onClick={handleClickSingleFile}>Upload</button>
      </div>

      <div>
        <h3>Multiple file Uploads</h3>
        <input placeholder='Upload multiple files' type='file' multiple name='files' onChange={handleUploadMultipleFile} />
        <button onClick={handleClickMultipleFile}>Upload</button>
      </div>
    </div>
  )
}

export default FileUploads
