import { Stack } from '@mui/material';
import { AboutContent } from './AboutContent';
import { ContactContent } from './ContactContent';
import { ProfileContent } from './ProfileContent';
import { Section } from './Section';

export const Mobile: React.FC = () => {
  return (
    <Stack direction={'column'} spacing={2} pb={4}>
      {/* 🐱 Profile */}
      <ProfileContent />

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
