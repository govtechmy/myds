export default function FileDocumentPaper({ ...props }) {
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
        d="M16 7.25H11.75V3M5.75 17.25H14.25C15.3546 17.25 16.25 16.3546 16.25 15.25V7L12 2.75H5.75C4.64543 2.75 3.75 3.64543 3.75 4.75V15.25C3.75 16.3546 4.64543 17.25 5.75 17.25Z"
        stroke="currentColor"
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
