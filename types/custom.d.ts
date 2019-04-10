//import 赋值，默认给svg导出
declare module '*.svg' {
  const content: any;
  export default content;
}