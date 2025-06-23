import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer bgDark container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">Sobre</FooterLink>
        <FooterLink href="#">Política Privacidade</FooterLink>
        <FooterLink href="#">Licenciamento</FooterLink>
        <FooterLink href="#">Contatos</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
