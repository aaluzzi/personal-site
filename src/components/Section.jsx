export default function Section({id, className, children}) {
    return (
        <section id={id} className={"drop-shadow-sm " + className}>
            <div className="py-16 px-8 max-w-[1280px] m-auto flex flex-col items-center justify-center gap-4">
                {children}
            </div>
        </section>
    );
}