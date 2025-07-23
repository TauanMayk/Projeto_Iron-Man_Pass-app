import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#0e0e0edb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#4D4D4D',
  },
  inputContainer: {
    width: '90%',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection: 'column'
  }
});

export default styles