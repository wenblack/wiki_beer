import * as React from "react";
import Svg, {
  Circle,
  Rect,
  SvgProps,
  Pattern,
  Defs,
  Use,
  Image,
} from "react-native-svg";

export function Logo(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps>
) {
  return (
    <Svg width="100" height="100" viewBox="0 0 100 100" fill="none" {...props}>
      <Rect width="100" height="100" fill="url(#pattern0)" />
      <Defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use xlinkHref="#image0_102_64" transform="scale(0.01)" />
        </pattern>
        <Image
          id="image0_102_64"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}
