import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import styling from '../styling'
import { Picker } from '@react-native-picker/picker';
import database from '@react-native-firebase/database';

const styles = StyleSheet.create(styling)
function Addquestion() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [questionTxt, setQuestionTxt] = useState('')
 
  const [options, setOptions] = useState([
    {
      label: 'Islamic',
      value: 'islamic'
    },
    {
      label: 'IT Information Technology',
      value: 'it'
    },
    {
      label: 'Medical Education',
      value: 'medicalEdu'
    },
    {
      label: 'General Education',
      value: 'edu'
    },
    {
      label: 'Commerce',
      value: 'comEdu'
    },
    {
      label: 'IT Information Technology',
      value: 'it'
    },
    {
      label: 'Media Science',
      value: 'media'
    },
    {
      label: 'Arts',
      value: 'arts'
    },
    {
      label: 'Geography',
      value: 'geo'
    },
    {
      label: 'Astro Physics',
      value: 'astro'
    },
    {
      label: 'Physics',
      value: 'phy'
    },

  ])

  let optionValue = (itemValue) => {
    setSelectedLanguage(itemValue)

  }


  const addQue = () => {
    let obj = {
      category: selectedLanguage,
      question: questionTxt,
      answer: '',
      starRating: 0,
      answerAuthor: []
    }
    obj.id = database().ref('questions/').push().key
    const reference = database().ref('questions/'+obj.id);
    reference.set(obj).then(()=>{
      console.log('success')
    })

    console.log(obj)

  }
  return <>
    <View style={[styles.main, styles.p2]}>
      <View style={[styles.py3, styles.p2]}>
        <Text style={[styles.fs2, styles.txtprime]}>Add Question</Text>
      </View>
      <View style={[styles.pb3]}>
        <Picker style={[styles.input, styles.w100]}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => { optionValue(itemValue) }}>
          {
            options.map((e, i) => <Picker.Item key={i} label={e.label} value={e.value} />)
          }
        </Picker>
      </View>
      <View>
        <TextInput onChangeText={(e) => setQuestionTxt(e)} multiline={true} placeholder='Enter Your Question' style={styles.textArea} />
      </View>
      <View style={styles.py3}>
        <TouchableOpacity onPress={addQue} style={[styles.btn, styles.w100]}>
          <Text style={[styles.textCenter, styles.txtWhite]}>Add Question</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
}
export default Addquestion