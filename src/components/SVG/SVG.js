const IconLegend = {
  search: {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16px",
    fill: "#fff",
    viewBox: "0 0 512 512",
    d: "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z",
  },
  "up-arrow": {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "lime",
    d: "m7 14 5-5 5 5Z",
    width: "24",
    height: "24",
  },
  "down-arrow": {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "red",
    d: "m12 15-5-5h10Z",
    width: "24",
    height: "24",
  },

  link: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    width: "24",
    height: "24",
    d: "M11 17H7q-2.075 0-3.537-1.463Q2 14.075 2 12t1.463-3.538Q4.925 7 7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4Zm-3-4v-2h8v2Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Z",
  },

  stack: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    width: "20",
    height: "20",
    viewBox: "0 0 512 512",
    d: "M232.5 5.171C247.4-1.718 264.6-1.718 279.5 5.171L498.1 106.2C506.6 110.1 512 118.6 512 127.1C512 137.3 506.6 145.8 498.1 149.8L279.5 250.8C264.6 257.7 247.4 257.7 232.5 250.8L13.93 149.8C5.438 145.8 0 137.3 0 127.1C0 118.6 5.437 110.1 13.93 106.2L232.5 5.171zM498.1 234.2C506.6 238.1 512 246.6 512 255.1C512 265.3 506.6 273.8 498.1 277.8L279.5 378.8C264.6 385.7 247.4 385.7 232.5 378.8L13.93 277.8C5.438 273.8 0 265.3 0 255.1C0 246.6 5.437 238.1 13.93 234.2L67.13 209.6L219.1 279.8C242.5 290.7 269.5 290.7 292.9 279.8L444.9 209.6L498.1 234.2zM292.9 407.8L444.9 337.6L498.1 362.2C506.6 366.1 512 374.6 512 383.1C512 393.3 506.6 401.8 498.1 405.8L279.5 506.8C264.6 513.7 247.4 513.7 232.5 506.8L13.93 405.8C5.438 401.8 0 393.3 0 383.1C0 374.6 5.437 366.1 13.93 362.2L67.13 337.6L219.1 407.8C242.5 418.7 269.5 418.7 292.9 407.8V407.8z",
  },

  copy: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    width: "20",
    height: "20",
    d: "M4.438 18.292q-.709 0-1.219-.511-.511-.51-.511-1.219V5.125h1.73v11.437h9.437v1.73Zm3.229-3.23q-.709 0-1.219-.51-.51-.51-.51-1.219V3.438q0-.709.51-1.219.51-.511 1.219-.511h7.895q.709 0 1.219.511.511.51.511 1.219v9.895q0 .709-.511 1.219-.51.51-1.219.51Zm0-1.729h7.895V3.438H7.667v9.895Zm0 0V3.438v9.895Z",
  },

  sync: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    width: 24,
    height: 24,
    d: "M7.1 21.475 1.8 16.2l5.3-5.3 1.6 1.6-2.55 2.55h15v2.275h-15l2.55 2.55Zm9.8-8.375-1.6-1.6 2.55-2.55h-15V6.675h15l-2.55-2.55 1.6-1.6L22.2 7.8Z",
  },
  sun: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    width: 24,
    height: 24,
    d: "M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13.15q-.475 0-.812-.338Q.85 12.475.85 12q0-.475.338-.812.337-.338.812-.338h2q.475 0 .812.338.338.337.338.812 0 .475-.338.812-.337.338-.812.338Zm18 0q-.475 0-.812-.338-.338-.337-.338-.812 0-.475.338-.812.337-.338.812-.338h2q.475 0 .812.338.338.337.338.812 0 .475-.338.812-.337.338-.812.338Zm-8-8q-.475 0-.812-.338-.338-.337-.338-.812V2q0-.475.338-.813Q11.525.85 12 .85q.475 0 .812.337.338.338.338.813v2q0 .475-.338.812-.337.338-.812.338Zm0 18q-.475 0-.812-.338-.338-.337-.338-.812v-2q0-.475.338-.812.337-.338.812-.338.475 0 .812.338.338.337.338.812v2q0 .475-.338.812-.337.338-.812.338Zm-6.45-16L4.475 6.1q-.35-.325-.337-.8.012-.475.337-.825.35-.35.825-.35t.8.35L7.15 5.55q.325.35.325.8 0 .45-.325.8-.325.35-.787.337-.463-.012-.813-.337ZM17.9 19.525l-1.05-1.075q-.325-.35-.325-.812 0-.463.325-.788.325-.35.788-.338.462.013.812.338l1.075 1.05q.35.325.338.8-.013.475-.338.825-.35.35-.825.35t-.8-.35ZM16.85 7.15q-.35-.325-.337-.788.012-.462.337-.812l1.05-1.075q.325-.35.8-.338.475.013.825.338.35.35.35.825t-.35.8L18.45 7.15q-.35.325-.8.325-.45 0-.8-.325ZM4.475 19.525q-.35-.35-.35-.825t.35-.8l1.075-1.05q.35-.325.813-.325.462 0 .787.325.35.325.338.788-.013.462-.338.812L6.1 19.525q-.325.35-.8.338-.475-.013-.825-.338Z",
  },

  moon: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    width: 24,
    height: 24,
    d: "M12 21.1q-3.8 0-6.45-2.65Q2.9 15.8 2.9 12q0-3.775 2.662-6.438Q8.225 2.9 12 2.9q.325 0 .65.025T13.3 3q-.95.75-1.525 1.875T11.2 7.3q0 2.3 1.6 3.9t3.9 1.6q1.325 0 2.45-.563 1.125-.562 1.85-1.512.05.3.075.625.025.325.025.65 0 3.775-2.662 6.438Q15.775 21.1 12 21.1Z",
  },

  currency: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24",
    d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z",
  },

  close: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    width: 48,
    height: 48,
    d: "m10.458 32.083-2.541-2.541 9.5-9.542-9.5-9.542 2.541-2.541 9.542 9.5 9.542-9.5 2.541 2.541-9.5 9.542 9.5 9.542-2.541 2.541-9.542-9.5Z",
  },
  edit: {
    xmlns: "http://www.w3.org/2000/svg",
    height: 24,
    width: 24,
    d: "M19.325 9 15.05 4.75l1.35-1.375q.6-.6 1.475-.6.875 0 1.5.6l1.3 1.325q.625.6.637 1.45.013.85-.587 1.45Zm-1.45 1.45L7.25 21.1h-4.3v-4.275L13.6 6.175Z",
  },

  trash: {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    width: "24px",
    fill: "#000000",
    viewBox: "0 0 24 24",
    d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z",
  },
};

const SVG = (props) => {
  return (
    <svg
      fill={props.overrideFill || IconLegend[props.name].fill}
      xmlns={IconLegend[props.name].xmlns}
      width={props.overrideWidth || IconLegend[props.name].width}
      height={props.overrideHeight || IconLegend[props.name].height}
      viewBox={IconLegend[props.name].viewBox}
    >
      <path d={IconLegend[props.name].d} />
    </svg>
  );
};

export default SVG;
