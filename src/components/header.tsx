import { AlarmClock, AtomIcon, ChartNoAxesColumn, CircleHelp, Ellipsis, Home, Settings, Users } from "lucide-react";
import Link from "next/link";

export function Header() {
    return (
        <header className="w-1/5 fixed h-screen flex flex-col border-r border-neutral-800">
            <div className="flex w-full h-fit p-6 space-x-2 border-b-1 border-neutral-800">
                <AtomIcon />
                <h1 className="text-xl font-semibold">Untitle.UI</h1>
            </div>

            <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col items-center justify-center">
                    <Link href="/home" className="flex w-[90%] p-2 m-1 space-x-2 rounded-lg hover:bg-neutral-900">
                        <Home />
                        <h3 className="text-base">Início</h3>
                    </Link>
                    <Link href="/schedule" className="flex w-[90%] p-2 m-1 space-x-2 rounded-lg hover:bg-neutral-900">
                        <AlarmClock />
                        <h3 className="text-base">Agenda</h3>
                    </Link>
                    <Link href="/customers" className="flex w-[90%] p-2 m-1 space-x-2 rounded-lg hover:bg-neutral-900">
                        <Users />
                        <h3 className="text-base">Clientes</h3>
                    </Link>
                    <Link href="/dashboard" className="flex w-[90%] p-2 m-1 space-x-2 rounded-lg hover:bg-neutral-900">
                        <ChartNoAxesColumn />
                        <h3 className="text-base">Relatório</h3>
                    </Link>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Link href="/support" className="flex w-[90%] p-2 m-1 space-x-2 rounded-lg hover:bg-neutral-900">
                        <CircleHelp />
                        <h3 className="text-base">Suporte</h3>
                    </Link>
                    <Link href="/configurations" className="flex w-[90%] p-2 m-1 space-x-2 rounded-lg hover:bg-neutral-900">
                        <Settings />
                        <h3 className="text-base">Configurações</h3>
                    </Link>
                    <div className="flex flex-row justify-between w-[90%] p-2 m-1 rounded-lg hover:bg-neutral-900">
                        <div className="flex space-x-2">
                            <img src="https://github.com/cleltonjm.png" className="w-15 rounded-2xl" alt="Avatar" />
                            <div className="flex flex-col justify-center">
                                <span className="font-semibold">Clelton</span>
                                <span className="text-neutral-600">cleltonjm_95@hotmail.com</span>
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