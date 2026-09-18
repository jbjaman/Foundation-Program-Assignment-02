const formatRating = (rating) => {
  const value = rating?.average;
  return typeof value === "number" ? value.toFixed(1) : "0.0";
};

const formatYear = (premiered) => {
  return premiered ? premiered.slice(0, 4) : "0000";
};

const CardModal = ({ show, onClose }) => {
  console.log(show);
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0  bg-slate-900/80  z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-h-screen  max-w-xl border rounded-lg lg:flex bg-linear-to-bl from-slate-900 via-slate-600 to-slate-900">
        <img src={show.image?.medium} alt="" className=" rounded-l-lg h-full" />
        <div className="border w-full p-4">
          <p>{show.name}</p>
          <p>{formatRating(show.rating)}</p>
          <p>{formatYear(show.premiered)}</p>

          <button
            onClick={onClose}
            className="border rounded-lg bg-amber-400 p-3 w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
