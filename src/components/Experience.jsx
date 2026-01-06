
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
    return (
        <div name="experience" className={styles.experience}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Experience & Education
                </motion.h2>

                <div className={styles.timeline}>
                    {/* Work Experience */}
                    <motion.div
                        className={styles.item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.iconContainer}><FaBriefcase /></div>
                        <div className={styles.content}>
                            <span className={styles.date}>May 2025 - July 2025</span>
                            <h3 className={styles.role}>Software Engineer Intern</h3>
                            <h4 className={styles.company}>Rebel Minds (PDEU IIC Incubated Startup)</h4>
                            <p className={styles.location}>Gandhinagar, Gujarat</p>
                            <ul className={styles.details}>
                                <li>Developed RESTful Node.js microservices, reducing API latency by 25%.</li>
                                <li>Implemented MCP servers to orchestrate 10+ AI agents.</li>
                                <li>Utilized Docker for containerization and ensured stable backend services.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        className={styles.item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className={styles.iconContainer} style={{ background: '#22c55e' }}><FaGraduationCap /></div>
                        <div className={styles.content}>
                            <span className={styles.date}>Aug 2022 - May 2026</span>
                            <h3 className={styles.role}>B.Tech in Computer Science</h3>
                            <h4 className={styles.company}>Pandit Deendayal Energy University</h4>
                            <p className={styles.location}>CGPA: 8.1</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
