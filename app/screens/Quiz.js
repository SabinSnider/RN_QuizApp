import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar , Image} from "react-native";
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
  }
});

export default Quiz;
