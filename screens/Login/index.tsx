import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

import {
  Container,
  Title,
  TexInputView,
  Input,
  Button,
  TextButton,
  Form,
  Logo,
  LinkText,
  Footer,
} from "./styles";

export function Login() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Logo source={require("../../assets/logo.png")} />
        <Form behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Title>Endereço de Email</Title>

          <TexInputView>
            <Input
              placeholder="seuemail@exemplo.com"
              placeholderTextColor="#d18f00"
              keyboardType="email-address"
            />
          </TexInputView>

          <Title>Senha</Title>

          <TexInputView>
            <Input
              placeholder="*******"
              type="Password"
              secureTextEntry
              placeholderTextColor="#d18f00"
            />
          </TexInputView>
        </Form>

        <Button>
          <TextButton>Entrar</TextButton>
        </Button>

        <Footer>
          <LinkText>Esqueceu sua Senha? </LinkText>
          <LinkText>Não possui conta? Crie uma agora</LinkText>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
