import {IoReturnUpBackOutline, } from 'react-icons/io5'
import {PiCameraBold} from 'react-icons/pi'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ContributeCTA from '../../Home/ContributeCTA';
import { Link } from 'react-router-dom';
import FeaturedWorks from '../../Home/FeaturedWorks';

export default function Reptiles (props){
    return(
        <>
        <div className='mx-[40px]'>
    <div className="grid grid-cols-1 gap-4 my-[24px]">
        <Link to="/contributor-works/">
        <div className='underline'><IoReturnUpBackOutline size="20px" className="inline"/> Back to Contributor Works</div>
        </Link>
    </div>
    <div className="grid grid-cols-3 gap-4 my-[24px]">
        <div className='col-span-3'>
            <h2 className="text-4xl text-center font-bold">Reptiles</h2>
        </div>
    </div>
    <hr className='separator'/>
    <div className="grid grid-cols-6 gap-4  my-[24px]">
        <div className='col-span-4'>
            <div className="artPod items-center justify-center flex">
            <iframe title="Lizards Sphere 🦎 (M.C.Escher)" frameborder="0" allowfullscreen width="100%" height="100%" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1571caacecc5466e8fea4bf8abfbc8d9/embed?autospin=1&autostart=1&preload=1"> </iframe>
            </div>
        </div>
        <div className="col-span-2">
            <div className="artPod">
                <h3 className='text-lg font-bold mb-[24px]'>Reference Artwork</h3>
                <Carousel autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="/Images/EscherThumbnail/B327 Reptiles%20in%20Frame.jpg"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="/Images/EscherThumbnail/B327%20Reptiles%20close.jpg"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="http://127.0.0.1:5173/Images/EscherThumbnail/B422%20Plane%20Filling%202%20close.jpg"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <h3 className='text-lg font-bold mb-[24px] mt-[24px]'>About This Artwork</h3>
            <p>
M.C. Escher's Reptiles is a lithograph print first printed in March 1943. It is one of Escher's most famous works, and it is a prime example of his fascination with mathematics and tessellations.</p>

<p>Escher was fascinated by reptiles, and he used them as subjects in a number of his other works, including Metamorphosis II and Metamorphosis III. He was particularly drawn to their distinctive form, which he found to be well-suited for the purposes of creating tessellations.</p>

<p>Reptiles is a masterpiece of mathematical art, and it is one of Escher's most popular and enduring works. It is a print that continues to fascinate and inspire viewers today.</p>
            {/* <Link to={props.buttonLink}> */}
                        <div className="button  p-4 text-sm text-snow
                        font-semibold rounded-lg bg-purpleCTA 
                        text-center hover:bg-opacity-80 hover:shadow-sm duration-300">
                            View Artist Bio
                        </div>
                    {/* </Link> */}
            </div>
        </div>
    </div>
    </div>
    <ContributeCTA main="Get your art work featured"
        mainSub="Win $10,000 in scholarship cash!"
         subtitle="Share your work with a wider audience, win grant money for your hard work, connect with other Escher fans and much more! "
buttonCTA="Contribute Your Work"/>
<FeaturedWorks/>
</>
    )
}