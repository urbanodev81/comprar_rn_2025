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
    color: "#db0a0a",
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
    paddingTop: 32,
  },
  header: {
    width:"100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e4E6EC",
    paddingBottom: 12
  },
  clearButton: {
    marginLeft:"auto"
  },
  clearText : {
    fontSize: 12,
    color: "#828282",
    fontWeight: 600,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEF0F5',
    marginVertical: 16,
    marginTop: 12,
  },
  flatListContent: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  empty: {
    fontSize: 24,
    color: '#db0a0a',
    textAlign: 'center',
    marginTop: 20,
  },
});
