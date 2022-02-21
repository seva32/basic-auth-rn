import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  input: {
    flex: 1,
    width: '100%',
  },
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingVertical: 12,
  },
  laoderSection: {
    flexDirection: 'row-reverse',
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
