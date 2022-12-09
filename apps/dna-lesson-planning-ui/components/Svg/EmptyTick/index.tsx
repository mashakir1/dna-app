import { IconProps } from "../types";

export const EmptyTick: (props: IconProps) => JSX.Element = ({
  fill = "none",
  colour = "#30CCD6"
}) => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill={fill} />
    <path fillRule="evenodd" clipRule="evenodd"
          d="M22.5253 10.202C22.9158 10.5925 22.9158 11.2257 22.5253 11.6162L13.1503 20.9912C12.7598 21.3817 12.1266 21.3817 11.7361 20.9912L7.47472 16.7298C7.08419 16.3393 7.08419 15.7061 7.47472 15.3156C7.86524 14.9251 8.49841 14.9251 8.88893 15.3156L12.4432 18.8699L21.1111 10.202C21.5016 9.81146 22.1348 9.81146 22.5253 10.202Z"
          fill={colour}
    />
  </svg>
);
