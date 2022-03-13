let version = {
  major: 0,
  minor: 1,
  patch: 10,
  stage: "Pre-alpha", // Alpha, Beta
};


export default {
  major: version.major,
  minor: version.minor,
  patch: version.patch,
  stage: version.stage,
  html: () => { return `<b>Ver:</b> ${version.major}.${version.minor}.${version.patch} <i>${version.stage}</i>`; },
  changelog: () => {
  return `<code>
    <ul class="list-unstyled">
	<li><h5>v0.1.10 Pre-alpha / 30/01/2022</h5></li>
	<li></li>
    <br/>
    <li><h5>v0.1.10 Pre-alpha / 29/01/2022</li>
    <li>- Statik siteden, dinamik siteye geçiş için çalışmalar başladı.</li>
    <li>- Şablon sistemi temeli atıldı.</li>
    <li>- "Dynamic Footer" şablonu oluşturuldu.</li>
    <li>- "Credits" şablonu oluşturuldu.</li>
    <li>- "Changelog" şablonu oluşturuldu.</li>
    <li>- "Project" sayfası için link eklendi.</li>
    <li>- Versiyon sistemi eklendi.</li>
    <li>- "Credits" tamamlandı.</li>
    <li>- "Tabler Icons" entegre edildi.</li>
    <li>- Site görünümü yenilendi</li>
    <br/>
    <li><h5>v0.1.0 Pre-alpha / 28/01/2022</h5></li>
    <li>- Proje oluşturuldu</li>
    </ul>
</code>`;
},
  ok: (value: any) => {
	return value != undefined;
  },
};
