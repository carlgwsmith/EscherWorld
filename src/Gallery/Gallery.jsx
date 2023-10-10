// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import ContributorCard from '../ContributorWorks/ContributorCard'
// import { useEffect } from "react";
import GalleryList from "./GalleryList"
import { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
import pathArray from "./Paths";

export default function Gallery(props){

    const worksPaths = pathArray

    const newArray = []
    useEffect(() => {

        for (let i = 0; i < worksPaths.length; i++) {
            let imgObj = {
                name: '',
                url:'',
                thumb:'',
                id: 0
            }
            imgObj.name = worksPaths[i].name
            imgObj.url = worksPaths[i].url
            imgObj.thumb = '/Images/EsherThumbnail/' + worksPaths[i].url.slice(20, -4) + '.jpg'
            imgObj.id = i + 1

            newArray.push(imgObj)
            
        }
        console.log(newArray)
    }, []);
    
        // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_apiKey,
//     authDomain: import.meta.env.VITE_FIREBASE_authDomain,
//     projectId: import.meta.env.VITE_FIREBASE_projectId,
//     storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
//     appId: import.meta.env.VITE_FIREBASE_appId,
//     measurementId: import.meta.env.VITE_FIREBASE_measurementId
//   };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
    return(<>
    <div className="grid grid-cols-3 gap-4 mt-[60px] mb-[20px]">
        <div className='col-span-3'>
            <h2 className="text-4xl text-center font-bold">M.C. Escher Collection</h2>
            <p className='text-center text-md'>A look into what our M.C. Escher Collection</p>
        </div>
    </div>
    <div className="grid sm:grid-cols-1 md:grid-cols-8 gap-4 my-4 text-center xs:mx-[20px] sm:mx-[20px] md:mx-[60px] mb-[40px]">
        <div className="xs:col-span-1 md:col-span-8">
            <p className="text-snow font-bold uppercase">Select a Medium</p>
        </div>
        <div className="xs:col-span-1 md:col-span-2 sort-inactive">Paintings</div>
        <div className="xs:col-span-1 md:col-span-2 sort-active">Drawing</div>
        <div className="xs:col-span-1 md:col-span-2 sort-inactive">Printmaking</div>
        <div className="xs:col-span-1 md:col-span-2 sort-inactive">Woodblocks</div>
    </div>

    <GalleryList itemsPerPage={12} />
    </>
    )
}