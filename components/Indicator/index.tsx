import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type IndicatorProps = {
  type: 'created' | 'done',
  quantity: number
}

export function Indicator({type, quantity}: IndicatorProps) {
  return (
    <View style={styles.indicator}>
      <Text style={type === 'created' ? styles.toDoCreated : styles.toDoDone}>
        {type === 'created' ? 'Criadas' : 'Concluídas'}
      </Text>
      <View style={styles.counter}>
        <Text style={styles.counterText}>
          {quantity}
        </Text>
      </View>
    </View>
  )
}