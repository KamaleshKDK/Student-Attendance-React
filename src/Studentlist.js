import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Studentlist() {
    const [student, setStudent] = useState([])

    useEffect(async () => {
        try {
            let studentData = await fetch("https://61c1f80d9dbcca0017c82272.mockapi.io/students");
            let Studentlist = await studentData.json()
            setStudent(Studentlist)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800" style={{ fontWeight: "700" , color: "black"}}>Student List</h1>
               
            </div>


            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr  style={{ color: "black", opacity: "85%" }}>
                                    <th>Student ID.</th>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Attendance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    student.map((student) => {
                                        return <tr>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td><img src={student.avatar}></img></td>
                                            <td>
                                                <Link to={`/student/${student.id}`}>
                                                    <button className='btn btn-primary btn-sm'>View</button></Link>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Studentlist
