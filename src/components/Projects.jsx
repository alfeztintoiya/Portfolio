
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "VirtualHire - Remote Interview Platform",
            tech: ["MERN Stack", "TypeScript", "WebRTC", "WebSockets"],
            description: "Built a scalable WebRTC-based video calling service supporting real-time interviews, along with a Monaco-based collaborative code editor synchronized using WebSockets. Implemented JWT-based authentication.",
            github: "https://github.com/alfeztintoiya", // Placeholder as actual link wasn't in resume text, using profile
            demo: null
        },
        {
            title: "ResuMind - AI Resume Analyzer",
            tech: ["MERN Stack", "PostgreSQL", "Gemini API", "Supabase", "Cloudinary"],
            description: "Built an AI-powered resume analysis platform with section-wise evaluation, ATS optimization, and role-specific recommendations. Implemented secure Google OAuth and real-time progress tracking.",
            github: "https://github.com/alfeztintoiya", // Placeholder
            demo: null
        }
    ];

    return (
        <div name="projects" className={styles.projects}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.content}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <div className={styles.tags}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={styles.tag}>{t}</span>
                                    ))}
                                </div>
                                <p className={styles.description}>{project.description}</p>

                                <div className={styles.links}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <FaGithub size={20} /> View Code
                                    </a>
                                    {/* Only show demo button if link exists, keeping structure consistent */}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            <FaExternalLinkAlt size={20} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
