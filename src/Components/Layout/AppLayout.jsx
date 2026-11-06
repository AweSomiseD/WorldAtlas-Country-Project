import { Footers } from "../UI/Footers";
import { Headers } from "../UI/Headers";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <section>
        <Headers />
        <Outlet />
        <Footers />
      </section>
    </>
  );
};
