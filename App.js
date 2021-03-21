/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {NativeModules} from 'react-native';
import {WebView} from 'react-native-webview';

const ActivityIndicatorElement = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        widht: '100%',
        height: '100%',
      }}>
      <ActivityIndicator size="large" color="#06bcee" />
    </View>
  );
};

const App = () => {
  const [url, setUrl] = useState('http://www.e-vipmall.com');
  const [isIndıcatorShown, setIndicatorShown] = useState(false);

  // useEffect(()=> {
  //   setIndicatorShown(false)
  // },[])

  return (
    <>
      <SafeAreaView
        style={{flex: 1, width: '100%', height: '100%', position: 'relative'}}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            borderColor:'#20c4cb',
            borderBottomWidth:5,
            backgroundColor: 'white',
            borderWidth: 1,
            paddingHorizontal:5,
            zIndex: 999,
          }}
          onPress={() => NativeModules.DevSettings.reload()}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            {'<'}  GO TO ONLINE SHOPPING MALL
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <WebView
            renderLoading={ActivityIndicatorElement}
            startInLoadingState={true}
            source={{uri: url}}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;
