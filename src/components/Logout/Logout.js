import React from 'react';
import styles from './Logout.module.css';

const Logout = ({ isOpen, closeModal, handleLogout }) => {
    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3 className={styles.text}>Are you sure you want to Logout?</h3>
                        <div className={styles.buttons}>
                            <button className={styles.deleteBtn} onClick={handleLogout}>Yes, Logout</button>
                            <button className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Logout;