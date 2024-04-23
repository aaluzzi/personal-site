export default function Button({icon, label, link}) {
    return (
        <button>
            <a className="flex gap-1 h-[100%]" href={link} target="_blank">
                {icon}
                {label}
            </a>
        </button>
    )
}