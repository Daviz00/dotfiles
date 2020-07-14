{
  // Theme Setup.
  "workbench.iconTheme": "material-icon-theme",
  "color-highlight.enable": true,
  "color-highlight.matchWords": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.snippetSuggestions": "top",
  "emmet.showExpandedAbbreviation": "always",
  "emmet.showSuggestionsAsSnippets": false,
  "workbench.colorTheme": "Community Material Theme Ocean High Contrast",
  "editor.detectIndentation": true,
  "editor.suggestSelection": "first",
  "editor.wordBasedSuggestions": true,

  // json
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // Font Setup.
  "editor.fontFamily": "Operator Mono Lig, 'Fira Code Retina'",
  "editor.fontLigatures": true,
  "editor.fontSize": 15,
  "terminal.integrated.fontFamily": "Cascadia Code PL",
  "editor.wordWrap": "on",

  // Third Party Extensions Settings.
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "files.autoSave": "onFocusChange",
  "workbench.startupEditor": "newUntitledFile",
  "terminal.integrated.shell.windows": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
  "liveServer.settings.donotShowInfoMsg": true,
  "kite.showWelcomeNotificationOnStartup": false,
  "code-runner.runInTerminal": true,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.minimap.enabled": false,
  "editor.cursorBlinking": "phase",
  "git.enableSmartCommit": true,
  "telemetry.enableCrashReporter": false,
  "editor.renameOnType": true,
  "editor.tabSize": 2,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.rendererType": "dom"
}



<!-- Start of custom setting -->




{
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.snippetSuggestions": "bottom",
    "window.zoomLevel": 0,
    "workbench.colorCustomizations": {
    "statusBar.background": "#000",
    "statusBar.border": "#222",
    "statusBar.foreground": "#02bb7d",
    "sideBar.background": "#081014",
    "sideBar.border": "#222",
    "sideBarTitle.foreground": "#FFF",
    "sideBarSectionHeader.background": "#222",
    "sideBarSectionHeader.foreground": "#fff",
    "sideBar.foreground": "#fff",

    "dropdown.background": "#000",
    "dropdown.listBackground": "#000",
    "editor.findMatchBackground": "#003b28",
    "panel.background": "#000",
    "panelTitle.activeForeground": "#02bb7d",
    "panelTitle.inactiveForeground": "#aaa",
    "terminal.background": "#000",
    "terminal.foreground": "#FFF",
    "tab.border": "#222",
    "editorGroupHeader.tabsBackground": "#000",
    "tab.inactiveForeground": "#aaa",
    "tab.inactiveBackground": "#000",
    "tab.activeBorderTop": "#02bb7d",
    "tab.activeForeground": "#7bf0c9",
    "tab.activeBackground": "#081014",
    "editor.background": "#081014",
    "editorBracketMatch.border": "#fff",
    "editorBracketMatch.background": "#222",
    "editorSuggestWidget.background": "#111",
    "editorHoverWidget.background": "#111",
    "editor.lineHighlightBackground": "#122129",
    "editor.wordHighlightBackground": "#0f2b38",
    "activityBar.border": "#222",
    "activityBar.background": "#081014",
    "activityBarBadge.background": "#005f41",
    "menu.background": "#111",
    "titleBar.activeBackground": "#081014",
    "breadcrumb.background": "#111",
    "breadcrumb.foreground": "#ccc",
    "list.dropBackground": "#050505"
    },
    "editor.tokenColorCustomizations": {
    "[Default Dark+]": {
        "keywords": {
        "fontStyle": "italic",
        "foreground": "#f92672"
        },
        "comments": {
        "fontStyle": "italic",
        "foreground": "#588500"
        },
        "functions": "#d6b004",
    },
    },
    "terminal.integrated.letterSpacing": 2,
    "terminal.integrated.lineHeight": 1.2,
    "workbench.sideBar.location": "right",
    "workbench.statusBar.feedback.visible": false,
    "window.titleBarStyle": "custom",
    "diffEditor.ignoreTrimWhitespace": true,
"terminal.integrated.rendererType": "dom",
"editor.wordBasedSuggestions": false,
"editor.fontFamily": "'Operator Mono Lig'",
"editor.fontSize": 16,
"[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.fontLigatures": true,
"workbench.iconTheme": "material-icon-theme",
"editor.cursorBlinking": "phase",
"editor.detectIndentation": false,
"editor.cursorSmoothCaretAnimation": true,
"editor.suggestSelection": "first",
"editor.fontWeight": "100",
"kite.showWelcomeNotificationOnStartup": false
}





// wesbos config




{
  "editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 29,
  "editor.lineHeight": 45,
  "editor.quickSuggestionsDelay": 30,
  "editor.letterSpacing": 0.5,
  "workbench.editor.tabSizing": "shrink",
  "html.format.enable": true,
  "html.format.preserveNewLines": true,
  "files.trimTrailingWhitespace": true,
  "editor.tabSize": 2,
  "editor.cursorWidth": 5,
  // this isn't really underline but we hack it to be a thicker cursor
  "editor.cursorStyle": "line",
  "editor.wordWrap": "on",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.fontWeight": "400",
  "editor.cursorBlinking": "solid",
  "editor.colorDecorators": false,
  "editor.minimap.enabled": false,
  "vscode_custom_css.imports": [
    "/Volumes/Macintosh HD/Users/wesbos/.vscodestyles.css"
  ],
  "workbench.activityBar.visible": false,
  "workbench.sideBar.location": "left",
  "editor.renderWhitespace": "none",
  "editor.rulers": [
    80,
    100
  ],
  "editor.minimap.showSlider": "always",
  "workbench.startupEditor": "newUntitledFile",
  "extensions.ignoreRecommendations": false,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.next": true
  },
  "workbench.colorTheme": "Cobalt2",
  "workbench.editor.tabCloseButton": "off",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  // show snippets before any other auto completion
  "editor.snippetSuggestions": "top",
  // this lets you quick open multiple items in a row and now have the previous ones closed on you
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",
  "sublimeTextKeymap.promptV3Features": true,
  // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS
  "[javascript]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "eslint.autoFixOnSave": true,
  // Optional: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
  "prettier.disableLanguages": [
    "js"
  ],
  "eslint.alwaysShowStatus": true,
  "cSpell.userWords": [
    "SIGNUP",
    "Signin",
    "Signout",
    "TLDR",
    "Templating",
    "backend",
    "camo",
    "destructure",
    "gmail",
    "injectable",
    "lightgrey",
    "minmax",
    "prefetch",
    "promisify",
    "refetch",
    "wesbos"
  ],
  "editor.autoIndent": true,
  "window.closeWhenEmpty": true,
  "editor.detectIndentation": false,
  "files.insertFinalNewline": true,
  "editor.showFoldingControls": "always",
  "editor.find.seedSearchStringFromSelection": true,
  "editor.matchBrackets": true,
  "window.openFilesInNewWindow": "off",
  "workbench.editor.enablePreview": true,
  "editor.scrollBeyondLastLine": true,
  "editor.useTabStops": true,
  "editor.formatOnPaste": true,
  "[jade]": {
    "togglequotes.chars": [
      "\"",
      "'",
      "`"
    ]
  },
  "window.zoomLevel": 0,
  "editor.parameterHints.enabled": false
}


