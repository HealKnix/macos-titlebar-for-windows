import * as vscode from 'vscode'
import ActiveSettings from './settings/active'
import DisableSettings from './settings/disable'

export function activate(context: vscode.ExtensionContext) {
  const isInstall = context.globalState.get('IsMacOSTitlebarForWindowsInstall')
  if (!isInstall) {
    void context.globalState.update('IsMacOSTitlebarForWindowsInstall', true)
    setupExtention()
  }

  let disposableActive = vscode.commands.registerCommand(
    'macos-titlebar-for-windows.active',
    async () => {
      await setupExtention()
    }
  )

  let disposableDisable = vscode.commands.registerCommand(
    'macos-titlebar-for-windows.disable',
    async () => {
      vscode.window.showInformationMessage('MacOS Titlebar is now Disabled!')
      let userSettings = vscode.workspace.getConfiguration()
      const currentSettings = userSettings.get('apc.stylesheet', {})

      if (userSettings.get('msc.active')) {
        await userSettings.update('msc.active', false, true)
        await userSettings.update('window.menuBarVisibility', 'classic', true)

        const updatedSettings = {
          ...currentSettings,
          ...DisableSettings
        }

        await userSettings.update('apc.stylesheet', updatedSettings, true)
      }
    }
  )

  context.subscriptions.push(disposableActive, disposableDisable)
}

export function deactivate() {
  ;async () => {
    let userSettings = vscode.workspace.getConfiguration()
    const currentSettings = userSettings.get('apc.stylesheet', {})

    await userSettings.update('msc.active', false, true)
    await userSettings.update('window.menuBarVisibility', 'classic', true)

    const updatedSettings = {
      ...currentSettings,
      ...DisableSettings
    }

    await userSettings.update('apc.stylesheet', updatedSettings, true)
  }
}

async function setupExtention() {
  vscode.window.showInformationMessage('MacOS Titlebar is now Active!')
  let userSettings = vscode.workspace.getConfiguration()
  const currentSettings = userSettings.get('apc.stylesheet', {})

  await userSettings.update('msc.active', true, true)
  await userSettings.update('window.menuBarVisibility', 'compact', true)
  await userSettings.update(
    'apc.electron',
    {
      titleBarStyle: 'hiddenInset'
    },
    true
  )

  const updatedSettings = {
    ...currentSettings,
    ...ActiveSettings
  }

  await userSettings.update('apc.stylesheet', updatedSettings, true)
}
