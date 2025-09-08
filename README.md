## MacOS titlebar for Windows

<div style="display: flex; gap: 16px; align-items: center; padding: 16px; margin-bottom: 12px; background-color: hsl(212.02 100% 46.67% / 0.15); border-left: 3px solid hsl(212.02 100% 46.67%); border-radius: 6px;">
  <span style="padding: 0 9px; border: 2px solid hsl(212.02 100% 46.67%); border-radius: 50%; color: hsl(212.02 100% 46.67%); font-weight: 600">i</span>
  <span>
    Due to the fact that <a href="https://marketplace.visualstudio.com/items?itemName=drcika.apc-extension" style="background-color: #656c7633; border-radius: 6px; padding: 2px 4px;">Apc CustomizeUI++</a> is not updated after VS Code 1.92.2, this extension does not work on later versions! But it works on versions of VS Code 1.92.2 and lower.
  </span>
</div>

This extension overrides the extension [`Apc CustomizeUI++`](https://marketplace.visualstudio.com/items?itemName=drcika.apc-extension) styles to make the header look like macOS. <br />
Namely, the window control buttons look like a traffic light, the order of functionality is reversed, and the menu bar is moved to the action bar.

<p align="center">
  <img src="https://raw.githubusercontent.com/healknix/macos-titlebar-for-windows/main/src/comparison.png" alt="Comparison"> 
</p>

## Usage

The extension adds 2 new commands to the Command Palette:

```text
MacOS Titlebar: Enable // Enable macOS titlebar mode
MacOS Titlebar: Disable // Disable macOS titlebar mode
```

## Example

<p align="center">
  <img src="https://raw.githubusercontent.com/healknix/macos-titlebar-for-windows/main/src/example.gif" alt="Example"> 
</p>

## Troubleshooting

The `Apc CustomizeUI++` may not be activated when first installed, so run the command in the Palette Command:

```shell
Enable Apc extention
```

You will be asked to restart VS Code and everything should be fine.

**Enjoy!**
