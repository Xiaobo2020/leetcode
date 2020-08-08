const getWord = (s: string, wordStartIndex: number): [string, number] => {
  let char = '';
  let i = wordStartIndex;
  while(s[i] !== ' ' && i < s.length) {
    char = char + s[i];
    i++;
  }
  return [char, i - 1];
};

function reverseWords(s: string): string {
  const dataStack: string[] = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const currentChar = s[i];
    if (currentChar === ' ') {
      // noop
    } else {
      // string
      const [word, j] = getWord(s, i);
      i = j;
      dataStack.push(word);
    }
  }
  let ret: string = '';
  let tmpWord = dataStack.pop();
  while(tmpWord) {
    ret = ret ? ret + ' ' + tmpWord : tmpWord;
    tmpWord = dataStack.pop();
  }
  return ret;
};



function reverseWords2(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ');
}