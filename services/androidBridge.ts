import { AndroidWebViewBridge } from '../types';

/**
 * AndroidBridge Class
 * This class provides a standardized way for the React application to interact
 * with native Android functionality exposed through a WebView bridge.
 *
 * In a real Android WebView setup, the Android side would inject a JavaScript
 * object (e.g., `window.Android`) into the WebView context. This object would
 * contain methods that call native Java/Kotlin code.
 *
 * For the purpose of this React demo, we've implemented a mock `checkRootStatus`
 * method that simulates the result of a root detection check.
 *
 * IMPORTANT: This `checkRootStatus` method in a real application would trigger
 * actual root detection logic implemented in Java/Kotlin.
 *
 * Why HTML/CSS/JS alone cannot detect root:
 * Browser environments (including WebViews) are sandboxed. They have limited
 * access to the underlying operating system's file system, process information,
 * and system commands. Root detection typically involves:
 * 1. Checking for the existence of `su` binary in various system paths.
 * 2. Looking for root management apps (Magisk, SuperSU) by their package names or file paths.
 * 3. Examining build properties (e.g., `ro.build.tags` for 'test-keys').
 * 4. Attempting to execute privileged commands.
 * These operations are privileged and are blocked by the browser's security model.
 * A native Android component (Java/Kotlin) is required to perform these checks
 * and securely communicate the result back to the JavaScript frontend.
 */
class AndroidBridgeImpl {
  // Check if the Android bridge object is available.
  private isAndroidBridgeAvailable(): boolean {
    return typeof (window as any).Android !== 'undefined';
  }

  /**
   * Calls the native Android method to check root status.
   * If running outside an Android WebView, it provides a mock response.
   * @returns A Promise that resolves to a boolean indicating if the device is rooted.
   */
  public async checkRootStatus(): Promise<boolean> {
    if (this.isAndroidBridgeAvailable()) {
      const androidBridge = (window as any).Android as AndroidWebViewBridge;
      try {
        // In a real app, this calls the native Android method
        return await androidBridge.checkRootStatus();
      } catch (error) {
        console.error('Error calling native Android checkRootStatus:', error);
        // Fallback to a safe (non-rooted) assumption or re-throw
        return false; 
      }
    } else {
      // Mock implementation for development/web preview.
      // In a real scenario, this branch would not be executed inside the WebView.
      console.warn(
        'Running in a non-Android WebView environment. Using mock root detection result.'
      );
      // Simulate root detection result: randomly rooted or not, or always not rooted for demo.
      // For this demo, let's always return `false` (not rooted) unless explicitly stated.
      // To test the rooted state, you can temporarily change `false` to `true` here.
      // You could also add a URL parameter to control this for testing:
      // const urlParams = new URLSearchParams(window.location.search);
      // return urlParams.get('rooted') === 'true';
      return false;
    }
  }

  // You can add more methods here to expose other native functionalities
  // public async showToast(message: string): Promise<void> {
  //   if (this.isAndroidBridgeAvailable()) {
  //     const androidBridge = (window as any).Android as AndroidWebViewBridge;
  //     return await androidBridge.showToast(message);
  //   } else {
  //     console.log(`Mock Toast: ${message}`);
  //   }
  // }
}

export const AndroidBridge = new AndroidBridgeImpl();
