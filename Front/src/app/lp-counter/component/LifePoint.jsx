export function LifePoint({ lifePoint, name, onClick, className }) {
  if (lifePoint > 99999) {
    lifePoint = 99999
  }
  else if (lifePoint<0){
    lifePoint = 0
  }
  return (
    <div  className="flex flex-col cursor-pointer" onClick={onClick}>
      <div data-test-id={"lp " + name} className={`${className} w-40 h-12 border-4 md:w-96 md:h-44 md:border-8 flex items-center justify-center border-red-900 rounded-3xl`}>
        <p   className="text-4xl md:text-9xl select-none">{lifePoint}</p>
      </div>
      <p className="text-center py-1 md:py-3 ">{name}</p>
    </div>
  );
}
