export * from "./jsx-runtime-internal.cjs";
import { JSX as OriginalNS } from "./jsx-runtime-internal.cjs";

declare global {
  namespace JSX {
    interface IntrinsicElements extends OriginalNS.IntrinsicElements {}
  }
}