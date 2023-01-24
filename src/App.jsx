import React, {useState} from 'react';

import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import ModalItem from './components/ModalItem';
import { View } from 'react-native';
import styles from './styles';

const generateTask = task => {
  return {
    id : Math.random().toString(),
    value : task,
    isCompleted :false,
  }
}

const App = () => {
  const [tasks, setTasks] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [itemSelected, setItemSelected] = useState(null);

   const handlerSubmit = (task) => {
    setTasks([...tasks, generateTask(task)]);
   }

   const handlerModal = (item) => {
      setItemSelected(item);
      setShowModal(true);
   }

   const markAsCompleted = (id) => {
    setTasks(tasks?.map(i => {
      if (i.id === id) i.isCompleted = true;
      return i;
    }));
    setShowModal(false);
   }

   const deleteItem = (id) => {
    setTasks(tasks?.filter(i => i.id !== id));
    setShowModal(false);
   }

const propsModal = {itemSelected, showModal, setShowModal, deleteItem, markAsCompleted};
  return (
    <View style={styles.container}>
      <AddItem handlerSubmit={handlerSubmit}/>
      <ListItems tasks={tasks} handlerModal={handlerModal}/>
     <ModalItem {...propsModal}/>
    </View>
  );
}



export default App;