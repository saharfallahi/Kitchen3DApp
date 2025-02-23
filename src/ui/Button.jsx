function Button({ label, imgUrl, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" bg-secondary-100 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-md hover:bg-secondary-200 focus:bg-secondary-0 border focus:border-yellow-400  focus:shadow-[0px_0px_10px_0px_rgba(234,_179,_8,_0.5)] focus:text-yellow-400 focus:font-bold"
    >
      <img src={imgUrl} alt={label} className="w-10 h-10 max-w-10" />
      <span>{label}</span>
    </button>
  );
}

export default Button;
