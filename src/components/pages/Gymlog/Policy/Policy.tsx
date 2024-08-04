import { PolicyLayout } from '@/components/common/Layout/PolicyLayout';
import { ContactDescription } from '@/components/common/Policy/ContactDescription/ContactDescription';
import { DefinitionDescription } from '@/components/common/Policy/DefinitionDescription';
import { ExampleTypography } from '@/components/common/Policy/DefinitionDescription/ExampleTypography';
import { DescriptionList } from '@/components/common/Policy/DescriptionList';
import { DescriptionTerm } from '@/components/common/Policy/DescriptionTerm';
import { Stack, Typography } from '@mui/material';

export const Policy: React.FC = () => {
  return (
    <PolicyLayout title="ジムログ">
      <DescriptionList>
        <DescriptionTerm term="1. 個人情報の管理" />
        <DefinitionDescription>
          個人情報の安全性確保のために、セキュリティに万全の対策を講じております。
        </DefinitionDescription>

        <DescriptionTerm term="2. 個人情報の取得" />
        <DefinitionDescription>
          2.1
          <br />
          　本アプリでは、メールでの問い合わせの際に、メールアドレスを収集いたします。
          <br />
          2.2
          <br />
          　本アプリでは、Googleの提供するサードパーティ製の広告プラットフォームを利用しております。
          <br />
        </DefinitionDescription>

        <DescriptionTerm term="3. 個人情報の利用" />
        <DefinitionDescription>
          <Stack direction="column" spacing={2}>
            <Typography>
              本アプリでは、機能改善のため個人を特定できない範囲でセキュリティに万全の対策を講じた上でアプリのアクセス解析を行います。
            </Typography>
            <ExampleTypography>
              例:
              クラッシュログの送信によりバグ発生箇所を特定し、迅速な修正対応を行う
            </ExampleTypography>
            <Typography>
              また、お問合せの際には不具合の早期改善のため、デバイス名、システム名、システムバージョン、端末にインストール済みの本アプリのバージョンをメールに記載させていただいております。
            </Typography>
            <ExampleTypography>
              例: iPhone 14 Pro Max iOS 16.4, ジムログ 1.0.0
            </ExampleTypography>
            <Typography>
              メールでのお問い合わせの際には、問い合わせのやり取りに限り、送信元のメールアドレスを利用いたします。
            </Typography>
          </Stack>
        </DefinitionDescription>

        <DescriptionTerm term="4. 免責事項" />
        <DefinitionDescription>
          利用上の不具合に関しましては可能な範囲でサポートを行なっておりますが、利用者が本アプリを利用して生じた障害に関して、開発元は責任を負わないものとします。
        </DefinitionDescription>

        <ContactDescription order={5} />
      </DescriptionList>
    </PolicyLayout>
  );
};
