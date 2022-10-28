import { Amstel } from "../../utils/logos/Amstel";
import { Becks } from "../../utils/logos/Becks";
import { Eisenbahn } from "../../utils/logos/Eisenbahn";
import { Heineken } from "../../utils/logos/Heineken";
import { Stella } from "../../utils/logos/Stella";
import {ScrollListBeerSm } from './styles'

const styleSvg = {
    border:0.5, 
    borderStyle:'solid' ,
    borderColor:'rgba(128, 128, 128, 0.60)',
    borderRadius:15,
    padding:15,
    marginRight :15,
  }
export function BeerList() {        
    return (
        < ScrollListBeerSm  horizontal  >
            <Heineken 
                svgHeight='20%'
                svgWidth='10%'
                style={styleSvg}
            />
            <Stella 
                svgHeight='20%'
                svgWidth='10%'
                style={styleSvg}
            />
            <Becks
                svgHeight='20%'
                svgWidth='10%'
                style={styleSvg} 
            />
            <Amstel
                svgHeight='20%'
                svgWidth='10%'
                style={styleSvg} 
            />
            <Eisenbahn 
                svgHeight='20%'
                svgWidth='10%'
                style={styleSvg}
            />
            <Heineken 
                svgHeight='20%'
                svgWidth='10%'
                style={styleSvg}
            />
        </ScrollListBeerSm>
      );
}