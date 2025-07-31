//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim()
  if(message === "")
    return "Fine. Be that way!"
  const isQuestion = message.at(-1) === "?"
  const isYelling = message === message.toUpperCase() && /[a-zA-Z]/.test(message)
  if(isQuestion && isYelling)
    return "Calm down, I know what I'm doing!"
  else if(isQuestion)
    return "Sure."
  else if(isYelling)
    return "Whoa, chill out!"
  return "Whatever."
};
