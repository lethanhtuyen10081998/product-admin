export interface Log {
  id?: number;
  content?: string;
  module?: string;
  error?: string;
  target_id?: null;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
  input?: string;
  step?: string;
  process_id?: string;
}
