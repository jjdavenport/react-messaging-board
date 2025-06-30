import { createContext } from "react";

export type DataType = {
  data: [{ user: string; text: string; id: number }] | null;
  fetchData: () => Promise<void>;
};

export type MessageType = {
  text: string;
  user: string;
  id: number;
};

export const DataContext = createContext<DataType | undefined>(undefined);
