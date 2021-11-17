import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { Grid, makeStyles } from '@material-ui/core'
import Header from '../components/Header'
import CardItems from '../components/CardItems'
import backImage from '../public/stars.jpg'
import mern from '../public/mern.png'
import rfr from '../public/RFR.png'
import rails from '../public/rails.png'
import rocket from '../public/rocket.png'
import UFO from '../public/UFO.png'
import moon from '../public/moon.png'


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
  },
}));

const containerVariants = {
  hidden: {
      opacity: 0,
  },
  visible: {
      opacity: 1,
      transition: {
      duration: .5
      }
  },
  exit: {
      x: '-100vw',
  }
}

const itemContainer = {
  hidden: {
      opacity: 0
  },
  visible: {
      opacity: 1,
      transition: {
          when: "beforeChildren",
          staggerChildren: 0.5
      }
  }
}

const centerTitle = {
  hidden: {
      y: -600,
      opacity: 0
  },
  visible: {
      y: 0,
      opacity: 1,
      transition: {
          type: 'spring',
          duration: 2,
          delay: 1
      }
  },
}

const itemsVariants = {
  hidden: {
      y: -600,
      opacity: 0
  },
  visible: {
      y: 200,
      opacity: 1,
      transition: {
          type: 'spring',
          duration: 1,
          ease: 'easeInOut'
      }
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

const iconVariant = {
  hidden: {
      x: 200,
      y: 300,
      opacity: 0
  },
  visible: {
      x: -150,
      y: 0,
      opacity: 1,
      transition: {
          duration: 4,
      }
  },
}

const leftIconVariant = {
  hidden: {
      x: -120,
      y: 300,
  },
  visible: {
      y: -200,
      transition: {
          duration: 4,
      }
  },
}

const UfoIconVariant = {
  hidden: {
      x: -200,
      y: -700,
  },
  visible: {
      x: 300,
      y: [-600, -500, -600],
      transition: {
          duration: 4,
      }
  },
}

export default function Home() {
  const classes = useStyles();

    const CardItemsArray = [
        {
            description: 'Node Express React MongoDBを使って作ったアプリです、基本的なCRUD操作ができます。', 
            image: mern.src,
            link: '/'
        },
        {
            description: 'FireBaseとReactとReduxで作った古着アプリです。管理者画面では在庫管理や売り上げ管理ができ、 ユーザー画面では付近の古着 屋を探せるようになっています。', 
            image: rfr.src,
            link: '/rfr'
        },
        {
            description: 'Ruby on Railsで作ったお店の在庫売り上げ管理アプリです。',
            image: rails.src,
            link: '/rails'
        }
    ]

  return (
    <>

      <motion.div style={{ backgroundImage: `url(${backImage.src})`, backgroundSize:'cover'}}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>
                    <div className={styles.container}>
                        <motion.img 
                            className={styles.leftIcon}
                            src={UFO.src}
                            variants={UfoIconVariant}
                        />
                        <motion.img 
                            className={styles.leftIcon}
                            src={moon.src}
                            variants={leftIconVariant}
                        />
                    </div>
                </Grid>
                <Grid item xs={8} md={8}>
                    <motion.div className={styles.centerTitle}
                        variants={centerTitle}
                    >
                        <h2>My APP LIST HERE</h2>
                        <h3>LET`S SELECT </h3>
                    </motion.div>
                    <motion.div className={classes.root}
                            variants={itemContainer}
                    >
                        {CardItemsArray.map((item, index)=> (
                            <motion.div variants={itemsVariants}  whileHover="hover" key={index}>
                                <CardItems key={index} description={item.description} image={item.image} link={item.link}/>
                            </motion.div  >
                        ))}
                    </motion.div>
                </Grid>
                <Grid item xs={2} md={2}>
                    <motion.img 
                        className={styles.rightIcon}
                        src={rocket.src}
                        variants={iconVariant}
                    />
                </Grid>
            </Grid>
        </motion.div>
    </>
  )
}
