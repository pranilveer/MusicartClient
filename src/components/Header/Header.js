import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import phonelogo from "../../assets/logos/phonelogo.svg"
const Header = ({ isLoggedIn, handleLogout }) => {
    return (
        <header className={styles.container}>
            <div className={styles.contact}>
                <div className={styles.logo}>
                    <img src={phonelogo} alt="musicartLogo" />
                </div>
                <a href="tel:919307569916" className={styles.number}>
                    91-9307569916
                </a>
            </div>

            <div className={styles.btns}>
                <p>Get 50% off on selected items</p>
                <span> | </span>
                <p>Shop Now</p>
            </div>
            {isLoggedIn ? (
                <div className={styles.btns}     onClick={() => {
                    // Clear local storage or session storage
                    localStorage.removeItem("auth");
                    localStorage.removeItem("dotusdt");
                    localStorage.removeItem("ethusdt");
                    localStorage.removeItem("userName");
                    localStorage.removeItem("userId");
            
                    // Redirect user to login page (if using React Router)
                    window.location.href = "/"; 
                }}>
                    Logout
                </div>
            ) : (
                <div className={styles.btns}>
                    <Link to="/login">
                        <p className={styles.btn}>Login</p>
                    </Link>
                    <span> | </span>
                    <Link to="/signup">
                        <p className={styles.btn}>Signup</p>
                    </Link>
                </div>
            )}
        </header >
    );
};

export default Header;
