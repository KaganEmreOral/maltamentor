import type { CareerFitQuestionConfig, ResultBandConfig } from './types';

/** Question order and scoring weights — update points here without touching UI. */
export const CAREER_FIT_QUESTIONS: CareerFitQuestionConfig[] = [
  {
    id: 'experience',
    maxPoints: 12,
    options: [
      { id: 'lessThan1', points: 2 },
      { id: '1to2', points: 6 },
      { id: '3to5', points: 10 },
      { id: '6to9', points: 12 },
      { id: '10plus', points: 11 },
    ],
  },
  {
    id: 'field',
    maxPoints: 14,
    options: [
      { id: 'software', points: 14 },
      { id: 'devops', points: 14 },
      { id: 'security', points: 13 },
      { id: 'data', points: 13 },
      { id: 'qa', points: 11 },
      { id: 'support', points: 9 },
      { id: 'product', points: 9 },
      { id: 'design', points: 7 },
      { id: 'entry', points: 4 },
      { id: 'other', points: 7 },
    ],
  },
  {
    id: 'english',
    maxPoints: 15,
    options: [
      { id: 'notComfortable', points: 2 },
      { id: 'basic', points: 6 },
      { id: 'someDifficulty', points: 10 },
      { id: 'comfortable', points: 14 },
      { id: 'fluent', points: 15 },
    ],
  },
  {
    id: 'cv',
    maxPoints: 15,
    options: [
      { id: 'notPrepared', points: 2 },
      { id: 'majorImprovement', points: 6 },
      { id: 'notTailored', points: 10 },
      { id: 'wellStructured', points: 13 },
      { id: 'activelyTailored', points: 15 },
    ],
  },
  {
    id: 'workAuth',
    maxPoints: 14,
    hasInfoNote: true,
    options: [
      { id: 'euEea', points: 14 },
      { id: 'rightToWork', points: 14 },
      { id: 'sponsorship', points: 7 },
      { id: 'unsure', points: 4 },
    ],
  },
  {
    id: 'salary',
    maxPoints: 14,
    options: [
      { id: 'notResearched', points: 2 },
      { id: 'targetOnly', points: 6 },
      { id: 'salaryOnly', points: 9 },
      { id: 'compared', points: 12 },
      { id: 'realistic', points: 14 },
    ],
  },
  {
    id: 'relocation',
    maxPoints: 16,
    options: [
      { id: 'casual', points: 3 },
      { id: 'withinYear', points: 7 },
      { id: '3to6months', points: 11 },
      { id: '1to3months', points: 14 },
      { id: 'inMalta', points: 16 },
    ],
  },
];

export const MAX_RAW_SCORE = CAREER_FIT_QUESTIONS.reduce((sum, q) => sum + q.maxPoints, 0);

export const RESULT_BANDS: ResultBandConfig[] = [
  { id: 'early', min: 0, max: 39, ctaHref: '/blog' },
  { id: 'developing', min: 40, max: 59, ctaHref: '/contact' },
  { id: 'good', min: 60, max: 79, ctaHref: '/packages' },
  { id: 'strong', min: 80, max: 100, ctaHref: '/contact' },
];
