import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setConnect } from "@/store/store";
export function ProfilBtn() {
  //recuper la propriétet connect du store global
  const userConnect = useSelector((state) => state.connect);
  const dispatch = useDispatch();

   const ProfilBtn = () => {
  //   const handleClick = (event) => {
  //     // modifie la propriéter connect du store globale à l'aide de l'action setConnect pour la passer à true.
  //     dispatch(setConnect());
  //   };
    if (userConnect) {
      return (
        <div
          // onClick={handleClick}
          className={`connectBtn flex justify-center items-center h-11 bg-white rounded-full px-2`}
        >
          <p className="text-red-900 font-bold">Connexion</p>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="#7f1d1d" strokeWidth="2">
              <path
                strokeLinejoin="round"
                d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
              ></path>
              <circle cx="12" cy="7" r="3"></circle>
            </g>
          </svg>
        </div>
      );
    } else {
      return (
        <div
          // onClick={handleClick}
          className={`profilBtn flex justify-center items-center h-11 bg-red-900 border-solid border-4 rounded-full px-1`}
        >
          <p className="text-white font-bold">Profil</p>
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4Zm7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413l-.005-.018ZM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      );
    }
  };
  return ProfilBtn();
}
