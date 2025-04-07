import { Ellipsis, Heart } from "lucide-react";
import { Playlist } from "./playlist";

export function Body() {
  return (
    <div className="bg-gradient-to-b from-red-700 to-zinc-900 py-4 px-6 rounded-lg flex-1">
      <div className="bg-gradient-to-bl from-transparent to-black p-5 rounded flex gap-6">
        <div className="bg-red-500 w-52 h-52 shadow-xl my-5"></div>
        <div className="flex flex-col gap-3 text-zinc-50">
          <div className="flex items-center justify-between">
            <div>Playlist</div>
            <div className="py-1 px-3 bg-black/60 rounded">Patrocinado</div>
          </div>
          <div>
            <h1 className="font-medium text-5xl w-7/12 leading-14">
              Jorge e Mateus 20 Anos ⭐ As Melhores
            </h1>
          </div>
          <div>
            20 ANOS DE JORGE & MATEUS Ouça aqui essa história cantada por
            milhões de vozes 🎶
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-green-500 rounded-full text-black py-3 px-8">
              Play
            </button>
            <button className="border border-zinc-50 rounded-full text-zinc-50 py-3 px-8">
              Seguir
            </button>
            <Ellipsis className="text-zinc-400" />
          </div>
        </div>
      </div>
      <div className="px-5 my-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <button className="py-2 px-4 rounded-full bg-white text-black">
              Tudo
            </button>
            <button className="py-2 px-4 rounded-full bg-white/10 text-zinc-50">
              Música
            </button>
            <button className="py-2 px-4 rounded-full bg-white/10 text-zinc-50">
              Podcasts
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex gap-2 w-[1fr] bg-white/10 rounded-md overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-violet-700 to-blue-200 w-16 h-16 flex items-center justify-center">
                <Heart fill="white" className="text-white" />
              </div>
              <div className="flex items-center justify-center text-sm font-medium text-zinc-50 p-1">
                Músicas Curtidas
              </div>
            </div>
            <Playlist>PES 2016 (SOUNDTRACK)</Playlist>
            <Playlist>Goblins From Mars - All songs</Playlist>
            <Playlist>🌊</Playlist>
            <Playlist>Lofi Girl - beats to relax/study to</Playlist>
            <Playlist>Mix animado</Playlist>
            <Playlist>Bruno Mars - As melhores</Playlist>
            <Playlist>Daily Mix 1</Playlist>
          </div>
        </div>
      </div>
    </div>
  );
}
