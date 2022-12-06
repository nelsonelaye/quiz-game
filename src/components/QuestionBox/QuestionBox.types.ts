type options = {
  value: string;
  isCorrect: boolean;
};

export interface questions {
  question: string;
  options: Array<options>;
}
