import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';

const ViewEmployee = () => {

    const { user } = useContext(AuthContext)
    const [fetchUsers, setFetchUsers] = useState(null);
    const [reFetch, setRefetch] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5005/employees")
            .then(res => res.json())
            .then(data => setFetchUsers(data))
            .catch(err => toast.error(err))
    }, [reFetch])

    const handleDelete = async (id) => {
        fetch(`http://localhost:5005/deleteemployee/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setRefetch(!reFetch)
                if (data.deletedCount > 0) {
                    toast.success('user deleted')
                }
                else {
                    toast.error('Somethng Wrong!')
                }
            })
    }

    let count = 1;
    return (
        <div>
            <div className=' px-2 md:px-10 rounded-2xl  mx-auto  pt-10'>
                <h3 className="  font-bold text-2xl text-slate-800">View Employee List</h3>
                {
                            fetchUsers === null && <Loader />
                }
                {
                    fetchUsers && fetchUsers.length > 0 ? <div className="overflow-x-auto w-full">
                    <table className='table mt-6 w-full'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Location</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                fetchUsers.map(employee =>
                                    <tr>
                                        <td>{count++}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-14 rounded-full ">
                                                    <img src={employee.photo} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{employee.name}</td>
                                        <td className='text-red-600'>{employee.position}</td>
                                        <td>{employee.location}</td>
                                        <td>{employee.email}</td>
                                        <td className=''>
                                            <button onClick={() => handleDelete(employee._id)} className='btn btn-error btn-sm'>Delete</button>
                                            <Link to={`/dashboard/editemployee/${employee._id}`}  className='btn btn-sm btn-primary ml-2'>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div> : <h2 className='font-bold etxt-lg text-red-600 mt-10'>No employee found.</h2>
                }
            </div>
        </div>
    );
};

export default ViewEmployee;