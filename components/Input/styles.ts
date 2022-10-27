import styled from "styled-components/native";

export const Container = styled.View`
display: flex;
justify-content: flex-start;
align-items: flex-start;
`

//Input Style
export const Label = styled.Text`
  color: #feae00;
  font-size: 18px;
  margin-bottom: 18px;
`;
export const TexInputContainer = styled.View`
  display: flex;
  background: #fff;
  border: 2px solid;
  border-color: #feae00;
  border-radius: 4px;
  min-width: 200px;
  max-width: 270px;
  min-height: 40px;
  max-height: 48px;
  margin-bottom: 18px;
`;

export const InputText = styled.TextInput`
  outline: none;
  background: transparent;
  color: black;
  border: none;
  min-width: 200px;
  max-width: 271px;
  min-height: 40px;
  max-height: 48px;
  font-size: 14px;
  width: 270px;
  margin-left: 12px;
`;
