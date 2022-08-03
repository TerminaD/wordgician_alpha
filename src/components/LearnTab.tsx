import React from 'react';
import { Switch, Text, View } from 'react-native';

import styles from '../globalStyles';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getRegisterStatus, switchRegisterStatus } from '../redux/slices/registerSlice';

const LearnTab = () => {
  const registerStatus: boolean = useTypedSelector(getRegisterStatus)
  const dispatch = useTypedDispatch()

  return (
    <View style={styles.container}>
      <Switch onValueChange={() => dispatch(switchRegisterStatus())} />
      <Text>
        {registerStatus ? 'You are registered!' : 'Not yet registered.'}
      </Text>
    </View>
  )
}

export default LearnTab
