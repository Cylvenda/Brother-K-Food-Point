import React, { useState } from 'react'
import './profile.css'
import {Link} from  'react-router-dom'

const Profile = () => {

    const [changePassword, setChangePassword] = useState(false)
    const [show, setShow] = useState(false)

    const showpass = () => {
        setShow(!show)

    }

    return (
        <>
            <div className="container-forms-update">
                {changePassword ?
                    <div className='profile-container'>
                        <h2>Reset Password</h2>
                        <div className="profile">
                            <form  >
                                <label htmlFor="oldpass">Old Password</label>
                                <input  type={show?'text':'password'} />

                                <label htmlFor="Newpass">New Password</label>
                                <input  type={show?'text':'password'} />

                                <label htmlFor="cpass">Comfirm New Password</label>
                                <input  type={show?'text':'password'} />

                                <div className="check">
                                    <input type="checkbox" onClick={showpass} />
                                    <p>Show Password</p>
                                </div>

                                <div className="form-btn">
                                    <button className='submit' type="submit">Reset</button>
                                    <button className='link' type="submit">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div className='profile-container'>
                        <div className="form-header">
                            <h2>User Profile Management</h2>
                            <button onClick={() => setChangePassword(true)} className='head-btn' >Reset Password</button>
                        </div>
                        <div className="profile">
                            <form >
                                <label htmlFor="username">Username</label>
                                <input type="text" value="Brayan" />

                                <label htmlFor="email">Email</label>
                                <input type="email" value='brayanmlawa@outlook.com' />

                                <label htmlFor="phone">Phone number</label>
                                <input type="tel" value="0780598902" />

                                <div className="form-btn">
                                    <button className='submit' type="submit">Update</button>
                                    <button className='link'><Link to='/'>Cancel</Link></button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Profile
