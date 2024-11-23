import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  todo: {
    width: '100%',
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },

  markerUnchecked: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderColor: '#4EA8DE',
    borderRadius: 100,
    borderWidth: 2,
    marginRight: 16,
  },

  markerChecked: {
    marginRight: 6,
  },

  text: {
    width: '70%',
    fontSize: 14,
    color: '#F2F2F2',
  },

  textDone: {
    width: '70%',
    fontSize: 14,
    color: '#F2F2F2',
    textDecorationLine: 'line-through',
  },

  delete: {
    width: 35,
    alignSelf: 'center',
  },
});