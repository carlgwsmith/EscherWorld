import WorkCard from "./WorkCard"
import Skeleton from "react-loading-skeleton"
export default function FeaturedWorks(props){

    const studyBtn = {
        padding:'10px',
        borderRadius: '4px'
    }
    return(
        
        <div className="m-auto grid grid-cols-3 sm:px-[20px] md:px-[80px] pt-16 pb-24 bg-gradient-to-b from-black to-bg-night">
            <div className="m-auto col-start-2">
            <h2 className="text-center font-bold text-3xl text-tiffany-green tracking-in-expand">{props.title || <Skeleton/>}</h2>
            </div>
            <div className="col-span-3 m-auto">
                <div className="grid grid-cols-auto xs:grid-cols-1 mdlg:grid-cols-3 gap-20 items-center mt-10">
                    <div className={props.cardMargin}>
                    <WorkCard
                        featuredImg='/Images/marcoLizards.png'
                        projName="Reptiles"
                        projDesc="3D Digital Artworks based on Escher's Classic Reptiles"
                        buttonCTA="View Artwork"
                        buttonLink={`/contributor-works/reptiles`}
                    />
                    </div>
                    <div>
                    <WorkCard
                        featuredImg="/Images/angelsAndDevils.png"
                        projName="Angels And Devils"
                        projDesc="3D Digital Artworks based on Escher's Classic Circle Limit IV"
                        buttonCTA="View Artwork"
                        buttonLink={`/contributor-works/angelsanddevils`}
                    />
                    </div>
                    <div className={props.cardMargin}>
                    <WorkCard
                        featuredImg="/Images/kothekarThumb.png"
                        projName="Kothkar Paper"
                        projDesc="Intricate works cut from a single piece of white paper"
                        buttonCTA="View Artwork"
                        buttonLink={`/contributor-works/kothekar`}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}