import { join } from 'path';

const include = join(__dirname, '../src');

export default {
  entry: './src/Logbook',
  output: {
    path: join(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'Logbook',
  },
  devtool: 'source-map',
  externals: {
    // Use external version of these libraries in browser mode
    "moment": "moment",
    "react": "React",
    "radium": "Radium",
  },
  module: {
    noParse: [ "moment", "react", "radium" ],
    loaders: [
      {test: /\.js$/, loader: 'babel', include},
      {test: /\.jsson$/, loader: 'json', include},
    ]
  }
}
