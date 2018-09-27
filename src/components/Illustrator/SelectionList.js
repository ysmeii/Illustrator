import React, { Component } from 'react';
import { View, Text, TextInput, Picker, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements'

class SelectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        coverageName: '',
        coverageTerm: '',
        isMounted: false,
        keys: [],
        parsedData: {}
    };
  }

  

//   componentDidMount () {
//     this.setState({isMounted: true})
//   }

//   componentWillUnmount () {
//     this.setState({isMounted: false})
//   }

//   getAllKeys () {
//     AsyncStorage.getAllKeys((err, keys) => {
//         AsyncStorage.multiGet(keys, (err, stores) => {
//           stores.map((result, i, store) => {
//             // get at each store's key/value so you can work with it
//             //this.setState({keys: store[i][0]})
//           });
//         });
//       });
//     console.log(this.state.keys);
//   }

  componentDidMount() {
    this.getData();
  }

  getData =  async () => {
      try {
        // AsyncStorage.getAllKeys((err, keys) => {
        //     AsyncStorage.multiGet(keys, (err, stores) => {
        //       stores.map((result, i, store) => {
        //         console.log(store[i][0])
        //         let parsed = JSON.parse(store[i][1]);
        //         // this.setState({keys: joined});
        //         // console.log(parsed.firstName);
        //         // console.log(this.state.keys)
        //       });
        //     });
        //   });
        let savetest1 = await AsyncStorage.getItem('savetest1');
        let parsed = JSON.parse(savetest1);
            this.setState({firstName: parsed.firstName});
            this.setState({lastName: parsed.lastName});
            this.setState({coverageName: parsed.coverageName});
            this.setState({coverageTerm: parsed.coverageTerm});
            this.setState({parsedData: parsed});
      }
      catch(error) {
        alert(error);
      }
  }



//   importData =  () => Promise.all(AsyncStorage.getAllKeys().then(keys => {
//     for (var i = 0; i < keys.length; i++) {
//         let parsed = await AsyncStorage.getItem
//     }
//   }))

  render() {
    //this.getAllKeys();
    //console.log(this.state.keys);
    console.log(this.props);
    
    return (
        <View style={styles.formContainer}>
            <Text style={styles.fieldTitles}>Saved Illustrations</Text>
            <View style={styles.field}>
                <TouchableOpacity style={styles.illustratorButton} onPress={() => this.props.navigation.navigate('SavedIllustrations', {initialState: this.state.parsedData})}>
                    <Text>{this.state.firstName} {this.state.lastName} {this.state.coverageName}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.field}>
                <TouchableOpacity style={styles.illustratorButton}>
                    <Text>Ali Ababwa CPP Deferred Elite 10 Year Term</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.field}>
                <TouchableOpacity style={styles.illustratorButton}>
                    <Text>Snow White CPP Deferred Life</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionList)

const styles = StyleSheet.create({
    fieldTitles: {
        margin: 10, 
        fontSize: 20
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        padding: 0,
        margin: 0,
        width: '95%',
        marginTop: 10,
        marginBottom: 10
    },
    field: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'stretch',
    },
    titleCoverage: {
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#2980b9', 
        marginBottom: 5,
        width: 50, 
        paddingTop: 3,
        paddingBottom: 3
    },
    titleCoverageBottom: {
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#2980b9', 
        marginTop: 3,
        marginBottom: 10,
        width: 200, 
        paddingTop: 3,
        paddingBottom: 3
    },
    titleFaceAmount: {
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#2980b9', 
        marginBottom: 5,
        width: 80, 
        paddingTop: 3,
        paddingBottom: 3
    },
    titlePremiums: {
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#2980b9', 
        marginBottom: 5,
        width: 80, 
        paddingTop: 3,
        paddingBottom: 3
    },
    totalPremium: {
        textAlign: 'center',
        backgroundColor: '#2980b9', 
        marginBottom: 5,
        width: 165, 
        paddingTop: 3,
        paddingBottom: 3
    },
    totalPremiumBottom: {
        textAlign: 'center',
        backgroundColor: '#2980b9', 
        marginBottom: 10,
        width: 164, 
        paddingTop: 3,
        paddingBottom: 3,
        marginTop: 3
    },
    illustratorButton: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1
    }
})