'use client';

import type { CareerFitQuestionConfig } from '@/lib/career-fit/types';

type Props = {
  question: CareerFitQuestionConfig;
  questionNumber: number;
  totalQuestions: number;
  title: string;
  optionLabels: Record<string, string>;
  infoNote?: string;
  selectedId?: string;
  onSelect: (optionId: string) => void;
};

export function CareerFitQuestion({
  question,
  questionNumber,
  totalQuestions,
  title,
  optionLabels,
  infoNote,
  selectedId,
  onSelect,
}: Props) {
  const groupName = `career-fit-${question.id}`;

  return (
    <fieldset>
      <legend className="sr-only">
        {title} ({questionNumber} / {totalQuestions})
      </legend>
      <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl" id={`q-${question.id}`}>
        {title}
      </h2>
      <div className="mt-6 space-y-3" role="radiogroup" aria-labelledby={`q-${question.id}`}>
        {question.options.map((option) => {
          const inputId = `${groupName}-${option.id}`;
          const checked = selectedId === option.id;
          return (
            <label
              key={option.id}
              htmlFor={inputId}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
                checked
                  ? 'border-malta-red bg-red-50/50 ring-1 ring-malta-red'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <input
                id={inputId}
                type="radio"
                name={groupName}
                value={option.id}
                checked={checked}
                onChange={() => onSelect(option.id)}
                className="mt-1 h-4 w-4 shrink-0 border-gray-300 text-malta-red focus:ring-malta-red"
              />
              <span className="text-sm leading-relaxed text-gray-800 sm:text-base">
                {optionLabels[option.id]}
              </span>
            </label>
          );
        })}
      </div>
      {question.hasInfoNote && infoNote && (
        <p className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
          {infoNote}
        </p>
      )}
    </fieldset>
  );
}
