import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
//import Svg from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';

export default function ToolButton({buttonIcon}) {
  return (
    <View>
      <SvgUri svgXmlData={buttonIcon} />
    </View>
  );
}
