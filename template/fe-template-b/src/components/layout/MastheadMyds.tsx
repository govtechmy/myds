import {
  Masthead,
  MastheadHeader,
  MastheadContent,
  MastheadTitle,
  MastheadTrigger,
  MastheadSection,
} from "@govtechmy/myds-react/masthead";
import {
  PutrajayaIcon,
  Lock2Icon,
  LockFillIcon,
} from "@govtechmy/myds-react/icon";

export default function MastheadMyds() {
  return (
    <Masthead>
      <MastheadHeader>
        <MastheadTitle>Official Malaysian Government Website</MastheadTitle>
        <MastheadTrigger>Here's how you know</MastheadTrigger>
      </MastheadHeader>
      <MastheadContent>
        <MastheadSection
          icon={<PutrajayaIcon />}
          title="Official government websites end with .gov.my"
        >
          If the link does not end with <b>.gov.my</b>, exit the website
          immediately even if it looks similar.
        </MastheadSection>
        <MastheadSection
          icon={<Lock2Icon className="inline-block size-3.5" />}
          title="Secure websites use HTTPS"
        >
          Look for a lock (<LockFillIcon className="inline-block size-3.5" />)
          or https:// as an added precaution. If not present, do not share any
          sensitive information.
        </MastheadSection>
      </MastheadContent>
    </Masthead>
  );
}
