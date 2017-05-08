import termImg from 'term-img';
import repl from 'repl';

function fallback() {
	console.log('');
}

export default function useRepl(db) {

	termImg(__dirname + '/../src/img/parse.png', { fallback });

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
