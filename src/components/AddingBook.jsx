import { Formik } from 'formik'
import React, { useContext } from 'react'
import { Dashboardcontext } from './context'
import { NavLink } from 'react-router-dom'
function AddingBook() {
    const { Dashboarditems, setitems, data, editing, setediting } = useContext(Dashboardcontext)
    function updateitem(values) {
        let dataindex = (Dashboarditems.indexOf(data))
        Dashboarditems.splice(dataindex, 1, values)
    }
    return (
        <div className="container pt-4">
            <section className="mb-4">
                <Formik
                    initialValues={!editing ? {
                        title: "",
                        writtenby: "",
                        isbn: "",
                        author: "",
                        dop: "",
                        dob: "",
                        bio: ""
                    } : data}
                    validate={(values) => {
                        const errors = {}
                        if (!values.title)
                            errors.title = 'Required'
                        else if (!values.writtenby)
                            errors.writtenby = 'Required'
                        else if (!values.isbn)
                            errors.isbn = 'Required'
                        else if (isNaN(Number(values.isbn)))
                            errors.isbn = 'ISBN only contains numbers'
                        else if (!(values.isbn.length === 10 || values.isbn.length === 13))
                            errors.isbn = 'ISBN must be 10 or 13 digits'
                        else if (!values.dop)
                            errors.dop = 'Required'
                        else if (!values.author)
                            errors.author = 'Required'
                        else if (!values.dob)
                            errors.dob = 'Required'
                        else if (values.dob > values.dop)
                            errors.dob = 'Author published a book before his birth?'
                        else if (!values.bio)
                            errors.bio = 'Required'
                        else if ((values.bio.split(" ").length) < 10)
                            errors.bio = 'Too short'
                        return errors
                    }}
                    onSubmit={(value, { resetForm }) => {

                        let newarr = [...Dashboarditems, value]
                        setitems(newarr)
                        resetForm()
                    }}
                >
                    {({
                        values, errors, handleBlur, handleChange, handleSubmit
                    }) => (
                        <form className="card p-4">
                            <h2><i className="fas fa-book fa-fw me-3"></i>Book</h2>
                            <div className='card-body row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-2 g-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="title" placeholder="Book name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title} />
                                    <p className='text-danger'>{errors.title}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="writtenby" className="form-label">Author</label>
                                    <input type="text" className="form-control" name="writtenby" placeholder="Author"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.writtenby}

                                    />
                                    <p className='text-danger'>{errors.writtenby}</p>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="isbn" className="form-label">ISBN</label>
                                    <input type="text" className="form-control" name="isbn" placeholder="xxxxxxxxxx/+xxx"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.isbn} />
                                    <p className='text-danger'>{errors.isbn}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dop" className="form-label">Publication date</label>
                                    <input type="date" className="form-control" name="dop"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.dop}
                                    />
                                    <p className='text-danger'>{errors.dop}</p>
                                </div>
                            </div>
                            <h2><i className="fas fa-pen fa-fw me-3"></i>Author</h2>

                            <div className='card-body row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-2 g-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="author" placeholder="Author"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.author}
                                    />
                                    <p className='text-danger'>{errors.author}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dob" className="form-label">Date of birth</label>
                                    <input type="date" className="form-control" name="dob"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.dob}
                                    />
                                    <p className='text-danger'>{errors.dob}</p>
                                </div>


                            </div>
                            <div className="mb-3 ms-3">
                                <label htmlFor="bio" className="form-label"><i className="fa-solid fa-circle-info me-2"></i>Biography</label>
                                <textarea type="date" className="form-control" style={{ resize: "none" }} name="bio"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.bio} />
                                <p className='text-danger'>{errors.bio}</p>
                            </div>
                            <div>
                                {editing ? <NavLink to='/'><div>
                                    <button onClick={() => {
                                        updateitem(values)
                                        setediting(false)
                                        handleSubmit
                                    }} type="button" className="btn btn-primary">Update</button>
                                    <button onClick={() => {
                                        setediting(false)
                                        handleSubmit
                                    }} type='button' className='btn btn-danger ms-3'>cancel</button></div></NavLink> :
                                    <button onClick={handleSubmit} type="button" className="btn btn-primary">ADD</button>
                                }
                            </div>

                        </form>
                    )
                    }

                </Formik>

            </section>
        </div>

    )
}

export default AddingBook