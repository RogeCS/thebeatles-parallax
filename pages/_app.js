import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

function MyApp({ Component, pageProps, router }) {
  return (
    <ParallaxProvider scrollAxis='horizontal'>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 2
            }
          },
        }}
      >
          <Header />
            <Component {...pageProps}/>
          <Footer />
        </motion.div>
    </ParallaxProvider>
  )
}

export default MyApp
