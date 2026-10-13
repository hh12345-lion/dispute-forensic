import type { ExpertProfile } from "./types";

export const EXPERT_IDS = [] as const;

export type ExpertId = (typeof EXPERT_IDS)[number];

const experts: ExpertProfile[] = [];

export function getExpert(id: string): ExpertProfile | undefined {
  return experts.find((e) => e.id === id);
}

export function getAllExperts(): ExpertProfile[] {
  return experts;
}
