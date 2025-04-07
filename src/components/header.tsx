import { ChevronLeft, ChevronRight, Home, Search, Inbox, Bell, Users } from "lucide-react";

export function Header() {
  return (
    <div className="flex items-center justify-between px-3">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="bg-red-400 rounded-full h-3 w-3"></div>
          <div className="bg-yellow-500 rounded-full h-3 w-3"></div>
          <div className="bg-green-500 rounded-full h-3 w-3"></div>
        </div>
        <div className="text-zinc-800 flex items-center gap-1">
          <ChevronLeft size={35} className="text-zinc-400"/>
          <ChevronRight size={35} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-zinc-900 rounded-full text-white p-3">
          <Home size={25} />
        </div>
        <div className="bg-zinc-900 p-3 rounded-full text-zinc-400 flex items-center justify-between gap-2 w-[500px]">
          <div className="flex items-center gap-3">
            <Search />
            <span>O que você quer ouvir?</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-400 w-[1px] h-5"></div>
            <Inbox />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="bg-white text-black rounded-full font-semibold py-1.5 px-4 text-sm">
          Ver planos Premium
        </button>
        <div className="flex items-center gap-6 text-zinc-400">
          <Bell size={20} />
          <Users size={20} />
          <div
            className="
        bg-orange-600 rounded-full w-10 h-10 text-black font-bold 
        flex items-center justify-center border-4 border-zinc-800"
          >
            R
          </div>
        </div>
      </div>
    </div>
  );
}
