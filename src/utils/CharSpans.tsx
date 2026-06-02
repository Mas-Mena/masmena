
/**
 * Renders every character of `text` as its own [data-char] span.
 * The scramble engine queries these spans directly and updates their
 * textContent at 60fps — no React re-renders needed.
 *
 * Spaces are rendered as non-breaking spaces so layout stays stable.
 */
export function CharSpans({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((ch, i) =>
        ch === ' ' ? (
          <span key={i} data-char style={{ whiteSpace: 'pre' }}> </span>
        ) : (
          <span key={i} data-char>
            {ch}
          </span>
        )
      )}
    </>
  );
}
