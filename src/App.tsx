import {Hanzi} from '../src/components/Hanzi'
import {useState} from 'react'
import {TextInput} from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

const App = () => {
  const [text, onChangeText] = useState('')
  console.log("text", text)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
        />
        <Hanzi  character={text} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
