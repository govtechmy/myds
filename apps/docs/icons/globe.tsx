export default function Globe({ ...props }) {
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
        d="M10 17.25C14.0041 17.25 17.25 14.0041 17.25 10C17.25 5.99594 14.0041 2.75 10 2.75M10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75M10 17.25C11.2426 17.25 13.25 14.5 13.25 10C13.25 5.5 11.2426 2.75 10 2.75M10 17.25C8.7574 17.25 6.75 14.5 6.75 10C6.75 5.5 8.7574 2.75 10 2.75M3 10H17"
        stroke="currentColor"
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
