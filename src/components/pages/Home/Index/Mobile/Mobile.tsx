import { Stack } from '@mui/material';
import { AboutContent } from './AboutContent';
import { ContactContent } from './ContactContent';
import { Section } from './Section';

export const Mobile: React.FC = () => {
  return (
    <Stack direction={'column'} spacing={2}>
      {/* 🐈 About */}
      <Section title="About">
        <AboutContent />
      </Section>

      {/* ✉️ Contact */}
      <Section title="Contact">
        <ContactContent />
      </Section>
    </Stack>
  );
};
