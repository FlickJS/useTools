import React from 'react';
import { PDFDocument } from 'pdf-lib';
import usePdfMergeLogic from './hooks/useMergeLogic';

interface PdfMergerProps {
  onMerge: (mergedPdfBytes: Uint8Array) => void;
}

const PdfMerger: React.FC<PdfMergerProps> = ({ onMerge }) => {
  const { file1, setFile1, file2, setFile2, mergePdfs } = usePdfMergeLogic();

  return (
    <div>
      <input type="file" onChange={(e) => setFile1(e.target.files?.[0] || null)} />
      <input type="file" onChange={(e) => setFile2(e.target.files?.[0] || null)} />
      <button onClick={() => mergePdfs(onMerge)}>Połącz PDF</button>
    </div>
  );
};

export default PdfMerger;