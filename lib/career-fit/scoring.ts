import { CAREER_FIT_QUESTIONS, MAX_RAW_SCORE, RESULT_BANDS } from './config';
import type { CareerFitAnswers, ResultBandId, ScoreResult } from './types';

export function getOptionPoints(questionId: string, optionId: string): number {
  const question = CAREER_FIT_QUESTIONS.find((q) => q.id === questionId);
  const option = question?.options.find((o) => o.id === optionId);
  return option?.points ?? 0;
}

export function calculateRawScore(answers: CareerFitAnswers): number {
  return CAREER_FIT_QUESTIONS.reduce((total, question) => {
    const selected = answers[question.id];
    if (!selected) return total;
    return total + getOptionPoints(question.id, selected);
  }, 0);
}

export function calculatePercentage(rawScore: number): number {
  if (MAX_RAW_SCORE <= 0) return 0;
  const pct = Math.round((rawScore / MAX_RAW_SCORE) * 100);
  return Math.min(100, Math.max(0, pct));
}

export function getResultBand(percentage: number): ResultBandId {
  const band = RESULT_BANDS.find((b) => percentage >= b.min && percentage <= b.max);
  return band?.id ?? 'early';
}

export function scoreCareerFit(answers: CareerFitAnswers): ScoreResult {
  const rawScore = calculateRawScore(answers);
  const percentage = calculatePercentage(rawScore);
  const band = getResultBand(percentage);
  return { rawScore, percentage, band };
}

export function isAssessmentComplete(answers: CareerFitAnswers): boolean {
  return CAREER_FIT_QUESTIONS.every((q) => Boolean(answers[q.id]));
}
