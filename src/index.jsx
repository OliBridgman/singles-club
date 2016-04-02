import React from 'react'
import { render } from 'react-dom'

import { PlayButton, Progress, Icons } from 'react-soundplayer/components'
import { SoundPlayerContainer } from 'react-soundplayer/addons'

import Player from './components/Player.jsx'

const { SoundCloudLogoSVG } = Icons
const clientId = ''
const streamUrl = 'https://soundcloud.com/theatticrattle/a-dueling-banjos'

class App extends React.Component {
  render() {
    return (
      <SoundPlayerContainer resolveUrl={streamUrl} clientId={clientId}>
        <Player />
      </SoundPlayerContainer>
    )
  }
}

render(<App />, document.getElementById('app'))
