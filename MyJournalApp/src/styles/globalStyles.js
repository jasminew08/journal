import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#3f784c",
    padding: 20,
  },

  // Logo
  cornerLogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    // React Native doesn't support position: fixed like web
  },

  // Titles
  h1: {
    fontFamily: "Rubik",
    fontSize: 30,
    color: "#c0bcb5",
    marginBottom: 5,
  },
  h2: {
    fontFamily: "Rubik",
    fontSize: 18,
    color: "#0054a5",
    marginTop: 0,
  },
  p: {
    fontFamily: "Rubik",
    fontWeight: "300",
    color: "white",
    fontSize: 16,
  },

  // Forms
  form: {
    maxWidth: 500,
    padding: 10,
  },
  inputDate: {
    width: 150,
    height: 60,
    fontSize: 14,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "white",
    fontFamily: "Quicksand",
    marginBottom: 10,
  },
  textArea: {
    width: "100%",
    height: 200,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    fontFamily: "Quicksand",
    marginBottom: 10,
  },
  submitBtn: {
    backgroundColor: "#c0bcb5",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: "flex-end",
  },

  // Entry Card
  entryCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  entryTitle: {
    fontFamily: "Rubik",
    fontSize: 24,
    color: "#c0bcb5",
    marginBottom: 10,
  },

  // Entries list
  entry: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 15,
    minHeight: 125,
    marginBottom: 10,
  },
  entryDate: {
    fontFamily: "Rubik",
    fontSize: 15,
    color: "#c0bcb5",
    marginBottom: 5,
  },
  entryText: {
    fontFamily: "Quicksand",
    fontSize: 16,
    color: "black",
  },

  // Picker (for provinces)
  picker: {
    width: 190,
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 10,
  },

  // NavBar container
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 2,
  },
  navButton: {
    fontFamily: "Rubik",
    fontSize: 10,
    color: "gray",
    textAlign: "center",
  },
});
