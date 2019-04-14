import * as vscode from 'vscode';
import * as clipboardy from 'clipboardy';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('extension.copyHangoutLinkToClip', () => {
		clipboardy.writeSync('https://hangouts.google.com/call/');
		vscode.window.showInformationMessage('Hangout link copied to your clipboard.');
	}));

	context.subscriptions.push(vscode.commands.registerCommand('extension.openHangoutLink', () => {
		vscode.env.openExternal(vscode.Uri.parse('https://hangouts.google.com/call/'));
	}));
}

export function deactivate() {}
