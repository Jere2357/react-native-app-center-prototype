import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Container from '../../components/Layout/Container';
import Header from '../../components/Header/index';
import {FormButton, FormInput, FormCheckbox} from '../../components/Form';
import {List} from '../../components/ListItem';
import routes from '../../navigation/routes';
import styles from './styles/SignUpStyle';

import {RootState} from '../../store/modules/combinedReducers';
import {registerUser} from '../../store/modules/auth/action';

const SignUp = ({navigation}: any) => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const [isChecked, setChecked] = useState(false);
  const [membershipNo, setMembershipNo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [membershipFocus, setMembershipFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPassFocus, setConfirmPassFocus] = useState(false);

  const items = [
    {
      title: 'Become a PSSLAI member',
    },
  ];

  const requestSignupBody = {
    psslai_member_number: membershipNo,
    username: username,
    password: password,
    confirm_password: confirmPass,
    agreement: isChecked,
  };

  useEffect(() => {
    if (membershipNo && username && password && confirmPass && isChecked) {
      dispatch(registerUser(requestSignupBody));
    }
  }, [membershipNo, username, password, confirmPass, isChecked]);

  const handleSignUp = () => {
    dispatch(registerUser(requestSignupBody));
    if (membershipNo && username && password && confirmPass && isChecked) {
      navigation.navigate(routes.LOGIN);
    } else {
      console.log('Invalid request');
    }
  };

  return (
    <>
      <Header title="Sign Up" onBackPress={() => navigation.goBack()} />
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FormInput
            onChangeText={value => setMembershipNo(value)}
            onFocus={() => setMembershipFocus(true)}
            onBlur={() => setMembershipFocus(false)}
            isFocus={membershipFocus}
            placeholder="Your 8-digit membership no."
            label="Membership No."
          />
          <FormInput
            onChangeText={value => setUsername(value)}
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
            isFocus={usernameFocus}
            placeholder="At least 8 characters"
            label="Username"
          />
          <FormInput
            onChangeText={value => setPassword(value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            isFocus={passwordFocus}
            placeholder="Enter Password"
            label="Set Password"
            secureTextEntry={true}
          />
          <FormInput
            onChangeText={value => setConfirmPass(value)}
            onFocus={() => setConfirmPassFocus(true)}
            onBlur={() => setConfirmPassFocus(false)}
            isFocus={confirmPassFocus}
            placeholder="Must match password"
            label="Confirm Password"
            secureTextEntry={true}
          />
          <View style={styles.checkboxContainer}>
            <FormCheckbox
              checked={isChecked}
              onPress={() => setChecked(!isChecked)}
            />
            <Text style={styles.checkboxLabel}>
              By signing up, I have read and agree with PSSLAI’s{' '}
              <Text style={styles.privacyLabel}>Privacy Policy</Text>
            </Text>
          </View>
          <FormButton
            title="Sign Up"
            buttonStyle={styles.signUpButton}
            onPress={handleSignUp}
          />
          <List list={items} />
        </ScrollView>
      </Container>
    </>
  );
};

export default SignUp;
