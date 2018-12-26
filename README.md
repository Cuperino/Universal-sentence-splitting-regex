# sentence-splitting-regex
Simple regex for spliting text into sentences

`/(?![A-Z]..?\.)(?![A-Z]?\.)(\S+[.?!;؟。」]["'』]?)\s+/g`

`"$1\n"`
