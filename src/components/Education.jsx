
import { motion } from "framer-motion";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    return (
        <div name="education" className={styles.education}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h2>

                <div className={styles.timeline}>
                    {/* Education */}
                    <motion.div
                        className={styles.item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.iconContainer} style={{ background: '#22c55e' }}><FaGraduationCap /></div>
                        <div className={styles.content}>
                            <span className={styles.date}>Aug 2022 - May 2026</span>
                            <h3 className={styles.role}>B.Tech in Computer Science</h3>
                            <h4 className={styles.company}>Pandit Deendayal Energy University</h4>
                            <p className={styles.location}>CGPA: 8.07</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Education;
