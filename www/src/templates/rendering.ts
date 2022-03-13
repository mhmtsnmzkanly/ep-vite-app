var template = `
<b>Hello World!</b>
`;
/*
* Doc : document
* $ : Cash()
* Bs : bootstrap
*/
function render(Doc:any, $:any, Bs:any) {
  $(template).appendTo(Doc.body);
  Bs != undefined;
}

export default render;
