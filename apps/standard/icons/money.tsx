export default function Money({ ...props }) {
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
        d="M12.25 6.75H9.375C8.4775 6.75 7.75 7.47754 7.75 8.375C7.75 9.2725 8.4775 10 9.375 10H10.625C11.5225 10 12.25 10.7275 12.25 11.625C12.25 12.5225 11.5225 13.25 10.625 13.25H7.75M10 5.75V6.25M10 13.75V14.25M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10Z"
        stroke="currentColor"
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
