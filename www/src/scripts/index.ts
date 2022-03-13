// Libs
import * as bootstrap from "bootstrap";
//import Cookies from "js-cookie";// Js Cookie Kontrol
import $ from "cash-dom"; // DOM için
import version from "../../../version";

// Styles
import "../css/index.scss"; // stil

// Templates
//import Rendering from '../templates/rendering.ts';
import ModalsInit from "../templates/modals";
import DynamicFooterInit from "../templates/dynamic-footer";

// Dom Hazırsa çalıştır
$(() => {
  /* Demirbaş Değişkenler */
  const Body = $(document.body);
  const MainApp = Body.find("main#ep-app");
  const DynamicFooter = DynamicFooterInit(
    $,
    bootstrap,
    MainApp.find("footer"),
    {
      version: version.html(),
    },
  );
  const Modals = ModalsInit($, bootstrap, MainApp, DynamicFooter, {
    credits: "a#credits",
    changelog: "a#changelog",
    changelog_data: version.changelog(),
  });
  
  version.ok(Modals);
});
