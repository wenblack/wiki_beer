import { ReactNode } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

interface KeyboardDismissProps{
    children: ReactNode
}

export function KeyboardDismiss({children}:KeyboardDismissProps){
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        {children}
    </TouchableWithoutFeedback>
    )
}
    
    


