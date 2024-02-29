import React from "react";
function Student(){
    let item={sid: 103,sname:"Tarun",course:"JAVA",age:23,total: "good"};
    let resultArray=
        <tr>
            <td>{item.sid}</td>
            <td>{item.sname}</td>
            <td>{item.course}</td>
            <td>{item.age}</td>
            <td>{item.total}</td>
        </tr>;
    return(
        <>
        <table border="2" width="200">
            <tr>
                <td>
                    <b>Student Details</b>
                <tr>
                    <th>Student ID</th>
                    <td>{item.sid}</td>
                </tr>
                <tr>
                    <th>Student Name</th>
                    <td>{item.sname}</td>
                </tr>
                <tr>
                    <th>Student Course</th>
                    <td>{item.course}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{item.age}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>{item.total}</td>
                </tr>
                </td>
            </tr>
        </table>
        </>
    );
}
export default Student;
