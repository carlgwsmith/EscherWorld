import {AiOutlineHeart, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import pathArray from './Paths.jsx'
import Skeleton from 'react-loading-skeleton'
import {useState, useEffect} from 'react'


export default function GalleryCard({currentItems}){
    const worksPaths = pathArray
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    return(<>
    {/* { loading ? 
        <div className="grid grid-cols-4">
        <Skeleton height={218}/>
        <Skeleton count={4}/>
        </div>
        : */}
    { currentItems && currentItems.map((item, index) =>
        <div key={index} className="grid grid-cols-12 contributorPod pb-4 bg-jet">
            <div className="col-span-12">
            <Link to={'/gallery/artwork/' + [item.id]}>
            <div className="items-center justify-center flex">
                    <img src={item.thumb} style={{width: '100%'}}/>
                </div>
                </Link>
            </div>
            <div className="col-span-12 mb-4 m-4">
                <Link to={'/gallery/artwork/' + [item.id]}>
                <h3 className='font-bold text-xl'>{item.name || <Skeleton/>}</h3>
                </Link>
            </div>
            <div className="col-span-6 my-2 mx-4">
                Avatar
            </div>
           <div className='col-span-3 text-right my-2 mx-2'><AiOutlineHeart className="inline"/> 1.4k</div>
           <div className='col-span-3 text-right my-2 mx-2'><AiFillEye className="inline"/> 400</div>
        </div>
        )}
        {/* } */}
        </>
    )
}