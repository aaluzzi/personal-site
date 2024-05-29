import Skill from '../Skill'
import { FaCss3Alt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import SkillCard from '../SkillCard';

export default function Skills() {
    return (
        <>
            <h1 className="text-4xl font-bold tracking-wide">Skills</h1>
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
                <SkillCard title="Environments & Databases">
                    <Skill name="Node.js" icon={<FaNodeJs className="h-10 w-10" />} />
                    <Skill name="MongoDB" icon={<SiMongodb className="h-10 w-10" />} />
                    <Skill name="MySQL" icon={<GrMysql className="h-10 w-10" />} />
                    <Skill name="PostgreSQL" icon={<BiLogoPostgresql className="h-10 w-10" />} />
                </SkillCard>
            </div>
        </>
    );
}