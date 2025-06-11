import { AlarmClock, AtomIcon, ChartNoAxesColumn, CircleHelp, Ellipsis, Home, Settings, Users } from "lucide-react";

export function Header() {
    return (
        <header className="w-1/5 h-screen flex flex-col border-r border-gray-700">
            <div className="flex w-full h-fit p-5 space-x-2 border-b-1 border-gray-700">
                <AtomIcon />
                <h1 className="text-xl font-semibold">Untitle.UI</h1>
            </div>

            <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col items-center justify-center">
                    <a href="/" className="flex w-90 p-2 m-1 space-x-2 rounded-lg hover:bg-gray-700">
                        <Home />
                        <h3>Início</h3>
                    </a>
                    <a href="/" className="flex w-90 p-2 m-1 space-x-2 rounded-lg hover:bg-gray-700">
                        <AlarmClock />
                        <h3>Horários</h3>
                    </a>
                    <a href="/" className="flex w-90 p-2 m-1 space-x-2 rounded-lg hover:bg-gray-700">
                        <Users />
                        <h3>Clientes</h3>
                    </a>
                    <a href="/" className="flex w-90 p-2 m-1 space-x-2 rounded-lg hover:bg-gray-700">
                        <ChartNoAxesColumn />
                        <h3>Dashboard</h3>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <a href="/" className="flex w-90 p-2 m-1 space-x-2 rounded-lg hover:bg-gray-700">
                        <CircleHelp />
                        <h3>Suporte</h3>
                    </a>
                    <a href="/" className="flex w-90 p-2 m-1 space-x-2 rounded-lg hover:bg-gray-700">
                        <Settings />
                        <h3>Configurações</h3>
                    </a>
                    <div className="flex flex-row justify-between w-90 p-2 m-1 rounded-lg hover:bg-gray-700">
                        <div className="flex space-x-2">
                            <img src="https://github.com/cleltonjm.png" className="w-15 rounded-2xl" alt="Avatar" />
                            <div className="flex flex-col justify-center">
                                <span>Clelton</span>
                                <span>cleltonjm_95@hotmail.com</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <Ellipsis />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}