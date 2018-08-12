import React from 'react';
import { connect } from 'react-redux';
import {  deletePerson } from './actions';


import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

 class Screen1 extends React.Component {

  static navigationOptions = {
    title: 'Screen 1'
};
   constructor(props)
   {
       super(props);
   }


   

  render() {
      
    return (
      <View >

        {
          this.props.peopleList.map((person, index) => (
            <View key={index} style={styles.person}>
              <Text>Name: {person.name}</Text>
              <Text onPress={() => this.props.deletePerson(person)}>Delete Person</Text>
            </View>
          ))
        }
        <TouchableOpacity style={{top:100}}>
          <Button
            onPress={() => this.props.navigation.navigate('Screen2')}
            title="Go to Next List"
          />
        </TouchableOpacity>
        <Text>{this.props.counterValue}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  person: {
    marginTop: 12,
  },
});

function mapStateToProps (state) {
  return {
    peopleList: state.appReducer.people,   
    counterValue: state.appReducer.counter
  }
}



const mapDispatchToProps = {
  deletePerson
};

export default  sts= connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen1)

