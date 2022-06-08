import { useEffect, useState } from 'react';

function musicPath(path: string) {
  return `${process.env['PUBLIC_URL']}/music/${path}`;
}

const VolumeIcon = () => <>&#128266;</>
const VolumeMutedIcon = () => <>&#128264;</>

type Props = {
  path: string;
}

function Music(props: Props) {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (muted) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [muted])

  const toggleMute = () => setMuted(!muted);

  return (
    <>
      <audio id="audio" autoPlay loop muted={muted}>
        <source
          src={musicPath(props.path)}
          type="audio/mpeg"
        />
      </audio>
      <button
        onClick={toggleMute}
        style={{ float: 'right' }}
      >
        {muted ? <VolumeMutedIcon/> : <VolumeIcon/>}
      </button>
    </>
  )
}

export default Music;
