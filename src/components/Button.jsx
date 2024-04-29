export default function Button({className, icon, label, link}) {
    return (
        <button className={"rounded-lg px-3 py-2 text-base font-medium drop-shadow-sm focus:outline-none focus-ring-4 focus-ring-indigo-300 " + className}>
            <a className="flex gap-1 h-[100%]" href={link} target="_blank">
                {icon}
                {label}
            </a>
        </button>
    )
}