export interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

export interface LogEntry {
  Event: string;
  Counts: number;
  'Occured At': string;
}
