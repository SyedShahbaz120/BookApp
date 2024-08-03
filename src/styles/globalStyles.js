

import { StyleSheet } from 'react-native';
import { colors } from '../data/colors'; 

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  button: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default globalStyles;
