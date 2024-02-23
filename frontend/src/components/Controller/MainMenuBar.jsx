
export const MainMenuBar = () => {
    return(
        <div className="flex flex-row bg-menuBlue w-full px-10 py-2 border-b-[10px] border-green">
            <ul className="flex w-full justify-between items-center gap-20">
                <li>
                    <a class="text-white transition hover:text-gray-500/75" href="#"> Home </a>
                </li>
                <li>
                    <a class="text-white transition hover:text-gray-500/75" href="#"> Disaster Status </a>
                </li>
                <li>
                    <a class="text-white transition hover:text-gray-500/75" href="#"> Requests </a>
                </li>
                <li>
                    <a class="text-white transition hover:text-gray-500/75" href="#"> Disaster Map </a>
                </li>
                <li>
                    <a class="text-white transition hover:text-gray-500/75" href="#"> User Control </a>
                </li>
            </ul>
        </div>
    )
}