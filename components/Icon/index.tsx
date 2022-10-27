import { Feather} from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

export interface IconProps {
    iconName: any;
    iconSize?: number;
    iconColor?: string
    iconStyle?: StyleProp<TextStyle>
}

export function Icon (props:IconProps) {
    return(
        <Feather 
            name={props.iconName}
            size={props.iconSize}
            color={props.iconColor}
            style={props.iconStyle}
        />
    )

}