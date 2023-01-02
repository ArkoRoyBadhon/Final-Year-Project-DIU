import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import '../Shared/Navbar.css'
import { FaImage } from 'react-icons/fa'
import Result from './Result';
import { FaBeer } from 'react-icons/fa';


const cropName = [
    { name: "potato" },
    { name: "Apple" },
    { name: "Rice" }
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

const Home = () => {
    const [dropdownValue, setDropDownValue] = useState("");

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


    return (
        <div className='h-auto pb-10'>
            {/* <Navbar /> */}

            <div className="hero h-[40rem] bg-gradient-to-r from-blue-600 to-violet-500">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl text-red-400 font-bold">Check Your Crops with Crop Doctor</h1>
                        <div className="flex my-10 ml-28">
                            <div className="dropdown dropdown-end">
                                <input defaultValue={dropdownValue} type="text" className='input bg-slate-300 text-black' placeholder='please enter a crop name' />
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    {
                                        cropName?.map(crop => <>
                                            <li><Link onClick={() => setDropDownValue(`${crop.name}`)}>{crop.name}</Link></li>
                                        </>)
                                    }
                                </ul>
                            </div>
                            {/* <button className='btn'>Select</button> */}
                        </div>

                        <section className="border border-red-500 py-5 rounded-lg">
                            <div  {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <div className='font-bold text-sm text-white flex flex-col items-center'>Drag & Drop Image, or click to select files
                                    <FaImage className='text-5xl text-center mt-3' /></div>
                            </div>
                            {/* <aside style={thumbsContainer}>
                                {thumbs}
                            </aside> */}
                        </section>
                        <br />
                        <button className="btn btn-primary mt-8">Predict</button>
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

            <div className="my-5 text-center">
                <aside>
                    {thumbs}
                </aside>
                <Result />
            </div>

        </div>
    );
};

export default Home;