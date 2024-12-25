import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const getStyles = () => {
  return StyleSheet.create({});
};

const useStyledComponents = () => {
  const styles = getStyles();
  return styles;
};

export default useStyledComponents;
