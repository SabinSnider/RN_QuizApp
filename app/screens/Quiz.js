import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar , Image, TouchableOpacity} from "react-native";
import { COLORS, SIZES} from '../constants';
import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Quiz = (props) => {

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  

  const renderQuestion = () =>{
        return(
          <View>
          {/* Question counter */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end'
          }}>
            <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}> {currentQuestionIndex +1 }  </Text> 
            
            <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
          </View>

          {/* Questions */}
            <Text style={{
              color: COLORS.white,
              fontSize: 30
            }}>
              {allQuestions[currentQuestionIndex]?.question}
            </Text>
        </View>
        )
  }
  
  const renderOptions = () =>{
    return(
      <View>
        {
          allQuestions[currentQuestionIndex]?.options.map(option => (
            <TouchableOpacity
            key={option}
            style= {styles.optionstyle}>
              <Text style={{fontSize: 20, color:COLORS.white}}>{option}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  return (
      <SafeAreaView style={{flex:1}}
      >
       <StatusBar barStyle="light-content" backgroundColor={COLORS.primary}/>
       <View style= {{
         flex: 1,
         paddingVertical: 40, 
         paddingHorizontal: 16,
         backgroundColor: COLORS.background,
         position: 'relative'
       }}>
        
        {/* Progress bar */}

        {/* Questions*/}
        {renderQuestion()}
        {/* Options*/}
        {renderOptions()}
        {/* Next Button*/}

        {/* Background Image*/}

        <Image
        source={require("../assets/images/DottedBG.png")}
        style={styles.image}
        resizeMode="contain"
        />
       </View>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: 130,
    zIndex: -1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5
  },
  optionstyle: {
    borderWidth: 3, borderColor: COLORS.secondary+ '40',
    backgroundColor: COLORS.secondary+'20',
    height: 60, borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10
  }
});

export default Quiz;
