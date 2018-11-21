import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, PixelRatio, Image, BackHandler, StatusBar } from 'react-native';
import firebase from 'firebase';

const searchImg = require('../../images/plus.jpg');

export default class Search extends Component {
  state = { name: '', scientificName: '', subSpecies: '', conStat: '', desc: '', image: '' };

  componentDidMount() {
    StatusBar.setHidden(true);
    BackHandler.addEventListener('hardwareBackPress', () => this.handleBack());
  }

  toLogout() {
    firebase.auth().signOut();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    this.props.navigation.navigate('login');
  }

  render() {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.toolBar}>
          <TouchableOpacity
           onPress={() => this.toLogout()}
           style={styles.logoutcont}
          >
           <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
          <Text style={styles.toolBarTitle}>Search/Add</Text>
          <TouchableOpacity
           style={styles.searchcont}
          >
           <Image
            source={searchImg}
            style={styles.imageStyle}
           />
          </TouchableOpacity>
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Name:</Text>
       <TextInput
          style={styles.input}
          //value={this.state.name}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(text) => this.setState({ name: text })}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Conservation Status:</Text>
       <TextInput
          style={styles.input}
          value={this.state.conStat}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(text) => this.setState({ conStat: text })}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Description:</Text>
       <TextInput
          style={styles.input}
          value={this.state.desc}
          underlineColorAndroid='rgba(0,0,0,0)'
          multiline
          onChangeText={(text) => this.setState({ desc: text })}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Image:</Text>
       <TextInput
          style={styles.input}
          value={this.state.image}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(text) => this.setState({ image: text })}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Scientific Name:</Text>
       <TextInput
          style={styles.input}
          value={this.state.scientificName}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(text) => this.setState({ scientificName: text })}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Sub Species:</Text>
       <TextInput
          style={styles.input}
          value={this.state.subSpecies}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(text) => this.setState({ subSpecies: text })}
       />
      </View>
      <TouchableOpacity
       style={styles.submitContainer}
       onPress={() => this.props.navigation.navigate('levelsDash')}
      >
       <Text style={styles.subButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
}
const f = PixelRatio.getFontScale();
const styles = {
  imageStyle: {
    alignSelf: 'flex-end',
    bottom: 0,
    height: f * 30,
    width: f * 30,
    //position: 'relative'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  toolBar: {
    paddingTop: f * 20,
    paddingBottom: f * 20,
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#F26215',
    height: '10%',
    top: 0
  },
  toolBarTitle: {
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    fontWeight: '700',
    fontSize: f * 18
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: f * 18
  },
  logoutcont: {
    marginLeft: 10
  },
  searchcont: {
    marginRight: 10
  },
  ipText: {
    color: '#F26215',
    fontSize: f * 16,
    fontWeight: '500',
    marginBottom: 5
  },
  ipCont: {
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    height: f * 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    //marginBottom: f * 10,
    color: '#fff',
    paddingHorizontal: f * 10,
    fontSize: f * 14,
    borderRadius: f * 5,
    width: '80%'
  },
  submitContainer: {
    backgroundColor: '#F26215',
    paddingVertical: f * 10,
    marginBottom: f * 10,
    //marginTop: f * 5,
    borderRadius: f * 10,
    alignSelf: 'center',
    paddingHorizontal: f * 20
  },
  subButtonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    fontSize: f * 18
  }
};