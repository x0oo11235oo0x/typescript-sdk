import { z } from "zod";

export const MerkleSchema = z.object({
  merkle: z.record(z.string()).default({}),
});

const SnapshotSchema = z.object({
  merkleRoot: z.string(),
  claims: z.array(
    z.object({
      address: z.string(),
      proof: z.array(z.string()),
    }),
  ),
});

export const SnapshotInputSchema = z.preprocess((arg) => {
  if (typeof arg === "string") {
    return JSON.parse(arg);
  } else {
    return {};
  }
}, SnapshotSchema);

export const SnapshotInfoSchema = z.object({
  merkleRoot: z.string(),
  snapshotUri: z.string(),
  snapshot: SnapshotSchema,
});