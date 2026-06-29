export type QuestionId =
  | 'experience'
  | 'field'
  | 'english'
  | 'cv'
  | 'workAuth'
  | 'salary'
  | 'relocation';

export type ResultBandId = 'early' | 'developing' | 'good' | 'strong';

export type CareerFitAnswers = Partial<Record<QuestionId, string>>;

export type ScoredOption = {
  id: string;
  points: number;
};

export type CareerFitQuestionConfig = {
  id: QuestionId;
  maxPoints: number;
  options: ScoredOption[];
  hasInfoNote?: boolean;
};

export type ScoreResult = {
  rawScore: number;
  percentage: number;
  band: ResultBandId;
};

export type ResultBandConfig = {
  id: ResultBandId;
  min: number;
  max: number;
  ctaHref: string;
};

export type CareerFitInsights = {
  strengths: string[];
  improvements: string[];
  nextStep: string;
};
