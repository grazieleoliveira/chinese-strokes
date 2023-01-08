import {ColorValue} from 'react-native'

export interface IHanziProps {
  strokeColor: ColorValue
  radicalColor: ColorValue
  enableAnimation: boolean
  showOutline: boolean
  strokeAnimationSpeed: number
  delayBetweenStrokes: number
  delayBetweenLoops: number
  enableLoopAnimation: boolean
  enableQuiz: boolean
}
