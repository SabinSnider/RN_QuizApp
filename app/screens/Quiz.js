import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar , Image} from "react-native";
import { COLORS, SIZES} from '../constants';
import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Quiz = (props) => {
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

        {/* Options*/}

        {/* Next Button*/}

        {/* Background Image*/}

        <Image
        source={require("../assets/images/DottedBG.png")}
        style={styles.image}
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
    bottom:0,
    left: 0,
    right:0
  }
});

export default Quiz;
