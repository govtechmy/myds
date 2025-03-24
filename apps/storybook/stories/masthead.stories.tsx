import type { Meta, StoryObj } from "@storybook/react";
import {
  Masthead,
  MastheadHeader,
  MastheadContent,
  MastheadTrigger,
  MastheadSection,
  MastheadTitle,
} from "@govtechmy/myds-react/masthead";
import {
  Lock2Icon,
  PutrajayaIcon,
  LockFillIcon,
} from "@govtechmy/myds-react/icon";
import { createStory } from "../utils";

/**
 * ### Overview
 * The Masthead component is a standardized header for Malaysian government websites.
 * It includes official website verification elements and security information to help
 * users identify legitimate government platforms.
 *
 * ### Features
 * - Official website indicator with Malaysia flag
 * - Collapsible information panel
 * - Domain verification guidance (.gov.my)
 * - HTTPS security awareness
 * - Responsive design for all devices
 * - Keyboard navigation support
 *
 * ### Accessibility
 * - Keyboard shortcut: Alt + Cmd/Ctrl + Enter to toggle panel
 * - Screen reader friendly content structure
 * - High contrast text and icons
 *
 * > Laman web kerajaan yang sah,
 * > Masthead menjadi penanda arah,
 * > Keselamatan terjamin sudah,
 * > Rakyat boleh berurusan dengan cerah.
 *
 * ### Usage
 * ```tsx
 * // Basic usage with all defaults
 * import { Masthead } from "@govtechmy/myds-react/masthead";
 *
 * const MyPage = () => <Masthead />;
 *
 * // Custom header text
 * const CustomHeader = () => (
 *   <Masthead>
 *     <MastheadHeader>
 *       <MastheadTitle>
 *         Custom Official Text
 *       </MastheadTitle>
 *       <MastheadTrigger>
 *         Custom Toggle Text
 *       </MastheadTrigger>
 *     </MastheadHeader>
 *   </Masthead>
 * );
 *
 * // Custom content
 * const CustomContent = () => (
 *   <Masthead>
 *     <MastheadContent>
 *       <MastheadSection icon={<CustomIcon />}>
 *         <MastheadSectionTitle>
 *           Custom Title
 *         </MastheadSectionTitle>
 *         <MastheadSectionBody>
 *           Custom content here
 *         </MastheadSectionBody>
 *       </MastheadSection>
 *     </MastheadContent>
 *   </Masthead>
 * );
 * ```
 */

