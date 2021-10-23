/**
 * @author J.S.Patrick
 * @description maximize
 * @date 2021/10/9 10:18
 */
import { BrowserWindow } from 'electron'

function handler (event, argv) {
	const win = BrowserWindow.getFocusedWindow();
	if (win.isMaximized()) {
		win.unmaximize()
	} else {
		win.maximize()
	}
}

export default {
	name: 'maximize',
	isController: true,
	handler
}
