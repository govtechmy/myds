import type { Meta, StoryObj } from "@storybook/react";
import {
  Masthead,
  MastheadHeader,
  MastheadContent,
  MastheadOfficialIndicator,
  MastheadToggle,
  MastheadSection,
  MastheadSectionTitle,
  MastheadSectionBody,
} from "@govtechmy/myds-react/masthead";
import { Lock2Icon } from "../../../packages/react/src/icons/lock-2";
import SolidLockIcon from "../../../packages/react/src/icons/solid-lock";
import { GovMyIcon } from "../../../packages/react/src/icons/gov-my";
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
 *       <MastheadOfficialIndicator>
 *         Custom Official Text
 *       </MastheadOfficialIndicator>
 *       <MastheadToggle>
 *         Custom Toggle Text
 *       </MastheadToggle>
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

export const Default: Story = {
  render: () => <Masthead />,
};

export const DefaultDark: Story = {
  render: () => (
    <div className="dark">
      <Masthead />
    </div>
  ),
};

export const CustomHeader: Story = {
  render: () => (
    <Masthead>
      <MastheadHeader>
        <MastheadOfficialIndicator>
          Portal Rasmi Kerajaan Malaysia
        </MastheadOfficialIndicator>
        <MastheadToggle>Ketahui Lebih Lanjut</MastheadToggle>
      </MastheadHeader>
    </Masthead>
  ),
};

export const CustomHeaderDark: Story = {
  ...createStory({}, "dark"),
  render: () => {
    return (
      <div className="dark">
        <Masthead>
          <MastheadHeader>
            <MastheadOfficialIndicator>
              Portal Rasmi Kerajaan Malaysia
            </MastheadOfficialIndicator>
            <MastheadToggle>Ketahui Lebih Lanjut</MastheadToggle>
          </MastheadHeader>
        </Masthead>
      </div>
    );
  },
};

export const CustomContent: Story = {
  render: () => (
    <Masthead>
      <MastheadContent>
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
      </MastheadContent>
    </Masthead>
  ),
};

export const CustomContentDark: Story = {
  render: () => (
    <div className="dark">
      <Masthead>
        <MastheadContent>
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
        </MastheadContent>
      </Masthead>
    </div>
  ),
};

// Fully customized
export const FullyCustomized: Story = {
  render: () => (
    <Masthead>
      <MastheadHeader>
        <MastheadOfficialIndicator>
          Portal Rasmi Kerajaan Malaysia
        </MastheadOfficialIndicator>
        <MastheadToggle>Ketahui Lebih Lanjut</MastheadToggle>
      </MastheadHeader>
      <MastheadContent>
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
      </MastheadContent>
    </Masthead>
  ),
};

// Fully customized
export const FullyCustomizedDark: Story = {
  render: () => (
    <div className="dark">
      <Masthead>
        <MastheadHeader>
          <MastheadOfficialIndicator>
            Portal Rasmi Kerajaan Malaysia
          </MastheadOfficialIndicator>
          <MastheadToggle>Ketahui Lebih Lanjut</MastheadToggle>
        </MastheadHeader>
        <MastheadContent>
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
        </MastheadContent>
      </Masthead>
    </div>
  ),
};
