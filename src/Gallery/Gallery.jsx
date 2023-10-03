// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ContributorCard from '../ContributorWorks/ContributorCard'
import pathArray from './Paths.jsx'
import { useEffect } from "react";

export default function Gallery(props){

    const worksPaths = pathArray

    
    // useEffect(() => {

    //     for (let i = 0; i < worksPaths.length; i++) {
    //         let imgObj = {
    //             name: '',
    //             url:'',
    //         }
    //         imgObj.name = worksPaths[i].slice(25, -4)
    //         imgObj.url = worksPaths[i]

    //         newArray.push(imgObj)
    //     }
    // }, []);
    
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
    <div className="grid grid-cols-3 gap-4 my-[24px]">
        <div className='col-span-3'>
            <h2 className="text-4xl text-center font-bold">M.C. Escher Collection</h2>
        </div>
    </div>
    <div className="grid grid-cols-4 gap-4 mx-[40px] my-[24px]">
        {worksPaths.map(work =>
            <div>
            <ContributorCard img={work.url} title={work.name}/>
            </div>)}
    </div>
    </>)
}