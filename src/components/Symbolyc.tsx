import { useState } from "react";

export const Symbolic = ({ time, words }: { time: number; words: string | string[] }) => {
  const [symbols, setSymbols] = useState(words);
};
