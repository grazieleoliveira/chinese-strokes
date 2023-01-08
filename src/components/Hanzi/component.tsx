import {IHanziProps} from '../Hanzi/types'
import React from 'react'
import WebView from 'react-native-webview'

export const Hanzi = ({character}: IHanziProps) => {
  const trimmedChar = character.trim()[0]

  const buildWebview = () => {
    if (character) {
      return `
      <div id="character-target-div"></div>
      <script src="https://cdn.jsdelivr.net/npm/hanzi-writer@2.2/dist/hanzi-writer.min.js"></script>
    <script> let writer = HanziWriter.create('character-target-div', '${trimmedChar}', {

    });
    writer.animateCharacter(); </script>
  `
    }

    return ''
  }

  return (
    <WebView
      originWhiteList={['*']}
      source={{html: buildWebview()}}
      mixedContentMode="always"
    />
  )
}

// 爽 很
