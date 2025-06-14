import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-244px)]'>
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Root;