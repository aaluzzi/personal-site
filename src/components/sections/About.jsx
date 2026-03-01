import Header from "../Header"

export default function About() {
    return (
        <>
            <Header title="About Me" />
            <p className="max-w-[720px] text-lg p-4">         
            Hey visitor! I'm Austin, a lifelong problem solver who expresses that through code. I've turned fun ideas into tangible projects with different technologies over time, but nowadays prefer the accessibility and scale of the web. Currently I'm at AAA, transitioning legacy roadside assistance systems into modern, cloud-based solutions.
            <br /><br />
            In my free time, I enjoy playing billiards and learning how to use <a href="https://www.youtube.com/@AustinatoPiano" target="_blank"><u><b className="font-semibold">a different kind of keyboard</b></u></a>. I also like socializing with other humans and am always ready to collaborate on a meaningful project. <b className="font-bold">Let's connect!</b>
            </p>
        </>
    )
}