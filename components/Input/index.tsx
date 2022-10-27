import {
    Container,
    TexInputContainer,
    Label,
    InputText
  } from "./styles";
import {Icon, IconProps} from '../Icon'

interface InputProps extends IconProps {
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
        <Icon iconName={iconName} iconSize={16} iconColor='#7C7C8A' iconStyle={{marginLeft:16}}></Icon>
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