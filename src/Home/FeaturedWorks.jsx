import WorkCard from "./WorkCard"
import Skeleton from "react-loading-skeleton"
export default function FeaturedWorks(props){

    const studyBtn = {
        padding:'10px',
        borderRadius: '4px'
    }
    return(
        
        <div className="m-auto grid grid-cols-3 pt-16 pb-24 bg-gradient-to-b from-black to-bg-night">
            <div className="m-auto col-start-2">
            <h2 className="text-center font-bold text-3xl text-tiffany-green tracking-in-expand">{props.title || <Skeleton/>}</h2>
            </div>
            <div className="col-span-3 m-auto">
                <div className="grid grid-cols-auto :grid-cols-1 mdlg:grid-cols-3 gap-10 items-center mt-10">
                    <div className={props.cardMargin}>
                    <WorkCard
                        featuredImg='/Images/marcoLizards.png'
                        projName="Art Title"
                        projDesc="some stuff about the art"
                        buttonCTA="View Artwork"
                        buttonLink={`/portfolio/agentxplore`}
                    />
                    </div>
                    <div>
                    <WorkCard
                        featuredImg="/Images/angelsAndDevils.png"
                        projName="Art Title"
                        projDesc="some stuff about the art"
                        buttonCTA="View Artwork"
                        buttonLink={`/portfolio/agentxplore`}
                    />
                    </div>
                    <div className={props.cardMargin}>
                    <WorkCard
                        featuredImg="/Images/escherGold.png"
                        projName="Art Title"
                        projDesc="some stuff about the art"
                        buttonCTA="View Artwork"
                        buttonLink={`/portfolio/agentxplore`}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}