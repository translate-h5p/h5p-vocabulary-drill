import { blanksDefaultTranslations, defaultTranslations, dragTextDefaultTranslations } from "../constants/defaultTranslations";
import { AnswerModeType, type Params } from "../types/types";

export const getDefaultParams = (): Required<Params> => {
  return {
    description: undefined,
    sourceLanguage: 'en',
    targetLanguage: 'nb',
    // @ts-expect-error - overallFeedback type is incorrect
    overallFeedback: [{ from: 0, to: 100 }],
    words: undefined,
    l10n: defaultTranslations,
    blanksl10n: blanksDefaultTranslations,
    dragtextl10n: dragTextDefaultTranslations,
    behaviour: {
      enableRetry: true,
      enableSolutionsButton: true,
      autoCheck: false,
      caseSensitive: true,
      showSolutionsRequiresInput: true,
      acceptSpellingErrors: false,
      randomize: false,
      showTips: false,
      answerMode: AnswerModeType.FillIn,
      enableSwitchAnswerModeButton: false,
      enableSwitchWordsButton: false,
      poolSize: undefined,
      numberOfWordsToShow: undefined,
    },
  };
};