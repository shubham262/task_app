import React, {memo, useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import moment from 'moment';
import {launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import useStyledComponents from '../../assets/styles/createTask';

const CreateTask = ({navigation, route}) => {
  const {creatTask} = route.params;
  const styles = useStyledComponents();
  const [task, setTask] = useState({
    id: `evt_${Date.now()}`,
    name: '',
    description: '',
    date: new Date(),
    images: [],
    videos: [],
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState('');

  const handleImagePicker = async () => {
    const result = await launchImageLibrary({
      mediaType: 'mixed',
      selectionLimit: 0,
    });

    if (result.assets) {
      const mediaFiles = result.assets.reduce(
        (acc, file) => {
          if (file.type?.startsWith('image/')) {
            acc.images.push(file.uri || '');
          } else if (file.type?.startsWith('video/')) {
            acc.videos.push(file.uri || '');
          }
          return acc;
        },
        {images: [...task.images], videos: [...task.videos]},
      );

      setTask(prev => ({
        ...prev,
        ...mediaFiles,
      }));
    }
  };

  const handleCreateTask = () => {
    if (!task.name.trim()) {
      setError('Title is required');
      return;
    }

    setError('');

    const taskData = {
      ...task,
      date: moment(task.date).format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
    };

    creatTask({taskData});
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || task.date;
    setShowDatePicker(Platform.OS === 'ios' ? true : false);
    setTask(prev => ({...prev, date: currentDate}));
  };

  const renderDatePicker = () => {
    if (Platform.OS === 'android') {
      if (showDatePicker) {
        return (
          <DateTimePicker
            value={task.date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        );
      }
      return null;
    }

    return (
      <Modal
        transparent={true}
        visible={showDatePicker}
        animationType="slide"
        onRequestClose={() => setShowDatePicker(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowDatePicker(false)}>
          <View style={styles.modalContent}>
            <View style={styles.datePickerContainer}>
              <View style={styles.datePickerHeader}>
                <TouchableOpacity
                  onPress={() => setShowDatePicker(false)}
                  style={styles.headerButton}>
                  <Text style={styles.datePickerHeaderButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowDatePicker(false)}
                  style={styles.headerButton}>
                  <Text style={styles.datePickerHeaderButton}>Done</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                value={task.date}
                mode="date"
                display="spinner"
                onChange={handleDateChange}
                style={styles.iosDatePicker}
                textColor="#000000"
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

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
          <Text style={styles.headerTitle}>Create New Task</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View>
            <TextInput
              value={task.name}
              onChangeText={name => {
                setTask(prev => ({...prev, name}));
                if (error) setError('');
              }}
              style={[styles.input, error ? styles.inputError : null]}
              placeholder="Task Title"
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>

          <TextInput
            value={task.description}
            onChangeText={description =>
              setTask(prev => ({...prev, description}))
            }
            multiline
            numberOfLines={4}
            style={styles.input}
            placeholder="Description"
          />

          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateButtonLabel}>Date</Text>
            <Text style={styles.dateValue}>
              {moment(task.date).format('MMMM D, YYYY')}
            </Text>
          </TouchableOpacity>

          {renderDatePicker()}

          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleImagePicker}>
            <Text style={styles.mediaButtonText}>Add Images/Videos</Text>
          </TouchableOpacity>

          {/* Preview Section */}
          {(task.images.length > 0 || task.videos.length > 0) && (
            <View style={styles.previewSection}>
              <Text style={styles.previewTitle}>Media Preview</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.mediaScroll}>
                {task.images.map((uri, index) => (
                  <Image
                    key={`image-${index}`}
                    source={{uri}}
                    style={styles.mediaPreview}
                  />
                ))}
                {task.videos.map((uri, index) => (
                  <View key={`video-${index}`} style={styles.mediaPreview}>
                    <Image
                      source={{uri: 'https://via.placeholder.com/300x200'}}
                      style={styles.mediaPreview}
                    />
                    <View style={styles.playIcon}>
                      <Text>▶️</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}

          <Button
            mode="contained"
            onPress={handleCreateTask}
            style={styles.createButton}>
            Create Task
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(CreateTask);
