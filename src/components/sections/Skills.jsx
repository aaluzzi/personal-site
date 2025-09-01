import Header from '../Header';
import SkillCard from '../SkillCard';
import Skill from '../Skill'
import { FaCss3Alt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { GoDatabase } from "react-icons/go";
import { DiMsqlServer, DiDotnet } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAmazondynamodb, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 2, // Stagger each child by 0.2 seconds
            delayChildren: 2,   // Delay the start of the children animations by 0.2 seconds
        }
    }
};

export default function Skills() {
    return (
        <>
            <Header title="What I've Worked With" />
            
            <motion.div
                className="flex flex-wrap justify-center gap-8"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants} // Apply staggered animation on the container
                viewport={{ once: true }}
            >
                <SkillCard title="Languages">
                    <Skill name="HTML" icon={<FaHtml5 className="h-10 w-10" />} />
                    <Skill name="CSS" icon={<FaCss3Alt className="h-10 w-10" />} />
                    <Skill name="JS / TS" icon={<IoLogoJavascript className="h-10 w-10" />} />
                    <Skill name="C# / VB" icon={<TbBrandCSharp className="h-10 w-10" />} />
                    <Skill name="Java" icon={<FaJava className="h-10 w-10" />} />
                    <Skill name="Python" icon={<FaPython className="h-10 w-10" />} />
                </SkillCard>
                <SkillCard title="Frameworks & Libraries">
                    <Skill name="ASP.NET" icon={<DiDotnet className="h-10 w-10" />} />
                    <Skill name="Express" icon={<SiExpress className="h-10 w-10" />} />
                    <Skill name="Firebase" icon={<IoLogoFirebase className="h-10 w-10" />} />
                    <Skill name="Next.js" icon={<RiNextjsFill className="h-10 w-10" />} />
                    <Skill name="React" icon={<FaReact className="h-10 w-10" />} />
                    <Skill name="Tailwind" icon={<RiTailwindCssFill className="h-10 w-10" />} />
                </SkillCard>
                <SkillCard title="Databases">                 
                    <Skill name="MongoDB" icon={<SiMongodb className="h-10 w-10" />} />                 
                    <Skill name="MS SQL" icon={<DiMsqlServer className="h-10 w-10" />} />
                    <Skill name="PostgreSQL" icon={<BiLogoPostgresql className="h-10 w-10" />} />
                    <Skill name="MySQL" icon={<GrMysql className="h-10 w-10" />} />                   
                    <Skill name="DynamoDB" icon={<SiAmazondynamodb className="h-10 w-10" />} />
                    <Skill name="IBM Db2" icon={<GoDatabase className="h-10 w-10" />} />
                </SkillCard>
            </motion.div>
        </>
    );
}