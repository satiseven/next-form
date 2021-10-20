export const RECORD_START = "RECORD_START";
export const RECORD_LIST = "RECORD_LIST";
export interface recordsIn {
  data: string;
  loading: boolean;
  error: string;
}
interface recordStart {
  type: typeof RECORD_START;
}
interface recordList {
  type: typeof RECORD_LIST;
  payload: recordsIn;
}
export type recordAction = recordList | recordStart;
