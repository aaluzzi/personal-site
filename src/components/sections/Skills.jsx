import Header from '../Header';
import SkillCard from '../SkillCard';
import Skill from '../Skill'
import { FaCss3Alt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAmazondynamodb, SiExpress, SiMongodb } from "react-icons/si";

export default function Skills() {
    return (
        <>
            <Header title="Skills" />
            <div className="flex flex-wrap justify-center gap-8">
                <SkillCard title="Languages">
                    <Skill name="HTML" icon={<FaHtml5 className="h-10 w-10" />} />
                    <Skill name="CSS" icon={<FaCss3Alt className="h-10 w-10" />} />
                    <Skill name="JavaScript" icon={<IoLogoJavascript className="h-10 w-10" />} />
                    <Skill name="TypeScript" icon={<BiLogoTypescript className="h-10 w-10" />} />
                    <Skill name="Java" icon={<FaJava className="h-10 w-10" />} />
                    <Skill name="Python" icon={<FaPython className="h-10 w-10" />} />
                </SkillCard>
                <SkillCard title="Frameworks & Libraries">
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
                </SkillCard>
            </div>
        </>
    );
}