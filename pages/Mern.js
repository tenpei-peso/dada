import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/Rfr.module.css'
import Header from '../components/Header'
import { Grid } from '@material-ui/core'
import mern1 from '../public/mern/mern1.png'
import mern2 from '../public/mern/mern2.png'
import mern3 from '../public/mern/mern3.png'
import mern4 from '../public/mern/mern4.png'

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
        duration: 1
        }
    },
    exit: {
        x: '100vw',
    }
}

const titleContainer = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: 50,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    }
}

const opacity = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1
    }
}

const leftMargin = {
    hidden: {
        y: 20,
        x: 140
    },
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgba(255,255,255,1)",
        boxShadow: "0px 0px 8px rgba(255,255,255,1)",
        transition: {
            duration: 0.4,
        }
    }
}

const itemText = {
    hidden: {
        x: 70,
        y: 100
    }
}

const Mern = () => {

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* トップ部分 */}
            <div className={styles.rfr_container}>
                <Header />
                <motion.div className={styles.rfr_title} variants={titleContainer}>
                    <motion.h1 variants={opacity}>React & Node & Express & MongoDB</motion.h1>
                    <motion.span className={styles.rfr_margin} variants={opacity}>use library</motion.span>
                    <motion.h2 variants={opacity}>axios</motion.h2>
                    <motion.h2 variants={opacity}>expressーvaridator</motion.h2>
                    <motion.h2 variants={opacity}>react-router</motion.h2>
                    <motion.h2 variants={opacity}>mongoose</motion.h2>
                    <motion.span className={styles.rfr_margin} variants={opacity}>use API</motion.span>
                    <motion.h2 variants={opacity}>Google Maps API</motion.h2>
                </motion.div>
            </div>
            {/* メイン説明部分 */}
            <div>
                <Grid container spacing={3} className={styles.rfr_grid_container}>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={mern1} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>このアプリは基本的なCRUD操作ができます</p>
                            <p>ログインやグーグルAPIも使用します</p>
                            <p>ユーザーが行った場所を投稿して</p>
                            <p>その投稿をみんなが見れます。</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>登録されたユーザー一覧が見れます</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={mern2} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={mern3} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>情報を入力すると投稿できます</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>タイムライン的な機能です</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={mern4} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                </Grid>
            </div>
        </motion.div>
    )
}

export default Mern
