import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
const skills = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Spring (Spring Boot, Spring MVC, Spring Security, Spring Cloud", "Hibernate", "JPA", "React", "Mockito"],
  },
  {
    title: "API Development",
    items: ["RESTful API", "JSON", "SOAP", "Postman"],
  },
  {
    title: "Database Management",
    items: ["SQL Server", "MySQL", "PostgreSQL", "ORM Tools"],
  },
  {
    title: "Cloud Platforms",
    items: ["AWS", "Azure", "GCP"],
  },
  {
    title: "DevOps & CI/CD",
    items: ["Maven", "Git" ,"Jenkins", "Docker", "Kubernetes"],
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, type: "spring" } },
});

const Skills = () => {
  return (
    <section className="py-12 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
      >
        Core Competencies & Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.title}
            variants={fadeIn(idx * 0.15)}
            initial="hidden"
            animate="show"
            className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] p-6 min-h-[220px] flex flex-col justify-start">
              <h3 className="text-[18px] font-bold text-white mb-4">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
