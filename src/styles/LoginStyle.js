import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  imageBox: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginVertical: 20,
    marginTop : 0,
},

  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 30,
  },
  forgotText: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 5,
    color: 'gray',
  },
  signInButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#21D393',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
    width:100,
  },
  signInText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: 'gray',
  },
  guestText: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    color: 'gray',
    marginTop: 50,
    marginHorizontal: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '# ',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
