import supabase from "../Config/supabaseClient"
import { useEffect, useState } from "react"
import ContributedWorkCard from "./ContributedWorkCard"
import { Link } from "react-router-dom"
import {GrFormAdd} from 'react-icons/gr'
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'

export default function ContributedWorks (){
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
    <div>
    <div className="grid grid-cols-12 px-4 py-[60px]">
                <div className="col-span-4">
                   <Link to="/createWork" className="border-1 bg-slate-400 p-4 rounded-sm text-gray-900"><GrFormAdd className="inline"/>Create New Work</Link>
                </div>
            </div>
            {/* <div className="grid grid-cols-12 my-6 mx-10">
            <div className="col-span-4">
            <button onClick={decrementMonth}><BiLeftArrowAlt size="22px" className="inline p-l-1"/>Previous Month</button>
            </div>
            <div className="col-span-4 text-center">
                <h1 className="text-[42px] mb-4 font-bold">{monthNames[currentMonth -1]} {currentYear}</h1></div>
            <div className="col-span-4 text-right">
            <button onClick={incrementMonth}>Next Month <BiRightArrowAlt className="inline" size="22px"/></button>
            </div>
        </div> */}
        {error && (<p>{error}</p>)}
        {/* {events && (
            {events.map((event) => {
                if (eventMonth  == currentMonth && eventYear == currentYear){
               return <EventListCard key={event.id} event={event} onDelete={handleDelete}/>
                }
                return null;
            })}
        )} */}
        {works && (<div className="events">
            {works.map((work) => {
                // var d = work.event_date;
                // var supabaseDate = new Date(work.event_date)
                // var eventDate = new Date( supabaseDate.getTime() + Math.abs(supabaseDate.getTimezoneOffset()*60000) )
                // var eventMonth = eventDate.getMonth() + 1;
                // var eventYear = eventDate.getFullYear();
                // var eventDay = d.slice(-2)
                // var time = work.event_start_time;
                // const convertedTime = new Date('1970-01-01T' + time +  'Z').toLocaleTimeString('en-US', {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});

                    return <ContributedWorkCard key={work.id} work={work} onDelete={handleDelete}/>
            })}
        </div>)}
    </div>
    </>)
}