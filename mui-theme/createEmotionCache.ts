import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

type insertionPointType = Element | null ;

export default function createEmotionCache() {
  let insertionPoint: insertionPointType = null;

  if (isBrowser) {
    const emotionInsertionPoint: insertionPointType = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    );

    // eslint-disable-next-line unused-imports/no-unused-vars
    insertionPoint = emotionInsertionPoint ?? null;
  }

  return createCache({ key: "mui-style" });
}
