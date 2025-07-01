import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, setUser, updateUserProfile, signInWithGoogle, setLoading } = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state?.from?.pathname);
    const from = location.state?.from?.pathname || "/";

    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        setErrorMessage('');

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(name, email, password);

        const passValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passValidation.test(password)) {
            setErrorMessage("Password must include one uppercase, one lowercase, and be at least 6 characters long");
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Password did not match")
            return;
        }


        // const formData = new FormData(form);
        // // console.log('Form Data:', Object.fromEntries(formData.entries()));
        // const newUser = Object.fromEntries(formData.entries())
        // console.log(newUser);

        const newUser = { name, email, photoURL }



        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        navigate(from, { replace: true });
                        toast.success("User Created Successfully")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                        setErrorMessage(errorCode);
                        toast.error(errorMessage)
                    })
                    .finally(() => setLoading(false));
                // form.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setErrorMessage(errorCode);
            })
            .finally(() => setLoading(false));






        axios.post('https://bd-food-storage-server.vercel.app/allUsers', newUser)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("User logged in successfully");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setErrorMessage(errorCode);
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="hero bg-base-100 py-10">
            <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold">Join Us Now!</h1>
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text" className="input" placeholder="Name" />
                        <label className="label">photoURL</label>
                        <input
                            name='photoURL'
                            type="text" className="input" placeholder="photoURL" />
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email" className="input" placeholder="Email"
                            required />
                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password" className="input" placeholder="Password"
                            required />
                        <label className="label">Confirm Password</label>
                        <input
                            name='confirmPassword'
                            type="password" className="input" placeholder="Confirm Password"
                            required />

                        <input
                            className="btn btn-neutral mt-4"
                            type="submit" value="Register" />
                    </form>
                    {errorMessage && <p className='text-red-600 text-center'>{errorMessage}</p>}
                    <p className='mx-auto'>Already have an account?
                        <span> <Link to="/login" className="link link-hover text-green-600">Login</Link></span>
                    </p>
                    {/* Google */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;