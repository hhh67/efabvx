import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material';

type AccordionSectionProps = {
  title: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
};

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  defaultExpanded = false,
  children,
}: AccordionSectionProps) => {
  return (
    <Accordion defaultExpanded={defaultExpanded} disableGutters square>
      <AccordionSummary expandIcon={<ChevronRightIcon />}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          width={'100%'}
        >
          <Typography
            variant="h6"
            fontFamily={"'Courier New', Courier, monospace"}
            fontWeight={'bold'}
          >
            {title}
          </Typography>
          <Typography variant="h6"></Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
