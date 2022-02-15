module.exports = {
  name: "Terra Station",
  logo: "https://assets.terra.money/icon/station-extension/icon.png",
  script: function () {
    const STORAGE_KEY = "__terra-readonly-wallet-storage-key__";

    const action = prompt('You want to ("view" or "disconnect"):', "view");

    if (!action) return;

    if (action.toLowerCase() === "view") {
      const address = prompt("Change account to:");

      if (address) {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            terraAddress: address,
            network: {
              name: "mainnet",
              chainID: "columbus-5",
              lcd: "https://lcd.terra.dev",
              mantle: "https://mantle.terra.dev",
            },
          })
        );
        window.location.reload();
      }
    } else if (action.toLowerCase() === "disconnect") {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    } else {
      alert('Please choose either "view" or "disconnect"');
    }
  },
};
