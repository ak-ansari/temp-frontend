import { DocCategory } from "./DocPreview.types";

export const extensionMapping: Record<string, DocCategory> = {
  doc: DocCategory.DOCUMENT,
  docx: DocCategory.DOCUMENT,
  dot: DocCategory.DOCUMENT,
  dotx: DocCategory.DOCUMENT,

  xls:  DocCategory.DOCUMENT,
  xlsx:  DocCategory.DOCUMENT,
  xlsm:  DocCategory.DOCUMENT,
  xlsb:  DocCategory.DOCUMENT,
  xlt:  DocCategory.DOCUMENT,
  xltx:  DocCategory.DOCUMENT,
  csv:  DocCategory.DOCUMENT,
  ods:  DocCategory.DOCUMENT,

  ppt:  DocCategory.DOCUMENT,
  pptx:  DocCategory.DOCUMENT,
  pptm:  DocCategory.DOCUMENT,
  pps:  DocCategory.DOCUMENT,
  ppsx:  DocCategory.DOCUMENT,
  odp:  DocCategory.DOCUMENT,

  pdf:  DocCategory.PDF,

  jpg:  DocCategory.IMAGE,
  jpeg:  DocCategory.IMAGE,
  png:  DocCategory.IMAGE,
  gif:  DocCategory.IMAGE,
  bmp:  DocCategory.IMAGE,
  tif:  DocCategory.IMAGE,
  tiff:  DocCategory.IMAGE,
  webp:  DocCategory.IMAGE,
  heic:  DocCategory.IMAGE,
  svg:  DocCategory.IMAGE,

  txt:  DocCategory.DOCUMENT,
  md:  DocCategory.DOCUMENT,
  rtf:  DocCategory.DOCUMENT,

  mp4: DocCategory.VIDEO,
  mov: DocCategory.VIDEO,
  avi: DocCategory.VIDEO,
  mkv: DocCategory.VIDEO,
  wmv: DocCategory.VIDEO,
  flv: DocCategory.VIDEO,
  webm: DocCategory.VIDEO,
  mpeg: DocCategory.VIDEO,
  mpg: DocCategory.VIDEO,
  m4v: DocCategory.VIDEO,
};
