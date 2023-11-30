import supabase from "../Config/supabaseClient"
import { useEffect, useState } from "react"
import ContributedWorkCard from "./ContributedWorkCard"
import { Link } from "react-router-dom"
import {GrFormAdd} from 'react-icons/gr'
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'
import WorkCard from "../Home/WorkCard"

export default function ContributedGallery (){
 const [error, setError] = useState(null)
 const [works, setWorks] = useState(null)
 const [orderBy, setOrderBy] = useState('created_at')

//  const d = new Date();
//  let month = d.getMonth() + 1;
//  let year = d.getFullYear();
//  const [currentMonth, setCurrentMonth] = useState(month)
//  const [currentYear, setCurrentYear] = useState(year)

//  const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const incrementMonth = ()=>{
//     if(currentMonth == 12){
//         setCurrentMonth(1)
//         setCurrentYear(currentYear + 1)
//     }
//     else{
//         setCurrentMonth(currentMonth + 1)
//     }
//  }
//  const decrementMonth = ()=>{
//     if(currentMonth == 1){
//         setCurrentMonth(12)
//         setCurrentYear(currentYear - 1)
//     }
//     else{
//         setCurrentMonth(currentMonth - 1)
//     }
//  }


 useEffect(() => {
    const fetchWorks = async () =>{
        const {data, error} = await supabase
        .from('ContributorWorks')
        .select()
        .order(orderBy, {ascending: true})

        if(error){
            setError('could not reach database')
            setWorks(null)
            console.log(error)
        }
        if(data){
            setWorks(data)
            setError(null)
        }
    }

    fetchWorks()
 }, [orderBy]);


 const handleDelete = (id)=>{
    setWorks(prevWorks =>{
        return prevWorks.filter(work=> work.id !== id)
    })
 }


    return(<>
    <div className=" xs:mx-[20px] sm:mx-[20px] md:mx-[80px] pb-6">
    {/* <div className="grid grid-cols-12 px-4 py-[60px]">
                <div className="col-span-4">
                   <Link to="/createWork" className="border-1 bg-slate-400 p-4 rounded-sm text-gray-900"><GrFormAdd className="inline"/>Create New Work</Link>
                </div>
            </div> */}
        {error && (<p>{error}</p>)}
        {works && (<div className="grid grid-cols-3 gap-4">
            {works.map((work) => {

                // if (eventMonth  == currentMonth && eventYear == currentYear){
                //     return <EventListCard key={event.id} event={event} onDelete={handleDelete}/>
                // }
                return (<>
                <WorkCard
                featuredImg={'https://lxqtniuuczmjlopncjat.supabase.co/storage/v1/object/public/contributor-works/' + work.media_url}
                projName={work.work_title}
                projDesc={work.work_description}
                buttonCTA="View Artwork"
                buttonLink={`/contributor-works/angelsanddevils`}
                />
                </>)
            })}
        </div>)}
    </div>
    </>)
}