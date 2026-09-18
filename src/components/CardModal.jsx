import { CalendarDays, Film, MonitorPlay, Star } from "lucide-react";

const formatRating = (rating) => {
  const value = rating?.average;
  return typeof value === "number" ? value.toFixed(1) : "0.0";
};

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").trim();
}

const formatYear = (premiered) => {
  return premiered ? premiered.slice(0, 4) : "0000";
};

const CardModal = ({ show, onClose }) => {
  console.log(show);
  if (!show) {
    return null;
  }
  return (
    <div className=" fixed inset-0  bg-slate-900/90  z-50 flex items-center justify-center p-4 ">
      <div className="shadow-xl shadow-slate-800 relative w-full  max-h-[80vh]  max-w-xl rounded-lg lg:grid lg:grid-cols-2 bg-linear-to-bl from-slate-900 via-slate-700/80 to-slate-900 overflow-y-auto scrollbar-thumb-amber-700/10">
        <img
          src={show.image?.medium}
          alt=""
          className="w-screen rounded-l-lg h-full"
        />
        <div className=" w-full ">
          <div className="pl-3 py-3">
            <h3 className="text-slate-50 text-xl font-bold mb-3 flex items-center gap-1 ">
              <Film color="white" strokeWidth={1} size={18} /> {show.name}
            </h3>
            <div className="flex flex-col gap-3  ">
              <div className="flex items-center gap-4 ">
                <span className="flex items-center gap-1 text-orange-400 text-xs">
                  {" "}
                  <Star color="orange" strokeWidth={1} size={16} />{" "}
                  {formatRating(show.rating)}
                </span>
                <span className="text-xs text-orange-400 flex gap-1 items-center">
                  {" "}
                  <CalendarDays color="orange" strokeWidth={1} size={16} />
                  {formatYear(show.premiered)}
                </span>
                <span className="flex text-orange-400 text-xs gap-1 items-center">
                  {" "}
                  <MonitorPlay color="orange" strokeWidth={1} size={16} />
                  {show.network?.name || show.webChannel?.name}
                </span>
              </div>
              {show.genres.length > 0 && (
                <div className=" flex flex-wrap  gap-2 ">
                  {show.genres.map((genre) => (
                    <span
                      key={genre}
                      className="text-orange-400/70 rounded-full border-amber-200/50 border text-xs px-2 py-0.5"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className="max-h-[50vh] text-slate-400 py-2 overflow-y-auto scrollbar-thumb-amber-600/10">
              {stripHtml(show.summary)}
            </p>
          </div>
          <button
            onClick={onClose}
            className=" rounded-lg bg-amber-400 p-2 w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
