import { CSSProperties } from "react"
import { StyleProp, } from "react-native"

export interface SvgProps{
    svgWidth : number
    svgHeight : number
    props?:any;
    style?: React.CSSProperties
}
