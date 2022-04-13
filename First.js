import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';

const First = ({navigation}) => {
  const [Model, setModel] = useState(false);
  useEffect(() => {
    setModel(true);
  }, []);

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#2d333a', fontSize: 50}}>First</Text>
      </View>
      <Modal
        isVisible={Model}
        animationType={'slide'}
        transparent={true}
        onRequestClose={() => {
          setModel(false);
        }}
        onBackdropPress={() => {
          setModel(false);
        }}>
        <View style={styles.modelview}>
          <View
            style={{
              height: '80%',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'red',
              alignItems: 'center',
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <Text style={{fontSize: 30, color: '#FFF'}}>
              Your house is on fire
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setModel(false)}
            style={{justifyContent: 'center', flexDirection: 'row'}}>
            <View style={styles.Add}>
              <Text style={{color: '#fff', fontSize: 20}}>OK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  modelview: {
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
    height: '50%',
  },
  Add: {
    height: 50,
    width: '60%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 25,
  },
});

export default First;
