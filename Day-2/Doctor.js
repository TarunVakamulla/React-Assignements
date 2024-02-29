import React from "react";
function Doctor(){
let doctArray=[
    {doctorId: 101,doctorName: "Rohit",designation: "MBBS",experience: "12years",contactNumber:9999999999},
    {doctorId: 102,doctorName: "Saikiran",designation: "MD",experience: "15years",contactNumber:9999999999},
    {doctorId: 103,doctorName: "Harsha",designation: "MBBS",experience: "5years",contactNumber:9999999999},
    {doctorId: 104,doctorName: "Pavan",designation: "MBBS",experience: "8years",contactNumber:9999999999},
];
let resultArray=doctArray.map((item)=>
    {
        return <tr>
            <td>{item.doctorId}</td>
            <td>{item.doctorName}</td>
            <td>{item.designation}</td>
            <td>{item.experience}</td>
            <td>{item.contactNumber}</td>
        </tr>
    });
    return(
        <><br/>
        <table border="2" width="200">
        <tr>
            <th>Doctor Id</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Contact Number</th>
        </tr>
        {resultArray}
        </table>
        </>
    );
    }
    export default Doctor;