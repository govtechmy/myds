export default function Direction({ ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 3L3 11.4H9.46154L12.2308 17L15 3Z"
        stroke="currentColor"
        strokeWidth="inherit"
        strokeLinejoin="round"
      />
    </svg>
  );
}
