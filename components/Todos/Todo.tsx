import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type MarkerProps = {
  isChecked: boolean,
  onChange: () => void,
}

function Marker({isChecked, onChange}: MarkerProps) {
  if (isChecked) {
    return (
      <TouchableOpacity style={styles.markerChecked} onPress={onChange} >
        <Image style={styles.markerChecked} source={require("../../assets/check.png")} />
      </TouchableOpacity>
    );
  }
  
  return <TouchableOpacity style={styles.markerUnchecked} onPress={onChange}/>
}

type TodoProps = {
  text: string,
  checked: boolean,
  onChange: () => void,
  onDelete: () => void
}

export function Todo({text, checked, onChange, onDelete}: TodoProps) {


  return (
    <View style={styles.todo}>
      <Marker isChecked={checked} onChange={() => onChange()}/>
      <Text style={checked ? styles.textDone : styles.text}>
        {text}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <Image style={styles.delete} source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}