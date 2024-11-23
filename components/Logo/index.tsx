import React from "react"
import { Image, View } from "react-native"
import { styles } from './styles'

export function Logo() {
  return (
    <View>
      <Image 
        style={styles.logo}
        source={require("../../assets/logo.png")}
      />
    </View>
  )
}