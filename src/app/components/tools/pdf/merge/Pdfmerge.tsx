import React, { useState } from 'react';
import PdfMerge from '../../../libs/Pdfmerges';
import usePdfMerge from './hooks/useMerge';

function App() {
  const { mergedPdf, handleMerge, handleDownloadPdf } = usePdfMerge();

  return (
    <>
      <PdfMerge onMerge={handleMerge} />
      {mergedPdf && (
        <div>
          <h2>Download Merged PDF:</h2>
          <button onClick={handleDownloadPdf}>Download</button>
        </div>
      )}
    </>
  );
}

export default App;