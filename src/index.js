import yargs from 'yargs';
import env from 'node-env-file';
import Parse from 'parse/node';

env(`${__dirname}/../.env`);

const argv = yargs
  .option('appid', {
    describe: 'Parse APP ID',
    default: process.env.PARSE_APP_ID,
  })
  .help()
  .version().argv;

// Parse.initialize(process.env.PARSE_APP_ID, process.env.PARSE_APP_KEY, process.env.PARSE_MASTER_KEY);
// Parse.serverURL = process.env.PARSE_SERVER_URL;
//
// // 6AgBHb6t9E
// var Font = Parse.Object.extend('Font');
//
// var query = new Parse.Query(Font);
//
// query.find({
//   success: function(results) {
//     // results is an array of Parse.Object.
//     console.log(results);
//   },
//
//   error: function(error) {
//     // error is an instance of Parse.Error.
//     console.log(error);
//   }
// });
//
// // query.count({
// //   success: function(number) {
// //     // There are number instances of MyClass.
// //     console.log('font number: ', number);
// //   },
// // error: function(error) {
// // // error is an instance of Parse.Error.
// //   console.log('error ', error);
// // }
// // });
//
//
//
// //
// //
// // console.log('before');
// //
// //
// // query.get("6AgBHb6t9E", {
// //   // useMasterKey: true ,  // }, {
// //   success: function(font) {
// //     // The object was retrieved successfully.
// //     console.log(font.toJSON());
// //     console.log('success');
// //   },
// //   error: function(object, error) {
// //     // The object was not retrieved successfully.
// //     // error is a Parse.Error with an error code and message.
// //     console.log('error');
// //     console.log(object, error);
// //   }
// // });
// //
// // console.log('Font', Font);
// // console.log('query', query);
// //
// //
// // console.log('after');
// //
// //
// //
// // // var User = Parse.Object.extend("User");
// // // var query = new Parse.Query(User);
// // // query.get("G9CCHo3x1z", {
// // //   success: function(user) {
// // //     // The object was retrieved successfully.
// // //     console.log(user.toJSON());
// // //   },
// // //   error: function(object, error) {
// // //     // The object was not retrieved successfully.
// // //     // error is a Parse.Error with an error code and message.
// // //     console.log(object, error);
// // //   }
// // // });
