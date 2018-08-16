import React from 'react';
import { connect } from 'react-redux';
import {  deletePerson } from './actions';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

 class Screen2 extends React.Component {

  static navigationOptions = {
    title: 'Screen 2'
};

   constructor(props)
   {
       super(props);
   }

  render() {
      
    return (
      <View style={{flex:1}} > 
      <View >

        {
          this.props.peopleList.map((person, index) => (
            <View key={index} style={styles.person}>
              <Text>Name: {person.name}</Text>
              <Text onPress={() => this.props.deletePerson(person)}>Delete Person</Text>
            </View>
          ))
        }
        </View>
        <Text style={{margin:20}}>{this.props.counterValue}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  person: {
    marginTop: 12,
  },
});

// left-right: variablename for usage : original state value
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
)(Screen2)

