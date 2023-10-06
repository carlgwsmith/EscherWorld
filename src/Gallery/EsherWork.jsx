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

export default function EscherWork(props){
    const [workName, setWorkName] = useState('');
    const [workImg, setWorkImg] = useState('');
    const worksArr = pathArray
    let {id} = useParams()

      
    useEffect(() => {
        const idParam = {id}
        const work = worksArr[idParam.id - 1]
        setWorkName(work.name)
        setWorkImg(work.url)
    console.log('call once')
    }, []);

    return(<>
    <div className='mx-[40px]'>
    <div className="grid xs:grid-cols-1 md:grid-cols-8 gap-4 my-[36px]">
        <div className="xs:grid-cols-1 md:col-span-2">
            <Link to="/gallery">
                <div className="button p-4 text-sm text-snow font-semibold rounded-lg bg-purpleCTA text-center hover:bg-opacity-80 hover:shadow-sm duration-300"> <IoReturnUpBackOutline size="32px" className="inline pr-[4px]"/> Back to Escher Gallery</div>
            </Link>
        </div>
    </div>
    <div className="grid grid-cols-8 gap-4 my-[24px]">
    <div className='col-span-8'>
            <h2 className="xs:text-[24px] md:text-4xl text-center font-bold">{workName || 'Artwork Title / Heading' }</h2>
        </div>
        <div className='col-span-4 text-left'>
            <IoArrowBack className="inline"/> Previous Work
        </div>
        <div className='col-span-4 text-right'>
        Next Work <IoArrowForward className="inline"/>
        </div>
    </div>
    <hr className='separator'/>
    <div className="grid xs:grid-cols-1 md:grid-cols-6 gap-4  my-[24px]">
        <div className='xs:col-span-1 md:col-span-4'>
            <div className="artPod items-center justify-center flex">
                <img src={workImg}/>
            </div>
        </div>
        <div className="xs:col-span-1 md:col-span-2">
            <div className="artPod">
            <h3 className='text-lg font-bold mb-[24px]'>About This Artwork</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Ut sagittis et vulputate et elementum.Lorem ipsum dolor sit amet consectetur. Ut sagittis et vutate et elementum. Lorem ipsum dolor sit amet nsectetur. Ut sagittis et vulputate et eletum.Lorem ipsum dolor sit amet consectetur. Ut sagittis et vulputate et elentum.</p>
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