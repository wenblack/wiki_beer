import { Text } from 'react-native';
import { BeerList } from '../BeerList';
import { Button } from '../Button';

import { Icon } from '../Icon';
import {ContainerView, SearchView, ButtonContainer, ButtonView} from './styles'


export function  Header() {
  return (
    <>
    <ContainerView >
        <SearchView>
          <Icon 
            iconName='search'
            iconSize={23}
          />
          <Text>Digite algo para pesquisar</Text>
        </SearchView>
        <Icon 
          iconName='user' 
          iconSize={35} 
          iconColor="#808080"
          iconStyle={{
            marginLeft:30, 
            borderStyle:'solid',
            borderColor:"#808080",
            borderWidth:2,
            borderRadius:20
          }}
          />
    </ContainerView>
    

    <ButtonContainer>
    <ButtonView>
    <Button value='LAGER' style={{marginTop:22}}/> 
    </ButtonView>
      <ButtonView>
      <Button value='TRIGO' style={{marginTop:22}} />
      </ButtonView>
      
    </ButtonContainer>
         
    <ButtonContainer >
      <ButtonView >
        <Button value='IPA' style={{marginTop:16}}/> 
      </ButtonView>
      <ButtonView>
      <Button value='SESSION IPA'  style={{marginTop:16}}/>
      </ButtonView>
    </ButtonContainer>
    
    <BeerList></BeerList>
    </>
  );
}