import Hero from "./Hero";
import FeaturedWorks from "./FeaturedWorks";
import ContributeCTA from "./ContributeCTA";
import Community from "./Community";

export default function Home(){
    return(
        <>
        <Hero/>
        <FeaturedWorks title="Featured Works"/>
        <ContributeCTA main="Contribute to Escher World,"
        mainSub="Win $10,000 in scholarship cash!"
         subtitle="Share your work with a wider audience, win grant money for your hard work, connect with other Escher fans and much more! "
buttonCTA="Contribute Your Work"/>
        <Community main="Join our community of passionate artists who are creating amazing things."
         subtitle="Contribute to our vibrant arts community and make your mark on the world."
buttonCTA="Join Our Discord" featuredImg="./Images/Discord.png"/>
        </>
    )
}