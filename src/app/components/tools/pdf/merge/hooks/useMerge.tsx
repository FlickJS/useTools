import { useState } from 'react';

interface PdfMergeHook {
  mergedPdf: Uint8Array | null;
  handleMerge: (mergedPdfBytes: Uint8Array) => void;
  handleDownloadPdf: () => void;
}

const usePdfMerge = (): PdfMergeHook => {
  const [mergedPdf, setMergedPdf] = useState<Uint8Array | null>(null);

  const handleMerge = (mergedPdfBytes: Uint8Array) => {
    setMergedPdf(mergedPdfBytes);
  };

  const handleDownloadPdf = () => {
    if (mergedPdf) {
      const blob = new Blob([mergedPdf], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'merged.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return {
    mergedPdf,
    handleMerge,
    handleDownloadPdf,
  };
};

export default usePdfMerge;