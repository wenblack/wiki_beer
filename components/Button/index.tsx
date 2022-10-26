import { Background, TextButton } from './styles';

interface ButtonProps{
    value:string
}


export function Button({value}:ButtonProps) {
  return (
    <Background>
          <TextButton>
            {value}
          </TextButton>
    </Background>
  );
}