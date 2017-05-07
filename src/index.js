import yargs from 'yargs';
import env from 'node-env-file';
import Parse from 'parse/node';
import { MongoClient, Server } from 'mongodb';

env(`${__dirname}/../.env`);

const argv = yargs
  .option('constr', {
    describe: 'mongo connection string',
    default: process.env.DATABASE_URI,
  })
  .help()
  .version().argv;

console.log(argv.constr);

const mongo = new MongoClient();

mongo.connect(argv.constr, function(err, gotdb) {
  if (err) { return console.log('WTF, something went wrong'); }

  console.log('connected');

  new Promise((resolve, reject) => {
    var collection = gotdb.collection('_SCHEMA');
    collection.find().toArray(function(err, items) {
      if (err) {
        console.log('err', err);
        var collection = gotdb.collection('_SCHEMA');
        reject(err);
      } else {
        console.log('>>>: ', JSON.stringify(items, null, 2));
        gotdb.close();
      }
    });

  });

});
