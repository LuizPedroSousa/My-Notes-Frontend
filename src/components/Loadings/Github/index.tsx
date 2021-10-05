import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { AiFillGithub } from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import styles from './styles.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const GithubLoading = () => {
  const githubAnimation = useAnimation()
  const githubAnimationStart = async () => {
    await githubAnimation.start('visible')
    return await githubAnimation.start('slideUp')
  }

  useEffect(() => {
    githubAnimationStart()
  }, [])

  const githubVariants = {
    hidden: { opacity: 0, scale: 0, y: 0 },
    visible: {
      opacity: [null, 0.2],
      scale: [null, 1.6, 1]
    },
    slideUp: {
      transition: {
        duration: 3,
        type: 'spring',
        repeat: Infinity,
        repeatType: 'mirror'
      },
      y: [null, -20],
      opacity: [null, 1]
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: [null, 1], y: [null, 0] }}
      className={styles.loadingContainer}
    >
      <motion.span
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        variants={githubVariants as any}
        initial="hidden"
        animate={githubAnimation}
      >
        <AiFillGithub />
      </motion.span>
      <div className={styles.spinner}>
        <h2>Carregando informações</h2>
        <span>
          <Loader type="Bars" color="white" width={60} height={60} />
        </span>
      </div>
    </motion.div>
  )
}

export { GithubLoading }
