import { Platform } from 'react-native';

const fontAwesome = {
      iconFamily: 'FontAwesome',
      iconFontSize: (Platform.OS === 'ios') ? 5 : 15,
      iconLineHeight: (Platform.OS === 'ios') ? 5 : 15,
  };
