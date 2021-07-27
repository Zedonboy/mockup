
export default function DashboardSideMenuItem({active, label, ...props}) {
    return (
        <button  {...props} className={`${active ? "text-white font-bold" : "text-purple-300 text-sm"} flex space-x-4 items-center`}>
            <p>{label}</p>
            {active ? <span className="w-2 h-2 rounded-full bg-white"></span> : null}
        </button>
    )
}