
import { memo } from "react";
import "../styles/Loader.css";
const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-48 h-52 bg-white shadow-xl flex justify-center gap-3 items-center rounded-xl">
          <div className="loader">
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__ball"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Loader);
