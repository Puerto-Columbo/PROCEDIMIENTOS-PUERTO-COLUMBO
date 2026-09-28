export interface OfficialDocumentData {
  title: string;
  code: string;
  version: string;
  year: string;
  pages: number;
  emite: { name: string; date: string };
  revisa: { name: string; date: string };
  aprueba: { name: string; date: string };
  objeto: string;
  campoAplicacion: string;
  normasReferencias: string;
  definiciones: string;
  responsabilidades: {
    role: string;
    items: string[];
  }[];
  etapas: {
    code: string;
    title: string;
    items: string[];
  }[];
  aspectosAdicionales: string[];
  anexos: string;
  controlCambios: {
    version: string;
    description: string;
    date: string;
  }[];
}

export const PTS_SGI_009_DATA: OfficialDocumentData = {
  title: "Procedimiento Operador Maquinaria",
  code: "PTS- SGI-009",
  version: "000",
  year: "2026",
  pages: 5,
  emite: { name: "M. Silva", date: "23-09-2026" },
  revisa: { name: "L. Muñoz", date: "23-09-2026" },
  aprueba: { name: "L. Muñoz", date: "23-09-2026" },
  objeto:
    "Estandarizar las actividades para movilizar todo tipo de material considerado como “carga” o “contenedor” que por su peso y tamaño no puede ser manipulado manualmente. El propósito es recepcionar, organizar y despachar contenedores, pallets, carga suelta o mercancías, garantizando faenas expeditas y seguras dentro de las bodegas o en patio.",
  campoAplicacion:
    "Aplica a los Operadores de Maquinaria de Puerto Columbo S.A., incluyendo personal de empresas contratistas, subcontratistas, proveedores de productos y servicios.",
  normasReferencias: "El presente procedimiento no considera normas y/o referencias",
  definiciones: "El presente procedimiento no considera definiciones y/o abreviaturas",
  responsabilidades: [
    {
      role: "Operador de Maquinaria",
      items: [
        "Ejecutar de manera segura los movimientos.",
        "Cuidar la maquina a cargo en su turno.",
      ],
    },
    {
      role: "Control Room / Coordinador de Bodega / Supervisor CFS / Gate Control / Almacén Patio",
      items: [
        "Entregar las directrices para organizar los movimientos de la carga.",
      ],
    },
  ],
  etapas: [
    {
      code: "5.2.1",
      title: "INICIO DE TURNO",
      items: [
        "Al iniciar el turno, el operador debe verificar el estado en el que se encuentra la máquina asignada.",
        "Debe realizar Check List de manera obligatoria con todas las observaciones.",
        "Mantener comunicación constante con Control Room/Coordinador Bodega/Supervisor CFS/Gate Control/Almacén Patio para organizar y mantener una planificación clara de las faenas diarias a realizar.",
      ],
    },
    {
      code: "5.2.2",
      title: "EJECUCIÓN DE MOVIMIENTOS",
      items: [
        "Proceder a movilizar las diversas cargas y mercancías (contenedor, pallets, carga suelta, etc.) según el requerimiento específico de la operación.",
        "Atender los requerimientos operativos de manera eficiente.",
      ],
    },
    {
      code: "5.2.3",
      title: "CIERRE DE TURNO",
      items: [
        "Estacionar la maquinaria en los lugares designados, reportando cualquier anomalía detectada durante el turno para asegurar la continuidad del siguiente operador.",
      ],
    },
  ],
  aspectosAdicionales: [
    "Estar atento y concentrado a las indicaciones entregadas por las distintas áreas respecto a carga, descarga, recepción, despacho tanto de carga suelta como de contenedores.",
    "Realizar de manera segura todas las labores tanto para la carga, como para el entorno en el cual están trabajando.",
  ],
  anexos: "El presente procedimiento no considera anexos.",
  controlCambios: [
    {
      version: "000",
      description: "Creación del documento",
      date: "23-09-2026",
    },
  ],
};

