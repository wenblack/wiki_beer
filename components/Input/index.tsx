import {
    Container,
    TexInputContainer,
    Label,
    InputText
  } from "./styles";
import { Octicons, AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";

interface InputProps {
    title :string;
    placeholder:string;
    placeholderTextColor?:string;
    keyboardType?:string;
    secureTextEntry?: boolean;
    iconName:any
}



  export function Input({title,placeholder,keyboardType,secureTextEntry,iconName}:InputProps) {
    return (
      <Container>
        <Label>{title}</Label>

        <TexInputContainer>
        <Feather name={iconName} size={16} color='#7C7C8A'></Feather>
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