import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton"
import { useEffect, useState } from "react";

export default function ContributorDataCard(props){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);
    return(
        <div className="w-[300px] h-[500px] bg-night rounded-lg border-solid border-jet border-2">
            <div className="grid">
                { loading ? 
                <div className="bg-white">
                <Skeleton height={218}/>
                <Skeleton count={4}/>
                </div>
                :
                <div>
                     <div className="grid h-[200px] bg-cover bg-center bg-[image:var(--image-url)]" style={{'--image-url': `url(${props.featuredImg})`}} ></div>
                    <div className="p-5">
                    <div className="text-lg font-bold">{props.projName}</div>
                    <div className="text-sm">{props.projDesc}</div>
                </div>
                <div className="text-center p-5">
                    <Link to={props.buttonLink}>
                        <div className="button  p-4 text-sm text-snow
                        font-semibold rounded-lg bg-purpleCTA hover:bg-opacity-60  hover:shadow-sm duration-300">
                            {props.buttonCTA}
                        </div>
                    </Link>
                </div>
                </div>}
            </div>
        </div>
    )
}