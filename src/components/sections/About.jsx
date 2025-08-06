import Header from "../Header"

export default function About() {
    return (
        <>
            <Header title="About Me" />
            <p className="max-w-[720px] text-lg p-4">
            <b className="font-bold">Hey there!</b> I'm a Software Engineer at AAA, where I currently maintain legacy roadside assistance applications while transitioning them to cloud-based solutions.
            <br /><br />
            One of my earliest programming memories is failing to beat the CPU I created for a Java rock-paper-scissors game. I've come a long way since then, eventually finding my way into full-stack web development. The web has provided me an accessible platform to present my fun ideas, all while learning many new technologies along the way. I'm excited to see how it continues to evolve.
            <br /><br />
            In my free time, I enjoy playing billiards and <a href="https://www.youtube.com/@AustinatoPiano">learning how to use <u><b className="font-semibold">a different kind of keyboard</b></u></a>. I also like socializing with other humans and am always ready to collaborate on something impactful. <b className="font-bold">Let's connect!</b>
            </p>
        </>
    )
}