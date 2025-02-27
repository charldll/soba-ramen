export const disableIfNoCamera = async (setHasCamera) => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const hasCamera = devices.some((device) => device.kind === "videoinput");
    setHasCamera(hasCamera);
  } catch (error) {
    console.error("Error checking camera:", error);
    setHasCamera(false);
  }
};
