import yargs from 'yargs';
import env from 'node-env-file';
// import Parse from 'parse/node';
import { MongoClient, Server } from 'mongodb';

import useRepl from './repl';

env(`${__dirname}/../.env`);

import { getSchema } from './data';

const argv = yargs
  .option('constr', {
    describe: 'mongo connection string',
    default: process.env.DATABASE_URI,
  })
  .option('nr', {
    alias: 'norepl',
    describe: 'don\'t use as a repl',
  })
  .help()
  .version().argv;

console.log('mongo connection string: ' + argv.constr);

const mongo = new MongoClient();
mongo.connect(argv.constr, function(err, db) {
  if (err) { return console.log('WTF, something went wrong'); }
  console.log('connected');

  if (!argv.norepl) {
    useRepl(db);
  } else {
    getSchema(db).then(() => {
      db.close();
    });
  }
});
