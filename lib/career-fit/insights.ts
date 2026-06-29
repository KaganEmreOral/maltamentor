import { getOptionPoints } from './scoring';
import type { CareerFitAnswers, CareerFitInsights } from './types';

const ENGLISH_HIGH = new Set(['comfortable', 'fluent']);
const ENGLISH_LOW = new Set(['notComfortable', 'basic']);
const CV_HIGH = new Set(['wellStructured', 'activelyTailored']);
const CV_LOW = new Set(['notPrepared', 'majorImprovement']);
const SALARY_LOW = new Set(['notResearched', 'targetOnly']);
const RELOCATION_LOW = new Set(['casual', 'withinYear']);
const EXPERIENCE_HIGH = new Set(['3to5', '6to9', '10plus']);

function pushUnique(list: string[], key: string) {
  if (!list.includes(key)) list.push(key);
}

/** Returns translation keys under careerFit.insights.* */
export function deriveInsightKeys(answers: CareerFitAnswers): CareerFitInsights {
  const strengths: string[] = [];
  const improvements: string[] = [];

  const english = answers.english;
  if (english && ENGLISH_HIGH.has(english)) {
    pushUnique(strengths, 'englishHigh');
  }
  if (english && ENGLISH_LOW.has(english)) {
    pushUnique(improvements, 'englishLow');
  }

  const cv = answers.cv;
  if (cv && CV_HIGH.has(cv)) {
    pushUnique(strengths, 'cvHigh');
  }
  if (cv && CV_LOW.has(cv)) {
    pushUnique(improvements, 'cvLow');
  }

  const workAuth = answers.workAuth;
  if (workAuth === 'sponsorship') {
    pushUnique(improvements, 'sponsorship');
  }
  if (workAuth === 'unsure') {
    pushUnique(improvements, 'workAuthUnsure');
  }
  if (workAuth === 'euEea' || workAuth === 'rightToWork') {
    pushUnique(strengths, 'workAuthClear');
  }

  const salary = answers.salary;
  if (salary && SALARY_LOW.has(salary)) {
    pushUnique(improvements, 'salaryLow');
  }
  if (salary === 'compared' || salary === 'realistic') {
    pushUnique(strengths, 'salaryHigh');
  }

  const relocation = answers.relocation;
  if (relocation && RELOCATION_LOW.has(relocation)) {
    pushUnique(improvements, 'relocationLow');
  }
  if (relocation === '1to3months' || relocation === 'inMalta') {
    pushUnique(strengths, 'relocationHigh');
  }

  const experience = answers.experience;
  const expPoints = experience ? getOptionPoints('experience', experience) : 0;
  const cvPoints = cv ? getOptionPoints('cv', cv) : 0;
  if (experience && EXPERIENCE_HIGH.has(experience) && cv && CV_LOW.has(cv)) {
    pushUnique(improvements, 'experienceCvGap');
  }
  if (expPoints >= 10) {
    pushUnique(strengths, 'experienceSolid');
  }

  if (strengths.length === 0) {
    pushUnique(strengths, 'defaultStrength');
  }
  if (improvements.length === 0) {
    pushUnique(improvements, 'defaultImprove');
  }

  let nextStep = 'nextStepExplore';
  if (workAuth === 'sponsorship' || workAuth === 'unsure') {
    nextStep = 'nextStepWorkAuth';
  } else if (cv && CV_LOW.has(cv)) {
    nextStep = 'nextStepCv';
  } else if (english && ENGLISH_LOW.has(english)) {
    nextStep = 'nextStepEnglish';
  } else if (salary && SALARY_LOW.has(salary)) {
    nextStep = 'nextStepSalary';
  } else if (relocation === '1to3months' || relocation === 'inMalta') {
    nextStep = 'nextStepApply';
  } else if (expPoints >= 10 && cv && CV_HIGH.has(cv)) {
    nextStep = 'nextStepStrategy';
  }

  return { strengths, improvements, nextStep };
}
