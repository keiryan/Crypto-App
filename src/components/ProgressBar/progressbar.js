import { OutsideBar, InsideBar } from "./progressbar.styles";

const ProgressBar = (props) => {
  return (
    <OutsideBar>
      <InsideBar value={props.value} max={props.max} overrideWidth={props.overrideWidth}/>
    </OutsideBar>
  );
};

export default ProgressBar;
