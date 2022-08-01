"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const typedoc_1 = require("typedoc");
function load(app) {
    app.options.addDeclaration({
        help: 'Options for plugin',
        name: 'test',
        type: typedoc_1.ParameterType.Mixed,
        defaultValue: {
            foo: 'foo',
            bar: 'bar'
        }
    });
    const defaultOptions = app.options.getValue('test');
    console.log('\n', '-----defaultOptions-----', defaultOptions, '\n');
    app.renderer.on(typedoc_1.RendererEvent.END, () => {
        const readOptions = app.options.getValue('test');
        console.log('\n', '-----readOptions-----', readOptions, '\n');
    });
}
exports.load = load;
;
