import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import { Grid } from '@material-ui/core'
import styles from '../styles/Rfr.module.css'
import rfr_1 from '../public/rfr/rfr_1.png'
import rfr_2 from '../public/rfr/rfr_2.png'
import rfr_3 from '../public/rfr/rfr_3.png'
import rfr_4 from '../public/rfr/rfr_4.png'
import rfr_5 from '../public/rfr/rfr_5.png'
import rfr_6 from '../public/rfr/rfr_6.png'

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

const Rfr = () => {

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
                    <motion.h1 variants={opacity}>React & Redux & Firebase</motion.h1>
                    <motion.span className="rfr_margin" variants={opacity}>use library</motion.span>
                    <motion.h2 variants={opacity}>material ui</motion.h2>
                    <motion.h2 variants={opacity}>chart.js</motion.h2>
                    <motion.h2 variants={opacity}>react-router</motion.h2>
                    <motion.h2 variants={opacity}>formik</motion.h2>
                    <motion.span className="rfr_margin" variants={opacity}>use API</motion.span>
                    <motion.h2 variants={opacity}>Google Maps API</motion.h2>
                </motion.div>
            </div>
            {/* メイン説明部分 */}
            <div>
                <Grid container spacing={3} className={styles.rfr_grid_container}>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={rfr_1} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>このアプリはお店側とユーザー側の二つの機能を持っています。</p>
                            <p>お店側がログインすると右の写真の画面が出てきます。</p>
                            <p>この画面では在庫商品の確認や管理ができます。</p>
                            <p>編集や削除、詳細情報が確認できます。</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>商品が購入されたら、売り上げ登録ボタンを押します。</p>
                            <p>情報を入力すると、売り上げ管理画面にデータが移動します。</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={rfr_2} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={rfr_3} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>売り上げ管理画面ではデータをグラフ化しており</p>
                            <p>売り上げの推移や男女比や時間帯など</p>
                            <p>一眼でわかる様になっています。</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>グラフだけではなくテーブルでの</p>
                            <p>データも見ることが可能です。</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={rfr_4} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={rfr_5} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>ユーザー側の操作ですが、アプリを開くと</p>
                            <p>マップが広がります。お店側が新規登録すると</p>
                            <p>自動的にマップにピンが立ち、ユーザーは</p>
                            <p>右図のようにお店の情報を知ることができます。</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <motion.div className={styles.rfr_item_description} variants={itemText}>
                            <p>お気に入り登録もできて</p>
                            <p>気に入った商品がどこのお店のものなのか</p>
                            <p>確認することが可能です</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                        <motion.div variants={leftMargin} whileHover="hover">
                            <Image src={rfr_6} className={styles.rfr_image} alt="画像" />
                        </motion.div>
                    </Grid>
                </Grid>
            </div>
        </motion.div>
    )
}

export default Rfr
