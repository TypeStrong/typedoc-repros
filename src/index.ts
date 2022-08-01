import { Application, ParameterType, RendererEvent } from "typedoc";


export function load(app: Application) {
	app.options.addDeclaration({
		help: 'Options for plugin',
		name: 'test',
		type: ParameterType.Mixed,
		defaultValue: {
			foo: 'foo',
			bar: 'bar'
		}
	});

	const defaultOptions = app.options.getValue('test');
	console.log('\n','-----defaultOptions-----', defaultOptions, '\n');
	app.renderer.on(RendererEvent.END, () => {
		const readOptions = app.options.getValue('test');
		console.log('\n','-----readOptions-----', readOptions, '\n');
	})
};
