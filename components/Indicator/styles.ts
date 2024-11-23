import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  indicator: {
    width: 'auto',
    flexDirection: 'row'
  },

  toDoCreated: {
    fontSize: 16,
    color: '#4EA8DE',
    fontWeight: 'bold',
    justifyContent: 'flex-start'
  },

  toDoDone: {
    fontSize: 16,
    color: '#8284FA',
    fontWeight: 'bold',
  },

  counter: {
    width: 25,
    height: 19,
    fontSize: 12,
    backgroundColor: '#333333',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },

  counterText: {
    fontWeight: 'bold',
    color: '#D9D9D9',
  }
})