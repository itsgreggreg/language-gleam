"use babel";

import GleamFormat from "./gleam-format";

export default {
  config: {
    executable: {
      type: "string",
      default: "gleam",
      description: "Path to gleam executable",
      order: 1,
    },
    formatOnSave: {
      type: "boolean",
      default: false,
      order: 2,
    },
    suppressErrors: {
      type: "boolean",
      default: false,
      order: 3,
    },
  },

  activate() {
    this.gleamFormat = new GleamFormat();
  },

  deactivate() {
    return this.gleamFormat.destroy();
  },
};
