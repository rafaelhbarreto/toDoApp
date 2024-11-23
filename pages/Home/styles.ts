import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    padding: 24,
    flex: 1
  },

  form: {
    flexDirection: 'row',
  },

  input: {
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 6,
    height: 54,
    color: '#fff',
    flex: 1
  },

  inputFocus: {
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 6,
    height: 54,
    color: '#fff',
    flex: 1,
    borderColor: '#5E60CE',
    borderWidth: 1
  },

  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    marginLeft: 5,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    borderColor: '#fff',
    borderRadius: 6,
    padding: 16
  },

  indicators: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  todos: {
    marginTop: 20
  }
})