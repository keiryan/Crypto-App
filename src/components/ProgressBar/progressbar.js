import { OutsideBar, InsideBar, Percentage } from "./progressbar.styles";

const ProgressBar = (props) => {
  return (
    <OutsideBar height={props.height} overrideWidth={props.overrideWidth}>
      <InsideBar width={`${props.value / props.max * 100}%`} />
      {props.innie && <Percentage>{(props.value / props.max * 100).toFixed(2)}%</Percentage>}
    </OutsideBar>
  );
};

export default ProgressBar;
