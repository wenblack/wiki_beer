import { Text } from 'react-native';
import { BeerList } from '../BeerList';
import { Button } from '../Button';

import { Icon } from '../Icon';
import {ContainerView, SearchView, ButtonContainer} from './styles'


export function Header() {
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
      <Button value='LAGER' style={{width:130}}/> 
      <Button value='TRIGO' style={{width:130}}/>
    </ButtonContainer>
         
    <ButtonContainer>
      <Button value='IPA' style={{width:130}}/> 
      <Button value='SESSION IPA' style={{width:130}}/>
    </ButtonContainer>
    
    <BeerList></BeerList>
    </>
  );
}