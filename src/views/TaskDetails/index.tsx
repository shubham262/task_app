import React, {memo} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Text} from 'react-native-paper';
import moment from 'moment';
import useStyledComponents from '../../assets/styles/taskDetails';

const TaskDetails = ({route, navigation}) => {
  const {task} = route.params;
  const styles = useStyledComponents();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={'rgba(230, 242, 242, 1)'}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.date}>
            {moment(task.date).format('MMMM D, YYYY')}
          </Text>
        </View>

        {/* Task Info */}
        <View style={styles.taskInfo}>
          <Text style={styles.title}>{task.name}</Text>
          <Text style={styles.description}>{task.description}</Text>
        </View>

        {/* Images Section */}
        {task.images && task.images.length > 0 && (
          <View style={styles.mediaSection}>
            <Text style={styles.sectionTitle}>Images</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.mediaScroll}>
              {task.images.map((image, index) => (
                <Image
                  key={`image-${index}`}
                  source={{uri: image}}
                  style={styles.image}
                  resizeMode="cover"
                />
              ))}
            </ScrollView>
          </View>
        )}

        {/* Videos Section */}
        {task.videos && task.videos.length > 0 && (
          <View style={styles.mediaSection}>
            <Text style={styles.sectionTitle}>Videos</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.mediaScroll}>
              {task.videos.map((video, index) => (
                <TouchableOpacity
                  key={`video-${index}`}
                  style={styles.videoContainer}
                  onPress={() => Linking.openURL(video)}>
                  <Image
                    source={{uri: 'https://via.placeholder.com/300x200'}}
                    style={styles.video}
                    resizeMode="cover"
                  />
                  <View style={styles.playButtonOverlay}>
                    <Text style={styles.playIcon}>▶️</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(TaskDetails);
