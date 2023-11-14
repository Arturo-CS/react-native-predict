import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

function ButtonCamera({title, onPress, icon, color}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Entypo name={icon} size={28} color={color ? color : '#919191'}/>
        <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: '700',
        fontSize: 16,
        color: '#919191',
        marginLeft: 10
    }
})

export default ButtonCamera;