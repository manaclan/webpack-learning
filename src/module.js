import run from "../public/run.png";
import idle from "../public/idle.png";
import walk from "../public/walk.png";

const getState = (state) => {
  switch (state) {
    case "run":
      return run;
    case "idle":
      return idle;
    case "walk":
      return walk;
    default:
      return run;
  }
};
export default getState;
