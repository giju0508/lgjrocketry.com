const soundtrackFiles = import.meta.glob(
  "../../assets/projects-soundtrack.{mp3,ogg,wav,m4a}",
  { eager: true, query: "?url", import: "default" },
);
const soundtrackSource = Object.values(soundtrackFiles)[0];

const setInitialVolume = (audio) => {
  if (audio) {
    audio.volume = 0.3;
  }
};

const SoundtrackPlayer = ({ onClose }) => {
  if (!soundtrackSource) {
    return null;
  }

  return (
    <aside
      aria-label="DJ HRNYHORSE soundtrack"
      className="fixed bottom-4 right-4 z-40 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/15 bg-[#040506] shadow-2xl shadow-black/50"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-2">
        <span className="text-xs font-medium text-orange-200">
          DJ HRNYHORSE
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Stop music and close player"
          className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full text-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="px-3 pb-3">
        <audio
          ref={setInitialVolume}
          src={soundtrackSource}
          aria-label="DJ HRNYHORSE soundtrack"
          controls
          autoPlay
          preload="metadata"
          className="block w-full"
        />
      </div>
    </aside>
  );
};

export default SoundtrackPlayer;
