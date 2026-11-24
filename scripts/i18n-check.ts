// Turn Lunaria's translation status into a CI result.
import config from '../lunaria.config.mjs';

type StatusEntry = {
  localizations: {
    path: string;
    status: 'missing' | 'outdated' | 'up-to-date';
  }[];
};

const status: StatusEntry[] = await Bun.file(`${config.outDir}/status.json`).json();
const translations = status.flatMap((entry) => entry.localizations);

if (translations.length === 0) {
  console.error('Lunaria did not find any pages to check.');
  process.exitCode = 1;
}

for (const { path, status } of translations) {
  if (status === 'up-to-date') continue;
  console.error(`${status}: ${path}`);
  process.exitCode = 1;
}

if (process.exitCode !== 1) {
  console.log(`${translations.length} translations up to date.`);
}
