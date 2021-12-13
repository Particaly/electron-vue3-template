/**
 * @author J.S.Patrick
 * @description index
 * @date 2021/10/22 22:58
 */
import { ipcMain } from 'electron'

const context = require.context('./', true, /\.js$/);
context.keys().forEach(filename => {
	const module = context(filename).default ? context(filename).default : context(filename);
	if (module.isController) {
		try {
			ipcMain.on(module.name, module.handler);
			console.log('watch ' + module.name);
		} catch (e) {
			console.log(e);
		}
	}
})
