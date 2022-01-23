import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import Addquestion from './screens/addquestion'
import AllQuestions from './screens/allquestions'
import styling from './styling'
const styles = StyleSheet.create(styling)
function App(){
  return<>
    <View  style={styles.main}>
    <Addquestion />
    {/* <AllQuestions /> */}
    </View>
  </>
}
export default App