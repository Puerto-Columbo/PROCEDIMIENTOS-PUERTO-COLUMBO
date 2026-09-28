import { useState } from 'react';
import { 
  Printer, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  AlertTriangle,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { 
  PTS_SGI_009_DATA, 
  downloadOfficialDocument, 
  TPV_CARGA_SUELTA_DATA, 
  downloadTpvDocument 
} from '../data/officialDocumentContent';

interface OfficialDocumentViewerProps {
  docCode?: string;
  docUrl?: string;
  onToast?: (msg: string) => void;
}

export function OfficialDocumentViewer({ docCode, docUrl, onToast }: OfficialDocumentViewerProps) {
  const isTpvDoc = 
    Boolean(docCode && (docCode.includes('POP-ALP-TPV') || docCode.includes('ALP-TPV'))) ||
    Boolean(docUrl && (docUrl.includes('pop-alp-tpv') || docUrl.includes('doc-pop-alp-tpv')));

  const totalPages = isTpvDoc ? 4 : 5;
  const pageNumbers = isTpvDoc ? [1, 2, 3, 4] : [1, 2, 3, 4, 5];

  const [currentPage, setCurrentPage] = useState<number | 'all'>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const data = PTS_SGI_009_DATA;
  const tpvData = TPV_CARGA_SUELTA_DATA;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (isTpvDoc) {
      downloadTpvDocument(tpvData);
      if (onToast) onToast('Descargando procedimiento oficial Despacho Carga Suelta TPV');
    } else {
      downloadOfficialDocument(data);
      if (onToast) onToast('Descargando documento oficial PTS-SGI-009');
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-200/90 overflow-hidden">
      {/* Viewer Subheader / Controls */}
      <div className="bg-slate-800 text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 shrink-0">
        {/* Page Switcher */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-medium mr-1 hidden sm:inline">Páginas:</span>
          <button
            onClick={() => setCurrentPage('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
              currentPage === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
            }`}
          >
            Todas ({totalPages})
          </button>
          {pageNumbers.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-7 h-7 rounded-md text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center ${
                currentPage === pageNum
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom */}
          <div className="hidden md:flex items-center bg-slate-700/80 rounded-lg p-0.5 border border-slate-600 text-slate-200">
            <button
              onClick={() => setZoomLevel((prev) => Math.max(80, prev - 10))}
              className="p-1 hover:text-white transition-colors cursor-pointer"
              title="Reducir zoom"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono px-1.5 min-w-[3rem] text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel((prev) => Math.min(130, prev + 10))}
              className="p-1 hover:text-white transition-colors cursor-pointer"
              title="Aumentar zoom"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Print button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
            title="Imprimir o guardar como PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Imprimir / PDF</span>
          </button>

          {/* Download file */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs shadow-xs transition-colors cursor-pointer"
            title="Descargar archivo oficial"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar</span>
          </button>
        </div>
      </div>

      {/* Scrollable Document Container */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8 flex flex-col items-center">
        {/* Style applied when zoomed */}
        <div 
          className="w-full max-w-4xl space-y-8 transition-transform origin-top"
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
        >

          {/* ================= TPV CARGA SUELTA (4 PÁGINAS) ================= */}
          {isTpvDoc ? (
            <>
              {/* PÁGINA 1: OBJETO, CAMPO, NORMAS, DEFINICIONES, RESPONSABILIDADES */}
              {(currentPage === 'all' || currentPage === 1) && (
                <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-12 min-h-[920px] flex flex-col justify-between text-slate-900 relative">
                  <div className="space-y-4">
                    {/* Header institucional con Logo del Saco */}
                    <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-[#003B6F] pb-3 mb-4 gap-3">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/logo-saco.svg" 
                          alt="Logo Saco - Carga Suelta" 
                          className="h-12 w-auto object-contain shrink-0"
                        />
                        <div className="text-left">
                          <div className="font-bold text-xs sm:text-sm text-slate-900 tracking-wide uppercase">
                            {tpvData.headerCompany}
                          </div>
                          <div className="text-[11px] font-semibold text-[#003B6F] tracking-wide uppercase">
                            {tpvData.headerCategory}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-300 rounded-sm">
                          {tpvData.code}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h1 className="text-lg sm:text-xl font-bold text-[#003B6F] underline tracking-tight uppercase">
                        {tpvData.title}
                      </h1>
                      <p className="text-xs sm:text-sm italic text-slate-500 mt-0.5">
                        {tpvData.subtitle}
                      </p>
                    </div>

                    {/* 1. Objeto */}
                    <div>
                      <h3 className="text-sm font-bold text-[#003B6F] uppercase mb-1">
                        1. OBJETO
                      </h3>
                      {tpvData.objeto.map((p, idx) => (
                        <p key={idx} className="text-xs sm:text-[13px] text-slate-800 leading-relaxed mb-2 text-justify">
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* 2. Campo de Aplicación */}
                    <div>
                      <h3 className="text-sm font-bold text-[#003B6F] uppercase mb-1">
                        2. CAMPO DE APLICACIÓN
                      </h3>
                      {tpvData.campoAplicacion.map((p, idx) => (
                        <p key={idx} className="text-xs sm:text-[13px] text-slate-800 leading-relaxed mb-2 text-justify">
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* 3. Normas y Referencias */}
                    <div>
                      <h3 className="text-sm font-bold text-[#003B6F] uppercase mb-1">
                        3. NORMAS Y REFERENCIAS
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed">
                        {tpvData.normasReferencias}
                      </p>
                    </div>

                    {/* 4. Definiciones y/o Abreviaturas */}
                    <div>
                      <h3 className="text-sm font-bold text-[#003B6F] uppercase mb-2">
                        4. DEFINICIONES Y/O ABREVIATURAS
                      </h3>
                      <table className="w-full border-collapse border border-slate-700 text-xs sm:text-[13px]">
                        <tbody>
                          {tpvData.definiciones.map((d, dIdx) => (
                            <tr key={dIdx} className={dIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                              <td className="border border-slate-700 p-2 font-bold w-1/4 align-top text-slate-900 bg-slate-100/60">
                                {d.term}
                              </td>
                              <td className="border border-slate-700 p-2 text-slate-800 align-top">
                                {d.def}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* 5. Método - 5.1 Responsabilidades (Inicio) */}
                    <div>
                      <h3 className="text-sm font-bold text-[#003B6F] uppercase mb-1">
                        5. MÉTODO
                      </h3>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0284C7] mb-2">
                        5.1 RESPONSABILIDADES
                      </h4>
                      
                      <p className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">
                        {tpvData.responsabilidades[0].role}:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-[13px] text-slate-800 ml-2 mb-3">
                        {tpvData.responsabilidades[0].items.map((it, itIdx) => (
                          <li key={itIdx}>{it}</li>
                        ))}
                      </ul>

                      <p className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">
                        {tpvData.responsabilidades[1].role}:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-[13px] text-slate-800 ml-2">
                        {tpvData.responsabilidades[1].items.slice(0, 3).map((it, itIdx) => (
                          <li key={itIdx}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-1">
                    <span className="uppercase tracking-wider font-semibold">{tpvData.watermark}</span>
                    <span>Página 1 de 4</span>
                  </div>
                </div>
              )}

              {/* PÁGINA 2: CONTINUACIÓN RESPONSABILIDADES & ETAPAS 5.2.1 A 5.2.4 */}
              {(currentPage === 'all' || currentPage === 2) && (
                <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-12 min-h-[920px] flex flex-col justify-between text-slate-900 relative">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="text-center font-bold text-xs sm:text-sm text-slate-800 border-b-2 border-[#003B6F] pb-2 mb-4 tracking-wide uppercase">
                      {tpvData.headerCompany} | {tpvData.headerCategory}
                    </div>

                    {/* Continuación Responsabilidades */}
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-[13px] text-slate-800 ml-2 mb-4">
                      {tpvData.responsabilidades[1].items.slice(3).map((it, itIdx) => (
                        <li key={itIdx}>{it}</li>
                      ))}
                    </ul>

                    {/* 5.2 Etapas */}
                    <h4 className="text-xs sm:text-sm font-bold text-[#0284C7] mb-3 uppercase">
                      5.2 DESCRIPCIÓN DE LAS ETAPAS DEL PROCESO DE DESPACHO DE CARGA SUELTA - TPV
                    </h4>

                    {tpvData.etapas.slice(0, 4).map((et, eIdx) => (
                      <div key={eIdx} className="space-y-1.5 pt-1">
                        <h5 className="text-xs sm:text-sm font-bold text-[#0284C7]">
                          {et.code} {et.title}
                        </h5>
                        {et.paragraphs?.map((p, pIdx) => (
                          <p key={pIdx} className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify">
                            {p}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-1">
                    <span className="uppercase tracking-wider font-semibold">{tpvData.watermark}</span>
                    <span>Página 2 de 4</span>
                  </div>
                </div>
              )}

              {/* PÁGINA 3: ETAPAS 5.2.5 A 5.2.10 (CON ALERTA IMPORTANTE) */}
              {(currentPage === 'all' || currentPage === 3) && (
                <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-12 min-h-[920px] flex flex-col justify-between text-slate-900 relative">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="text-center font-bold text-xs sm:text-sm text-slate-800 border-b-2 border-[#003B6F] pb-2 mb-4 tracking-wide uppercase">
                      {tpvData.headerCompany} | {tpvData.headerCategory}
                    </div>

                    {tpvData.etapas.slice(4).map((et, eIdx) => (
                      <div key={eIdx} className="space-y-1.5 pt-1">
                        <h5 className="text-xs sm:text-sm font-bold text-[#0284C7]">
                          {et.code} {et.title}
                        </h5>
                        {et.paragraphs?.map((p, pIdx) => (
                          <p key={pIdx} className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify">
                            {p}
                          </p>
                        ))}
                        {et.important && (
                          <div className="p-3 my-2 bg-rose-50 border-l-4 border-rose-600 text-rose-700 text-xs sm:text-[13px] font-bold">
                            {et.important}
                          </div>
                        )}
                        {et.paragraphsAfter?.map((pa, paIdx) => (
                          <p key={paIdx} className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify">
                            {pa}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-1">
                    <span className="uppercase tracking-wider font-semibold">{tpvData.watermark}</span>
                    <span>Página 3 de 4</span>
                  </div>
                </div>
              )}

              {/* PÁGINA 4: PUNTOS CRÍTICOS & REGISTROS */}
              {(currentPage === 'all' || currentPage === 4) && (
                <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-12 min-h-[920px] flex flex-col justify-between text-slate-900 relative">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center font-bold text-xs sm:text-sm text-slate-800 border-b-2 border-[#003B6F] pb-2 mb-4 tracking-wide uppercase">
                      {tpvData.headerCompany} | {tpvData.headerCategory}
                    </div>

                    {/* 6. Puntos Críticos del Proceso */}
                    <div>
                      <h3 className="text-sm font-bold text-[#003B6F] uppercase mb-3">
                        6. PUNTOS CRÍTICOS DEL PROCESO
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-800">
                        {tpvData.puntosCriticos.map((pc, pcIdx) => (
                          <li key={pcIdx} className="flex items-start gap-2 text-justify">
                            <span className="text-[#003B6F] font-bold shrink-0">•</span>
                            <span>
                              <strong className="text-slate-900">{pc.label}:</strong> {pc.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 7. Registros */}
                    <div className="pt-4">
                      <h3 className="text-sm font-bold text-[#003B6F] uppercase mb-3">
                        7. REGISTROS
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-[13px] text-slate-800">
                        {tpvData.registros.map((reg, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-[#003B6F] font-bold shrink-0">•</span>
                            <span>{reg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-1">
                    <span className="uppercase tracking-wider font-semibold">{tpvData.watermark}</span>
                    <span>Página 4 de 4</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* ================= PÁGINA 1: PORTADA ================= */}
              {(currentPage === 'all' || currentPage === 1) && (
                <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-14 min-h-[900px] flex flex-col justify-between text-slate-900 relative">
              {/* Header Logo */}
              <div className="text-center pt-4">
                <div className="flex justify-center mb-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://res.cloudinary.com/djmo7ydpm/image/upload/v1776870967/logo-puerto_2xaaaaaaaaa_olrchx.png" 
                      alt="Puerto Columbo" 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#003B6F] uppercase">
                  PUERTO COLUMBO
                </h2>
                <p className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                  D&C EXTRAPORTUARIO
                </p>
              </div>

              {/* Title Box */}
              <div className="my-10">
                <div className="bg-slate-200 border border-slate-400 py-4 px-6 text-center shadow-xs">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    {data.title}
                  </h1>
                </div>
              </div>

              {/* Metadata Block */}
              <div className="space-y-3 max-w-md mx-auto text-sm sm:text-base w-full">
                <div className="flex items-baseline">
                  <span className="w-44 font-bold text-slate-900">Código:</span>
                  <span className="font-mono font-bold text-slate-950 text-lg bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {data.code}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="w-44 font-bold text-slate-900">Número Versión:</span>
                  <span className="font-mono text-slate-800">{data.version}</span>
                </div>
                <div className="flex items-baseline">
                  <span className="w-44 font-bold text-slate-900">Año:</span>
                  <span className="text-slate-800">{data.year}</span>
                </div>
                <div className="flex items-baseline">
                  <span className="w-44 font-bold text-slate-900">Páginas:</span>
                  <span className="text-slate-800">{data.pages}</span>
                </div>
              </div>

              {/* Signatures Table */}
              <div className="mt-14 mb-4">
                <table className="w-full border-collapse border border-slate-900 text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-900 p-2.5 text-left font-bold w-1/3">
                        EMITE
                      </th>
                      <th className="border border-slate-900 p-2.5 text-left font-bold w-1/3">
                        REVISA
                      </th>
                      <th className="border border-slate-900 p-2.5 text-left font-bold w-1/3">
                        APRUEBA
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-900 p-3 space-y-1 align-top bg-white">
                        <div><strong className="text-slate-700">Nombre:</strong> {data.emite.name}</div>
                        <div><strong className="text-slate-700">Fecha:</strong> {data.emite.date}</div>
                        <div className="pt-2 text-slate-400 italic text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Firma Registrada SGI</span>
                        </div>
                      </td>
                      <td className="border border-slate-900 p-3 space-y-1 align-top bg-white">
                        <div><strong className="text-slate-700">Nombre:</strong> {data.revisa.name}</div>
                        <div><strong className="text-slate-700">Fecha:</strong> {data.revisa.date}</div>
                        <div className="pt-2 text-slate-400 italic text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Firma Registrada SGI</span>
                        </div>
                      </td>
                      <td className="border border-slate-900 p-3 space-y-1 align-top bg-white">
                        <div><strong className="text-slate-700">Nombre:</strong> {data.aprueba.name}</div>
                        <div><strong className="text-slate-700">Fecha:</strong> {data.aprueba.date}</div>
                        <div className="pt-2 text-slate-400 italic text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Firma Registrada SGI</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Page Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                <span>Puerto Columbo S.A. • Procedimiento Operador Maquinaria</span>
                <span>Página 1 de 5</span>
              </div>
            </div>
          )}

          {/* ================= PÁGINA 2: ÍNDICE ================= */}
          {(currentPage === 'all' || currentPage === 2) && (
            <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-14 min-h-[900px] flex flex-col justify-between text-slate-900 relative">
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-200">
                  <span className="text-xs font-bold text-slate-600 tracking-wider">PUERTO COLUMBO S.A.</span>
                  <span className="text-xs font-mono font-bold text-slate-500">{data.code}</span>
                </div>

                {/* Index Title */}
                <h2 className="text-base sm:text-lg font-bold tracking-widest text-slate-900 uppercase border-b-2 border-slate-900 pb-1 inline-block mb-8">
                  Í N D I C E
                </h2>

                {/* Index Entries */}
                <div className="space-y-4 text-sm sm:text-base font-semibold text-slate-800 max-w-lg pl-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[#003B6F] font-bold w-6">1.</span>
                    <span>OBJETO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#003B6F] font-bold w-6">2.</span>
                    <span>CAMPO DE APLICACIÓN</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#003B6F] font-bold w-6">3.</span>
                    <span>NORMAS Y REFERENCIAS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#003B6F] font-bold w-6">4.</span>
                    <span>DEFINICIONES Y/O ABREVIATURAS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#003B6F] font-bold w-6">5.</span>
                    <span>METODO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#003B6F] font-bold w-6">6.</span>
                    <span>ASPECTOS ADICIONALES</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#003B6F] font-bold w-6">7.</span>
                    <span>ANEXOS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#003B6F] font-bold w-6">8.</span>
                    <span>CONTROL DE CAMBIOS</span>
                  </div>
                </div>
              </div>

              {/* Official Stamp */}
              <div className="my-16 text-center">
                <div className="inline-block border-4 border-red-600 bg-red-50/40 p-6 px-10 rounded-sm">
                  <p className="text-red-700 font-extrabold text-base tracking-wider uppercase mb-1">
                    COPIA CONTROLADA
                  </p>
                  <p className="text-red-600 italic text-xs font-semibold">
                    “Documento impreso es copia No controlada”
                  </p>
                </div>
              </div>

              {/* Page Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                <span>Puerto Columbo S.A. • Procedimiento Operador Maquinaria</span>
                <span>Página 2 de 5</span>
              </div>
            </div>
          )}

          {/* ================= PÁGINA 3: CONTENIDO PRINCIPAL ================= */}
          {(currentPage === 'all' || currentPage === 3) && (
            <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-14 min-h-[900px] flex flex-col justify-between text-slate-900 relative">
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-600">PUERTO COLUMBO S.A.</span>
                  <span className="font-mono font-bold text-slate-500">{data.code}</span>
                </div>

                {/* 1. Objeto */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2 uppercase">
                    1. OBJETO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
                    {data.objeto}
                  </p>
                </div>

                {/* 2. Campo de Aplicación */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2 uppercase">
                    2. CAMPO DE APLICACIÓN
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
                    {data.campoAplicacion}
                  </p>
                </div>

                {/* 3. Normas y Referencias */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2 uppercase">
                    3. NORMAS Y REFERENCIAS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {data.normasReferencias}
                  </p>
                </div>

                {/* 4. Definiciones */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2 uppercase">
                    4. DEFINICIONES Y/O ABREVIATURAS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {data.definiciones}
                  </p>
                </div>

                {/* 5. Método */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2 uppercase">
                    5. MÉTODO
                  </h3>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 ml-2 uppercase">
                    5.1 RESPONSABILIDADES
                  </h4>
                  
                  <div className="space-y-4 ml-4">
                    {data.responsabilidades.map((resp, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <p className="text-xs sm:text-sm font-bold text-slate-900">
                          {resp.role}:
                        </p>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-slate-800 space-y-1 pl-2">
                          {resp.items.map((item, iIdx) => (
                            <li key={iIdx} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Page Footer */}
              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                <span>Puerto Columbo S.A. • Procedimiento Operador Maquinaria</span>
                <span>Página 3 de 5</span>
              </div>
            </div>
          )}

          {/* ================= PÁGINA 4: ETAPAS DEL PROCESO ================= */}
          {(currentPage === 'all' || currentPage === 4) && (
            <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-14 min-h-[900px] flex flex-col justify-between text-slate-900 relative">
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-600">PUERTO COLUMBO S.A.</span>
                  <span className="font-mono font-bold text-slate-500">{data.code}</span>
                </div>

                {/* 5.2 Etapas */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 uppercase">
                    5.2 DESCRIPCIÓN DE LAS ETAPAS DEL PROCESO
                  </h3>

                  <div className="space-y-5 ml-2">
                    {data.etapas.map((etapa, eIdx) => (
                      <div key={eIdx} className="space-y-2">
                        <h4 className="text-xs sm:text-sm font-bold text-[#003B6F]">
                          {etapa.code} {etapa.title}
                        </h4>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-slate-800 space-y-1.5 pl-3">
                          {etapa.items.map((it, itIdx) => (
                            <li key={itIdx} className="leading-relaxed text-justify">
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Aspectos Adicionales */}
                <div className="pt-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 uppercase">
                    6. ASPECTOS ADICIONALES
                  </h3>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-800 space-y-2.5 ml-2 pl-3">
                    {data.aspectosAdicionales.map((asp, aIdx) => (
                      <li key={aIdx} className="leading-relaxed text-justify">
                        {asp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Page Footer */}
              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                <span>Puerto Columbo S.A. • Procedimiento Operador Maquinaria</span>
                <span>Página 4 de 5</span>
              </div>
            </div>
          )}

          {/* ================= PÁGINA 5: ANEXOS & CONTROL DE CAMBIOS ================= */}
          {(currentPage === 'all' || currentPage === 5) && (
            <div className="bg-white rounded-lg shadow-xl border border-slate-300 p-8 sm:p-14 min-h-[900px] flex flex-col justify-between text-slate-900 relative">
              <div className="space-y-8">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-600">PUERTO COLUMBO S.A.</span>
                  <span className="font-mono font-bold text-slate-500">{data.code}</span>
                </div>

                {/* 7. Anexos */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2 uppercase">
                    7. ANEXOS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {data.anexos}
                  </p>
                </div>

                {/* 8. Control de Cambios */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 uppercase">
                    8. CONTROL DE CAMBIOS
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-900 text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="border border-slate-900 p-2.5 text-left font-bold w-1/4">
                            Versión
                          </th>
                          <th className="border border-slate-900 p-2.5 text-left font-bold w-1/2">
                            Descripción
                          </th>
                          <th className="border border-slate-900 p-2.5 text-left font-bold w-1/4">
                            Fecha
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.controlCambios.map((cambio, cIdx) => (
                          <tr key={cIdx} className="bg-white">
                            <td className="border border-slate-900 p-2.5 font-mono font-bold">
                              {cambio.version}
                            </td>
                            <td className="border border-slate-900 p-2.5">
                              {cambio.description}
                            </td>
                            <td className="border border-slate-900 p-2.5 text-slate-700">
                              {cambio.date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Institutional Sign-off */}
              <div className="pt-10 pb-4 text-center">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Sistema de Gestión Integrado (SGI) • Puerto Columbo Valparaíso
                </p>
              </div>

              {/* Page Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                <span>Puerto Columbo S.A. • Procedimiento Operador Maquinaria</span>
                <span>Página 5 de 5</span>
              </div>
            </div>
          )}
        </>
      )}

        </div>
      </div>
    </div>
  );
}
