export const disableFirefoxOnIphone = (setIsFirefox) => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isFirefoxOnIphone = userAgent.includes("fxios");

  setIsFirefox(isFirefoxOnIphone);
};
