import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';

import DatePicker from 'react-native-date-picker';

import { PRIMARY_COLOR, WHITE_TEXT_COLOR } from '../../constant';

const DatePickerModal = ({
  isVisible,
  onRequestClose,
  label,
  workingDate,
  setWorkingDate,
}) => {
  return (
    <TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onRequestClose}>
        <BlurView
          blurAmount={10}
          blurType="prominent"
          style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalLabel}>{label}</Text>
            <DatePicker
              date={workingDate}
              onDateChange={setWorkingDate}
              mode="datetime"
              style={{ marginVertical: 15 }}
            />
            <TouchableOpacity
              style={styles.selectedButton}
              onPress={onRequestClose}>
              <Text style={styles.selectedLabel}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginVertical: 150,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  modalLabel: {
    fontFamily: 'NanumGothic',
    fontSize: 24,
    fontWeight: '600',
  },
  selectedButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 7,
  },
  selectedLabel: {
    fontFamily: 'NanumGothic',
    color: WHITE_TEXT_COLOR,
  },
});

export default DatePickerModal;
