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
            <Label>
                {title}
            </Label>

            <TexInputContainer>     
              <InputText
                placeholder={placeholder}
                placeholderTextColor="#d18f00"
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
              />
            </TexInputContainer>
      </ Container>
    );
  }