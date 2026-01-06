import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import profileImg from "../assets/profile.png";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div name="home" className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className={styles.greeting}>Hi, I'm</p>
                    <h1 className={styles.name}>Alfez Tintoiya</h1>
                    <h2 className={styles.title}>
                        Backend Developer & <br /> Competitive Programmer
                    </h2>
                    <p className={styles.description}>
                        I specialize in building scalable microservices and solving complex algorithmic problems.
                        Ranked Top 3.4% worldwide on LeetCode.
                    </p>
                    <div className={styles.buttons}>
                        <Link to="projects" smooth duration={500} className={styles.btnPrimary}>
                            View Work
                        </Link>
                        <Link to="contact" smooth duration={500} className={styles.btnSecondary}>
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.blob}></div>
                    <img src={profileImg} alt="Alfez Tintoiya" className={styles.profileImage} />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
