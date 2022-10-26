import styled from "styled-components/native";

//Logo Style
export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 44px;
`;

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

//Input Style
export const Title = styled.Text`
  color: #d18f00;
  font-size: 18px;
  margin-bottom: 18px;
`;
export const TexInputView = styled.View`
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

export const Input = styled.TextInput`
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

//Button Style
export const Button = styled.TouchableOpacity`
  display: flex;
  font-size: 16px;
  padding: 12px 16px;
  width: 270px;
  padding: 16px;
  background: #feae00;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 42px;
  max-height: 48px;
  margin-top: 42px;
`;

export const TextButton = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
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
