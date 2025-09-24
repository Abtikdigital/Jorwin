import { memo } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const nav = useNavigate();
  const HandleClick = () => {
    nav("/");
  };
  return (
    <section className="flex justify-center items-center h-screen w-screen">
      <div className="space-y-6">
        <h2 className="sub-heading text-center bg-gradient-to-t from-[#3CA2E2] bg-clip-text to-[#052EAA] text-transparent p-1.5">404! </h2>
        <h3 className="sub-heading text-center bg-gradient-to-t from-[#3CA2E2] bg-clip-text to-[#052EAA] text-transparent p-1.5 ">Page Not Found</h3>
        <div className="flex justify-center items-center">
          <button className="custom-btn !px-10 !py-3" onClick={HandleClick}>
            Back{" "}
          </button>
        </div>
      </div>
    </section>
  );
};
export default memo(PageNotFound);
