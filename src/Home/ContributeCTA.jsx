import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"

export default function ContributeCTA(props){
    return(<div className="m-auto grid grid-cols-6 pt-24 pb-24 bg-purpleCTA">
    <div className="xs:px-[40px] md:px-[80px] xs:col-span-6 md:col-span-6">
        <div>
    <h2 className="font-bold text-3xl leading-normal text-snow tracking-in-expand">{props.main || <Skeleton/>}</h2>
    <h2 className="font-bold text-3xl leading-normal text-snow tracking-in-expand">{props.mainSub || <Skeleton/>}</h2>
    <h2 className="font-regular mt-5 mb-2 text-xl leading-normal text-snow tracking-in-expand">{props.subtitle || <Skeleton/>}</h2>
    </div>
    </div>
    <div className="xs:px-[40px] md:px-[80px] xs:col-span-6 md:col-span-2">
        <Link to={props.buttonLink}>
            <div className="button text-center mt-8 p-4 text-sm text-purpleCTA
            font-semibold rounded-lg bg-white hover:bg-opacity-60 hover:shadow-sm duration-300">
                {props.buttonCTA}
            </div>
        </Link>
    </div>
</div>)
}