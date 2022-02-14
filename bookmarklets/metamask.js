module.exports = {
  name: "MetaMask",
  logo: "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg",
  script: function () {
    const address = prompt("Change account to:");
    if (address) {
      ethereum.emit("accountsChanged", [address]);
    }
  },
};
