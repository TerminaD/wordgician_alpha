import React from 'react';
import { Button, TextInput, View } from 'react-native';

import styles from '../globalStyles';
import { useTypedDispatch } from '../redux/hooks';
import { registerAccount, setUserName } from '../redux/slices/registerSlice';

const WelcomeSplashScreen = () => {
  const username: string = ''
	const passcode: string = ''

	const dispatch = useTypedDispatch()

  return (
    <View style={styles.welcome}>

      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
      />

			<TextInput
        style={styles.input}
        placeholder="Enter your passcode"
        value={passcode}
      />

			<Button
			style={styles.button}
			title="Register"
			onPress={() => {
				dispatch(registerAccount())
				dispatch(setUserName(username))
				dispatch()
			}}

    </View>
  )
}

export default WelcomeSplashScreen
