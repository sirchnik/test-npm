import type { Config } from "release-it";

export default {
  github: {
    release: true,
    makeLatest: false,
    releaseNotes: "echo 'Release notes for $VERSION'",
    releaseName: "first makeLatest: false",
  },
} satisfies Config;
