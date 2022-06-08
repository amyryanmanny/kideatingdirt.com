
function musicPath(path: string) {
  return `${process.env['PUBLIC_URL']}/music/${path}`;
}

type Props = {
  path: string | undefined;
}

function Music(props: Props) {
  return (
    <>
      {props.path && <audio autoPlay loop>
        <source src={musicPath(props.path)} type="audio/mpeg" />
      </audio>}
    </>
  );
}

export default Music;
