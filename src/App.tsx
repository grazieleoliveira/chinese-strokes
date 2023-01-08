import {Hanzi} from '../src/components/Hanzi'
import {useState} from 'react'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import { Input } from './components/Input'

const App = () => {
  const [text, setText] = useState('')
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Input
          onChangeText={setText}
          value={text}
          placeholder="Search your character!"
          placeholderTextColor={"grey"}
          handleIconTouchable={() => setText('')}
        />
        <Hanzi  character={text} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
