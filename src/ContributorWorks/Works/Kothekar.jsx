import {IoReturnUpBackOutline, } from 'react-icons/io5'
import {PiCameraBold} from 'react-icons/pi'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ContributeCTA from '../../Home/ContributeCTA';
import { Link } from 'react-router-dom';
import FeaturedWorks from '../../Home/FeaturedWorks';

export default function Kothekar (props){
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
            <h2 className="text-4xl text-center font-bold">Kothkar's Paper Works</h2>
        </div>
    </div>
    <hr className='separator'/>
    <div className="grid grid-cols-6 gap-4  my-[24px]">
        <div className='col-span-4'>
            <div className="artPod items-center justify-center flex" style={{padding: '0px'}}>
            <img src='/Images/kothekar.jpg' width="100%" height="100%"/>
            </div>
        </div>
        <div className="col-span-2">
            <div className="artPod">
                <h3 className='text-lg font-bold mb-[24px]'>Reference Artwork</h3>
                <Carousel autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="/Images/EscherThumbnail/B390%20Spirals%20in%20Frame.jpg"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="/Images/EscherThumbnail/B390%20Spirals%20close.jpg"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
            <h3 className='text-lg font-bold mb-[24px] mt-[24px]'>About This Artwork</h3>
            <p>
            Harnessing the captivating power of pattern and mathematic principles, Parth Kothekar cuts meticulously deceptive works from single sheets of paper. The trippy pieces are inspired by the iconic optical illusions of M.C. Escher and utilize variances in depth and scale to create scenarios that appear three-dimensional. Some of the cuts are more pictorial and evocative of Escher’s “Relativity” stairs, while others rely on repetitive motifs alone to create immersive scenes of geometric shapes and lines.</p>
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