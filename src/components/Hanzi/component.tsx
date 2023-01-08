import React from 'react'
import WebView from 'react-native-webview'


export const Hanzi: React.FC = () => {
  const INJECTED_JAVASCRIPT = `
    let writer = HanziWriter.create('character-target-div', '霸', {
  });
  writer.animateCharacter();
  `

  const html = `
    <div id="character-target-div"></div>
    <script src="https://cdn.jsdelivr.net/npm/hanzi-writer@2.2/dist/hanzi-writer.min.js"></script>
    `

  return (
    <WebView
      originWhiteList={['*']}
      source={{html}}
      mixedContentMode="always"
      injectedJavaScript={INJECTED_JAVASCRIPT}
    />
  )
}

