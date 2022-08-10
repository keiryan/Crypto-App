import { OutsideBar, InsideBar } from "./progressbar.styles";

const ProgressBar = (props) => {
  return (
    <OutsideBar overrideWidth={props.overrideWidth}>
      <InsideBar width={`${props.value / props.max * 100}%`} />
    </OutsideBar>
  );
};

export default ProgressBar;
