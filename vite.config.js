// Kütüphaneler
import path from "path";
import html from "vite-plugin-html"; // Sıkıştırma ve EJS Eklentisi

const Path = {
  Cache: path.resolve(__dirname, "./www/cache"), // Dosyalar derlenirken oluşturulan önbellek (Cache)
  Public: path.resolve(__dirname, "./www/public"), // Dışarı aktarılan dosyalar (Assets)
  Source: path.resolve(__dirname, "./www/src"), // Kaynak Dosyalar (Source)
  Build: path.resolve(__dirname, "./www/build"), // Derlenmiş Dosyalar (Çıktı)
};

const htmlPluginConfig = {
  minify: true, // Sıkıştırma
  inject: {
    data: {
      appTitle: "EphemeralRealm",
      appDesc: "Are what we see, is an ephemeral illusion.",
      appKeys: "ephemeral,realm,xyz, are, what, we, see, is, an, illusion",
      appUrl: "https://www.ephemeralrealm.xyz",
      appContactAddress: "root@ephemeralrealm.xyz",
      appCopyright:
        "© 2021-2022 EphemeralRealm/ephemeralrealm.xyz, All rights reserved.",
      appTargetLanguage: "tr-TR",
      appPreviewImage: "",
      appType: "website",
    },
    tags: /*isBuild
      ? [
          {
            tag: 'script',
            attrs: {
              src: getAppConfigSrc(),
            },
          },
        ]
      : */
      [],
  },
};

export default {
  // vitejs eklentileri
  plugins: [
    html(htmlPluginConfig),
  ],
  base: "",
  root: Path.Source,
  cacheDir: Path.Cache,
  publicDir: Path.Public,

  resolve: {
    alias: {
      "@": Path.Source,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["node_modules"],
      },
    },
  },

  // Web Sunucusu Ayarları
  server: {
    host: true,
    port: 80,
    origin: "http://127.0.0.1:80/",
  },

  // Derleme Ayarları
  build: {
    outDir: Path.Build,
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
}; // Dışarı Aktar
