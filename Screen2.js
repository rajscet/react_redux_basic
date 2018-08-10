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
      <View >

        {
          this.props.people.map((person, index) => (
            <View key={index} style={styles.person}>
              <Text>Name: {person.name}</Text>
              <Text onPress={() => this.props.deletePerson(person)}>Delete Person</Text>
            </View>
          ))
        }
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
    people: state.people.people
  }
}


const mapDispatchToProps = {
  deletePerson
};

export default  sts= connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen2)

