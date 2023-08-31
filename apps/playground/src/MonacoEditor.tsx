import { useEffect, useRef } from "react"
import * as monaco from 'monaco-editor';

export interface MonacoEditorProps {
  width: number;
  height: number;
}

export function MonacoEditor({ width, height }: MonacoEditorProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("useEffect", elementRef.current);

    if (elementRef.current) {
      window.MonacoEnvironment = {
        getWorkerUrl: function (moduleId, label) {
          if (label === 'json') {
            return 'monaco/vs/language/json/json.worker.js';
          }
          if (label === 'css' || label === 'scss' || label === 'less') {
            return 'monaco/vs/language/css/css.worker.js';
          }
          if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return 'monaco/vs/language/html/html.worker.js';
          }
          if (label === 'typescript' || label === 'javascript') {
            return 'monaco/vs/language/typescript/ts.worker.js';
          }
          return 'monaco/vs/editor/editor.worker.js';
        }
      };

      const editor = monaco.editor.create(elementRef.current, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
        language: 'javascript'
      });

      editor.layout({
        width,
        height
      });
    }

  }, [elementRef.current])

  return <div ref={elementRef} style={{ width: `${width}px`, height: `${height}px` }} />
}






