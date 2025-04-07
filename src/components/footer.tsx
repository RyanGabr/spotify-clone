import {
  PlusCircleIcon,
  Shuffle,
  SkipBack,
  Pause,
  SkipForward,
  Repeat2,
  SquarePlay,
  MicVocal,
  ListMusic,
  Speaker,
  Volume1,
  PictureInPicture,
  Maximize,
} from "lucide-react";

export function Footer() {
  return (
    <div className="p-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded bg-zinc-800"></div>
        <div>
          <h1 className="text-zinc-50">Holiday Beginning</h1>
          <span className="text-zinc-400 font-light text-sm">Swink</span>
        </div>
        <div className="text-zinc-400 ml-5">
          <PlusCircleIcon size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex items-center gap-5 text-zinc-400">
          <Shuffle />
          <SkipBack />
          <div className="bg-white text-transparent rounded-full p-2">
            <Pause fill="black" />
          </div>
          <SkipForward />
          <Repeat2 />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-zinc-400 text-xs font-light">2:31</div>
          <div className="h-1.5 w-[500px] bg-zinc-600 rounded-full overflow-hidden">
            <div className="bg-white rounded-full w-[280px] h-1.5"></div>
          </div>
          <div className="text-zinc-400 text-xs font-light">4:39</div>
        </div>
      </div>
      <div className="flex items-center gap-5 text-zinc-400">
        <SquarePlay size={20} />
        <MicVocal size={20} />
        <ListMusic size={20} />
        <Speaker size={20} />
        <div className="flex items-center gap-2">
          <Volume1 size={20} />
          <div className="h-1 w-24 bg-zinc-600 rounded-full overflow-hidden">
            <div className="bg-white rounded-full w-10 h-1"></div>
          </div>
        </div>
        <PictureInPicture size={20} />
        <Maximize size={20} />
      </div>
    </div>
  );
}
