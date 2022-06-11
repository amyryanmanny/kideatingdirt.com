export { default as Music } from "./Music";

export const imgPath = (path: string) => `${process.env['PUBLIC_URL']}/pic/${path}`
export const musicPath = (path: string) => `${process.env['PUBLIC_URL']}/music/${path}`
