var template = `
<div id="ep-modals">
<div class="modal fade ep-modal" id="ep-modal-credits" tabindex="-1" aria-labelledby="modalCreditsLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header text-white bg-dark">
            <h5 id="modalCreditsLabel" class="modal-title">Credits:</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark">
            <p>Icons: <a rel="nofollow" target="_blank" href="https://tabler-icons.io/">Tabler Icons</a><br/>
            This web site is hosted on <a target="_blank" rel="nofollow" href="https://cloudbunny.net/aff.php?aff=120">CloudBunny</a><br/>
            And developed with <a rel="nofollow" target="_blank" href="https://nodejs.org/">Nodejs</a>, <a rel="nofollow" target="_blank" href="https://www.typescriptlang.org/">Typescript</a> and <a rel="nofollow" target="_blank" href="https://vitejs.dev/">Vitejs</a>.<br/><br/>
            Used Javascript libraries:<br/>
            <a rel="nofollow" target="_blank" href="https://github.com/fabiospampinato/cash">Cash Dom</a>,
            <a rel="nofollow" target="_blank" href="https://getbootstrap.com/">Bootstrap</a>,
            <a rel="nofollow" target="_blank" href="https://sass-lang.com/">SASS</a>,<br/>
            <a rel="nofollow" target="_blank" href="https://github.com/taylorhakes/promise-polyfill">Promise Polyfill</a>,
            <a rel="nofollow" target="_blank" href="https://github.com/fingerprintjs/fingerprintjs">fingerprintjs</a>,<br/>
            <a rel="nofollow" target="_blank" href="https://github.com/js-cookie/js-cookie">JS Cookie</a>.
            <a rel="nofollow" target="_blank" href="https://github.com/vbenjs/vite-plugin-html">Vite HTML Plugin</a>,<br/>
            <br/>Cover template by <a rel="nofollow" target="_blank" href="https://twitter.com/mdo">@mdo</a>.
            </p>
        </div>
    </div>
</div>
</div>
<div class="modal fade ep-modal" id="ep-modal-changelog" tabindex="-1" aria-labelledby="modalChangelogLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header text-white bg-dark">
            <h5 id="modalChangelogLabel" class="modal-title">Changelog:</h5>
            <button type="button" class="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark">
            <output id="changelogdata"></output>
        </div>
    </div>
</div>
</div>
</div>`;

function ModalsInit($:any, Bs:any, AppendTo:any, FindIn:any, Props:any) {
  const Modals = $(template).appendTo(AppendTo);

  $(Props.changelog_data).appendTo(Modals.find("output#changelogdata"));

  var Controller = {
    Credits: new Bs.Modal(Modals.find("#ep-modal-credits").get(0), {}),
    Changelog: new Bs.Modal(Modals.find("#ep-modal-changelog").get(0), {}),
  };

  FindIn.find(Props.credits).on("click", () => Controller.Credits.show());
  FindIn.find(Props.changelog).on("click", () => Controller.Changelog.show());
  return Modals;
}
export default ModalsInit;
