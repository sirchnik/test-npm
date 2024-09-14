import type { Config } from "release-it";

export default {
  github: {
    release: true,
    makeLatest: true,
    releaseNotes: "echo 'Release notes for $VERSION'",
    releaseName: "second makeLatest: true",
  },
} satisfies Config;
