export function Button({ onClick, text, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-xl border-2 w-24 px-3 py-2 min m-4 transition active:shadow-[inset_0_2px_4px_0_rgb(0,0,0,0.4);] hover:scale-105`}
    >
      {text}
    </button>
  );
}
