export function hey(message: string): string {
  message = message.trim();
  const yelling = message === message.toUpperCase() && /[A-Z]/.test(message);
  const question = message.charAt(message.length-1) === '?';
  if (message === '')
    return "Fine. Be that way!";
  else if (yelling)
    return question ? "Calm down, I know what I'm doing!" : "Whoa, chill out!";
  else if (question)
    return "Sure.";
  else
    return "Whatever."
}
