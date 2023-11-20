import { useState } from "react"
import supabase from "../Config/supabaseClient";
import {useNavigate, Link} from 'react-router-dom';
import { useEffect } from "react";

export default function CreateWork(){
    const [contributor_name, setContributorName] = useState('');
    const [work_title, setWork_title] = useState('');
    const [reference_artwork, setReference_artwork] = useState('');
    const [work_description, setWork_description] = useState('');
    const [work, setWork] = useState('')
    const [formError, setformError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!contributor_name || !reference_artwork || !work_description || !work || !work_title){
            setformError('Complete all form fields')
            return
        }
        const {data, error} = await supabase
        .from('ContributorWorks')
        .insert([{work_title, work, contributor_name, reference_artwork, work_description}])
        .select()

        if(error){
            console.log(error)
            setformError('Complete all form fields')
        }
        if(data){
            console.log(data)
            setformError(null)
            navigate('/contributedWorks')
        }
    }

    return(<>
    <div className="grid grid-cols-6 px-[40px] py-[20px]">
        <div className="col-span-4 col-start-2">
            <h2 className="font-bold text-xl">Contribute a work</h2>
        </div>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-6 px-[40px] py-[20px] gap-4">
            <div className="col-span-4 col-start-2 mb-4">
                <label htmlFor="name" className="block font-bold">Contributor Name</label>
                <textarea type="text" id="name" className="w-[100%] p-2 h-10 rounded-sm border-1 border-gray-400" placeholder="this will need to probably be auto assigned to whoever is loggedin and disabled" value={contributor_name} onChange={(e)=> setContributorName(e.target.value)}/>
            </div>
            <div className="col-span-4 col-start-2 mb-4">
                <label htmlFor="name" className="block font-bold">Give your work a name</label>
                <textarea type="text" id="name" className="w-[100%] p-2 h-10 rounded-sm border-1 border-gray-400 disabled:border-1 disabled:border-slate-500" value={work_title} onChange={(e)=> setWork_title(e.target.value)} />
                
            </div>
            <div className="col-span-4 col-start-2 mb-4">
                <label htmlFor="name" className="block font-bold">Reference Artwork</label>
                <textarea type="text" id="name" className="w-[100%] p-2 h-10 rounded-sm border-1 border-gray-400" placeholder="probably going to chat this to an autocomplete that pulls from our gallery" value={reference_artwork} onChange={(e)=> setReference_artwork(e.target.value)} />
            </div>
            <div className="col-span-4 col-start-2 mb-4">
                <label htmlFor="description" className="block font-bold">Work Description</label>
                <textarea type="text" className="w-[100%] p-2 h-20 rounded-sm border-1 border-gray-400" id="description" value={work_description} onChange={(e)=> setWork_description(e.target.value)} />
            </div>
            <div className="col-span-4 col-start-2 mb-4">
                <label htmlFor="eventimage" className="block font-bold">Upload your work</label>
                <input type="text" className="w-[100%] p-2 h-10 rounded-sm border-1 border-gray-400" placeholder="right now this needs to be an image url" id="eventimage" value={work} onChange={(e)=> setWork(e.target.value)} />
            </div>
            <div className="col-span-4 col-start-2 mb-4">
                <Link to="/contributedWorks">
                <button className="p-2">Cancel</button></Link>
            <button className="border-2 p-2 rounded-sm text-slate-800 bg-gray-300 border-gray-300 cursor-pointer float-right">Create Work</button>
            {formError && <p className="error text-red-500">{formError}</p>}
            </div>
    </div>
        </form>
    </>)
}