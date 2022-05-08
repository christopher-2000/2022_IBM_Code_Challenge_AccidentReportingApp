import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  contact: {
    fontFamily: 'Bold',
    alignItems: 'center',
    fontSize: 20,
  },
  text: {
    marginLeft: 10,
    fontFamily: 'Regular',
    alignItems: 'center',
    fontSize: 16,
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  contactus: {
    fontFamily: 'Bold',
    alignItems: 'center',
    fontSize: 22,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#E5E5E5',
    marginTop: 6,
    fontSize: 16,
    padding: 10,
    fontFamily: 'Regular',
    alignItems: 'center',
  },
  name: {
    marginTop: 6,
  },
  message: {
    backgroundColor: '#E5E5E5',
    marginTop: 6,
    fontSize: 16,
    padding: 10,
    height: height / 4,
    textAlignVertical: 'top',
  },
});

export default styles;
