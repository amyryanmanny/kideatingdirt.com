import { imgPath } from "."

export default function Background({ path }: { path: string }) {
  return (
    <div style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${imgPath(path)})`,
    }}/>
  )
}
