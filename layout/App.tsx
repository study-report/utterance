import { ReactNode } from "react";

interface MainLayoutProps {
  utterance: ReactNode;
  title: ReactNode;
}

function Frame({ utterance, title }: MainLayoutProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{utterance}</div>
    </div>
  );
}

export default function MainLayout({ utterance, title }: MainLayoutProps) {
  return <Frame utterance={utterance} title={title} />;
}
