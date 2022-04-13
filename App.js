import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';

const App = ({navigation}) => {
  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('Device FCM Token: ', token);
      });

    messaging().onMessage(remoteMessage => {
      console.log('Message received. ', remoteMessage);
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('BackgroundMessageHandler Message received. ', remoteMessage);
    });
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.data.type,
      );
      navigation.navigate(remoteMessage.data.type);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.data.type,
          );
          navigation.navigate(remoteMessage.data.type);
        }
      });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity>
        <Text style={{color: '#2d333a', fontSize: 50}}>Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
