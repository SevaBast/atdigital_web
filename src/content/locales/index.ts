import type { SiteContent } from "@/content/types";
import { sk } from "./site/sk";
import { en } from "./site/en";

export type Lang = "sk" | "en";

export const LANGUAGES: Record<Lang, string> = {
  sk: "SK",
  en: "EN",
};

export const locales: Record<Lang, SiteContent> = { sk, en };
