export default function Button({className, icon, label, link}) {
    return (
        <a href={link} target="_blank"
            className={"flex gap-1 h-[100%] rounded-lg px-4 py-2 text-base font-medium drop-shadow-sm focus:outline-none focus-ring-4 focus-ring-indigo-300 " + className}>           
            {icon}
            {label}      
        </a>
    )
}