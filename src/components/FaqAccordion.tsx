import * as Accordion from '@radix-ui/react-accordion';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

function PlusIcon() {
  return (
    <svg
      className="faq-icon"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <line x1="7.5" y1="1.5" x2="7.5" y2="13.5" />
      <line x1="1.5" y1="7.5" x2="13.5" y2="7.5" />
    </svg>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="faq-accordion">
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="faq-item">
          <Accordion.Header className="faq-header">
            <Accordion.Trigger className="faq-trigger">
              <span>{item.question}</span>
              <PlusIcon />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            <p className="faq-content-inner">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
