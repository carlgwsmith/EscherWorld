import {IoReturnUpBackOutline, } from 'react-icons/io5'
import {PiCameraBold} from 'react-icons/pi'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ContributeCTA from '../Home/ContributeCTA';
import { Link, useNavigate, useParams} from 'react-router-dom';
import FeaturedWorks from '../Home/FeaturedWorks';
import supabase from '../Config/supabaseClient';
import { useEffect, useState } from 'react'


export default function Event(){
    const {id} = useParams()
    const [contributor_name, setContributorName] = useState('');
    const [work_title, setWork_title] = useState('');
    const [reference_artwork, setReference_artwork] = useState('');
    const [work_description, setWork_description] = useState('');
    const [formError, setformError] = useState('');
    const navigate = useNavigate()
    const [media_url, setmedia_url] = useState('')

    useEffect(() => {
        const fetchEvent = async ()=>{
            const {data, error} = await supabase
            .from('ContributorWorks')
            .select()
            .eq('id', id)
            .single()

            if(error){
                setFormError('Event can not be retreived')
                navigate('/', {replace: true})
            }
            if(data){
                setContributorName(data.contributor_name)
                setWork_title(data.work_title)
                setReference_artwork(data.reference_artwork)
                setWork_description(data.work_description)
                setmedia_url(data.media_url)
            }
        }
        fetchEvent()


    }, [id, navigate ]);

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
            <h2 className="text-4xl text-center font-bold">{work_title || 'Artwork Title / Heading' }</h2>
        </div>
    </div>
    <hr className='separator'/>
    <div className="grid grid-cols-6 gap-4  my-[24px]">
        <div className='xs:col-span-6 sm:col-span-4'>
            <div className="artPod items-center justify-center flex">
               <img src={'https://lxqtniuuczmjlopncjat.supabase.co/storage/v1/object/public/contributor-works/' + media_url}/>
            </div>
        </div>
        <div className="xs:col-span-6 sm:col-span-2">
            <div className="artPod">
                <h3 className='text-lg font-bold mb-[24px]'>Reference Artwork</h3>
                <Carousel autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://en.m.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/PD-icon.svg/96px-PD-icon.svg.png"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <h3 className='text-lg font-bold mb-[24px] mt-[24px]'>About This Artwork</h3>
            <p>{work_description}</p>
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