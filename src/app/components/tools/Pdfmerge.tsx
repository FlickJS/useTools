import React, { useState } from 'react';
import PdfMerge from '../libs/Pdfmerges';


function App() {
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


  return (
    <>
      <PdfMerge onMerge={handleMerge}/>
      {mergedPdf && (
        <div>
          <h2>Pobierz połączony pdf:</h2>
          <button onClick={handleDownloadPdf}>Pobierz</button>
        </div>
      )}
    </>
  )
}

export default App
