import { PolicyLayout } from '@/components/common/Layout/PolicyLayout';
import { ContactDescription } from '@/components/common/Policy/ContactDescription/ContactDescription';
import { DefinitionDescription } from '@/components/common/Policy/DefinitionDescription';
import { DescriptionList } from '@/components/common/Policy/DescriptionList';
import { DescriptionTerm } from '@/components/common/Policy/DescriptionTerm';
import { Stack, Typography } from '@mui/material';

export const Policy: React.FC = () => {
  return (
    <PolicyLayout title="Picgle">
      <DescriptionList>
        <DescriptionTerm term="1. 個人情報" />
        <DefinitionDescription>
          本アプリでは、Googleの提供するサードパーティ製の広告プラットフォームを利用しております。
        </DefinitionDescription>

        <DescriptionTerm term="2. 免責事項" />
        <DefinitionDescription>
          <Stack direction={'column'} spacing={2}>
            <Typography>
              利用上の不具合に関しましては可能な範囲でサポートを行なっておりますが、利用者が本アプリを利用して生じた障害に関して、開発元は責任を負わないものとします。
            </Typography>
            <Typography>
              本アプリは、アプリ内のWebブラウザでGoogle,
              Bingを使用します。しかし、本アプリはこれらの検索エンジンの提供元とは一切関係ありません。
            </Typography>
          </Stack>
        </DefinitionDescription>

        <ContactDescription order={3} />
      </DescriptionList>
    </PolicyLayout>
  );
};
