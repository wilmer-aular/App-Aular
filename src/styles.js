import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    buttonComplete : {
      backgroundColor: '#00ffff',
      marginTop: 5
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