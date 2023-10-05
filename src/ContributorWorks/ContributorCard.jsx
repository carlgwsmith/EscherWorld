import {PiCameraBold} from 'react-icons/pi'
import {AiOutlineHeart, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function ContributorCard (props){
    return(<>
    <div className="grid grid-cols-12 contributorPod pb-4">
        <div className="col-span-12">
        <Link to={'/contributor-works/artwork/' + props.id}>
        <div className="items-center justify-center flex">
                <img src={props.img} style={{width: '100%'}}/>
            </div>
            </Link>
        </div>
        <div className="col-span-12 mb-4 m-4">
            <Link to={'/contributor-works/artwork/' + props.id}>
            <h3 className='font-bold text-xl'>{props.title}</h3>
            </Link>
        </div>
        <div className="col-span-6 my-2 mx-4">
            Avatar
        </div>
       <div className='col-span-3 text-right my-2 mx-4'><AiOutlineHeart className="inline"/> 1.4k</div>
       <div className='col-span-3 text-right my-2 mx-4'><AiFillEye className="inline"/> 400</div>
    </div>
    
    </>)
}