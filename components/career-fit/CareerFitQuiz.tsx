'use client';

import { useCallback, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CAREER_FIT_QUESTIONS } from '@/lib/career-fit/config';
import { deriveInsightKeys } from '@/lib/career-fit/insights';
import { isAssessmentComplete, scoreCareerFit } from '@/lib/career-fit/scoring';
import type { CareerFitAnswers } from '@/lib/career-fit/types';
import { CareerFitProgress } from './CareerFitProgress';
import { CareerFitQuestion } from './CareerFitQuestion';
import { CareerFitResult } from './CareerFitResult';

const TOTAL = CAREER_FIT_QUESTIONS.length;

export function CareerFitQuiz() {
  const t = useTranslations('careerFit.quiz');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<CareerFitAnswers>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = CAREER_FIT_QUESTIONS[step];
  const selectedId = currentQuestion ? answers[currentQuestion.id] : undefined;
  const canContinue = Boolean(selectedId);

  const scoreResult = useMemo(() => {
    if (!isAssessmentComplete(answers)) return null;
    return scoreCareerFit(answers);
  }, [answers]);

  const insights = useMemo(() => {
    if (!scoreResult) return null;
    return deriveInsightKeys(answers);
  }, [answers, scoreResult]);

  const handleSelect = useCallback((optionId: string) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  }, [currentQuestion]);

  const handleContinue = useCallback(() => {
    if (!canContinue) return;
    if (step < TOTAL - 1) {
      setStep((s) => s + 1);
    } else {
      setShowResult(true);
    }
  }, [canContinue, step]);

  const handleBack = useCallback(() => {
    if (showResult) {
      setShowResult(false);
      setStep(TOTAL - 1);
      return;
    }
    if (step > 0) setStep((s) => s - 1);
  }, [showResult, step]);

  const handleRetake = useCallback(() => {
    setAnswers({});
    setStep(0);
    setShowResult(false);
  }, []);

  if (showResult && scoreResult && insights) {
    return <CareerFitResult score={scoreResult} insights={insights} onRetake={handleRetake} />;
  }

  if (!currentQuestion) return null;

  const optionLabels: Record<string, string> = {};
  for (const opt of currentQuestion.options) {
    optionLabels[opt.id] = t(`questions.${currentQuestion.id}.options.${opt.id}`);
  }

  return (
    <div>
      <CareerFitProgress
        current={step + 1}
        total={TOTAL}
        label={t('progress', { current: step + 1, total: TOTAL })}
      />
      <CareerFitQuestion
        question={currentQuestion}
        questionNumber={step + 1}
        totalQuestions={TOTAL}
        title={t(`questions.${currentQuestion.id}.title`)}
        optionLabels={optionLabels}
        infoNote={
          currentQuestion.hasInfoNote
            ? t(`questions.${currentQuestion.id}.infoNote`)
            : undefined
        }
        selectedId={selectedId}
        onSelect={handleSelect}
      />
      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 0}
          className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t('back')}
        </button>
        <button
          type="button"
          onClick={handleContinue}
          disabled={!canContinue}
          className="rounded-md bg-malta-red px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-malta-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {step === TOTAL - 1 ? t('finish') : t('continue')}
        </button>
      </div>
    </div>
  );
}
