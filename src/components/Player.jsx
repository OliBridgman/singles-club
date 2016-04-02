import React from 'react'

export default class Player extends React.Component {
  play() {
    let { soundCloudAudio, playing } = this.props
    if (playing) {
      soundCloudAudio.pause()
    } else {
      soundCloudAudio.play()
    }
  }

  render() {
    let { track, playing } = this.props

    if (!track) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>{track.title}</h2>
        <button onClick={this.play.bind(this)}>
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    )
  }
}