const meta = {
  title: "@govtechmy/myds-react/Masthead",
  component: Masthead,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A standardized header component for Malaysian government websites that helps users verify official platforms and maintain security awareness.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "CSS classes to apply to the Masthead",
    },
    children: {
      control: false,
      description: "Content for the Masthead (header and/or content sections)",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Masthead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = createStory({
  children: (
    <>
      <MastheadHeader>
        <MastheadTitle>Portal Rasmi Kerajaan Malaysia</MastheadTitle>
        <MastheadTrigger>Ketahui Lebih Lanjut</MastheadTrigger>
      </MastheadHeader>

      <MastheadContent>
        <MastheadSection
          icon={<PutrajayaIcon />}
          title={"Official government websites end with .gov.my"}
        >
          If the link does not end with <b>.gov.my</b>, exit the website
          immediately even if it looks similar.
        </MastheadSection>
        <MastheadSection
          icon={<Lock2Icon />}
          title={"Secure websites use HTTPS"}
        >
          Look for a lock (<LockFillIcon className="inline-block" />) or
          https:// as an added precaution. If not present, do not share any
          sensitive information.
        </MastheadSection>
      </MastheadContent>
    </>
  ),
});

export const DefaultDark: Story = createStory(
  {
    className: "dark",
    children: (
      <>
        <MastheadHeader>
          <MastheadTitle>Portal Rasmi Kerajaan Malaysia</MastheadTitle>
          <MastheadTrigger>Ketahui Lebih Lanjut</MastheadTrigger>
        </MastheadHeader>

        <MastheadContent>
          <MastheadSection
            icon={<PutrajayaIcon />}
            title={"Official government websites end with .gov.my"}
          >
            If the link does not end with <b>.gov.my</b>, exit the website
            immediately even if it looks similar.
          </MastheadSection>
          <MastheadSection
            icon={<Lock2Icon />}
            title={"Secure websites use HTTPS"}
          >
            Look for a lock (<LockFillIcon className="inline-block" />) or
            https:// as an added precaution. If not present, do not share any
            sensitive information.
          </MastheadSection>
        </MastheadContent>
      </>
    ),
  },
  "dark",
);

// export const CustomHeader: Story = {
//   render: () => (
//     <Masthead>
//       <MastheadHeader>
//         <MastheadTitle>
//           Portal Rasmi Kerajaan Malaysia
//         </MastheadTitle>
//         <MastheadTrigger>Ketahui Lebih Lanjut</MastheadTrigger>
//       </MastheadHeader>
//     </Masthead>
//   ),
// };

// export const CustomHeaderDark: Story = {
//   ...createStory({}, "dark"),
//   render: () => {
//     return (
//       <div className="dark">
//         <Masthead>
//           <MastheadHeader>
//             <MastheadTitle>
//               Portal Rasmi Kerajaan Malaysia
//             </MastheadTitle>
//             <MastheadTrigger>Ketahui Lebih Lanjut</MastheadTrigger>
//           </MastheadHeader>
//         </Masthead>
//       </div>
//     );
//   },
// };

// export const CustomContent: Story = {
//   render: () => (
//     <Masthead>
//       <MastheadContent>
//         <MastheadSection icon={<PutrajayaIcon />}>
//           <MastheadSectionTitle>
//             Laman web rasmi kerajaan berakhir dengan .gov.my
//           </MastheadSectionTitle>
//           <MastheadSectionBody>
//             Sekiranya pautan tidak berakhir dengan
//             <span className="font-semibold"> .gov.my</span>, sila keluar dari
//             laman web dengan segera walaupun ia kelihatan serupa.
//           </MastheadSectionBody>
//         </MastheadSection>
//       </MastheadContent>
//     </Masthead>
//   ),
// };

// export const CustomContentDark: Story = {
//   render: () => (
//     <div className="dark">
//       <Masthead>
//         <MastheadContent>
//           <MastheadSection icon={<PutrajayaIcon />}>
//             <MastheadSectionTitle>
//               Laman web rasmi kerajaan berakhir dengan .gov.my
//             </MastheadSectionTitle>
//             <MastheadSectionBody>
//               Sekiranya pautan tidak berakhir dengan
//               <span className="font-semibold"> .gov.my</span>, sila keluar dari
//               laman web dengan segera walaupun ia kelihatan serupa.
//             </MastheadSectionBody>
//           </MastheadSection>
//         </MastheadContent>
//       </Masthead>
//     </div>
//   ),
// };

// // Fully customized
// export const FullyCustomized: Story = {
//   render: () => (
//     <Masthead>
//       <MastheadHeader>
//         <MastheadOfficialIndicator>
//           Portal Rasmi Kerajaan Malaysia
//         </MastheadOfficialIndicator>
//         <MastheadTrigger>Ketahui Lebih Lanjut</MastheadTrigger>
//       </MastheadHeader>
//       <MastheadContent>
//         <MastheadSection icon={<PutrajayaIcon />}>
//           <MastheadSectionTitle>
//             Laman web rasmi kerajaan berakhir dengan .gov.my
//           </MastheadSectionTitle>
//           <MastheadSectionBody>
//             Sekiranya pautan tidak berakhir dengan
//             <span className="font-semibold"> .gov.my</span>, sila keluar dari
//             laman web dengan segera walaupun ia kelihatan serupa.
//           </MastheadSectionBody>
//         </MastheadSection>
//         <MastheadSection icon={<Lock2Icon />}>
//           <MastheadSectionTitle>
//             Laman web selamat menggunakan HTTPS
//           </MastheadSectionTitle>
//           <MastheadSectionBody>
//             Cari ikon kunci (
//             <LockIcon className="mb-0.5 inline size-3.5" />) atau
//             <span className="font-semibold"> https:// </span>
//             sebagai langkah berjaga-jaga tambahan. Jika tiada, jangan kongsi
//             sebarang maklumat sensitif.
//           </MastheadSectionBody>
//         </MastheadSection>
//       </MastheadContent>
//     </Masthead>
//   ),
// };

// // Fully customized
// export const FullyCustomizedDark: Story = {
//   render: () => (
//     <div className="dark">
//       <Masthead>
//         <MastheadHeader>
//           <MastheadOfficialIndicator>
//             Portal Rasmi Kerajaan Malaysia
//           </MastheadOfficialIndicator>
//           <MastheadTrigger>Ketahui Lebih Lanjut</MastheadTrigger>
//         </MastheadHeader>
//         <MastheadContent>
//           <MastheadSection icon={<PutrajayaIcon />}>
//             <MastheadSectionTitle>
//               Laman web rasmi kerajaan berakhir dengan .gov.my
//             </MastheadSectionTitle>
//             <MastheadSectionBody>
//               Sekiranya pautan tidak berakhir dengan
//               <span className="font-semibold"> .gov.my</span>, sila keluar dari
//               laman web dengan segera walaupun ia kelihatan serupa.
//             </MastheadSectionBody>
//           </MastheadSection>
//           <MastheadSection icon={<Lock2Icon />}>
//             <MastheadSectionTitle>
//               Laman web selamat menggunakan HTTPS
//             </MastheadSectionTitle>
//             <MastheadSectionBody>
//               Cari ikon kunci (
//               <LockIcon className="mb-0.5 inline size-3.5" />) atau
//               <span className="font-semibold"> https:// </span>
//               sebagai langkah berjaga-jaga tambahan. Jika tiada, jangan kongsi
//               sebarang maklumat sensitif.
//             </MastheadSectionBody>
//           </MastheadSection>
//         </MastheadContent>
//       </Masthead>
//     </div>
//   ),
// };
