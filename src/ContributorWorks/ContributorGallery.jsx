import ContributeCTA from '../Home/ContributeCTA'
import ContributorCard from './ContributorCard'
import Community from '../Home/Community'
export default function ContributorGallery (props){
    return(<>
    <div className="grid grid-cols-3 gap-4 mt-[60px] mb-[20px]">
        <div className='col-span-3'>
            <h2 className="text-4xl text-center font-bold">{props.artworkTitle || 'Artwork Title / Heading' }</h2>
        </div>
    </div>
    <div className="grid grid-cols-12 gap-4 my-4 text-center mx-[100px]">
        <div className="col-span-12 mb-[40px]">
            <p className="text-white font-bold">Select a Medium</p>
        </div>
        <div className="col-span-2 sort-active">Featured</div>
        <div className="col-span-2 sort-inactive">Paintings</div>
        <div className="col-span-2 sort-inactive">Drawing</div>
        <div className="col-span-2 sort-inactive">Printmaking</div>
        <div className="col-span-2 sort-inactive">Woodblocks</div>
        <div className="col-span-2 sort-inactive">Digital</div>
    </div>
    <div className="grid grid-cols-3 gap-4 my-10 mx-[100px]">
        <ContributorCard title="Reptiles" img="/Images/marcoLizards.png" id="1"/>
        <ContributorCard title="Angels and Devils" img="/Images/angelsAndDevils.png" id="2"/>
        <ContributorCard title="Escher Gold" img="/Images/escherGold.png" id="3"/>
    </div>
    <ContributeCTA main="Get your art work featured"
        mainSub="Win $10,000 in scholarship cash!"
         subtitle="Share your work with a wider audience, win grant money for your hard work, connect with other Escher fans and much more! "
buttonCTA="Contribute Your Work"/>
<Community main="Join our community of passionate artists who are creating amazing things."
         subtitle="Contribute to our vibrant arts community and make your mark on the world."
buttonCTA="Join Our Discord" featuredImg="./Images/Discord.png"/>
    </>)
}