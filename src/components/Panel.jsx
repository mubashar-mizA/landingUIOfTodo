const Panel = ()=>{
    return(
        <div className="w-max bg-blue-500 p-2 text-white md:ml-1">
            <ul >
                <li className="hover:cursor-pointer hover:underline " >List of Todos</li>
                <li className="hover:cursor-pointer hover:underline " >List of Deleted Todos</li>
                <li className="hover:cursor-pointer hover:underline " >List of Completed Todos</li>
            </ul>
        </div>
    )
}
export default Panel