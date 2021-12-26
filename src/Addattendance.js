import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Addattendance() {
  let navigate = useNavigate()
  let params = useParams()
  let formik = useFormik({
    initialValues: {
      attendance: "present",
      date: "",
      studentid: params.id
    },
    onSubmit: async (values) => {
      await fetch("https://61c1f80d9dbcca0017c82272.mockapi.io/attendance", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json'
        }
      })
      navigate(`/student/${params.id}`)
    }
  })



  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800" style={{ fontWeight: "700", color: "black" }}>Add Attendance</h1>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className='container'>
          <div className='row'>

            <div className='col-lg-6'>
              <input className='form-control' name="date" type='date'
                value={formik.values.date}
                onChange={formik.handleChange} />
            </div>

            <div className='col-lg-6'>
              <select name="attendance" className='form-control'
                value={formik.values.attendance}
                onChange={formik.handleChange}>
                <option>Present</option>
                <option>Absent</option>
              </select>
            </div>
            <div className='col-lg-6 mt-4'>
              <input type="submit" className='btn btn-primary' />

            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Addattendance
