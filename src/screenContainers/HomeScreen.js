import * as React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import List from '../components/ListComponent/List';
import {getCategoryList, switchLanguage} from '../../actions';
import ToolBar from '../components/ToolBarComponent/ToolBar';
import SectionHeading from '../components/SectionHeadingComponent/SectionHeading';

export default function HomeScreenContainer({route, navigation}) {
  const categoryList = useSelector(state => state.categoryList);
  const isEnglish = useSelector(state => state.isEnglish);
  //console.log(isEnglish);
  const dispatch = useDispatch();
  //console.log(categoryList);

  React.useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
    <SafeAreaView style={{paddingBottom: 66}}>
      <ToolBar
        isHomeScreen={true}
        isEnglish={isEnglish}
        malagasySwitcher="MA"
        englishSwitcher="EN"
        onPressFunction={() => dispatch(switchLanguage())}
      />
      <ScrollView>
        <View style={{paddingLeft: 23, paddingRight: 23}}>
          <SectionHeading
            text={isEnglish ? 'Select a category:' : 'Mifidiana sokajy iray:'}
          />
          {categoryList.map(cat => {
            return (
              <List
                listsToDisplay={categoryList}
                isEnglish={isEnglish}
                buttonText={isEnglish ? 'Learn' : 'Mianatra'}
                onPressFunction={() =>
                  navigation.navigate('LearnScreen', {
                    itemId: cat.id,
                  })
                }
                item={isEnglish ? cat.name['en'] : cat.name['mg']}
                keyId={cat.id}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
