export default function Envelope({ ...props }) {
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
        d="M3.5 4.5L10 10.25L16.5 4.5M2.75 5.75C2.75 4.64543 3.64543 3.75 4.75 3.75H15.25C16.3546 3.75 17.25 4.64543 17.25 5.75V14.25C17.25 15.3546 16.3546 16.25 15.25 16.25H4.75C3.64543 16.25 2.75 15.3546 2.75 14.25V5.75Z"
        stroke="currentColor"
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
