import React from 'react';
import styles from './Header.module.css'
import { motion } from 'framer-motion'

const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.5
        }
    }
}

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

const Header = () => {
    return (
    <div className={styles.header}>
        <div>
            <motion.svg className={styles.pizzaSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.path
                fill="none"
                d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
                variants={draw}
                />
                <motion.path
                fill="none"
                d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
                variants={draw}
                />
            </motion.svg>
        </div>
        <div className={styles.title}>
            <motion.h1
            initial={{y: -250}}
            animate={{y: -10}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            >
            PortFolio
            </motion.h1>
        </div>
    </div>
    )
}

export default Header;