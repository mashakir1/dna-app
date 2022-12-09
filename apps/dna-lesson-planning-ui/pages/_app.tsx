// Imports
import type { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Styling
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: do we need the touch provider? https://www.npmjs.com/package/react-dnd-touch-backend
  return <DndProvider backend={HTML5Backend}>
    <Component {...pageProps} />
  </DndProvider>;
}

export default MyApp;
