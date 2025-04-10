import React, {useState} from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import phonelogo from "../../assets/logos/phonelogo.svg";
import Logout from "../Logout/Logout";

const Header = ({ isLoggedIn, handleLogout }) => {

    const [logoutModalOpen, setLogoutModalOpen] = useState(false);

    const confirmLogout = () =>{
        setLogoutModalOpen(true);
    }

    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerbody}>
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
                        <div className={styles.btns} onClick={() => { confirmLogout() }}>
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
                </div>
            </header >
            <Logout
                isOpen={logoutModalOpen}
                closeModal={() => setLogoutModalOpen(false)}
                handleLogout={handleLogout}
            />
        </>
    );
};

export default Header;
