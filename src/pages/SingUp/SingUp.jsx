import React, { useContext, useState } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SingUp = () => {
    const[err, setErr]= useState('')
    const {creatUser ,updateUser} = useContext(AuthContex)
    const navigate = useNavigate()

    const handleSingUP = event=>{
        event.preventDefault()
        setErr('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        creatUser(email , password)
        .then(result =>{
            const user = result.user;
            updateUser(name , photo)
            .then(()=>{
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
            form.reset()
            console.log(user)
        })
        .catch(err=>{
            console.log(err)
            setErr(err.message)
        })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss/singUp</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Sing Up !</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSingUP} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input required type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Sing Up" />
                        </div>
                        <p><small>Already have an account ? <Link className='text-purple-700 font-semibold' to='/login'>Please Login</Link></small></p>
                        <p className='text-red-600'>{err}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;