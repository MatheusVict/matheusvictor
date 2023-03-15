import { ReactNode } from 'react';

import { KnowContainer } from './styles';

interface KnowledgeItemProps {
  title: string;
  icon: ReactNode;
}

export function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <KnowContainer>
      <p>{title}</p>
      {icon}
    </KnowContainer>
  );
}
