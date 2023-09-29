export default function Gallery(props){
    return(<>
    <div className="grid grid-cols-3 gap-4 my-[24px]">
        <div className='col-span-3'>
            <h2 className="text-4xl text-center font-bold">{props.artworkTitle || 'Artwork Title / Heading' }</h2>
        </div>
    </div>
    </>)
}