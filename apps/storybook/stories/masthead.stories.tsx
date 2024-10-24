import type { Meta, StoryObj } from "@storybook/react";
import {
  _Masthead,
  _MastheadHeader,
  _MastheadContent,
  _MastheadOfficialIndicator,
  _MastheadIdentificationToggle,
  MastheadSection,
  MastheadSectionTitle,
  MastheadSectionBody,
} from "@myds/react/masthead";
import { Lock2Icon } from "../../../packages/react/src/icons/lock-2";
import SolidLockIcon from "../../../packages/react/src/icons/solid-lock";
import { GovMyIcon } from "../../../packages/react/src/icons/gov-my";

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
 * import { _Masthead } from "@myds/react/masthead";
 *
 * const MyPage = () => <_Masthead />;
 *
 * // Custom header text
 * const CustomHeader = () => (
 *   <_Masthead>
 *     <_MastheadHeader>
 *       <_MastheadOfficialIndicator>
 *         Custom Official Text
 *       </_MastheadOfficialIndicator>
 *       <_MastheadIdentificationToggle>
 *         Custom Toggle Text
 *       </_MastheadIdentificationToggle>
 *     </_MastheadHeader>
 *   </_Masthead>
 * );
 *
 * // Custom content
 * const CustomContent = () => (
 *   <_Masthead>
 *     <_MastheadContent>
 *       <MastheadSection icon={<CustomIcon />}>
 *         <MastheadSectionTitle>
 *           Custom Title
 *         </MastheadSectionTitle>
 *         <MastheadSectionBody>
 *           Custom content here
 *         </MastheadSectionBody>
 *       </MastheadSection>
 *     </_MastheadContent>
 *   </_Masthead>
 * );
 * ```
 */

const meta = {
  title: "@myds/react/Masthead",
  component: _Masthead,
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
    children: {
      control: false,
      description: "Content for the Masthead (header and/or content sections)",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof _Masthead>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default usage
export const Default: Story = {
  render: () => <_Masthead />,
};

// Custom header
export const CustomHeader: Story = {
  render: () => (
    <_Masthead>
      <_MastheadHeader>
        <_MastheadOfficialIndicator>
          Portal Rasmi Kerajaan Malaysia
        </_MastheadOfficialIndicator>
        <_MastheadIdentificationToggle>
          Ketahui Lebih Lanjut
        </_MastheadIdentificationToggle>
      </_MastheadHeader>
    </_Masthead>
  ),
};

// Custom content
export const CustomContent: Story = {
  render: () => (
    <_Masthead>
      <_MastheadContent>
        <MastheadSection icon={<GovMyIcon />}>
          <MastheadSectionTitle>
            Laman web rasmi kerajaan berakhir dengan .gov.my
          </MastheadSectionTitle>
          <MastheadSectionBody>
            Sekiranya pautan tidak berakhir dengan
            <span className="font-semibold"> .gov.my</span>, sila keluar dari
            laman web dengan segera walaupun ia kelihatan serupa.
          </MastheadSectionBody>
        </MastheadSection>
      </_MastheadContent>
    </_Masthead>
  ),
};

// Fully customized
export const FullyCustomized: Story = {
  render: () => (
    <_Masthead>
      <_MastheadHeader>
        <_MastheadOfficialIndicator>
          Portal Rasmi Kerajaan Malaysia
        </_MastheadOfficialIndicator>
        <_MastheadIdentificationToggle>
          Ketahui Lebih Lanjut
        </_MastheadIdentificationToggle>
      </_MastheadHeader>
      <_MastheadContent>
        <MastheadSection icon={<GovMyIcon />}>
          <MastheadSectionTitle>
            Laman web rasmi kerajaan berakhir dengan .gov.my
          </MastheadSectionTitle>
          <MastheadSectionBody>
            Sekiranya pautan tidak berakhir dengan
            <span className="font-semibold"> .gov.my</span>, sila keluar dari
            laman web dengan segera walaupun ia kelihatan serupa.
          </MastheadSectionBody>
        </MastheadSection>
        <MastheadSection icon={<Lock2Icon />}>
          <MastheadSectionTitle>
            Laman web selamat menggunakan HTTPS
          </MastheadSectionTitle>
          <MastheadSectionBody>
            Cari ikon kunci (
            <SolidLockIcon className="mb-0.5 inline size-3.5" />) atau
            <span className="font-semibold"> https:// </span>
            sebagai langkah berjaga-jaga tambahan. Jika tiada, jangan kongsi
            sebarang maklumat sensitif.
          </MastheadSectionBody>
        </MastheadSection>
      </_MastheadContent>
    </_Masthead>
  ),
};
