import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../../provider/AuthProvider';
// import { toast, ToastContainer } from 'react-toastify';
import toast from 'react-hot-toast'
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { logIn, resetPassword, signInWithGoogle, setLoading } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [errorMessage, setErrorMessage] = useState("");
    console.log(errorMessage)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrorMessage('');
        // console.log(email, password);

        logIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                toast.success("User logged in successfully");
                navigate(location.state?.from?.pathname || "/");
                // navigate( `${location.state? location.state : "/"}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert(errorMessage);
            })
            .finally(() => setLoading(false));
    };

    const handleUpdatePassword = () => {
        const email = document.querySelector('input[name="email"]').value;
        if (!email) {
            toast.error("Please enter your email to reset password");
            return;
        }
        resetPassword(email)
            .then(() => {
                // navigate("/");
                toast.success("Password reset email sent!");
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("User logged in successfully")
                navigate(location.state?.from?.pathname || "/");
                // navigate(`${location.state ? location.state : "/"}`);
                // navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage);
                // navigate( `${location.state? location.state : "/login"}`);
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="hero bg-base-200 py-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Login Your Account</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email" className="input" placeholder="Email"required />
                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password" className="input" placeholder="Password" />
                        <div><Link
                            onClick={handleUpdatePassword}
                            className="link link-hover">Forgot password?</Link></div>
                        {/* <button className="btn btn-neutral mt-4">Login</button> */}
                        <input
                            className="btn btn-neutral mt-4"
                            type="submit" value="Login" />
                    </form>
                    <p className='mx-auto'>Dont have an account?
                        <span> <Link to="/signup" 
                        state={location.state}
                        className="link link-hover text-red-600">Sign Up</Link></span>
                    </p>
                    {/* Google */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;