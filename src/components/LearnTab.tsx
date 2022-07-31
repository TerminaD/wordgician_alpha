import React from 'react';
import { Text, View } from 'react-native';

import styles from '../globalStyles';
import { useTypedSelector } from '../redux/hooks';
import { getRegisterStatus } from '../redux/slices/registerSlice';

const LearnTab = () => {
  const registerStatus: boolean = useTypedSelector(getRegisterStatus)

  return (
    <View style={styles.container}>
      <Text>{registerStatus}</Text>
    </View>
  )
}

export default LearnTab
