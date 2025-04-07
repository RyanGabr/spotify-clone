import { Library, Plus, ArrowRight, Search, List, Heart, Pin } from "lucide-react";

export function Aside() {
  return (
    <div className="bg-zinc-900 rounded-lg p-5 w-96 space-y-5">
      <div className="flex items-center justify-between text-zinc-400">
        <div className="font-semibold flex items-center gap-1">
          <Library size={30} />
          Sua Biblioteca
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-zinc-100/10 rounded-full p-1">
            <Plus />
          </button>
          <button>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-zinc-700/80 py-1.5 px-4 rounded-full text-zinc-300 font-medium">
          Playlists
        </div>
        <div className="bg-zinc-700/80 py-1.5 px-4 rounded-full text-zinc-300 font-medium">
          Artistas
        </div>
      </div>
      <div className="flex items-center justify-between text-zinc-400">
        <div>
          <Search />
        </div>
        <div className="flex items-center gap-2">
          Recentes
          <List size={22} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-violet-700 to-blue-200 rounded-md h-16 w-16 flex items-center justify-center">
            <Heart fill="white" className="text-white" />
          </div>
          <div className="flex flex-col">
            <div className="text-lg text-zinc-50">Músicas Curtidas</div>
            <div className="text-zinc-400 flex items-center gap-1.5">
              <Pin
                fill="green"
                size={20}
                className="text-green-600 rotate-45"
              />
              Playlist • 11 músicas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
