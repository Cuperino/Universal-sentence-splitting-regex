// Don't pick titles such as Dr. and Mrs.,
// Don't pick accronyms,
// Pick sentence's endings.
(?![A-Z]..?\.)(?![A-Z]?\.)(\b\S+[.?!]["']?)\s
