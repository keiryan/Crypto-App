import { OutsideBar, InsideBar } from "./progressbar.styles";

const ProgressBar = (props) => {
  return (
    <OutsideBar overrideWidth={props.overrideWidth}>
      <InsideBar value={props.value} max={props.max} />
    </OutsideBar>
  );
};

export default ProgressBar;
