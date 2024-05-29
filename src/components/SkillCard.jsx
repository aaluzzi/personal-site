export default function SkillCard({ title, children }) {
    return (
        <div className="flex flex-col gap-4 max-w-[360px] bg-sky-900 p-8 rounded-md">
            <div className="flex flex-grow gap-4 flex-wrap items-center justify-center">
                {children}
            </div>
            <p className="text-xl font-bold">{title}</p>
        </div>
    );
}