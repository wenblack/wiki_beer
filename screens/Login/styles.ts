import styled from "styled-components/native";

//Container Style
export const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  background: #fff;
`;
//Form Style
export const Form = styled.KeyboardAvoidingView`
  display: flex;
`;


//Link Style
export const LinkText = styled.Text`
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #feae00;
  margin-bottom: 16px;
`;

//Footer Style
export const Footer = styled.View`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
`;
