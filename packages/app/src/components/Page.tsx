import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Page.css'
import Music from './media/Music';

function BackButton() {
  return <Link to="/">&laquo;back</Link>
}

type Props = {
  title: string;
  content: JSX.Element;
  music?: string;
}

export function Page(props: Props) {
  useEffect(
    () => { document.title = props.title },
    [props.title],
  )

  return (
    <>
      {props.music && <Music path={props.music}/>}
      <BackButton />
      <br/><br/>
      {props.content}
    </>
  );
}
