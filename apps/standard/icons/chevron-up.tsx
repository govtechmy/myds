export default function ChevronUp({ ...props }) {
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
        d="M5 13L10 8L15 13"
        stroke="currentColor"
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
