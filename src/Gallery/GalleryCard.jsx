import {AiOutlineHeart, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import pathArray from './Paths.jsx'


export default function GalleryCard({currentItems}){
    const worksPaths = pathArray

    return(<>
    { currentItems && currentItems.map((item, index) =>
        <div key={index} className="grid grid-cols-12 contributorPod pb-4">
            <div className="col-span-12">
            <div className="items-center justify-center flex">
                    <img src={item.url} style={{width: '100%'}}/>
                </div>
            </div>
            <div className="col-span-12 mb-4 m-4">
                <Link to={'/contributor-works/artwork/' + [item]}>
                <h3 className='font-bold text-xl'>{item.name}</h3>
                </Link>
            </div>
            <div className="col-span-6 my-2 mx-4">
                Avatar
            </div>
           <div className='col-span-3 text-right my-2 mx-4'><AiOutlineHeart className="inline"/> 1.4k</div>
           <div className='col-span-3 text-right my-2 mx-4'><AiFillEye className="inline"/> 400</div>
        </div>
        )}
        </>
    )
}