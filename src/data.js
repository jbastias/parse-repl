export function getSchema(db) {
  return new Promise((resolve, reject) => {
    const schema = db.collection('_SCHEMA');
    schema.find().toArray((err, items) => {
      if (err) {
        console.log('err', err);
        reject(err);
      } else {
        console.log('>>>: ', JSON.stringify(items, null, 2));
        resolve(items);
      }
    });
  });
}
