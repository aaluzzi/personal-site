import Header from "../Header"

export default function About() {
    return (
        <>
            <Header title="About Me" />
            <p className="max-w-[720px] text-lg p-4">
                My earliest memory of programming was trying to batch script a "Choose Your Own Adventure" game as a teen. 
                It wasn't until a high school class that I learned what computer science was and found my passion for it. 
                <br/><br/>
                Going through my college curriculum has educated me on many formal topics, but on the side, I discovered the versatility of web development.
                Since then, I've brought my own ideas to life, learning several technologies spanning 
                frontend to backend, and will continue to pursue full stack solutions in the future.
            </p>
        </>
    )
}