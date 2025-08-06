import Header from "../Header"

export default function About() {
    return (
        <>
            <Header title="About Me" />
            <p className="max-w-[720px] text-lg p-4">
            <b className="font-bold">Hey there!</b> I'm a Software Engineer at AAA, currently maintaining legacy roadside assistance applications while transitioning them to cloud-based solutions.
            <br /><br />
            One of my first programming memories is failing to win against the CPU I created for a Java rock-paper-scissors game. I've learned a little more since then, bringing object-oriented principles into modern full-stack web development. Over time, I've turned fun ideas into accessible projects while continuously growing my skill set.
            <br /><br />
            Outside of work, I enjoy playing billiards and <a href="https://www.youtube.com/@AustinatoPiano"><u><b className="font-semibold">learning how to press keys on piano</b></u></a>. I also value socializing with other humans and love collaboration on something meaningful. <b className="font-bold">Let's connect!</b>
            </p>
        </>
    )
}