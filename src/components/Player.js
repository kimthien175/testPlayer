import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import TrackPlayer, {useTrackPlayerProgress} from 'react-native-track-player';

function ProgressBar(){
    //const progress = useTrackPlayerProgress();

    return (
        <View style={styles.progress}>
          <View style={{ flex: 1, backgroundColor: "red" }} />
          <View
            style={{
              flex: 0.5, //progress.duration - progress.position,
              backgroundColor: "grey"
            }}
          />
        </View>
      );
}

function ControlButton({ title, onPress }) {
    return (
      <TouchableOpacity style={styles.controlButtonContainer}>
        <Text style={styles.controlButtonText}>{title}</Text>
      </TouchableOpacity>
    );
}

export default class Player extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={{width:"75%", aspectRatio: 1}}>
                    <Image style={styles.cover} source={require("./doggo.jpg")}/>
                </View>
                <Text style={styles.title}>Track Name</Text>
                <Text style={styles.artist}>Artist</Text>
                <ProgressBar/>
                <View style={styles.controls}>
                    <ControlButton title={"<<"} />
                    <ControlButton title={"\|\|"} />
                    <ControlButton title={">>"}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      //elevation: 1,
      //borderRadius: 4,
      //shadowRadius: 2,
      //shadowOpacity: 0.1,
      //alignItems: "center",
      //shadowColor: "black",
      //backgroundColor: "green",
      //shadowOffset: { width: 0, height: 1 },
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#192428'
    },
    cover: {
        aspectRatio: 1, 
        resizeMode:"cover", 
        flex:1, 
        borderRadius: 4, 
        shadowColor:"white"
    },
    progress: {
      height: 1,
      width: "90%",
      marginTop: 10,
      flexDirection: "row"
    },
    title: {
        fontSize: 20,
        color: "white",
        margin:10
    },
    artist: {
      fontWeight: "bold",
      fontSize:15,
      color:"#39ace7"
    },
    controls: {
      marginVertical: 20,
      flexDirection: "row"
    },
    controlButtonContainer: {
      flex: 1
    },
    controlButtonText: {
      fontSize: 18,
      textAlign: "center",
      color:"white"
    }
  });