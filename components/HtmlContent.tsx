interface HtmlContentProps {
  html: string;
}

// TODO: sanitize html
export function HtmlContent({ html }: HtmlContentProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
