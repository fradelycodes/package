import { Fragment, useEffect } from "react";
// causing callback issues
import { customCursor } from "../utilits";
const Mouse = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Mouse;
