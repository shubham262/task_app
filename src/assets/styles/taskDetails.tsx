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
    date: {
      fontSize: 16,
      color: '#666',
    },
    taskInfo: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#0A0A0A',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      color: '#666',
      lineHeight: 24,
    },
    mediaSection: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      color: '#0A0A0A',
    },
    mediaScroll: {
      flexDirection: 'row',
    },
    image: {
      width: width * 0.7,
      height: width * 0.5,
      borderRadius: 12,
      marginRight: 12,
    },
    videoContainer: {
      width: width * 0.7,
      height: width * 0.5,
      marginRight: 12,
      borderRadius: 12,
      overflow: 'hidden',
    },
    video: {
      width: '100%',
      height: '100%',
    },
    playButtonOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    playIcon: {
      fontSize: 40,
    },
    thumbnailLoading: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
  });
};

const useStyledComponents = () => {
  const styles = getStyles();
  return styles;
};

export default useStyledComponents;
