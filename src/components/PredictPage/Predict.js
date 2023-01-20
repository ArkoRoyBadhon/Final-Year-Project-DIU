import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import '../Shared/Navbar.css';
import Result from './Result';


const cropName = [
    { name: "Rice" },
    { name: "Potato" },
    { name: "Tomato" },
]

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    // width: "600px"
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 10,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: "350px",
    height: "350px",
    padding: 4,
    boxSizing: 'border-box'

};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: "400px",
    height: '100%'
};

const Predict = () => {
    const [dropdownValue, setDropDownValue] = useState("");
    const [predictResult, setPredictResult] = useState(null)

    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                    alt="img"
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount

        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const image = files;
        let formData = new FormData();
        formData.append('image', e.target.file.files[0]);

        const config = {
            // mode: 'no-cors',
            method: 'POST',
            formData
            ,
            body: formData
        }
        if (dropdownValue == 'Rice') {
            fetch(`http://127.0.0.1:5000/predict/rice`, config)
                .then(res => res.json())
                .then(data => {

                    setPredictResult(data)
                })
        }
        else if (dropdownValue == 'Potato') {
            fetch(`http://127.0.0.1:5000/predict/potato`, config)
                .then(res => res.json())
                .then(data => {

                    setPredictResult(data)
                })
        }
        if (dropdownValue == 'Tomato') {
            fetch(`http://127.0.0.1:5000/predict/tomato`, config)
                .then(res => res.json())
                .then(data => {

                    setPredictResult(data)
                })
        }
    }

    return (
        <div className='pb-10'>
            <div className=" ">
                <div className=" text-center">
                    <div className="">
                        <div className="flex flex-col mt-10 mb-3 gap-3">
                            <h1 className="text-3xl text-center
                          text-slate-800 font-bold uppercase">Check Your Crops<br /> </h1>
                            <div className="dropdown dropdown-end mt-5">
                                <select className="select select-success w-[300px]" required defaultValue={dropdownValue}>
                                    <option disabled selected>Pick your favorite anime</option>
                                    {
                                        cropName?.map(crop => <>
                                            <option><Link onClick={() => setDropDownValue(`${crop.name}`)}>{crop.name}</Link></option>
                                        </>)
                                    }
                                </select>
                                {/* <input type="text" className='input w-[300px]  bg-slate-300 text-black' placeholder='please enter a crop name' />
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    {
                                        cropName?.map(crop => <>
                                            <li><Link onClick={() => setDropDownValue(`${crop.name}`)}>{crop.name}</Link></li>
                                        </>)
                                    }
                                </ul> */}
                            </div>
                            {/* <button className='btn'>Select</button> */}
                        </div>

                        <form onSubmit={handleSubmit} className=" rounded-lg">
                            <input type="file" name='file' className="file-input file-input-bordered border-success  file-input-success w-[300px]" />
                            {/* <div  {...getRootProps({ className: 'dropzone' })}>
                                <input type='file'   {...getInputProps()} />
                                <div className='font-bold border border-red-500 py-5 text-sm text-white flex flex-col items-center'>Drag & Drop Image, or click to select files
                                    <FaImage className='text-5xl text-center mt-3' /></div>
                            </div> */}
                            {/* <aside style={thumbsContainer}>
                                {thumbs}
                            </aside> */}

                            <br />
                            <button type='submit' className="btn btn-primary bg-[#224229] border-none  px-10 mt-8">Predict</button>
                        </form>
                        {/* {
                            <img src={images} alt="nothing" />
                        } */}
                        <div>
                            {/* <aside style={thumbsContainer}>
                                {thumbs}
                            </aside> */}
                        </div>
                    </div>
                </div>
            </div>

            {
                predictResult && <div className="my-5 text-center">
                    <aside>
                        {thumbs}
                    </aside>
                    <Result predictResult={predictResult} />
                </div>}

        </div>
    );
};

export default Predict;