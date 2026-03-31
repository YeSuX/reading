import type { Tokenizer } from '@orama/orama';

const cjkRegex = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const latinWordRegex = /[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g;

function normalizeToken(token: string) {
  return token.trim().toLowerCase();
}

export const chineseTokenizer: Tokenizer = {
  language: 'custom-chinese',
  normalizationCache: new Map(),
  tokenize(raw) {
    const tokens: string[] = [];
    const text = raw.normalize('NFKC');

    for (const match of text.matchAll(latinWordRegex)) {
      const normalized = normalizeToken(match[0]);
      if (normalized) tokens.push(normalized);
    }

    for (const char of text) {
      if (cjkRegex.test(char)) tokens.push(char);
    }

    return tokens;
  },
};
