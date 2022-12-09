export const LeftArrow: ({ colour }: { colour?: string }) => JSX.Element = ({
  colour = "#30CCD6"
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.18468 2L10.5066 3.48721L4.1141 9.16947H20V11.1593H4.11461L10.5066 16.8411L9.18468 18.3283L0 10.1642L9.18468 2Z"
      fill={colour}
    />
  </svg>
);
