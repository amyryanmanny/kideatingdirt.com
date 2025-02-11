import { Page } from '../Page';
import { imgPath } from '../media';

export default function AndyPage() {
  return (
    <Page
      title="andy are you okay"
      music="andy.mp3"
    >
      <a href="https://github.com/HMcCullough/OFallonStein">link</a>
      <br/>
      <img src={imgPath("andy_head.png")}/>
    </Page>
  )
}
