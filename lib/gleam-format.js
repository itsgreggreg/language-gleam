"use babel";

import { CompositeDisposable } from "atom";
import { execSync } from "child_process";

export default class GleamFormat {
  constructor() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      atom.workspace.observeTextEditors(this.handleEditorEvent)
    );
  }

  handleEditorEvent = (editor) => {
    const buffer = editor.getBuffer();

    const saveSub = buffer.onDidSave(() => {
      const scope = editor.getRootScopeDescriptor().scopes[0];
      if (
        atom.config.get("language-gleam.formatOnSave") &&
        scope === "source.gleam"
      ) {
        buffer.transact(() => this.format(editor));
      }
    });

    const destroySub = editor.onDidDestroy(() => {
      saveSub.dispose();
      destroySub.dispose();
      this.subscriptions.remove(saveSub);
      this.subscriptions.remove(destroySub);
    });

    this.subscriptions.add(saveSub);
    this.subscriptions.add(destroySub);
  };

  format = (editor) => {
    const buffer = editor.getBuffer();
    try {
      const exe = this.getExecutable();
      const path = editor.getPath();
      execSync(`${exe} format ${path}`).toString();
      buffer.reload();
    } catch (error) {
      if (atom.config.get("language-gleam.suppressErrors")) {
        return;
      }
      atom.notifications.addError("gleam format command failed", {
        dismissible: true,
        detail: error,
      });
    }
  };

  getExecutable = () => {
    let exe = atom.config.get("language-gleam.executable").trim();
    if (!exe) {
      throw "empty executable path in configuration";
    }
    return exe;
  };

  destroy = () => {
    this.subscriptions.dispose();
  };
}
