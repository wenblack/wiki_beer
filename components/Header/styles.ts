import styled from "styled-components/native";

export const ContainerView = styled.SafeAreaView `
    display: flex;
    flex-direction: row;
    margin-top: 7%;
    align-items: center;
    justify-content: center;
`
export const SearchView = styled.View `
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 18px;
width: 60%;
height: 46px;
max-width: 750px;

background: #FFFFFF;
border: 1px solid rgba(128, 128, 128, 0.68);
border-radius: 44px;
`
export const ButtonContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 5%;
`
export const ButtonView = styled.View `
    width: 40%;
`