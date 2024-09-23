import React, { useContext } from 'react'
import { Dashboardcontext } from './context'
import { NavLink } from 'react-router-dom'

function Author() {
    const { Dashboarditems, deleteitem, edit } = useContext(Dashboardcontext)

    return (
        <div className="container pt-4">
            <section className="mb-4">
                <div className="card">
                    <div className="card-header py-3">
                        <h5 className="mb-0 text-center"><strong>Author</strong></h5>
                    </div>
                    <div className="card-body row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-2 g-lg-3">
                        {

                            Dashboarditems.map((item) =>
                                <div className='col' key={item.isbn}>
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{item.author}</h5>
                                            <p className="card-text">Date of birth : {item.dob}</p>
                                            <p className='fw-bold'>Biography </p>
                                            <p className="card-text" style={{ height: "100px", overflow: "auto" }}>{item.bio}</p>
                                            <NavLink to='/AddData'><button className='btn btn-warning' onClick={() => edit(item)}>edit</button></NavLink>
                                            <button className='btn btn-danger ms-3' onClick={() => deleteitem(item)}>delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Author