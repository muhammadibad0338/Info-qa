import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import styling from "../styling";

const styles = StyleSheet.create(styling)

function AllQuestions() {
    const [answers, setAnswers] = useState([
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
        {
            question: 'What is IT',
            answer: 'IT is a process of solving a solution.',
            starRating: 4,
            answerAuthor: [
                {
                    name: 'Muhammad Ali',
                    img: '',
                    dateAndtime: ''
                }
            ]
        },
    ])
    return <>
        <View style={[styles.main, styles.p2]}>
            <View>
                <Text style={[styles.fs2, styles.txtprime]}>All Questions</Text>
            </View>
            <View>
                <ScrollView>
                    {answers.map((e, i) => <View key={i}>
                        <View style={[styles.shadow2,styles.p2,{borderWidth:1,borderColor:'lightgrey',borderRadius:10,backgroundColor:'white',marginVertical:10}]}>
                            <Text style={styles.fs3}>{e.question}</Text>
                            <Text style={styles.fs4}>{e.answer}</Text>
                            <View></View>
                            <View>
                                <Text>{e.answerAuthor.map((b, j) => <Text key={j}>
                                    {b.name}
                                </Text>)}</Text>
                            </View>
                        </View>
                    </View>)}
                </ScrollView>
            </View>
        </View>

    </>
}
export default AllQuestions