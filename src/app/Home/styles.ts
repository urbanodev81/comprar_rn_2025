import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#d0d2d8',
    paddingTop: 62,
    alignItems: 'center',

  },
  text:{
    fontSize: 28,
    fontWeight: 700,  
    color: "red",
    textAlign: "center"
  },
  logo: {
    height: 34,
    width: 134
  },
  form: {
    width: '100%',
    paddingHorizontal: 16, 
    gap: 7,
    marginTop: 42
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff', 
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24, 
    marginTop: 24,
  }

});
