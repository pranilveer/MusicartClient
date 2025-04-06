import React from 'react'
import style from './Sucesspage.module.css';
import { useNavigate } from 'react-router-dom';
import image6 from '../../assets/images/confetti 1.png';
import Footer from '../../components/Footer/Footer';
import Confetti from 'react-confetti'
import { motion } from "framer-motion";
import useResizeObserver from 'use-resize-observer';


const Sucesspage = () => {
    const { ref, width = 1, height = 1 } = useResizeObserver();

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }
    return (
        <div ref={ref} className={style.sucessPageDiv}>
            <div className={style.sucessOrderDiv}>
                <motion.img
                    src={image6}
                    alt="Pulsing"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <h2>Order is placed successfully</h2>
                <p>You will be receving a confirmation email with order details</p>
                <div className={style.backtoHome}>
                    <button type="submit" onClick={handleBack} class={style.pushable}>
                        <span class={style.front}>
                            Go back to Home page
                        </span>
                    </button>                
                </div>
            </div>
            <Footer />
            <Confetti width={width}
                height={height} />
        </div>
    )
}

export default Sucesspage;