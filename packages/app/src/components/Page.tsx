import { useEffect } from 'react';

import './Page.css'
import Music from './helpers/Music';

function BackButton() {
  return <a href="index.html">&laquoback</a>
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
    <body>
      <Music path={props.music} />
      <BackButton />
      <br/><br/>
      {props.content}
    </body>
  );
}
