import {build} from 'esbuild';
await build({entryPoints:['motion/EngineeringMotion.tsx'],outfile:'dist/assets/engineering-motion.js',bundle:true,minify:true,format:'iife',platform:'browser',target:['es2020'],jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},legalComments:'none'});
