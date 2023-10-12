"use client";

import Pdfmerge from './components/tools/pdf/merge/Pdfmerge';
import Layout from './components/layout/Layout';
import styles from './page.module.css';

export default function Home() {
  return (
    <Layout>
      <Pdfmerge />
    </Layout>
  )
}
