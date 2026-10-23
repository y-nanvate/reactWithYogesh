import React from "react";
import { useState, useEffect } from "react";
import './Pagination.css'



function Pagination(){
const [tableData, setTabledata] = useState();
const [currentPage, setCurrentPage]= useState(1);
const [rowsPerPage, setRowsPerPage] = useState(10);
const indexOfLastItem = currentPage*rowsPerPage;
const indexOfFirstIteam= indexOfLastItem - rowsPerPage;
const currentIteam= tableData?.users?.slice(indexOfFirstIteam, indexOfLastItem)
console.log(currentIteam)
const pageCount = Math.ceil(tableData?.total/rowsPerPage)


useEffect(()=>{
    fetch("https://dummyjson.com/users?limit=0")
    .then((response)=> response.json())
    .then((data)=>setTabledata(data))
    .catch((err)=>console.log(err))

},[])

const handlePrev =()=>{
    setCurrentPage((prev)=> Math.max(prev-1, 1))
}

const handleNext =()=>{
    setCurrentPage((prev)=>Math.min(prev+1, pageCount))
}
const handleButton =(pageNumber)=>{
    setCurrentPage(pageNumber)
}


    return <>
    
   <div >

    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {currentIteam?.map((value)=>(
                <tr key={value?.id}>
                   <td>{value.firstName}</td>
                    <td>{value.email}</td>
                     <td>{value.gender}</td>
                </tr>
            ))}
        </tbody>
    </table>
    <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage ===1}>Prev</button>
        {Array.from({length:pageCount}, (_, index)=>(
            <button onClick={()=>handleButton(index+1)} className={ currentPage == index+1 ? "active":''}>{index+1}</button>
        ))}
        <button onClick={handleNext} disabled={currentPage === pageCount}>Next</button>
    </div>
   </div>
    </>

}
export default Pagination;
