import { Text } from 'react-native';
import { BeerImage } from '../BeerImage';
import { Icon } from '../Icon';
import {ContainerView, SearchView} from './styles'


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
    <BeerImage></BeerImage>
    </>
  );
}