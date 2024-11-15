import React, { FunctionComponent } from "react";

/**
 * Props for AnnounceBar component.
 * @typedef AnnounceBarProps
 * @property {type} propName - Description of propName
 */
interface AnnounceBarProps {
  // Define your props here
}

/**
 * AnnounceBar component description.
 * @component
 * @example
 * <AnnounceBar propName="value" />
 */
const AnnounceBar: FunctionComponent<AnnounceBarProps> = ({
  // Destructure your props here
}) => {
  return (
    <div>
      {/* Add your component JSX here */}
    </div>
  );
};


// 2 components: AnnounceBarTag, AnnounceBarDescription
// AnnounceBarTag use Tag component with the correct variant (variant as props), size and mode we fix it. Then make asChild props to let the users can overwrite. ClassName is a props also. And let user just pass text as children as well
// AnnounceBarDescription basically is just a p tag with the className props and our default css style. Then use Link component
// The whole component (root) should be wrapped with a div component to apply padding and gap 

export { AnnounceBar };