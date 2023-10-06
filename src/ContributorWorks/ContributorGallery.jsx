import ContributeCTA from '../Home/ContributeCTA'
import ContributorCard from './ContributorCard'
import Community from '../Home/Community'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export default function ContributorGallery (props){
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
            <h2 className="text-4xl text-center font-bold">Contributor Gallery</h2>
            <p className='text-center text-md'>A look into what our contributors are creating.</p>
        </div>
    </div>
    <div className="grid sm:grid-cols-1 md:grid-cols-8 gap-4 my-4 text-center xs:mx-[20px] sm:mx-[20px] mb-[40px]">
        <div className="xs:col-span-1 md:col-span-6">
            <p className="text-snow font-bold uppercase">Select a Medium</p>
        </div>
        <div className="xs:col-span-1 md:col-span-2 sort-active">Featured</div>
        <div className="xs:col-span-1 md:col-span-2 sort-inactive">Paintings</div>
        <div className="xs:col-span-1 md:col-span-2 sort-inactive">Drawing</div>
        <div className="xs:col-span-1 md:col-span-2 sort-inactive">Printmaking</div>
        <div className="xs:col-span-1 md:col-span-2 sort-inactive">Woodblocks</div>
        <div className="xs:col-span-1 md:col-span-2 sort-inactive">Digital</div>
    </div>
    <div className="grid grid-cols-3 gap-4 my-10 mx-[100px]">
        <ContributorCard title="Reptiles" img="/Images/marcoLizards.png" id="1"/>
        <ContributorCard title="Angels and Devils" img="/Images/angelsAndDevils.png" id="2"/>
        <ContributorCard title="Escher Gold" img="/Images/escherGold.png" id="3"/>
    </div>
    <ContributeCTA main="Get your art work featured"
        mainSub="Win $10,000 in scholarship cash!"
         subtitle="Share your work with a wider audience, win grant money for your hard work, connect with other Escher fans and much more! "
buttonCTA="Contribute Your Work"/>
<Community main="Join our community of passionate artists who are creating amazing things."
         subtitle="Contribute to our vibrant arts community and make your mark on the world."
buttonCTA="Join Our Discord" featuredImg="./Images/Discord.png"/>
    </>)
}