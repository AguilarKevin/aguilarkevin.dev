declare module 'extract-files/extractFiles.mjs' {
  type Extractable = Blob | File

  export default function extractFiles<TFile = Extractable>(
    value: any,
    isExtractableFile: (value: any) => boolean,
    path?: string
  ): {
    clone: any
    files: Map<TFile, string[]>
  }
}

declare module 'extract-files/isExtractableFile.mjs' {
  export default function isExtractableFile(value: any): boolean
}

/* eslint-disable */
declare type Maybe<T> = T | null
