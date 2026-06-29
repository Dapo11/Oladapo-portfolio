import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactInfo } from "@/components/contact/contact-info";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      {/* Added gap-8 to create spacing between the two columns */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1">
          <ContactInfo />
        </div>
      </div>
    </PageContainer>
  );
}
