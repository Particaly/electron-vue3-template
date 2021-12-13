/**
 * @author J.S.Patrick
 * @description minimize
 * @date 2021/10/8 18:08
 */
import { BrowserWindow } from 'electron'

function handler (event, argv) {
	const win = BrowserWindow.getFocusedWindow();
	win.minimize();
}

export default {
	name: 'minimize',
	isController: true,
	handler
}
