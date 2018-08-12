import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { addPerson ,setCount} from './actions';
// import PersonList from './PersonList'
import { connect } from 'react-redux';

class Main extends React.Component {


  static navigationOptions = {
    title: 'Peaple'
};

  constructor(props) {
    super(props);
  }
  state = {
    personName: '',couterValue:''
  }

  addPersonValue = () => {
   
    if (this.state.personName === '') return;
    this.props.addPerson({name:this.state.personName});
    this.setState({ personName: '' });
  }

  setCounterValue = () => {
   
    if (this.state.couterValue === '') return;
    this.props.setCount(this.state.couterValue);
    this.setState({ couterValue: '' });
  }
  
  updatePerson = (personName) => {
    this.setState({ personName })
  }

  updateCounter = (couterValue) => {
    this.setState({ couterValue })
  }

  render() {
    
    return (

      <View style={styles.container}>
       <TextInput
          onChangeText={text => this.updateCounter(text)}
          style={styles.input}
          value={this.state.couterValue}
          keyboardType={'numeric'}
          placeholder="Counter"
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={() =>this.setCounterValue()}
        >
          <Text style={styles.buttonText}>Set Counter</Text>
        </TouchableHighlight>
        
        <TextInput
          onChangeText={text => this.updatePerson(text)}
          style={styles.input}
          value={this.state.personName}
          placeholder="Name"
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={() =>this.addPersonValue()}
        >
          <Text style={styles.buttonText}>Add Person</Text>
        </TouchableHighlight>
        <TouchableOpacity>
          <Button
            onPress={() => this.props.navigation.navigate('Screen1')}
            title="Go to Next Screen"
          />
        </TouchableOpacity>
      </View>


    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#ff9900',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  }
});



const mapDispatchToProps = {
  addPerson,
  setCount
};


export default sts = connect(
  null,
  mapDispatchToProps,
)(Main)