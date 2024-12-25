import {} from 'react';
import {StyleSheet} from 'react-native';

const getStyles = () => {
  return StyleSheet.create({
    parentContainer: {
      flex: 1,
      backgroundColor: 'rgba(230, 242, 242, 1)',
    },
    taskContainer: {
      padding: 16,
    },
    taskItem: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    taskTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0A0A0A',
      marginBottom: 4,
    },
    taskDescription: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    taskDate: {
      fontSize: 12,
      color: '#999',
    },
    noTasksContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    noTasksText: {
      fontSize: 16,
      color: '#666',
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: '#2595FC',
    },
    plusIcon: {
      fontSize: 24,
      fontWeight: '300',
      color: '#fff',
    },
    customFab: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: '#2595FC',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    plusIcon: {
      fontSize: 30,
      color: '#fff',
      fontWeight: '300',
    },
  });
};

const useStyledComponents = () => {
  const styles = getStyles();
  return styles;
};

export default useStyledComponents;
