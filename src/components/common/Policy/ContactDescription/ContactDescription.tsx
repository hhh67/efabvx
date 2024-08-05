import { Link, Stack, Typography } from '@mui/material';
import { DefinitionDescription } from '../DefinitionDescription';
import { DescriptionTerm } from '../DescriptionTerm';

type ContactDescriptionProps = {
  order: number;
};

export const ContactDescription: React.FC<ContactDescriptionProps> = ({
  order,
}: ContactDescriptionProps) => {
  return (
    <>
      <DescriptionTerm term={`${order}. お問い合わせ`} />
      <DefinitionDescription>
        <Stack direction="column" spacing={1}>
          <Typography>
            本ポリシーに関するお問い合わせは、下記のメールアドレスまでご連絡ください。
          </Typography>
          <Link
            component={'a'}
            href="mailto:efabvx@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            efabvx@gmail.com
          </Link>
        </Stack>
      </DefinitionDescription>
    </>
  );
};
