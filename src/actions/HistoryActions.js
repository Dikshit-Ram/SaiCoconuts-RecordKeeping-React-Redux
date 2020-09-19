export function displayHistory(displayForm) {
    return {
      type: "DISPLAY_HISTORY",
      displayForm: displayForm == "HISTORY_PLAY" ? "" : "HISTORY_PLAY"
    };
  }
  