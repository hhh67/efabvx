import { PolicyLayout } from '@/components/common/Layout/PolicyLayout';
import { ContactDescription } from '@/components/common/Policy/ContactDescription/ContactDescription';
import { DefinitionDescription } from '@/components/common/Policy/DefinitionDescription';
import { DescriptionList } from '@/components/common/Policy/DescriptionList';
import { DescriptionTerm } from '@/components/common/Policy/DescriptionTerm';

export const Policy: React.FC = () => {
  return (
    <PolicyLayout title="ムーンフェース">
      <DescriptionList>
        <DescriptionTerm term="1. 個人情報" />
        <DefinitionDescription>
          本アプリでは、Googleの提供するサードパーティ製の広告プラットフォームを利用しております。
        </DefinitionDescription>

        <DescriptionTerm term="2. 免責事項" />
        <DefinitionDescription>
          利用上の不具合に関しましては可能な範囲でサポートを行なっておりますが、利用者が本アプリを利用して生じた障害に関して、開発元は責任を負わないものとします。
        </DefinitionDescription>

        <ContactDescription order={3} />
      </DescriptionList>
    </PolicyLayout>
  );
};
