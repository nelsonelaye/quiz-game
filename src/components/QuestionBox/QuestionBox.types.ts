export interface option {
  value: string;
  isCorrect: boolean;
  isSelected: boolean;
}

export interface questions {
  question: string;
  options: Array<option>;
}
