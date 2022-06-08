import Music from "./Music";

const imgPath = (path: string) => `${process.env['PUBLIC_URL']}/pic/${path}`
const musicPath = (path: string) => `${process.env['PUBLIC_URL']}/music/${path}`

export {
  imgPath,
  musicPath,
  Music,
}
