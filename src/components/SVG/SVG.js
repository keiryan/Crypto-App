const IconLegend = {
  search: {
      xmlns:"http://www.w3.org/2000/svg",
      width:'16px',
      fill:'#fff',
      viewBox:"0 0 512 512",
      d:"M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
  },
  'up-arrow': {
      xmlns: "http://www.w3.org/2000/svg",
      fill: 'lime',
      d: "m7 14 5-5 5 5Z",
      width: "24",
      height: '24',
  },
  'down-arrow': {
      xmlns: "http://www.w3.org/2000/svg",
      fill: 'red',
      d: "m12 15-5-5h10Z",
      width: "24",
      height: '24',
  },

  link: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: '#fff',
      width: "24",
      height: '24',
      d: "M11 17H7q-2.075 0-3.537-1.463Q2 14.075 2 12t1.463-3.538Q4.925 7 7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4Zm-3-4v-2h8v2Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Z"
  },

  stack: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: '#fff',
      width: "20",
      height: '20',
      viewBox: "0 0 512 512",
      d: "M232.5 5.171C247.4-1.718 264.6-1.718 279.5 5.171L498.1 106.2C506.6 110.1 512 118.6 512 127.1C512 137.3 506.6 145.8 498.1 149.8L279.5 250.8C264.6 257.7 247.4 257.7 232.5 250.8L13.93 149.8C5.438 145.8 0 137.3 0 127.1C0 118.6 5.437 110.1 13.93 106.2L232.5 5.171zM498.1 234.2C506.6 238.1 512 246.6 512 255.1C512 265.3 506.6 273.8 498.1 277.8L279.5 378.8C264.6 385.7 247.4 385.7 232.5 378.8L13.93 277.8C5.438 273.8 0 265.3 0 255.1C0 246.6 5.437 238.1 13.93 234.2L67.13 209.6L219.1 279.8C242.5 290.7 269.5 290.7 292.9 279.8L444.9 209.6L498.1 234.2zM292.9 407.8L444.9 337.6L498.1 362.2C506.6 366.1 512 374.6 512 383.1C512 393.3 506.6 401.8 498.1 405.8L279.5 506.8C264.6 513.7 247.4 513.7 232.5 506.8L13.93 405.8C5.438 401.8 0 393.3 0 383.1C0 374.6 5.437 366.1 13.93 362.2L67.13 337.6L219.1 407.8C242.5 418.7 269.5 418.7 292.9 407.8V407.8z"
  },

  copy: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: '#fff',
      width: "20",
      height: '20',
      d: "M4.438 18.292q-.709 0-1.219-.511-.511-.51-.511-1.219V5.125h1.73v11.437h9.437v1.73Zm3.229-3.23q-.709 0-1.219-.51-.51-.51-.51-1.219V3.438q0-.709.51-1.219.51-.511 1.219-.511h7.895q.709 0 1.219.511.511.51.511 1.219v9.895q0 .709-.511 1.219-.51.51-1.219.51Zm0-1.729h7.895V3.438H7.667v9.895Zm0 0V3.438v9.895Z"
  },

  sync:{
      xmlns: "http://www.w3.org/2000/svg",
      fill: '#fff',
      width: 24,
      height: 24,
      d: 'M7.1 21.475 1.8 16.2l5.3-5.3 1.6 1.6-2.55 2.55h15v2.275h-15l2.55 2.55Zm9.8-8.375-1.6-1.6 2.55-2.55h-15V6.675h15l-2.55-2.55 1.6-1.6L22.2 7.8Z'
  }
}

{/* <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.1 21.475 1.8 16.2l5.3-5.3 1.6 1.6-2.55 2.55h15v2.275h-15l2.55 2.55Zm9.8-8.375-1.6-1.6 2.55-2.55h-15V6.675h15l-2.55-2.55 1.6-1.6L22.2 7.8Z"/></svg> */}
// const iconFinder = (name) => {
//   return IconLegend[name];
// }

// const SVGIcon = (props) => {
//   return (
//       <svg fill={props.overrideFill || props.icon.fill} xmlns={props.icon.xmnls} width={props.overrideWidth || props.icon.width} height={props.overrideHeight || props.icon.height} viewBox={props.icon.viewBox}>
//         <path d={props.icon.d} />
//       </svg>
//   );
// };

// export default SVGIcon;

const SVG = (props) => {
  console.log(props);
  return (
      <svg fill={props.overrideFill || IconLegend[props.name].fill} xmlns={IconLegend[props.name].xmlns} width={props.overrideWidth || IconLegend[props.name].width} height={props.overrideHeight || IconLegend[props.name].height} viewBox={IconLegend[props.name].viewBox}>
        <path d={IconLegend[props.name].d} />
      </svg>
  );
};

export default SVG;
