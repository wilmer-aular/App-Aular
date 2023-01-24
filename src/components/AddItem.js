import {
    Button,
    TextInput,
    View
} from 'react-native';
import React, {useState} from 'react';

import styles from '../styles';

const AddItem = ({handlerSubmit}) => {
    const [task, setTask] = useState('');

    const handlerChange = text => setTask(text);

    const add = () => {
      handlerSubmit(task);
      setTask('');
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder='add new tasks'
        value={task}
        onChangeText={handlerChange}
        />
        <Button disabled={!task} title='Add' color='#626893' onPress={add} style={styles.button}/>
      </View>
    )
  }

  export default AddItem;