import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

export function FieldLabel({
  children,
  htmlFor,
  error = false,
}: {
  children: ReactNode;
  htmlFor?: string;
  error?: boolean;
}) {
  return (
    <span className={`field-label ${error ? "field-label--error" : ""}`}>
      {children}
    </span>
  );
}

export function FieldError({ children }: { children: ReactNode }) {
  return <p className="field-error" role="alert">{children}</p>;
}

export function FieldHint({ children }: { children: ReactNode }) {
  return <p className="field-hint">{children}</p>;
}

export function TextInput({
  id,
  error = false,
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <input
      id={id}
      aria-invalid={error || undefined}
      className={`field-input ${error ? "field-input--error" : ""} ${className}`.trim()}
      {...props}
    />
  );
}

export function TextArea({
  id,
  error = false,
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  return (
    <textarea
      id={id}
      aria-invalid={error || undefined}
      className={`field-textarea ${error ? "field-textarea--error" : ""} ${className}`.trim()}
      {...props}
    />
  );
}

/** Label + control stack with design-system spacing. */
export function Field({
  label,
  htmlFor,
  error,
  errorMessage,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: boolean;
  errorMessage?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="field" htmlFor={htmlFor}>
      <FieldLabel htmlFor={htmlFor} error={error}>{label}</FieldLabel>
      {children}
      {error && errorMessage ? <FieldError>{errorMessage}</FieldError> : null}
      {!error && hint ? <FieldHint>{hint}</FieldHint> : null}
    </label>
  );
}
