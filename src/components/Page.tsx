import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Page.css'
import Music from './media/Music';

function BackButton() {
  const navigate = useNavigate();
  return (
    <a href="#" onClick={() => navigate(-1)}>&laquo;back</a>
  )
};

type Props = {
  children: ReactNode;
  title: string;
  byline?: string;
  music?: string;
}

export function Page(props: Props) {
  useEffect(
    () => { document.title = props.title },
    [props.title],
  )

  const byline = (
    <>
      <p className="byline" style={{'marginLeft': '1em'}}><i>{props.byline}</i></p>
      <br/>
    </>
  );

  return (
    <>
      {props.music && <Music path={props.music}/>}
      <BackButton />
      <br/><br/>
      {props.byline && byline}
      {props.children}
    </>
  );
}
