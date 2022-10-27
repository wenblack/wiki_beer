//Libraries
import { Platform } from "react-native";
//Styles
import {
  Container,
  Form,
  LinkText,
  Footer,
} from "./styles";

//Components
import{Input} from '../../components/Input'
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { KeyboardDismiss } from "../../components/KeyboardDismiss";


export function Login() {
  return (
    <KeyboardDismiss>
      <Container>
        <Logo />

        <Form
          behavior={Platform.OS === "ios" || "android" ? "padding" : "height"}
        >
          <Input
            title="Endereço de Email"
            placeholder="seuemail@exemplo.com"
            keyboardType="email-address"
            iconName="mail"
          />
          <Input
            title="Senha"
            placeholder="*****************"
            secureTextEntry
            iconName='lock'
          />
        </Form>

        <Button value="Entrar" />

        <Footer>
          <LinkText>Esqueceu sua Senha? </LinkText>
          <LinkText>Não possui conta? Crie uma agora</LinkText>
        </Footer>
      </Container>
    </KeyboardDismiss>
  );
}
