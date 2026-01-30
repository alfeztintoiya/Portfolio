import { motion } from "framer-motion";
import styles from "./Competitive.module.css";
import { FaTrophy } from "react-icons/fa";
import { SiLeetcode, SiMeta, SiCodechef } from "react-icons/si";

// Custom Vector Component for Codeforces (Multi-colored)
const CodeforcesLogo = () => (
    <svg viewBox="0 0 24 24" className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="9" width="6" height="12" rx="1.5" fill="#FFC107" />
        <rect x="9" y="3" width="6" height="18" rx="1.5" fill="#2196F3" />
        <rect x="16.5" y="6" width="6" height="15" rx="1.5" fill="#F44336" />
    </svg>
);

const Competitive = () => {
    return (
        <div name="competitive" className={styles.competitive}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Competitive Programming
                </motion.h2>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.intro}>
                        <div className={styles.iconContainer}><FaTrophy /></div>
                        <p>
                            Competitive programming is my forte. I have solved <strong>1000+ algorithmic problems</strong> across various platforms.
                            It pushes me to write optimized, bug-free code under pressure.
                        </p>
                    </div>

                    <div className={styles.statsGrid}>
                        <motion.div
                            className={styles.statBox}
                            whileHover={{ scale: 1.05, borderColor: "#eab308" }}
                        >
                            <div className={styles.platformIcon} style={{ color: "#FFA116" }}>
                                <SiLeetcode />
                            </div>
                            <span className={styles.statLabel}>LeetCode</span>
                            <span className={styles.statValue}>1960</span>
                            <span className={styles.statRank}>Knight (Top 3%)</span>
                            <a href="https://leetcode.com/alfez18/" target="_blank" rel="noopener noreferrer" className={styles.profileLink}>View Profile</a>
                        </motion.div>

                        <motion.div
                            className={styles.statBox}
                            whileHover={{ scale: 1.05, borderColor: "#ef4444" }}
                        >
                            <div className={styles.platformIcon}>
                                <CodeforcesLogo />
                            </div>
                            <span className={styles.statLabel}>Codeforces</span>
                            <span className={styles.statValue}>1421</span>
                            <span className={styles.statRank}>Specialist</span>
                            <a href="https://codeforces.com/profile/alfez2503" target="_blank" rel="noopener noreferrer" className={styles.profileLink}>View Profile</a>
                        </motion.div>

                        <motion.div
                            className={styles.statBox}
                            whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
                        >
                            <div className={styles.platformIcon} style={{ color: "#5B4638" }}>
                                <SiCodechef />
                            </div>
                            <span className={styles.statLabel}>CodeChef</span>
                            <span className={styles.statValue}>1703</span>
                            <span className={styles.statRank}>3-Star</span>
                            <a href="https://www.codechef.com/users/alfez18" target="_blank" rel="noopener noreferrer" className={styles.profileLink}>View Profile</a>
                        </motion.div>

                        <motion.div
                            className={styles.statBox}
                            whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                        >
                            <div className={styles.platformIcon} style={{ color: "#0668E1" }}>
                                <SiMeta />
                            </div>
                            <span className={styles.statLabel}>Meta Hacker Cup</span>
                            <span className={styles.statValue}>Rank 1774</span>
                            <span className={styles.statRank}>Round 2 (2025)</span>
                            <a href="https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/250434307739818" target="_blank" rel="noopener noreferrer" className={styles.certificate}>Certificate</a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Competitive;
