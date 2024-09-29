import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E617E'
  },
  bigImage: {
    resizeMode: 'contain',
    width: 200,  // Set your desired width
    height: 200, // Set your desired height
  },
  smallImage: {
    resizeMode: 'contain',
    width: 100,  // Set your desired width for small image
    height: 100, // Set your desired height for small image
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    width: 200
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  redButton: {
    backgroundColor: '#F15F5F',
  },
  orangeButton: {
    backgroundColor: '#FFB800',
  },
  grayButton: {
    backgroundColor: '#B6B5BD',
  },
  blackButton: {
    backgroundColor: '#020202',
  },
});

export default styles;
