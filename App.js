import React,{useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [persons,setPersons] = useState([]);
  
  useEffect(() => {
    const testArray = Array();
    for (let i=0;i<=30;i++) {
      testArray.push({id: i,name: 'Test ' + i, image: 'https://reactnative.dev/img/tiny_logo.png'});
    }
    setPersons(testArray);
  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          persons.map((item) => (
            <View style={styles.rowContainer} key={item.id}>
              <Image
                source={{
                uri: item.image,
                width: 32,
                height: 32,
                }}
              />
              <Text style={styles.rowText}>{item.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:  Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  rowText: {
    fontSize: 20,
    marginLeft: 5,
  },
});
