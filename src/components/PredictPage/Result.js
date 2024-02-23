import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Result = ({ predictResult }) => {

    const [sResult, setSResult] = useState(null)

    const data = [
        {
            "disaseName": "Bacterial leaf blight",
            "medicine": [
                {
                    "name": "Upl Saaf Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/Untitleddesign_1_adec1180-1362-4f71-a633-1235b3b9e313_1800x1800.jpg?v=1668517899",
                    "price": 172,
                    "chemical": "Carbendazim 12% + Mancozeb 63% WP"
                },
                {
                    "name": "Merger Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/MERGER-FUNGICIDE_INDOFIL_1800x1800.jpg?v=1601728516",
                    "price": 315,
                    "chemical": "Tricyclazole 18 % + Mancozeb 62 % WP"
                }
            ]
        },
        {
            "disaseName": "Potato late blight",
            "medicine": [
                {
                    "name": "Merger Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/MERGER-FUNGICIDE_INDOFIL_1800x1800.jpg?v=1601728516",
                    "price": 315,
                    "chemical": "Tricyclazole 18 % + Mancozeb 62 % WP"
                },
                {
                    "name": "Blue copper fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/Artboard1copy6-7_1_1800x1800.webp?v=1674457703",
                    "price": 465,
                    "chemical": "Copper Oxychloride 50wp"
                }
            ]
        },
        {
            "disaseName": "Potato early blight",
            "medicine": [
                {
                    "name": "Merger Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/MERGER-FUNGICIDE_INDOFIL_1800x1800.jpg?v=1601728516",
                    "price": 315,
                    "chemical": "Tricyclazole 18 % + Mancozeb 62 % WP"
                },
                {
                    "name": "Blue copper fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/Artboard1copy6-7_1_1800x1800.webp?v=1674457703",
                    "price": 465,
                    "chemical": "Copper Oxychloride 50wp"
                }
            ]
        },
        {
            "disaseName": "Brown spot",
            "medicine": [
                {
                    "name": "Nativo Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/1_4_0e1a9088-d5be-4092-94fa-e023e1a25fc8_1800x1800.webp?v=1671454530",
                    "price": 111,
                    "chemical": "Tebuconazole + Trifloxystrobin 75 WG(50% +25% w/w"
                },
                {}
            ]
        },
        {
            "disaseName": "Leaf smut",
            "medicine": [
                {
                    "name": "Treat",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/TREAT-BIO-FUNGICIDE_1800x1800.jpg?v=1633004164",
                    "price": 250,
                    "chemical": "Trichoderma viride"
                },
                {
                    "name": "Zerox",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/1_26_9698bf8f-5f73-4a75-b4ab-cf33bdf3fd39_1800x1800.webp?v=1672056807",
                    "price": 1125,
                    "chemical": "Propiconazole 25% EC"
                }
            ]
        },
        {
            "disaseName": "Tomato early blight",
            "medicine": [
                {
                    "name": "Crystal Tilt Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/1_14_c29b66a9-7aeb-4479-b7b9-c7c6c211fc72_1800x1800.webp?v=1671455797",
                    "price": 172,
                    "chemical": "Propiconazole 25 % EC"
                },
                {
                    "name": "Luna Experience Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/Artboard13_1_1800x1800.webp?v=1673266959",
                    "price": 172,
                    "chemical": "Fluopyram 17.7%+ Tebuconazole17.7% w/w SC (400 SC)"
                }
            ]
        },
        {
            "disaseName": "Tomato late blight",
            "medicine": [
                {
                    "name": "Crystal Tilt Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/1_14_c29b66a9-7aeb-4479-b7b9-c7c6c211fc72_1800x1800.webp?v=1671455797",
                    "price": 172,
                    "chemical": "Propiconazole 25 % EC"
                },
                {
                    "name": "Luna Experience Fungicide",
                    "photo": "https://cdn.shopify.com/s/files/1/0722/2059/products/Artboard13_1_1800x1800.webp?v=1673266959",
                    "price": 172,
                    "chemical": "Fluopyram 17.7%+ Tebuconazole17.7% w/w SC (400 SC)"
                }
            ]
        }, {

            "disaseName": "Tomato healthy",
            "medicine": []
        }
    ]
    console.log(predictResult);


    const result = predictResult.pred[0]
    const diseaseName = result[0]
    const predictionAccuracy = Math.max(...result[1])
    console.log(predictionAccuracy)
    useEffect(() => {
        data.map(d => {
            if (d.disaseName.toLowerCase() === diseaseName.toLowerCase()) {
                setSResult(d)
            }
        })
    }, [predictResult])

    return (
        <div className='max-w-screen-lg w-[95%] my-10 bg-base-200 mx-auto rounded-lg shadow-2xl mb-10 pb-10'>
            <h2 className='pt-10 text-2xl rounded-t-lg font-bold pl-10 bg-green-400 text-slate-800 pb-7 uppercase'>The Predicted Result</h2>
            <div className="pl-10 mt-10 text-left flex flex-col gap-4">
                <p className="text-xl font-bold ">Crop Name: {predictResult.pred[1]}</p>
                <p className="text-xl font-bold ">Disease Name: {diseaseName}</p>
                <p className="text-xl font-bold ">Prediction Accuracy: {predictionAccuracy}</p>
                <p className="text-xl font-bold ">Solution Details:</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        sResult && sResult?.medicine?.length >0 && sResult?.medicine?.map((medicine, index) =>
                            <div key={index} className='p-4 bg-green-200 w-fit rounded-xl text-center shadow-lg max-w-[300px]'>
                                <img src={medicine.photo} alt="" className='w-64 h-64' />
                                <h2 className='text-2xl font-bold'>{medicine.name}</h2>
                                <p className='text-xl font-semibold text-red-600'>{medicine?.price}Tk</p>
                                <p className='text-base'>{medicine.chemical}</p>
                            </div>
                        )
                    }
                </div>
                <Link className="btn mt-8 w-fit px-6 bg-green-300 text-black text-lg font-semibold ">Detailed result</Link>
            </div>
        </div>
    );
};

export default Result;