import type { PhoneLookupRequest, SourceObservation, EvidenceItem } from "../core";
import type { LookupTargetKind, SourceId } from "@sentinel/shared-types";

export type ProviderExecutionStatus = "active" | "placeholder" | "error";

export interface ProviderObservationResult {
  providerId: string;
  providerStatus: ProviderExecutionStatus;
  summary: string;
  observations: SourceObservation[];
  evidence: EvidenceItem[];
}

export interface LookupProvider {
  id: string;
  sourceId: SourceId;
  supportedTargets: readonly LookupTargetKind[];
  isActive: boolean;
  lookupPhoneNumber(input: PhoneLookupRequest): Promise<ProviderObservationResult>;
}
