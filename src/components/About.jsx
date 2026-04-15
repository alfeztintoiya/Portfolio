
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
    return (
        <div name="about" className={styles.about}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.heading}>About Me</h2>
                    <div className={styles.textContainer}>
                        <p>
                            I am a passionate <strong>AI Software Engineer</strong> and <strong>Competitive Programmer</strong> with a strong foundation in scalable backend systems.
                            I thrive on solving complex algorithmic problems and bringing those solutions to life through robust, real-world applications.
                        </p>
                        <p>
                            My journey involves deep-diving into <strong>Data Structures and Algorithms</strong>, architecting <strong>multi-LLM pipelines</strong>, and orchestrating <strong>AI agents</strong> for automated workflows.
                            I am currently pursuing my B.Tech in Computer Science at <strong>Pandit Deendayal Energy University</strong> (CGPA: 8.07).
                        </p>
                        <p>
                            When I'm not coding, you can find me competing in global coding contests on <strong>Codeforces</strong>, <strong>CodeChef</strong> and <strong>LeetCode</strong>, pushing my limits to achieve better ranks.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
