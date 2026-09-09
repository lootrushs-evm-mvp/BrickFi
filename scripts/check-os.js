/**
 * Ensure the project is run on macOS.
 * Exits with a warning if the current OS is not Mac.
 */
const os = require("os");

const platform = process.platform;
const isMac = platform === "darwin";

if (!isMac) {
  const detected =
    platform === "win32"
      ? "Windows"
      : platform === "linux"
        ? "Linux"
        : platform;

  console.error("");
  console.error("══════════════════════════════════════════════════════════");
  console.error("  WARNING: Unsupported operating system detected");
  console.error("══════════════════════════════════════════════════════════");
  console.error("");
  console.error(`  Detected OS: ${detected} (${os.type()} ${os.release()})`);
  console.error("");
  console.error("  Please run this project on a macOS environment.");
  console.error("  BrickFi is intended to be developed and run on Mac.");
  console.error("");
  console.error("══════════════════════════════════════════════════════════");
  console.error("");
  process.exit(1);
}
