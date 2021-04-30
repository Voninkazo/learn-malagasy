import * as React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import List from '../components/ListComponent/List';
import {getCategoryList, switchLanguage} from '../../actions';
import ToolBar from '../components/ToolBarComponent/ToolBar';

export default function HomeScreenContainer({navigation}) {
  const categoryList = useSelector(state => state.categoryList);
  const isEnglish = useSelector(state => state.isEnglish);
  console.log(isEnglish);
  const dispatch = useDispatch();
  //console.log(categoryList);

  React.useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
    <SafeAreaView style={{paddingBottom: 66}}>
      {/* <View style={styles.container}>
        <ToolButton btnLabel="add" style={{paddingLeft: 0}} />
        <LanguageSwitcher
          isEnglish={isEnglish}
          malagasySwitcher="MA"
          englishSwitcher="EN"
          onPressFunction={() => dispatch(switchLanguage())}
        />
        <ToolButton btnLabel="tick" />
        <ToolButton btnLabel="double tick" />
        <ToolButton btnLabel="back" />
        <ToolButton />
      </View> */}
      <ToolBar
        isHomeScreen={true}
        isEnglish={isEnglish}
        malagasySwitcher="MA"
        englishSwitcher="EN"
        onPressFunction={() => dispatch(switchLanguage())}
      />
      <View>
        <List
          listsToDisplay={categoryList}
          isEnglish={isEnglish}
          buttonText={isEnglish ? 'Learn' : 'Mianatra'}
          onPressFunction={() => navigation.navigate('LearnScreen')}
          heading={isEnglish ? 'Select a category:' : 'Mifidiana sokajy iray:'}
        />
      </View>
    </SafeAreaView>
  );
}
