type ParagraphData = {
  text: string
}

type HeaderData = {
  text: string
  level: number
}

type ListData = {
  type: "unordered" | "ordered"
  items: string[]
}

type AttachesData = {
  file: {
    url: string
    size: number
    name: string
    extension: string
  }
  title: string
}

type ImgData = {
  file: {
    url: string
  }
  withBorder: boolean
  withBackground: boolean
  stretched: boolean
  caption: string
}

type BlockData<T extends string> =
  T extends "paragraph" ? ParagraphData :
  T extends "header" ? HeaderData :
  T extends "list" ? ListData :
  T extends "attaches" ? AttachesData :
  T extends "image" ? ImgData :
  never

interface Block<T extends string> {
  id: string
  type: T
  data: BlockData<T>
}

interface EditorContent {
  time: number
  blocks: Block<string>[]
}