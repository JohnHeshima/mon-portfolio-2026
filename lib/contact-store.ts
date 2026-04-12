import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

// Shared schema keeps the contact API and local persistence aligned.
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(120),
  company: z.string().trim().max(120).optional().default(""),
  service: z.string().trim().min(2).max(80),
  message: z.string().trim().min(20).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

type ContactRecord = ContactInput & {
  id: string;
  createdAt: string;
  ip: string;
};

const storageDirectory = path.join(process.cwd(), "storage");
const storageFile = path.join(storageDirectory, "contact-submissions.json");

export async function persistContactSubmission(
  input: ContactInput,
  ip: string,
) {
  // Local persistence is enough for the portfolio stage and easy to replace later.
  await mkdir(storageDirectory, { recursive: true });

  const current = await readStoredSubmissions();
  const record: ContactRecord = {
    ...input,
    company: input.company ?? "",
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ip,
  };

  current.push(record);

  await writeFile(storageFile, JSON.stringify(current, null, 2), "utf8");

  return record;
}

async function readStoredSubmissions(): Promise<ContactRecord[]> {
  try {
    const file = await readFile(storageFile, "utf8");
    return JSON.parse(file) as ContactRecord[];
  } catch {
    return [];
  }
}
