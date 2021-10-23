/**
 * @author J.S.Patrick
 * @description quit
 * @date 2021/10/9 10:26
 */
import { BrowserWindow } from 'electron'

function handler (event, argv) {
	const win = BrowserWindow.getFocusedWindow();
	win.close();
}

export default {
	name: 'close',
	isController: true,
	handler
}
