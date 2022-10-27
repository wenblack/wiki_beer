import { Image } from "react-native";

export function BeerImage() {
  return (
    <Image 
        style={{width:150,height:150}}
        source={require("../../assets/logos/heineken.png")} />
        
  );
}