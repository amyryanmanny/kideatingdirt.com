import { Page } from '../Page';
import { imgPath } from '../helpers';

function AndyPage() {
  return (
    <Page
      title="andy are you okay"
      content={
        <>
          <a href="https://github.com/HMcCullough/OFallonStein">link</a>
          <br/>
          <img src={imgPath("andy.png")}/>
        </>
      }
      music="andy.mp3"
    />
  )
}

export default AndyPage;
