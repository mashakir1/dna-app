/* eslint-disable */
export default {
  displayName: "dna-lesson-planning-ui",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nrwl/next/babel"] }]
  },
  transformIgnorePatterns: ["/node_modules/(?!react-dnd|dnd-core|@react-dnd)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/dna-lesson-planning-ui"
};
