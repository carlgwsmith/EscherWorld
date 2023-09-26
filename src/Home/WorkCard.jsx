import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton"
import { useEffect, useState } from "react";

export default function WorkCard(props){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);
    return(
        <div className="w-[300px] bg-night rounded-lg border-solid border-jet border-2">
            <div className="grid">
                { loading ? 
                <div className="bg-white">
                <Skeleton height={218}/>
                <Skeleton count={4}/>
                </div>
                :
                <div>
                     <div className="grid">
                    <img src={props.featuredImg} style={{width: '100%'}}/></div>
                    <div className="p-5">
                    <div className="text-lg font-bold">{props.projName}</div>
                    <div className="text-sm">{props.projDesc}</div>
                </div>
                <div className="text-center p-5">
                    <Link to={props.buttonLink}>
                        <div className="button  p-4 text-sm text-white
                        font-semibold rounded-lg bg-purpleCTA hover:bg-opacity-80 hover:shadow-sm duration-300">
                            {props.buttonCTA}
                        </div>
                    </Link>
                </div>
                </div>}
            </div>
        </div>
    )
}