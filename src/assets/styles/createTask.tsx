import {} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(230, 242, 242, 1)',
    },
    scrollContent: {
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    backButton: {
      padding: 8,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    placeholder: {
      width: 40,
    },
    form: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
    },
    input: {
      marginBottom: 16,
      backgroundColor: '#fff',
    },
    dateButton: {
      padding: 16,
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      marginBottom: 16,
    },
    dateButtonLabel: {
      fontSize: 12,
      color: '#666',
      marginBottom: 4,
    },
    dateValue: {
      fontSize: 16,
      color: '#000',
    },
    mediaButton: {
      padding: 16,
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      marginBottom: 16,
      alignItems: 'center',
    },
    mediaButtonText: {
      color: '#2595FC',
      fontSize: 16,
    },
    previewSection: {
      marginBottom: 16,
    },
    previewTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    mediaScroll: {
      flexDirection: 'row',
    },
    mediaPreview: {
      width: width * 0.3,
      height: width * 0.3,
      marginRight: 8,
      borderRadius: 8,
    },
    playIcon: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    createButton: {
      marginTop: 16,
      backgroundColor: '#2595FC',
    },
    iosDatePicker: {
      backgroundColor: 'white',
      width: '100%',
      height: 200,
      marginBottom: 16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    datePickerContainer: {
      backgroundColor: 'white',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      padding: 16,
    },
    datePickerHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    datePickerHeaderButton: {
      color: '#2595FC',
      fontSize: 16,
      padding: 4,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 20,
    },
    datePickerContainer: {
      backgroundColor: 'white',
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    datePickerHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      width: '100%',
      marginBottom: 8,
    },
    headerButton: {
      padding: 8,
    },
    datePickerHeaderButton: {
      color: '#2595FC',
      fontSize: 16,
      fontWeight: '600',
    },
    iosDatePicker: {
      width: '100%',
      height: 200,
    },
    inputError: {
      borderColor: '#FF0000',
      borderWidth: 1,
    },
    errorText: {
      color: '#FF0000',
      fontSize: 12,
      marginTop: -12,
      marginBottom: 8,
      marginLeft: 4,
    },
  });
};

const useStyledComponents = () => {
  const styles = getStyles();
  return styles;
};

export default useStyledComponents;
