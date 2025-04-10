import React, { useState } from 'react';
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Icon from '@mdi/react';
import { mdiInvoiceEdit, mdiAccountAlert, mdiAccount } from '@mdi/js';
import style from './BottomNavbar.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Logout from '../Logout/Logout';

const BottomNavbar = ({ isLoggedIn, handleLogout, cartItemCount }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);

    const confirmLogout = () => {
        setLogoutModalOpen(true);
    }

    const performLogout = () => {
        handleLogout();
        setLogoutModalOpen(false);
    };

    const handleNavigation = (path) => {
        setActiveTab(path);
        navigate(path);
    };

    return (
        <>
            <div className={style.bottomNavContainer}>
                <div
                    className={style.navItem}
                    onClick={() => handleNavigation('/')}
                >
                    {activeTab === '/' ? <GoHomeFill className={style.navIcon} /> : <GoHome className={style.navIcon} />}
                    <span className={style.navLabel}>Home</span>
                </div>
                <div className={style.navItem} onClick={() => handleNavigation('/cart')}>
                    <MdOutlineAddShoppingCart className={style.navIcon} />
                    {cartItemCount > 0 && <span className={style.itemCount}>{cartItemCount}</span>}
                    <span className={style.navLabel}>Cart</span>
                </div>
                <div className={style.navItem} onClick={() => handleNavigation('/invoices')}>
                    <Icon path={mdiInvoiceEdit} size={1} className={style.navIcon} />
                    <span className={style.navLabel}>Invoice</span>
                </div>
                {isLoggedIn ? (
                    <div className={style.navItem} onClick={confirmLogout}>
                        <Icon path={mdiAccount} size={1} className={style.navIcon} />
                        <span className={style.navLabel}>Logout</span>
                    </div>
                ) : (
                    <div className={style.navItem} onClick={() => handleNavigation('/login')}>
                        <Icon path={mdiAccountAlert} size={1} className={style.navIcon} />
                        <span className={style.navLabel}>Login</span>
                    </div>
                )}
            </div>
            <Logout
                isOpen={logoutModalOpen}
                closeModal={() => setLogoutModalOpen(false)}
                handleLogout={performLogout}
            />
        </>
    );
};

export default BottomNavbar;
