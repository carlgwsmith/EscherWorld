import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"

export default function Community(props){
    return(<div className="m-auto grid grid-cols-6 pt-24 pb-24 bg-night">
    <div className="col-start-2 col-span-3">
        <div>
    <h2 className="font-bold text-4xl leading-normal text-white tracking-in-expand">{props.main || <Skeleton/>}</h2>
    <h2 className="font-regular mt-5 mb-2 text-xl leading-normal text-white tracking-in-expand">{props.subtitle || <Skeleton/>}</h2>
    </div>
    </div>
    <div className="col-span-2 text-center m-auto">
        <img src={props.featuredImg}/>
    </div>
    <div className="col-start-2">
        <Link to={props.buttonLink}>
            <div className="button text-center mt-8 p-4 text-sm text-white
            font-semibold rounded-lg bg-purpleCTA hover:bg-opacity-80 hover:shadow-sm duration-300">
                {props.buttonCTA}
            </div>
        </Link>
    </div>
</div>)
}