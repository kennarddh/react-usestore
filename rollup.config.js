import nodeResolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
	input: 'src/index.js',
	external: ['react', 'react-dom'],
	output: [
		{
			file: 'lib/bundle.cjs.js',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'lib/bundle.esm.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		nodeResolve({
			extensions: ['.js', '.jsx'],
		}),
		commonjs(),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled',
		}),
		terser(),
	],
}
