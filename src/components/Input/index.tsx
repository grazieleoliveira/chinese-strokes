import searchAnimation from '../../../assets/icons8-search.json'
import * as S from './styles'
import Lottie from 'lottie-react-native'
import React, {useRef} from 'react'
import {GestureResponderEvent, TextInputProps} from 'react-native'

interface IInput extends TextInputProps {
    handleIconTouchable?: ((event: GestureResponderEvent) => void) | undefined
}

export const Input = ({handleIconTouchable, ...props}: IInput) => {
  const animationRef = useRef<Lottie>(null)
  const hasText = Boolean(props.value)
  hasText && animationRef.current?.play(0, 12)
  !hasText && animationRef.current?.play(12, 0)

  return (
    <S.Container>
      <S.InputContainer style={{elevation: 7}}>
        <S.Input {...props} />
        <S.IconTouchable onPress={handleIconTouchable}>
          <Lottie
            source={searchAnimation}
            ref={animationRef}
            style={{width: 24}}
            loop={false}
          />
        </S.IconTouchable>
      </S.InputContainer>
    </S.Container>
  )
}
