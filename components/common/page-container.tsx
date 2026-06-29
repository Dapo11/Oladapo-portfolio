import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div>
        <PageHeader title={title} description={description} />
        <div className="md:container mx-2 md:mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
