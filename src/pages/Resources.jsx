import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { FileText, Download } from 'lucide-react';

const Resources = () => {
  const reports = [
    { title: "Annual Financial Audit Report 2025-26", size: "2.4 MB", date: "April 2026" },
    { title: "Rural Digital Education Impact Assessment", size: "1.8 MB", date: "January 2026" },
    { title: "Clean Water Hub Implementation Whitepaper", size: "3.1 MB", date: "November 2025" },
    { title: "Women Livelihood & Artisan Co-op Survey", size: "1.5 MB", date: "August 2025" }
  ];

  return (
    <PageContainer title="Resources & Reports">
      <section className="page-hero">
        <div className="container">
          <h1>Resources & Publications</h1>
          <p>Access our annual financial audit statements, program evaluation reports, and research whitepapers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <SectionTitle
            subtitle="Publications"
            title="Download Reports & Audits"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {reports.map((report, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>{report.title}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{report.date} • PDF ({report.size})</span>
                  </div>
                </div>
                <Button href="#" variant="outline" size="sm">
                  <Download size={16} /> Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Resources;
