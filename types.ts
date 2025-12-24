// Represents the possible states of root detection.
export type RootStatus = 'checking' | 'rooted' | 'not-rooted' | 'error';

// Defines the interface for the Android bridge object expected to be exposed in the WebView.
export interface AndroidWebViewBridge {
  checkRootStatus(): Promise<boolean>;
  // Add other methods that the Android native code exposes to the JavaScript context.
}
