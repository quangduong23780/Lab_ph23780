import React,{useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput,Text, View, FlatList, list} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [isShow, setShow] = useState(true);
  return (
    <SafeAreaView>
      <Text>
        Họ tên: Tống Quang Đường
      </Text>
      <Text>
        MSV: PH23780
      </Text>
      {
        isShow
        ?
        <>
         <TextInput
        style={styles.input}
        value={text}
        placeholder="Ten"
        onChangeText={(text) => setNameInput(text)}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Dest"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text2}
        placeholder="Link anh"
      />
       <Button
       style={styles.button}
        title={'OK'}
        />
         <Button 
         style={styles.button}
        title={'HUY'}
        onPress={() => setShow(!isShow)}
        />
      </>
        : null
      }
      <Button 
        title={'Them moi'}
        onPress={() => setShow(true)}
      />
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;