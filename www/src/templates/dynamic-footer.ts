var template =
  `<p id="ep-dynamic-footer" class="border-top my-2 py-2 text-muted">
<a id="credits">Credits</a> / <a id="changelog">Changelog</a><br/>
<output id="version"></output>
</p>`;

function DynamicFooterInit($: any, Bs: any, AppendTo: any, Props: any) {
  const DynamicFooter = $(template).appendTo(AppendTo);
  DynamicFooter.find("output#version").empty().append(Props.version);
  Bs != undefined;
  return DynamicFooter;
}

export default DynamicFooterInit;