export function downloadOfficialDocument(data: OfficialDocumentData = PTS_SGI_009_DATA) {
  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${data.code} - ${data.title} - Puerto Columbo</title>
  <style>
    @page { size: A4 portrait; margin: 20mm; }
    body {
      font-family: Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      margin: 0;
      padding: 24px;
      line-height: 1.6;
    }
    .page {
      max-width: 800px;
      margin: 0 auto 40px auto;
      padding: 40px;
      background: white;
      border: 1px solid #d1d5db;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      page-break-after: always;
    }
    .header-logo { text-align: center; margin-bottom: 30px; }
    .header-logo h2 { margin: 0; color: #003B6F; font-size: 26px; font-weight: bold; letter-spacing: 1px; }
    .header-logo p { margin: 0; color: #4B5563; font-size: 13px; font-weight: bold; }
    .title-box {
      background-color: #E5E7EB;
      border: 1px solid #9CA3AF;
      padding: 12px;
      text-align: center;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 35px;
    }
    .meta-table {
      width: 100%;
      margin-bottom: 40px;
      font-size: 15px;
    }
    .meta-table td { padding: 6px 0; }
    .signatures-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 60px;
      border: 1px solid #000;
    }
    .signatures-table th, .signatures-table td {
      border: 1px solid #000;
      padding: 12px;
      text-align: left;
      font-size: 14px;
    }
    .signatures-table th { background: #f3f4f6; }
    .index-title {
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 2px;
      margin-bottom: 24px;
      border-bottom: 1px solid #000;
      display: inline-block;
      padding-bottom: 4px;
    }
    .index-list { list-style: none; padding-left: 0; font-size: 14px; line-height: 2.2; }
    .stamp-box {
      border: 3px solid #DC2626;
      color: #DC2626;
      text-align: center;
      padding: 16px;
      max-width: 360px;
      margin: 80px auto 0 auto;
      font-weight: bold;
    }
    .section-title {
      font-size: 15px;
      font-weight: bold;
      margin-top: 24px;
      margin-bottom: 12px;
    }
    .subsection-title {
      font-size: 14px;
      font-weight: bold;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    p, li { font-size: 13.5px; color: #1F2937; text-align: justify; }
    ul { margin: 6px 0 16px 20px; padding: 0; }
    li { margin-bottom: 6px; }
    .change-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      border: 1px solid #000;
    }
    .change-table th, .change-table td {
      border: 1px solid #000;
      padding: 8px 12px;
      font-size: 13px;
      text-align: left;
    }
    .change-table th { background: #f3f4f6; }
    @media print {
      body { padding: 0; background: white; }
      .page { border: none; box-shadow: none; margin: 0; padding: 0; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <!-- PÁGINA 1: PORTADA -->
  <div class="page">
    <div class="header-logo">
      <h2>PUERTO COLUMBO</h2>
      <p>D&C EXTRAPORTUARIO</p>
    </div>
    
    <div class="title-box">
      ${data.title}
    </div>

    <table class="meta-table">
      <tr>
        <td style="width: 150px; font-weight: bold;">Código:</td>
        <td><strong>${data.code}</strong></td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Número Versión:</td>
        <td>${data.version}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Año:</td>
        <td>${data.year}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Páginas:</td>
        <td>${data.pages}</td>
      </tr>
    </table>

    <table class="signatures-table">
      <tr>
        <th style="width: 33%;">EMITE</th>
        <th style="width: 33%;">REVISA</th>
        <th style="width: 33%;">APRUEBA</th>
      </tr>
      <tr>
        <td>
          <p><strong>Nombre:</strong> ${data.emite.name}</p>
          <p><strong>Fecha:</strong> ${data.emite.date}</p>
          <p><strong>Firma:</strong> <em>Registrada SGI</em></p>
        </td>
        <td>
          <p><strong>Nombre:</strong> ${data.revisa.name}</p>
          <p><strong>Fecha:</strong> ${data.revisa.date}</p>
          <p><strong>Firma:</strong> <em>Registrada SGI</em></p>
        </td>
        <td>
          <p><strong>Nombre:</strong> ${data.aprueba.name}</p>
          <p><strong>Fecha:</strong> ${data.aprueba.date}</p>
          <p><strong>Firma:</strong> <em>Registrada SGI</em></p>
        </td>
      </tr>
    </table>
  </div>

  <!-- PÁGINA 2: ÍNDICE -->
  <div class="page">
    <div class="index-title">I N D I C E</div>
    <ul class="index-list">
      <li><strong>1.</strong> OBJETO</li>
      <li><strong>2.</strong> CAMPO DE APLICACIÓN</li>
      <li><strong>3.</strong> NORMAS Y REFERENCIAS</li>
      <li><strong>4.</strong> DEFINICIONES Y/O ABREVIATURAS</li>
      <li><strong>5.</strong> METODO</li>
      <li><strong>6.</strong> ASPECTOS ADICIONALES</li>
      <li><strong>7.</strong> ANEXOS</li>
      <li><strong>8.</strong> CONTROL DE CAMBIOS</li>
    </ul>

    <div class="stamp-box">
      <div style="font-size: 15px; margin-bottom: 4px;">COPIA CONTROLADA</div>
      <div style="font-size: 12px; font-style: italic;">“Documento impreso es copia No controlada”</div>
    </div>
  </div>

  <!-- PÁGINA 3: OBJETO, CAMPO, NORMAS, DEFINICIONES, RESPONSABILIDADES -->
  <div class="page">
    <div class="section-title">1. OBJETO</div>
    <p>${data.objeto}</p>

    <div class="section-title">2. CAMPO DE APLICACIÓN</div>
    <p>${data.campoAplicacion}</p>

    <div class="section-title">3. NORMAS Y REFERENCIAS</div>
    <p>${data.normasReferencias}</p>

    <div class="section-title">4. DEFINICIONES Y/O ABREVIATURAS</div>
    <p>${data.definiciones}</p>

    <div class="section-title">5. MÉTODO</div>
    <div class="subsection-title">5.1 RESPONSABILIDADES</div>
    ${data.responsabilidades
      .map(
        (r) => `
      <p style="font-weight: bold; margin-bottom: 4px;">${r.role}:</p>
      <ul>
        ${r.items.map((i) => `<li>${i}</li>`).join('')}
      </ul>
    `
      )
      .join('')}
  </div>

  <!-- PÁGINA 4: ETAPAS DEL PROCESO & ASPECTOS ADICIONALES -->
  <div class="page">
    <div class="subsection-title">5.2 DESCRIPCIÓN DE LAS ETAPAS DEL PROCESO</div>
    ${data.etapas
      .map(
        (e) => `
      <div class="subsection-title" style="margin-left: 10px;">${e.code} ${e.title}</div>
      <ul style="margin-left: 28px;">
        ${e.items.map((i) => `<li>${i}</li>`).join('')}
      </ul>
    `
      )
      .join('')}

    <div class="section-title">6. ASPECTOS ADICIONALES</div>
    <ul>
      ${data.aspectosAdicionales.map((a) => `<li>${a}</li>`).join('')}
    </ul>
  </div>

  <!-- PÁGINA 5: ANEXOS & CONTROL DE CAMBIOS -->
  <div class="page">
    <div class="section-title">7. ANEXOS</div>
    <p>${data.anexos}</p>

    <div class="section-title">8. CONTROL DE CAMBIOS</div>
    <table class="change-table">
      <tr>
        <th style="width: 25%;">Versión</th>
        <th style="width: 50%;">Descripción</th>
        <th style="width: 25%;">Fecha</th>
      </tr>
      ${data.controlCambios
        .map(
          (c) => `
        <tr>
          <td><strong>${c.version}</strong></td>
          <td>${c.description}</td>
          <td>${c.date}</td>
        </tr>
      `
        )
        .join('')}
    </table>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.code.replace(/\s+/g, '_')}_${data.title.replace(/\s+/g, '_')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export interface TpvDocumentData {
  title: string;
  subtitle: string;
  headerCompany: string;
  headerCategory: string;
  code: string;
  pages: number;
  watermark: string;
  objeto: string[];
  campoAplicacion: string[];
  normasReferencias: string;
  definiciones: { term: string; def: string }[];
  responsabilidades: {
    role: string;
    items: string[];
  }[];
  etapas: {
    code: string;
    title: string;
    paragraphs?: string[];
    important?: string;
    paragraphsAfter?: string[];
  }[];
  puntosCriticos: { label: string; text: string }[];
  registros: string[];
}

export const TPV_CARGA_SUELTA_DATA: TpvDocumentData = {
  title: "DESPACHO DE CARGA SUELTA DESDE TPV",
  subtitle: "Procedimiento de Almacén Patio",
  headerCompany: "PUERTO COLUMBO",
  headerCategory: "PROCEDIMIENTO OPERACIONAL - ALMACÉN PATIO",
  code: "POP-ALP-TPV",
  pages: 4,
  watermark: 'COPIA CONTROLADA - "Documento impreso es copia no controlada"',
  objeto: [
    "Establecer el procedimiento operativo y documental para realizar el despacho de carga suelta desde TPV hacia Puerto Columbo, definiendo las actividades que debe ejecutar el personal de Almacén Patio desde su llegada al terminal hasta la autorización de salida del transporte.",
    "El procedimiento busca asegurar la correcta coordinación con TPV, Control Documentos o Control Transporte, Operaciones, Aduana y los transportistas, además de garantizar que la documentación asociada al traslado sea completada, timbrada y entregada correctamente."
  ],
  campoAplicacion: [
    "Aplica al área de Almacén Patio de Puerto Columbo S.A. y al personal encargado de gestionar presencialmente en TPV el despacho de carga suelta con destino a Puerto Columbo.",
    "Durante el proceso participan además TPV, Control Documentos o Control Transporte, Operaciones TPV, Aduana y el transportista."
  ],
  normasReferencias: "El presente procedimiento no considera normas y/o referencias adicionales.",
  definiciones: [
    { term: "TPV", def: "Terminal donde se realiza el retiro de la carga suelta." },
    { term: "PC", def: "Puerto Columbo." },
    { term: "BL", def: "Bill of Lading, documento que contiene información asociada a la carga." },
    { term: "Guía PC", def: "Guía de despacho de Puerto Columbo utilizada para documentar el traslado de la carga." },
    { term: "INTERCHANGE", def: "Documento o registro utilizado por el transportista para completar el proceso de salida desde TPV." }
  ],
  responsabilidades: [
    {
      role: "El Jefe y/o Encargado de área es responsable de",
      items: [
        "Conocer y aplicar el presente procedimiento.",
        "Supervisar la correcta ejecución del despacho de carga suelta desde TPV."
      ]
    },
    {
      role: "El Equipo de Almacén Patio es responsable de",
      items: [
        "Presentarse en TPV para gestionar el despacho.",
        "Coordinar con Control Documentos o Control Transporte.",
        "Verificar la disponibilidad de los camiones.",
        "Completar correctamente las Guías de Puerto Columbo.",
        "Gestionar el timbraje de la documentación ante Control Documentos y Aduana.",
        "Entregar al transportista la documentación necesaria para completar el INTERCHANGE y efectuar la salida desde TPV."
      ]
    }
  ],
  etapas: [
    {
      code: "5.2.1",
      title: "Citación de la carga suelta",
      paragraphs: [
        "Previo al retiro de la carga, TPV realiza la citación correspondiente para la carga suelta.",
        "Al llegar al terminal, el encargado de Puerto Columbo deberá dirigirse directamente al área de Control Documentos o Control Transporte para informar su presencia y dar inicio a las gestiones asociadas al despacho.",
        "Como referencia para el personal que realiza esta operación por primera vez, al ingresar a TPV se debe avanzar hacia el interior del terminal. Las oficinas se encuentran hacia el sector izquierdo, cruzando la calle."
      ]
    },
    {
      code: "5.2.2",
      title: "Presentación en Control Documentos o Control Transporte",
      paragraphs: [
        "Una vez en Control Documentos o Control Transporte, el encargado deberá identificarse como personal proveniente de Puerto Columbo e informar la cantidad de carga que será despachada.",
        'Se deberá indicar, por ejemplo: "Vengo de parte de Puerto Columbo a despachar una carga de XX unidades".',
        "Esta comunicación es importante, debido a que el personal de TPV debe ser informado de la llegada del encargado de Puerto Columbo para comenzar la gestión del despacho.",
        "Una vez informado el personal de TPV, el encargado deberá permanecer en Control Documentos y esperar hasta que TPV gestione la citación de la carga suelta y entregue las dos hojas correspondientes para continuar con el proceso."
      ]
    },
    {
      code: "5.2.3",
      title: "Verificación de disponibilidad de camiones",
      paragraphs: [
        "Posteriormente, se deberá verificar si los camiones destinados al traslado de la carga se encuentran disponibles.",
        "Si los camiones se encuentran disponibles, se continúa normalmente con la operación de carga.",
        "Si los camiones no se encuentran disponibles, el encargado deberá dirigirse al área de Operaciones TPV y solicitar los camiones correspondientes.",
        "En caso de no conocer la ubicación del área de Operaciones, se deberá consultar al personal de TPV, quienes indicarán dónde dirigirse.",
        "Una vez disponibles los camiones, se continúa con la operación de carga."
      ]
    },
    {
      code: "5.2.4",
      title: "Carga del primer camión y recepción de antecedentes",
      paragraphs: [
        "Una vez que el primer camión haya sido cargado, personal de TPV entregará al encargado de Puerto Columbo una hoja que contiene los antecedentes correspondientes a la carga y al transporte.",
        "Entre los antecedentes entregados se encuentran: BL, cantidad de carga, peso, patente del camión y otros antecedentes asociados al despacho.",
        "Esta información será utilizada para confeccionar las Guías de Puerto Columbo."
      ]
    },
    {
      code: "5.2.5",
      title: "Confección de Guías de Puerto Columbo",
      paragraphs: [
        "Con la información contenida en la hoja entregada por TPV, el encargado deberá completar cuatro (4) Guías de Puerto Columbo.",
        "Los antecedentes deberán ser transcritos cuidadosamente desde el documento entregado por TPV hacia las guías correspondientes.",
        "Es fundamental verificar toda la información antes de continuar con el proceso."
      ],
      important: "IMPORTANTE: No se deben cometer errores al completar las guías. En caso de registrar información incorrecta, la guía no deberá utilizarse y será necesario confeccionar una nueva.",
      paragraphsAfter: [
        "Antes de continuar, se deberá verificar especialmente que la información correspondiente al BL, cantidad, peso y patente coincida con los antecedentes entregados por TPV."
      ]
    },
    {
      code: "5.2.6",
      title: "Timbrado en Control Documentos",
      paragraphs: [
        "Una vez confeccionadas correctamente las cuatro Guías de Puerto Columbo, se deberá gestionar el timbraje de la hoja entregada por TPV y las cuatro Guías de Puerto Columbo.",
        "La documentación deberá ser presentada en Control Documentos, donde será revisada y timbrada.",
        "Una vez efectuado este proceso, el encargado deberá continuar con la documentación hacia Aduana."
      ]
    },
    {
      code: "5.2.7",
      title: "Gestión documental en Aduana",
      paragraphs: [
        "El encargado deberá presentar las guías ante Aduana para solicitar el timbraje correspondiente.",
        'Al momento de realizar la gestión deberá indicar expresamente que la documentación corresponde a un "Traslado de zona primaria hacia Puerto Columbo".',
        "Aduana procederá a timbrar las guías correspondientes y retendrá una (1) de las guías.",
        "Una vez finalizada la gestión en Aduana, el encargado deberá regresar a Control Documentos de TPV con la documentación restante."
      ]
    },
    {
      code: "5.2.8",
      title: "Autorización de salida en Control Documentos",
      paragraphs: [
        "Al regresar a Control Documentos, el encargado deberá presentar las guías previamente timbradas por Aduana.",
        "Control Documentos realizará la revisión final de los antecedentes y procederá a autorizar la salida de la carga, timbrar la documentación correspondiente, retener una (1) Guía de Puerto Columbo y entregar una hoja termolaminada necesaria para la salida del transporte.",
        "Una vez completada esta etapa, la documentación queda habilitada para ser entregada al conductor."
      ]
    },
    {
      code: "5.2.9",
      title: "Entrega de documentación al chofer",
      paragraphs: [
        "El encargado de Puerto Columbo deberá entregar al chofer la hoja termolaminada entregada por Control Documentos y las Guías de Puerto Columbo que correspondan para continuar con el traslado.",
        "El conductor deberá utilizar estos documentos para realizar el INTERCHANGE correspondiente."
      ]
    },
    {
      code: "5.2.10",
      title: "Salida de TPV",
      paragraphs: [
        "Una vez realizado el INTERCHANGE y completadas las validaciones documentales exigidas por TPV, el conductor queda autorizado para salir del terminal con la carga suelta con destino a Puerto Columbo.",
        "Con la salida del camión desde TPV se da por finalizado el proceso de despacho de carga suelta."
      ]
    }
  ],
  puntosCriticos: [
    {
      label: "Informar la llegada a TPV",
      text: "siempre presentarse en Control Documentos o Control Transporte e indicar que se concurre de parte de Puerto Columbo."
    },
    {
      label: "Citación",
      text: "esperar en Control Documentos hasta que TPV gestione la citación de la carga suelta y entregue la documentación correspondiente."
    },
    {
      label: "Disponibilidad de camiones",
      text: "si los vehículos no se encuentran disponibles, solicitar su gestión directamente en Operaciones TPV."
    },
    {
      label: "Confección de guías",
      text: "revisar cuidadosamente todos los antecedentes antes de completar las cuatro Guías de Puerto Columbo."
    },
    {
      label: "Errores en las guías",
      text: "una guía con información incorrecta no debe utilizarse; se deberá confeccionar una nueva."
    },
    {
      label: "Aduana",
      text: 'indicar expresamente que corresponde a un "Traslado de zona primaria hacia Puerto Columbo".'
    },
    {
      label: "Retención documental",
      text: "Aduana retiene una guía y posteriormente Control Documentos retiene otra."
    },
    {
      label: "Salida del transporte",
      text: "no entregar la documentación al conductor hasta finalizar los timbrajes y obtener la hoja termolaminada."
    }
  ],
  registros: [
    "Citación de carga suelta realizada por TPV.",
    "Documentación con antecedentes de la carga entregada por TPV.",
    "Cuatro Guías de Puerto Columbo.",
    "Guías timbradas por Control Documentos.",
    "Guías timbradas por Aduana.",
    "Hoja termolaminada entregada por Control Documentos.",
    "INTERCHANGE asociado a la salida del transporte."
  ]
};

export function downloadTpvDocument(data: TpvDocumentData = TPV_CARGA_SUELTA_DATA) {
  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${data.title} - ${data.headerCompany}</title>
  <style>
    @page { size: A4 portrait; margin: 20mm; }
    body {
      font-family: Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      margin: 0;
      padding: 24px;
      line-height: 1.6;
    }
    .page {
      max-width: 800px;
      margin: 0 auto 40px auto;
      padding: 40px;
      background: white;
      border: 1px solid #d1d5db;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      page-break-after: always;
      position: relative;
      min-height: 1000px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .page-header {
      font-size: 13px;
      font-weight: bold;
      color: #1f2937;
      border-bottom: 2px solid #003B6F;
      padding-bottom: 8px;
      margin-bottom: 24px;
      text-align: center;
    }
    .doc-title {
      font-size: 20px;
      font-weight: bold;
      color: #003B6F;
      text-align: left;
      margin: 0 0 4px 0;
      text-decoration: underline;
    }
    .doc-subtitle {
      font-size: 13px;
      font-style: italic;
      color: #4b5563;
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 14.5px;
      font-weight: bold;
      color: #003B6F;
      margin-top: 18px;
      margin-bottom: 8px;
    }
    .subsection-title {
      font-size: 13.5px;
      font-weight: bold;
      color: #1f2937;
      margin-top: 14px;
      margin-bottom: 6px;
    }
    .subsection-title-blue {
      font-size: 13.5px;
      font-weight: bold;
      color: #0284c7;
      margin-top: 14px;
      margin-bottom: 6px;
    }
    p, li {
      font-size: 13px;
      color: #1f2937;
      text-align: justify;
      margin-top: 0;
      margin-bottom: 8px;
      line-height: 1.5;
    }
    ul {
      margin: 4px 0 12px 20px;
      padding: 0;
    }
    li {
      margin-bottom: 4px;
    }
    .table-def {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0 18px 0;
      font-size: 12.5px;
    }
    .table-def td, .table-def th {
      border: 1px solid #374151;
      padding: 8px 12px;
      vertical-align: top;
    }
    .table-def td.term {
      width: 25%;
      font-weight: bold;
      background-color: #f9fafb;
    }
    .important-alert {
      color: #dc2626;
      font-weight: bold;
      margin: 12px 0;
      font-size: 13px;
    }
    .footer-stamp {
      font-size: 11px;
      color: #4b5563;
      text-align: center;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
      margin-top: 30px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    @media print {
      body { padding: 0; background: white; }
      .page { border: none; box-shadow: none; margin: 0; padding: 20mm; min-height: auto; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>

  <!-- PÁGINA 1 -->
  <div class="page">
    <div>
      <div class="page-header">${data.headerCompany} | ${data.headerCategory}</div>
      <div class="doc-title">${data.title}</div>
      <div class="doc-subtitle">${data.subtitle}</div>

      <div class="section-title">1. OBJETO</div>
      ${data.objeto.map(p => `<p>${p}</p>`).join('')}

      <div class="section-title">2. CAMPO DE APLICACIÓN</div>
      ${data.campoAplicacion.map(p => `<p>${p}</p>`).join('')}

      <div class="section-title">3. NORMAS Y REFERENCIAS</div>
      <p>${data.normasReferencias}</p>

      <div class="section-title">4. DEFINICIONES Y/O ABREVIATURAS</div>
      <table class="table-def">
        <tbody>
          ${data.definiciones.map(d => `
            <tr>
              <td class="term">${d.term}</td>
              <td>${d.def}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="section-title">5. MÉTODO</div>
      <div class="subsection-title-blue">5.1 RESPONSABILIDADES</div>
      <p style="font-weight: bold; margin-bottom: 4px;">${data.responsabilidades[0].role}:</p>
      <ul>
        ${data.responsabilidades[0].items.map(i => `<li>${i}</li>`).join('')}
      </ul>

      <p style="font-weight: bold; margin-bottom: 4px;">${data.responsabilidades[1].role}:</p>
      <ul>
        ${data.responsabilidades[1].items.slice(0, 3).map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>
    <div class="footer-stamp">${data.watermark}</div>
  </div>

  <!-- PÁGINA 2 -->
  <div class="page">
    <div>
      <div class="page-header">${data.headerCompany} | ${data.headerCategory}</div>
      
      <ul>
        ${data.responsabilidades[1].items.slice(3).map(i => `<li>${i}</li>`).join('')}
      </ul>

      <div class="subsection-title-blue">5.2 DESCRIPCIÓN DE LAS ETAPAS DEL PROCESO DE DESPACHO DE CARGA SUELTA - TPV</div>
      
      ${data.etapas.slice(0, 4).map(e => `
        <div class="subsection-title-blue" style="margin-top: 12px;">${e.code} ${e.title}</div>
        ${e.paragraphs ? e.paragraphs.map(p => `<p>${p}</p>`).join('') : ''}
      `).join('')}
    </div>
    <div class="footer-stamp">${data.watermark}</div>
  </div>

  <!-- PÁGINA 3 -->
  <div class="page">
    <div>
      <div class="page-header">${data.headerCompany} | ${data.headerCategory}</div>
      
      ${data.etapas.slice(4).map(e => `
        <div class="subsection-title-blue" style="margin-top: 12px;">${e.code} ${e.title}</div>
        ${e.paragraphs ? e.paragraphs.map(p => `<p>${p}</p>`).join('') : ''}
        ${e.important ? `<div class="important-alert">${e.important}</div>` : ''}
        ${e.paragraphsAfter ? e.paragraphsAfter.map(p => `<p>${p}</p>`).join('') : ''}
      `).join('')}
    </div>
    <div class="footer-stamp">${data.watermark}</div>
  </div>

  <!-- PÁGINA 4 -->
  <div class="page">
    <div>
      <div class="page-header">${data.headerCompany} | ${data.headerCategory}</div>

      <div class="section-title">6. PUNTOS CRÍTICOS DEL PROCESO</div>
      <ul>
        ${data.puntosCriticos.map(pc => `
          <li><strong>${pc.label}:</strong> ${pc.text}</li>
        `).join('')}
      </ul>

      <div class="section-title" style="margin-top: 24px;">7. REGISTROS</div>
      <ul>
        ${data.registros.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>
    <div class="footer-stamp">${data.watermark}</div>
  </div>

</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.code}_${data.title.replace(/\s+/g, '_')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

