import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { addPerson } from './actions';
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
    inputValue: '',
  }

  addPersonValue = () => {
   
    if (this.state.inputValue === '') return;
    this.props.addPerson({name:this.state.inputValue});
    this.setState({ inputValue: '' });
  }
  updateInput = (inputValue) => {
    this.setState({ inputValue })
  }
  render() {
    
    return (

      <View style={styles.container}>
        
        <TextInput
          onChangeText={text => this.updateInput(text)}
          style={styles.input}
          value={this.state.inputValue}
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
            title="Go to Person List"
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
  addPerson
};
function mapStateToProps(state) {
  return {
    people: state.people.people
  }
}

export default sts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)