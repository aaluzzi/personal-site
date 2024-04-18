export default function Button({label, link}) {
    return (
        <button>
            <a href={link} target="_blank">{label}</a>
        </button>
    )
}