export const SVGIcon = (props) => {
  return (
      <svg width={props.overrideWidth || props.icon.width} xmlns={props.icon.xmnls} fill={props.overrideFill || props.icon.fill} viewBox={props.icon.viewBox}>
        <path d={props.icon.d} />
      </svg>
  );
};
