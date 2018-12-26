// Don't pick titles such as Dr. and Mrs.,
// Don't pick accronyms,
// Pick sentence's endings.
const detectSentenceEnding = /(?![A-Z]..?\.)(?![A-Z]?\.)(\S+[.?!;؟。」]["'』]?)\s+/g;
const splitSentence = "$1\n";
