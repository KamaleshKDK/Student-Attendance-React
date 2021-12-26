import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Attendancelist() {

    const [attendance, setAttendance] = useState([])
    let params = useParams()
    useEffect(async () => {
        try {
            let attendaceData = await fetch(`https://61c1f80d9dbcca0017c82272.mockapi.io/attendance?studentid=${params.id}`);
            let attendacelist = await attendaceData.json()
            setAttendance(attendacelist)
        } catch (error) {
            console.log(error)
        }

    }, [])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Attendance List</h1>
                <Link to={`/add-attendace/${params.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                ></i>Add Attendance</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr style={{ color: "black", opacity: "85%" }}>
                                    <th>Date</th>
                                    <th>Attendance</th>
   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attendance.map((attendance) => {
                                        return <tr>
                                            <td>{attendance.date}</td>
                                            <td>{attendance.attendance}</td>

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

export default Attendancelist
