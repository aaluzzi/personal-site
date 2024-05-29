export default function Skills({icon, name}) {
    return (
        <div className="p-2 w-[25%] flex flex-col items-center justify-between gap-1 rounded-md border-sky-900 border-2">
            {icon}
            {name}
        </div>
    )
}