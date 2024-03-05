
export const MainMenuBar = () => {
    return(
        <div className="flex flex-row bg-menuBlue w-full px-10 py-2 border-b-[10px] border-green">
            <ul className="flex w-full justify-between items-center gap-20">
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Home </a>
                </li>
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="/controller/status"> Disaster Status </a>
                </li>
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Requests </a>
                </li>
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Disaster Map </a>
                </li>
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="/controller/users"> User Control </a>
                </li>
            </ul>
        </div>
    )
}