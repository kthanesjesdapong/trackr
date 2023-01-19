declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string; }
  >;
}

/// <reference types="vite-plugin-svgr/client" />
