declare module '*.pdf' {
  const src: string
  export default src
}

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
