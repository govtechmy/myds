import FooterMyds from "./FooterMyds";
import MastheadMyds from "./MastheadMyds";
import NavbarMyds from "./NavbarMyds";

type LayoutMainProps = {
  children: React.ReactNode;
};
export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <>
      <MastheadMyds></MastheadMyds>
      <NavbarMyds></NavbarMyds>
      {children}
      <FooterMyds></FooterMyds>
    </>
  );
}
