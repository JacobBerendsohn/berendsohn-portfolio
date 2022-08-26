import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className="APP">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout