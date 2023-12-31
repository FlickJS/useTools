import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const usePdfMergeLogic = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

  const mergePdfs = async (onMerge: (mergedPdfBytes: Uint8Array) => void) => {
    if (file1 && file2) {
      const pdfDoc1 = await PDFDocument.load(await file1.arrayBuffer());
      const pdfDoc2 = await PDFDocument.load(await file2.arrayBuffer());

      const mergedDoc = await PDFDocument.create();

      const [copiedPages1, copiedPages2] = await Promise.all([
        mergedDoc.copyPages(pdfDoc1, pdfDoc1.getPageIndices()),
        mergedDoc.copyPages(pdfDoc2, pdfDoc2.getPageIndices()),
      ]);

      copiedPages1.forEach((page) => mergedDoc.addPage(page));
      copiedPages2.forEach((page) => mergedDoc.addPage(page));

      const mergedPdfBytes = await mergedDoc.save();

      onMerge(mergedPdfBytes);
    }
  };

  return {
    file1,
    setFile1,
    file2,
    setFile2,
    mergePdfs,
  };
};

export default usePdfMergeLogic;