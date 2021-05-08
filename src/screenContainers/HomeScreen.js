import * as React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import List from '../components/ListComponent/List';
import {getCategoryList, switchLanguage} from '../../actions';
import ToolBar from '../components/ToolBarComponent/ToolBar';
import SectionHeading from '../components/SectionHeadingComponent/SectionHeading';
import PhraseTextarea from '../components/PhraseTextarea/PhraseTextArea';

export default function HomeScreenContainer({navigation}) {
  const categoryList = useSelector(state => state.categoryList);
  const isEnglish = useSelector(state => state.isEnglish);
  const seenPhrases = useSelector(state => state.seenPhrases);
  const learntPhrases = useSelector(state => state.learntPhrases);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{paddingBottom: 66}}>
        <ToolBar
          isHomeScreen={true}
          isEnglish={isEnglish}
          malagasySwitcher="MA"
          englishSwitcher="EN"
          onPressFunction={() => dispatch(switchLanguage())}
        />
        <View style={{paddingLeft: 23, paddingRight: 23}}>
          <SectionHeading
            text={isEnglish ? 'Select a category:' : 'Mifidiana sokajy iray:'}
          />
          {categoryList.map(cat => {
            return (
              <List
                isEnglish={isEnglish}
                buttonText={isEnglish ? 'Learn' : 'Mianatra'}
                onPressFunction={() =>
                  navigation.navigate('LearnScreen', {
                    itemId: cat.id,
                  })
                }
                item={isEnglish ? cat.name['en'] : cat.name['mg']}
              />
            );
          })}
          <SectionHeading
            text={isEnglish ? 'Seen phrases:' : 'Teny efa hita:'}
          />
          <PhraseTextarea
            editable={false}
            phrase={`${seenPhrases.length} words and phrases`}
          />
          <SectionHeading
            text={isEnglish ? 'Learnt phrases:' : 'Teny efa nianarana:'}
          />
          <PhraseTextarea
            editable={false}
            phrase={`${learntPhrases.length} words and phrases`}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
