
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div name="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.heading}>Get In Touch</h2>
                    <p className={styles.subtext}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className={styles.infoGrid}>
                        <a href="mailto:alfez.tintoiya25@gmail.com" className={styles.card}>
                            <div className={styles.icon}><FaEnvelope /></div>
                            <h3>Email</h3>
                            <p>alfez.tintoiya25@gmail.com</p>
                        </a>

                        <div className={styles.card}>
                            <div className={styles.icon}><FaPhone /></div>
                            <h3>Phone</h3>
                            <p>(+91) 7861844041</p>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://linkedin.com/in/alfez-tintoiya" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/alfeztintoiya" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaGithub />
                        </a>
                    </div>

                    <footer className={styles.footer}>
                        <p>Designed & Built by Alfez Tintoiya © 2026</p>
                    </footer>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
