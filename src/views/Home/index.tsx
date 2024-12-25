/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {memo, useState, useRef, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {Text, FAB} from 'react-native-paper';
import useStyledComponents from '../../assets/styles/home';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import data from '../../assets/data.json';

const PlusIcon = () => <Text style={styles.plusIcon}>+</Text>;

const Home = ({navigation}) => {
  const styles = useStyledComponents();
  const scrollViewRef = useRef(null);

  const [info, setInfo] = useState({
    selectedDate: moment().format('YYYYMMDD'),
    data: [...data],
    selectedDateTasks: [],
  });

  // Group tasks by date

  useEffect(() => {
    if (info?.data && info?.selectedDate) {
      const groupedTasks = info?.data.reduce((groups, task) => {
        const date = moment(task.date).format('YYYYMMDD');
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(task);
        return groups;
      }, {});

      // Get tasks for selected date
      const selectedDateTasks = groupedTasks[info.selectedDate] || [];
      setInfo(prev => ({...prev, selectedDateTasks}));
    }
  }, [info?.selectedDate, info?.data]);

  const creatTask = useCallback(
    ({taskData}) => {
      const updatedData = [...info?.data, {...taskData}];
      const groupedTasks = updatedData.reduce((groups, task) => {
        const date = moment(task.date).format('YYYYMMDD');
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(task);
        return groups;
      }, {});

      // Get tasks for selected date
      const selectedDateTasks = groupedTasks[info.selectedDate] || [];
      setInfo(prev => ({...prev, selectedDateTasks, data: updatedData}));
    },
    [info?.data, info?.selectedDate],
  );

  return (
    <SafeAreaView style={styles.parentContainer}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'rgba(230, 242, 242, 1)'}
      />

      <CalendarStrip
        scrollable
        style={{
          height: 64,
          padding: 0,
          margin: 0,
          flexDirection: 'row',
          alignItems: 'flex-end',
          // flex: 1,
        }}
        calendarColor={'rgba(230, 242, 242, 1)'}
        dateNumberStyle={{
          color: '#0A0A0A',
          fontSize: 16,
          lineHeight: 24,
          fontWeight: Platform.OS === 'ios' ? 500 : '500',
        }}
        dateNameStyle={{
          color: '#0A0A0A',
        }}
        showMonth={false}
        iconLeftStyle={{display: 'none'}}
        iconRightStyle={{display: 'none'}}
        selectedDate={moment()}
        onDateSelected={date => {
          const selectedDate = moment(date).format('YYYYMMDD');
          setInfo(prev => ({
            ...prev,
            selectedDate,
          }));

          // Auto scroll to top when date changes
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
          }
        }}
        highlightDateNameStyle={{
          color: '#0A0A0A',
        }}
        highlightDateNumberStyle={{
          color: '#2595FC',
        }}
        highlightDateContainerStyle={{
          borderRadius: 0,
          borderBottomWidth: 2,
          borderColor: '#2595FC',
        }}
        dayContainerStyle={{
          gap: 4,
          paddingBottom: 9,
        }}
      />

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.taskContainer}>
          {info?.selectedDateTasks.length > 0 ? (
            info?.selectedDateTasks.map((task, index) => (
              <TouchableOpacity
                key={index}
                style={styles.taskItem}
                onPress={() => navigation.navigate('TaskDetails', {task})}>
                <Text style={styles.taskTitle}>{task?.name}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
                <Text style={styles.taskDate}>
                  {moment(task.date).format('MMMM D, YYYY')}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.noTasksContainer}>
              <Text style={styles.noTasksText}>No tasks for this date</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.customFab}
        onPress={() => navigation.navigate('CreateTask', {creatTask})}>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default memo(Home);
