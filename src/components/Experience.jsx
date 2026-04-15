
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { FaBriefcase } from "react-icons/fa";

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
                    Work Experience
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
                            <span className={styles.date}>Feb 2026 - Present</span>
                            <h3 className={styles.role}>AI Engineer Intern</h3>
                            <h4 className={styles.company}>
                                <a href="https://solvay5.ai/" target="_blank" rel="noopener noreferrer">Solvay5</a>
                            </h4>
                            <p className={styles.location}>Remote (California, US)</p>
                            <ul className={styles.details}>
                                <li>Architected a full-stack AI platform using FastAPI, MongoDB, AWS Cognito, and Python, building 15+ RESTful APIs, 13 data models, and async background job processing.</li>
                                <li>Built a multi-LLM pipeline using Claude, GPT-4o, and Gemini with MCP-based web search and consensus scoring, reducing manual analysis time from hours to about 20 minutes.</li>
                                <li>Engineered an in-memory data pipeline processing 70K+ tokens per run, storing structured outputs across 5 MongoDB collections with transactional upserts and deduplication.</li>
                                <li>Developed a fault-tolerant async task queue with atomic job claiming, auto-retry, and real-time status tracking, improving system scalability and reliability while supporting a React-based frontend.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
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
                </div>
            </div>
        </div>
    );
};

export default Experience;
