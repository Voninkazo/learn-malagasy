import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import LanguageSwitcher from '../LanguageSwitcherComponent/LanguageSwitcher';
import ToolButton from '../ToolButton/ToolButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 35,
    paddingRight: 23,
    paddingLeft: 23,
    paddingBottom: 40,
  },
});

export default function ToolBar({
  isHomeScreen,
  isEnglish,
  malagasySwitcher,
  englishSwitcher,
  onPressFunction,
}) {
  return (
    <SafeAreaView>
      {isHomeScreen ? (
        <View style={styles.container}>
          <ToolButton btnLabel="add" />
          <LanguageSwitcher
            isEnglish={isEnglish}
            malagasySwitcher={malagasySwitcher}
            englishSwitcher={englishSwitcher}
            onPressFunction={onPressFunction}
          />
          <ToolButton btnLabel="tick" />
          <ToolButton btnLabel="double tick" />
          <ToolButton />
        </View>
      ) : (
        <View style={styles.container}>
          <ToolButton btnLabel="back" />
          <ToolButton />
          <LanguageSwitcher
            isEnglish={isEnglish}
            malagasySwitcher={malagasySwitcher}
            englishSwitcher={englishSwitcher}
            onPressFunction={onPressFunction}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
