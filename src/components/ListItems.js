import { FlatList, Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

const ListItems = ({tasks, handlerModal}) => {

    const getStyle = (val) => {
        const backgroundColor = val ? '#00ffff' : '#c7c7ff';
        return {...styles.itemContainer, backgroundColor};
    }
   
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => handlerModal(item)} style={{...getStyle(item.isCompleted)}}>
          <Text style={styles.item}> {item.value}</Text>
        </TouchableOpacity>
      )

    return (
        <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.listContainer}
      />
    )
  }

  export default ListItems;