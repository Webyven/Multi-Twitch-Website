import React from 'react'

const Stream = (props: any) => {
  let streamer: string = props.streamer

  return (
    <div>
      <iframe
        id={'embed_' + streamer}
        src={
          'https://player.twitch.tv/?muted=true&channel=' +
          streamer +
          '&parent=multitwitch.tv&parent=www.multitwitch.tv'
        }
        className='stream'
        height={800}
        width={1024}
      ></iframe>
    </div>
  )
}

export default Stream
