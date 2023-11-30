import supabase from "../Config/supabaseClient"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {CiEdit, CiTrash} from 'react-icons/ci'

export default function ContributedWorkCard ({ work, onDelete }){


 const handlePopup = ()=>{

 }

 const handleDelete = async ()=>{
    const {data, error} = await supabase
    .from('ContributorWorks')
    .delete()
    .eq('id', work.id)
    .select()

    if(error){
        console.log(error)
    }
    if(data){
        console.log('deleting..')
        onDelete(work.id)
    }
 }


    return(<>
    <div className="my-2 mx-4">
        <div className="grid grid-cols-12 p-2 border-2  rounded-sm">
            <div className="col-span-3"><p>{work.work_title}</p></div>
            <div className="col-span-3"><p>{work.contributor_name}</p></div>
            <div className="col-span-3"><p>{work.created_at}</p></div>
            <div className="col-span-3 text-right">
                    {/* <p className="inline-block px-4"> */}
                        {/* <Link to={'/event/edit/' + work.id }> */}
                            {/* <span><CiEdit size="22px"/></span> */}
                        {/* </Link> */}
                    {/* </p> */}
                    <p className="inline-block px-4">
                    <Link onClick={handleDelete}>
                        <CiTrash size="22px" />
                    </Link>
                    </p>
            </div>
        </div>
    </div>
    </>)
}