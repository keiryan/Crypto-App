export const SVGIcon = (props) => {
  return (
      <svg fill={props.overrideFill || props.icon.fill} xmlns={props.icon.xmnls} width={props.overrideWidth || props.icon.width} height={props.overrideHeight || props.icon.height} viewBox={props.icon.viewBox}>
        <path d={props.icon.d} />
      </svg>
  );
};
