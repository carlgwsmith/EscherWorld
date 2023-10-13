import {IoReturnUpBackOutline, } from 'react-icons/io5'
import {PiCameraBold} from 'react-icons/pi'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ContributeCTA from '../../Home/ContributeCTA';
import { Link } from 'react-router-dom';
import FeaturedWorks from '../../Home/FeaturedWorks';

export default function AngelsAndDevils (props){
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
            <h2 className="text-4xl text-center font-bold">Angels And Devils</h2>
        </div>
    </div>
    <hr className='separator'/>
    <div className="grid grid-cols-6 gap-4  my-[24px]">
        <div className='xs:col-span-6 md:col-span-4'>
            <div className="artPod items-center justify-center flex" style={{padding: '0px'}}>
            <iframe title="Angels & Devils ☯ TRANSFORMING (Escher)" frameborder="0" allowfullscreen  width="100%" height="100%" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3bb4e13103a042309894d868e8bc9ad2/embed?autospin=1&autostart=1&preload=1"> </iframe>
            </div>
        </div>
        <div className="xs:col-span-6 md:col-span-2">
            <div className="artPod">
                <h3 className='text-lg font-bold mb-[24px]'>Reference Artwork</h3>
                <Carousel autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="/Images/EscherThumbnail/B436%20Circle%20Limit%204%20close.jpg"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="/Images/EscherThumbnail/B436%20Circle%20Limit%204%20in%20Frame.jpg"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
            <h3 className='text-lg font-bold mb-[24px] mt-[24px]'>About This Artwork</h3>
            <p>
            The print presents us with white ‘angels’ and black ‘devils’ (in the form of bats). The three angels and three devils in the middle complement each other perfectly. Good and evil need each other in order to be visible, to infinity.</p>

<p>What is so fascinating and brilliant about Escher is that he succeeded in making hyperbolic tilings based on complex mathematical theories about which many mathematicians have racked their brains, despite the fact that he himself did not understand anything about these theories.</p>
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