import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Container from '../../components/Layout/Container';
import Header from '../../components/Header/index';
import {FormInput, FormButton} from '../../components/Form';
import {EyeoPasswordIcon, EyePasswordIcon} from '../../components/Icons';
import {List} from '../../components/ListItem';

import {loginUser} from '../../store/modules/auth/action';
import {RootState} from '../../store/modules/combinedReducers';
import routes from '../../navigation/routes';
import styles from './styles/LoginStyle';

const Login = ({navigation}: any) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isPassVisible, setPassVisible] = useState(false);
  const [isSubmit, setSubmit] = useState(false);

  const items = [
    {
      title: 'Forgot username or password',
    },
    {
      title: 'Update mobile number',
    },
  ];

  const requestLoginBody = {
    username: username,
    password: password,
  };

  useEffect(() => {
    if (auth.isAuthenticated) navigation.navigate(routes.MAIN_DASHBOARD);
  }, [auth.isAuthenticated]);

  const handlePasswordIcon = () => {
    setPassVisible(!isPassVisible);
  };

  const handleLogin = async () => {
    setSubmit(true);
    if (username && password) {
      setSubmit(false);
      dispatch(loginUser(requestLoginBody));
    }
  };

  return (
    <>
      <Header title="Log In" onBackPress={() => navigation.goBack()} />
      <Container>
        <FormInput
          onChangeText={(value: any) => setUsername(value)}
          error={isSubmit && !username}
          onFocus={() => setUsernameFocus(true)}
          onBlur={() => setUsernameFocus(false)}
          isFocus={usernameFocus}
          placeholder="Username"
        />
        <FormInput
          onChangeText={(value: any) => setPassword(value)}
          error={isSubmit && !password}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          isFocus={passwordFocus}
          rightIcon={() =>
            isPassVisible ? (
              <EyePasswordIcon
                size={24}
                color={!passwordFocus ? '#D1D5DD' : '#2B2D33'}
                onPress={handlePasswordIcon}
              />
            ) : (
              <EyeoPasswordIcon
                size={24}
                color={!passwordFocus ? '#D1D5DD' : '#2B2D33'}
                onPress={handlePasswordIcon}
              />
            )
          }
          rightIconContainerStyle={{height: 24}}
          placeholder="Password"
          secureTextEntry={!isPassVisible}
        />
        <FormButton
          title="Log In"
          buttonStyle={styles.loginButton}
          loading={auth.isLoading}
          onPress={() => handleLogin()}
        />
        <List list={items} />
      </Container>
    </>
  );
};

export default Login;
