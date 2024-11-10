export default function CheckCircle({ ...props }) {
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
        d="M7 11.2143L8.12645 12.5116C8.55869 13.0095 9.34594 12.9601 9.71261 12.4122L13 7.5M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10Z"
        stroke="currentColor"
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
