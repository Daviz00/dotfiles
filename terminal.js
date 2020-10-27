// This file was initially generated by Windows Terminal 1.0.1401.0
// It should still be usable in newer versions, but newer versions might have additional
// settings, help text, or changes that you will not see unless you clear this file
// and let us generate a new one for you.

// To view the default settings, hold "alt" while clicking on the "Settings" button.
// For documentation on these settings, see: https://aka.ms/terminal-documentation
{
  "$schema": "https://aka.ms/terminal-profiles-schema",

  "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",

  // You can add more global application settings here.
  // To learn more about global settings, visit https://aka.ms/terminal-global-settings

  // If enabled, selections are automatically copied to your clipboard.
  "copyOnSelect": false,

  // If enabled, formatted data is also copied to your clipboard
  "copyFormatting": false,

  // A profile specifies a command to execute paired with information about how it should look and feel.
  // Each one of them will appear in the 'New Tab' dropdown,
  //   and can be invoked from the commandline with `wt.exe -p xxx`
  // To learn more about profiles, visit https://aka.ms/terminal-profile-settings
  "profiles": {
    "defaults": {
      // Put settings here that you want to apply to all profiles.
    },
    "list": [
      {
        // Make changes here to the powershell.exe profile.
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "name": "Windows PowerShell",
        "commandline": "powershell.exe",
        "hidden": true
      },
      {
        // Make changes here to the cmd.exe profile.
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "name": "Command Prompt",
        "commandline": "cmd.exe",
        "hidden": false,
        "useAcrylic": true,
        "fontFace": "Cascadia Code PL",
        "colorScheme": "Floraverse"
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "hidden": true,
        "name": "Azure Cloud Shell",
        "source": "Windows.Terminal.Azure"
      },
      {
        "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
        "hidden": false,
        "name": "PowerShell",
        "source": "Windows.Terminal.PowershellCore",
        "fontFace": "Cascadia Code PL",
        "colorScheme": "Builtin Dark",

        "useAcrylic": true
      }
    ]
  },

  // Add custom color schemes to this array.
  // To learn more about color schemes, visit https://aka.ms/terminal-color-schemes
  "schemes": [
    {
      "name": "Builtin Dark",
      "black": "#000000",
      "red": "#bb0000",
      "green": "#00bb00",
      "yellow": "#bbbb00",
      "blue": "#0000bb",
      "purple": "#bb00bb",
      "cyan": "#00bbbb",
      "white": "#bbbbbb",
      "brightBlack": "#555555",
      "brightRed": "#ff5555",
      "brightGreen": "#55ff55",
      "brightYellow": "#ffff55",
      "brightBlue": "#5555ff",
      "brightPurple": "#ff55ff",
      "brightCyan": "#55ffff",
      "brightWhite": "#ffffff",
      "background": "#000000",
      "foreground": "#bbbbbb"
    },
    {
      "name": "ENCOM",
      "black": "#000000",
      "red": "#9f0000",
      "green": "#008b00",
      "yellow": "#ffd000",
      "blue": "#0081ff",
      "purple": "#bc00ca",
      "cyan": "#008b8b",
      "white": "#bbbbbb",
      "brightBlack": "#555555",
      "brightRed": "#ff0000",
      "brightGreen": "#00ee00",
      "brightYellow": "#ffff00",
      "brightBlue": "#0000ff",
      "brightPurple": "#ff00ff",
      "brightCyan": "#00cdcd",
      "brightWhite": "#ffffff",
      "background": "#000000",
      "foreground": "#00a595"
    },
    {
      "name": "Floraverse",
      "black": "#08002e",
      "red": "#64002c",
      "green": "#5d731a",
      "yellow": "#cd751c",
      "blue": "#1d6da1",
      "purple": "#b7077e",
      "cyan": "#42a38c",
      "white": "#f3e0b8",
      "brightBlack": "#331e4d",
      "brightRed": "#d02063",
      "brightGreen": "#b4ce59",
      "brightYellow": "#fac357",
      "brightBlue": "#40a4cf",
      "brightPurple": "#f12aae",
      "brightCyan": "#62caa8",
      "brightWhite": "#fff5db",
      "background": "#0e0d15",
      "foreground": "#dbd1b9"
    },
    {
      "name": "Dracula",
      "background": "#272935",
      "black": "#21222C",
      "blue": "#BD93F9",
      "cyan": "#8BE9FD",
      "foreground": "#F8F8F2",
      "green": "#50FA7B",
      "purple": "#FF79C6",
      "red": "#FF5555",
      "white": "#F8F8F2",
      "yellow": "#FFB86C",
      "brightBlack": "#6272A4",
      "brightBlue": "#D6ACFF",
      "brightCyan": "#A4FFFF",
      "brightGreen": "#69FF94",
      "brightPurple": "#FF92DF",
      "brightRed": "#FF6E6E",
      "brightWhite": "#F8F8F2",
      "brightYellow": "#FFFFA5"
    }
  ],

  // Add custom keybindings to this array.
  // To unbind a key combination from your defaults.json, set the command to "unbound".
  // To learn more about keybindings, visit https://aka.ms/terminal-keybindings
  "keybindings": [
    // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
    // These two lines additionally bind them to Ctrl+C and Ctrl+V.
    // To learn more about selection, visit https://aka.ms/terminal-selection
    { "command": { "action": "copy", "singleLine": false }, "keys": "ctrl+c" },
    { "command": "paste", "keys": "ctrl+v" },

    // Press Ctrl+Shift+F to open the search box
    { "command": "find", "keys": "ctrl+shift+f" },

    // Press Alt+Shift+D to open a new pane.
    // - "split": "auto" makes this pane open in the direction that provides the most surface area.
    // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
    // To learn more about panes, visit https://aka.ms/terminal-panes
    {
      "command": {
        "action": "splitPane",
        "split": "auto",
        "splitMode": "duplicate"
      },
      "keys": "alt+shift+d"
    }
  ]
}