import colors from "tailwindcss/colors";

colors;
type Props = {
  color?: string;
  [key: string]: any;
};

export default function IconNewTab({ color, ...props }: Props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 13L13 1M13 1L13 11M13 1L3 1"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
