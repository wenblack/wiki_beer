import {
    Container,
    TexInputContainer,
    Label,
    InputText
  } from "./styles";
  

interface InputProps {
    title :string;
    placeholder:string;
    placeholderTextColor?:string;
    keyboardType?:string;
    secureTextEntry?: boolean
}

  export function Input({title,placeholder,keyboardType,secureTextEntry}:InputProps) {
    return (
      <Container>
        <Label>{title}</Label>

        <TexInputContainer>
          <InputText
            placeholder={placeholder}
            placeholderTextColor="#7C7C8A"
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
        </TexInputContainer>
      </Container>
    );
  }