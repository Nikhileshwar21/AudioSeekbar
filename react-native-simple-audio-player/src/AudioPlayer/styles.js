import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  rowContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor:"white",
  },
  iconContainer: {
    alignSelf: "center",
    position: "relative",
    

  },
  playBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    
  },
  sliderContainer: {
    paddingHorizontal: 25,
    paddingBottom: 10,
    width: "100%",
    paddingTop: -25,
    marginTop:-40,

  },
  slider: {
    height: 30,
    width: "80%",
    marginBottom: 10,
    marginLeft: 60,
  },
  durationContainer: { flexDirection: "row", justifyContent: "space-between", marginTop:-10, color:'#000000'},
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    marginBottom: 10,
    marginRight: 305,
    color:'#000000',
    
  },
  crossLine: {
    position: "absolute",
    transform: [ {rotate: "-60deg"} ],
    top: 15,
    left: -1,
    width: 30,
    height: 1,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
  },

  
  timeText: {
    color: '#000000',
    fontSize: 12,
    marginLeft:65,

  },
  playIcon: { height: 40, width: 40, resizeMode: 'contain' },
});
