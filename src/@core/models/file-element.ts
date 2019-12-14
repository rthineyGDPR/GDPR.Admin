export interface FileElement {
  fileType?: string;
  id: string;
  isFolder: boolean;
  name: string;
  parent: string;
  path: string;
  reload?: boolean;
  size?: number;
  url: string;
  modifiedOn: string;
}
