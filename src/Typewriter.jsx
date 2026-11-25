import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;
const GAP_MS = 400;

// Types each line, holds, deletes it, then moves to the next (looping).
function Typewriter({ lines }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[lineIndex];
    let delay;
    let next;

    if (!deleting && text === full) {
      delay = HOLD_MS;
      next = () => setDeleting(true);
    } else if (deleting && text === "") {
      delay = GAP_MS;
      next = () => {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
      };
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS;
      next = () =>
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }

    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [text, deleting, lineIndex, lines]);

  return (
    <p className="typewriter" aria-label={lines.join(". ")}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </p>
  );
}

export default Typewriter;
