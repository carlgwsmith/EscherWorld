import {IoReturnUpBackOutline, IoArrowBack, IoArrowForward} from 'react-icons/io5'
import {PiCameraBold} from 'react-icons/pi'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ContributeCTA from '../Home/ContributeCTA';
import { Link } from 'react-router-dom';
import FeaturedWorks from '../Home/FeaturedWorks';
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import pathArray from './Paths';

export default function EscherWork(){
    const [workName, setWorkName] = useState('');
    const [workImg, setWorkImg] = useState('');
    const [carouselImages, setImages] = useState([])
    // const [workClose, setWorkClose] = useState('');
    // const [workInFrame, setInFrame] = useState('');
    const [prevWork, setPrevWork] = useState('')
    const [nextWork, setNextWork] = useState('')
    const worksArr = pathArray
    let {id} = useParams()

 
      
    useEffect(() => {
        const idParam = {id}
        const work = worksArr[idParam.id - 1]
        setWorkName(work.name)
        setWorkImg(work.url)
        setNextWork(Number(idParam.id) + 1)
        setPrevWork(Number(idParam.id) - 1)
        const arr = work.carousel
        setImages(arr)
        console.log(carouselImages)
    },[carouselImages, id, worksArr]);

    return(<>
    <div className='mx-[40px]'>
    <div className="grid xs:grid-cols-1 md:grid-cols-8 gap-4 my-[36px]">
        <div className="xs:grid-cols-1 md:col-span-2">
            <Link to="/gallery" >
                <div className="button p-4 text-sm text-snow font-semibold rounded-lg bg-purpleCTA text-center hover:bg-opacity-80 hover:shadow-sm duration-300"> <IoReturnUpBackOutline size="32px" className="inline pr-[4px]"/> Back to Escher Gallery</div>
            </Link>
        </div>
    </div>
    <div className="grid grid-cols-8 gap-4 my-[24px]">
    <div className='col-span-8'>
            <h2 className="xs:text-[24px] md:text-4xl text-center font-bold">{workName || 'Artwork Title / Heading' }</h2>
        </div>
        <div className='col-span-4 text-left'>
           <a href={'/gallery/artwork/' + prevWork} > <IoArrowBack className="inline"/> Previous Work</a>
        </div>
        <div className='col-span-4 text-right'>
        <a href={'/gallery/artwork/' + nextWork}>
        Next Work <IoArrowForward className="inline"/>
        </a>
        </div>
    </div>
    <hr className='separator'/>
    <div className="grid xs:grid-cols-1 md:grid-cols-6 gap-4  my-[24px]">
        <div className='xs:col-span-1 md:col-span-4'>
            <div className="artPod items-center justify-center flex">
                <Carousel autoPlay={true} showArrows={true} showThumbs={true} infiniteLoop={true}>
                    {carouselImages.map(url =>(
                        <div key={url}>
                            <img src={url}/>
                        </div>
                    ))}
            </Carousel>
            </div>
        </div>
        <div className="xs:col-span-1 md:col-span-2">
            <div className="artPod">
            <h3 className='text-lg font-bold mb-[24px]'>About This Artwork</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Ut sagittis et vulputate et elementum.Lorem ipsum dolor sit amet consectetur. Ut sagittis et vutate et elementum. Lorem ipsum dolor sit amet nsectetur. Ut sagittis et vulputate et eletum.Lorem ipsum dolor sit amet consecteur. Ut sagittis et vulputate et elentum.</p>
            <p>Ut sagis et vulputate et elementum.Lorem psum dolor sit amet consectetur. Ut sagittis et vulputate et el. Lorem ipsum dolor sit amet consectetur. Ut sgittis et vulputate et elementum.Lorem ipsum dolor sit amet consectetur.</p>
            <p>Ut sagittis et vutate et elementum. Lorem ipsum dolor sit amet consectetur. </p>
            </div>
        </div>
    </div>
    </div>
    <ContributeCTA main="Get your art work featured"
        mainSub="Win $10,000 in scholarship cash!"
         subtitle="Share your work with a wider audience, win grant money for your hard work, connect with other Escher fans and much more! "
buttonCTA="Contribute Your Work"/>
</>)
}