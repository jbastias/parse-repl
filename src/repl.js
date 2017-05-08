import repl from 'repl';

export default function useRepl(db) {

  const replServer = repl.start({
    prompt: 'parse-repl> ',
    useColors: true
  });

  replServer.on('exit', () => {
    console.log('See you in hell suckers!!!');
    db.close();
    process.exit();
  });

  replServer.defineCommand('sayhello', {
    help: 'Say hello',
    action(name) {
      this.lineParser.reset();
      this.bufferedCommand = '';
      console.log(`Hello, ${name}!`);
      this.displayPrompt();
    }
  });

  replServer.defineCommand('saybye', function saybye() {
    console.log('Goodbye!');
    this.close();
  });

}
