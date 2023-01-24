import {
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, {useState} from 'react';

const generateTask = task => {
  return {
    id : Math.random().toString(),
    value : task
  }
}

export default function App() {
  const [tasks, setTasks] = useState([]);
   const [task, setTask] = useState('');
   const [showModal, setShowModal] = useState(false);
   const [itemSelected, setItemSelected] = useState(null);

   const handlerChange = text => setTask(text);

   const handlerSubmit = () => {
    setTasks([...tasks, generateTask(task)]);
    setTask('');
   }

   const handlerModal = (item) => {
      setItemSelected(item);
      setShowModal(true);
   }

   const deleteItem = (id) => {
    setTasks(tasks?.filter(i => i.id !== id));
    setShowModal(false);
   }

const renderItem = ({item}) => (
  <TouchableOpacity onPress={() => handlerModal(item)} style={styles.itemContainer}>
    <Text style={styles.item}> {item.value}</Text>
  </TouchableOpacity>
)
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder='add new tasks'
        value={task}
        onChangeText={handlerChange}
        />
        <Button disabled={!task} title='Add' color='#626893' onPress={handlerSubmit} style={styles.button}/>
      </View>
      <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.listContainer}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={ () => setShowModal(false)}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Item Detail:</Text>
            <Text style={styles.modalText}>{itemSelected.value}</Text>
            <View style={styles.buttonsModal}>
               <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowModal(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonDelete]}
              onPress={() => deleteItem(itemSelected.id)}>
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            </View>
           
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20
  },
  button : {
    borderRadius: 4
  },
  input : {
    width: '75%',
    borderBottomColor: '#00ffff',
    borderBottomWidth: 1,
    height: 40,
    color: '#212121'
  },
  listContainer: {
    marginHorizontal:20,
    marginTop:40,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 15,
    backgroundColor: '#00ffff',
    borderRadius:7,
    marginTop: 5
  },
  item : {
    fontSize:14,
    color:'#212121',
    fontWeight:'bold'
  },
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#F194FF',
  },
  buttonDelete: {
    backgroundColor: '#ff0000',
    marginLeft: 5
  },
  buttonsModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
