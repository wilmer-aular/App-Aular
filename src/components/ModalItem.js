import {
    Modal,
    Pressable,
    Text,
    View
} from 'react-native';

import styles from '../styles';

const ModalItem = ({showModal, setShowModal, itemSelected, deleteItem, markAsCompleted }) => {

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={ () => setShowModal(false)}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Item Detail:</Text>
            <Text style={styles.modalText}>{itemSelected?.value}</Text>
            <View style={styles.buttonsModal}>
               <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowModal(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonDelete]}
              onPress={() => deleteItem(itemSelected?.id)}>
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            
          
            </View>
            {
              !itemSelected?.isCompleted &&
              <Pressable
              style={[styles.button, styles.buttonComplete]}
              onPress={() => markAsCompleted(itemSelected?.id)}>
              <Text style={styles.textStyle}>Mark as Completed</Text>
            </Pressable>
            }
          </View>
        </View>
      </Modal>
    )
  }

  export default ModalItem;