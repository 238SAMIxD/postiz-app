import { createOpenAI } from '@ai-sdk/openai';

export const getOpenAiModel = (fallback: string) =>
  process.env.OPENAI_MODEL?.trim() || fallback;

export const getOpenAiAgentModel = (fallback: string) =>
  process.env.OPENAI_AGENT_MODEL?.trim() || getOpenAiModel(fallback);

export const getOpenAiImageModel = (fallback: string) =>
  process.env.OPENAI_IMAGE_MODEL?.trim() || fallback;

export const getOpenAiBaseUrl = () =>
  process.env.OPENAI_BASE_URL?.trim() || undefined;

const openai = createOpenAI({
  baseURL: getOpenAiBaseUrl() || 'https://api.openai.com/v1',
});

export const getOpenAiLanguageModel = (model: string) =>
  getOpenAiBaseUrl() ? openai.chat(model) : openai(model);
