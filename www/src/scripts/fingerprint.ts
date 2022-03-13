import FingerprintJS from "@fingerprintjs/fingerprintjs";

const FPPromise = FingerprintJS.load({ monitoring: false });
/*
(async () => {
  // Get the visitor identifier when you need it.
  const fp = await fpPromise;
  const result = await fp.get();
  console.log("Way 1: ", result.visitorId);
})();

fpPromise
  .then((fp) => fp.get())
  .then((result) => console.log("Way 2: ", result.visitorId));
*/