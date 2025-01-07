import Header from "../Header"

export default function About() {
    return (
        <>
            <Header title="About Me" />
            <p className="max-w-[720px] text-lg p-4">
            Hi there! I'm a software developer passionate about using my problem-solving skills to tackle real-world challenges. My foundation is built on object-oriented programming principles and maintaining legacy code systems. On the side, I've expanded my expertise into modern full-stack development—from building responsive frontends with frameworks like React to creating large-scale backends powered by relational and non-relational databases. Through web development, I've been able to turn my ideas into tangible projects, continuously growing my skill set.
            <br /><br />
            Outside of programming, I enjoy weightlifting, playing billiards, and <a href="https://www.youtube.com/@AustinArpeggio"><u><b>learning the piano</b></u></a>. I also appreciate socializing with other human beings and am always excited to collaborate on something impactful. <b>Let's connect!</b>
            </p>
        </>
    )
}