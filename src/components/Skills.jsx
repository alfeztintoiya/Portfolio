
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaNodeJs, FaReact, FaDocker, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiPostgresql, SiFirebase, SiSupabase, SiPostman } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "C++", icon: <SiCplusplus color="#00599C" /> },
                { name: "Python", icon: <FaPython color="#3776AB" /> },
                { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
                { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
                { name: "SQL", icon: <FaDatabase color="#4479A1" /> },
                { name: "HTML/CSS", icon: <FaHtml5 color="#E34F26" /> },
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
                { name: "React", icon: <FaReact color="#61DAFB" /> },
                { name: "Express.js", icon: <FaNodeJs color="#000000" /> }, // reused Node icon for Express usually fine or generic
            ]
        },
        {
            title: "Tools & Technologies",
            skills: [
                { name: "Docker", icon: <FaDocker color="#2496ED" /> },
                { name: "Git", icon: <FaGitAlt color="#F05032" /> },
                { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
                { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
                { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
                { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
            ]
        }
    ];

    return (
        <div name="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Skills
                </motion.h2>

                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className={styles.categorySection}>
                        <motion.h3
                            className={styles.categoryTitle}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            {category.title}
                        </motion.h3>
                        <div className={styles.skillsGrid}>
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.skillCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: (catIndex * 0.1) + (index * 0.05) }}
                                    whileHover={{ scale: 1.05, borderColor: "#646cff" }}
                                >
                                    <div className={styles.icon}>{skill.icon}</div>
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
