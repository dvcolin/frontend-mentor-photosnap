export const ArrowIcon = ({ color, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="43"
    height="14"
  >
    <path
      fill={color === "dark" ? "#000" : "#FFF"}
      fillRule="evenodd"
      stroke={color === "dark" ? "#000" : "#FFF"}
      d="M0 7h41.864m-6.436-6l6 6-6 6"
    ></path>
  </svg>
);
