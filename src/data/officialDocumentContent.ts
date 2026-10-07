export interface DocumentSignature {
  role: string;
  name: string;
  date: string;
}

export interface OfficialDocumentData {
  title: string;
  code: string;
  version: string;
  year: string;
  pages: number;
  emite?: { name: string; date: string };
  revisa?: { name: string; date: string };
  aprueba?: { name: string; date: string };
  signatures?: DocumentSignature[];
  indice?: string[];
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
  aspectosAdicionales?: string[];
  registros?: string;
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
  indice: [
    "1. OBJETO",
    "2. CAMPO DE APLICACIÓN",
    "3. NORMAS Y REFERENCIAS",
    "4. DEFINICIONES Y/O ABREVIATURAS",
    "5. METODO",
    "6. ASPECTOS ADICIONALES",
    "7. ANEXOS",
    "8. CONTROL DE CAMBIOS",
  ],
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

export const POE_OP_001_DATA: OfficialDocumentData = {
  title: "Procedimiento Operativo de Gestión, Arriendo y Devoluciones de Contenedores",
  code: "POE- OP-001",
  version: "000",
  year: "2026",
  pages: 6,
  emite: { name: "M. Silva", date: "22-09-2026" },
  revisa: { name: "J. Acuña", date: "22-09-2026" },
  aprueba: { name: "L. Muñoz", date: "22-09-2026" },
  signatures: [
    { role: "EMITE", name: "M. Silva", date: "22-09-2026" },
    { role: "REVISA Y APRUEBA", name: "J. Acuña", date: "22-09-2026" },
    { role: "REVISA Y APRUEBA", name: "L. Muñoz", date: "22-09-2026" },
    { role: "REVISA Y APRUEBA", name: "F. Riffo", date: "22-09-2026" },
    { role: "REVISA Y APRUEBA", name: "R. Mancilla", date: "22-09-2026" },
  ],
  indice: [
    "1. OBJETO",
    "2. CAMPO DE APLICACIÓN",
    "3. NORMAS Y REFERENCIAS",
    "4. DEFINICIONES Y/O ABREVIATURAS",
    "5. ENTIDADES AFECTADAS",
    "6. METODO",
    "7. REGISTROS",
    "8. ANEXOS",
    "9. CONTROL DE CAMBIOS",
  ],
  objeto:
    "Establecer los lineamientos y directrices estandarizadas para el requerimiento, control sistemático y devolución de contenedores arrendados. Este procedimiento busca centralizar la administración de los equipos, asegurar la trazabilidad en el sistema XPS (evitando el uso de planillas manuales informales), optimizar los costos de arriendo y almacenaje, y prevenir contingencias en auditorías aduaneras",
  campoAplicacion:
    "Aplica al área de Customer Service, Almacén Bodega, Almacén Patio, Control de Gestión de Puerto Columbo S.A., incluyendo personal de empresas contratistas, subcontratistas, proveedores de productos y servicios.",
  normasReferencias: "El presente procedimiento no considera normas y/o referencias",
  definiciones: "El presente procedimiento no considera definiciones y/o abreviaturas",
  responsabilidades: [
    {
      role: "Control de Gestión (Controlador)",
      items: [
        "Gestionar con el Área de Sistemas la activación o desactivación de ubicaciones.",
        "Auditar constantemente el sistema XPS para detectar contenedores en estado “Vacío”.",
        "Mantener comunicación constante con las áreas involucradas respecto al estado de los contenedores.",
      ],
    },
    {
      role: "Área Comercial (Customer Service)",
      items: [
        "Solicitar servicios (consolidado/trasvasije/desconsolidado) directamente a Operaciones, sin gestionar contenedores directamente con los proveedores.",
        "Responder dentro del plazo estipulado dentro del procedimiento a las notificaciones del área de control sobre contenedores vacíos.",
        "Abstenerse de retener contenedores “por si acaso” si no existe un negocio cerrado inminente.",
      ],
    },
    {
      role: "Almacén Bodega",
      items: [
        "Modificar en sistema, en el campo de observaciones, si el contenedor se encuentra Full o Vacío.",
        "Informar oportunamente al área de control sobre la liberación de equipos físicos.",
      ],
    },
    {
      role: "CFS",
      items: [
        "Ejecutar los movimientos físicos de los contenedores y faenas y registrar las tarjas en el sistema XPS al momento exacto de la operación.",
      ],
    },
    {
      role: "Almacén Patio",
      items: [
        "Gestionar arriendo y devolución de las unidades.",
      ],
    },
  ],
  etapas: [
    {
      code: "5.2.1",
      title: "Solicitud de Contenedores y Servicios",
      items: [
        "El Área Comercial cierra un negocio que requiere extensión de bodega o trasvasije. Comercial envía la solicitud del servicio a Operaciones, indicando el volumen y requerimientos, sin contactar a proveedores de contenedores.",
        "Almacén Bodega debe corroborar primero, si tiene espacio en bodega para almacenar la carga, en caso de no ser así, se debe revisar si hay contenedores en arriendo disponible, y en caso de no ser así, Bodega informa a Comercial que no hay espacio, por lo que, se debe proceder a arrendar contenedores.",
        "Área Comercial debe informar a Área de Almacén Patio la cantidad de contenedores que se deben arrendar.",
        "Almacén Patio debe gestionar con proveedor (Spacewise, Contekner, etc.) el arriendo y retiro del contenedor",
        "Importante: Se debe solicitar el arriendo de la unidad, a lo menos, con una semana de anticipación.",
      ],
    },
    {
      code: "5.2.2",
      title: "Ingreso, Trazabilidad Sistemática y Resguardo",
      items: [
        "Al ingresar el contenedor arrendado, Gate Control debe registrar el Gate In en el sistema XPS.",
        "Para contenedores destinados a extensión de bodega, el Controlador solicitará a Sistemas la creación de una ubicación específica (N° de contenedor). El contenedor se asignará a esta ubicación para separar claramente la “carga suelta” almacenada y evitar confusiones en auditorías aduaneras con cargas de exportación/tránsito. Esta información debe registrarse en la PR de carga suelta (Modificar Ubicación)",
        "Al realizar un trasvasije o desconsolidado, el tarjador de Operaciones (CFS) debe generar la tarja en el sistema, agregando en el campo de “Observaciones” el detalle de la mutación de la carga.",
        "Es de carácter imperativo que el área Comercial junto al área de Almacén Bodega modifique el estado de contenedor arrendado en sistema. El área Comercial debe modificar lo siguiente: En caso que el contenedor esté vacío, se debe registrar como cliente “Puerto Columbo”. Para los contenedores Full, en cliente se debe registrar, ya sea, extensión de bodega en caso de la carga retenida, y en caso que el contenedor tenga carga de cliente, se debe registrar el nombre del cliente, y esto debe realizarse en Administración OS.",
        "El área de Almacén Bodega, debe modificar en el campo de observaciones de Parámetros de contenedores, si el contenedor se encuentra “Vacío” o “Full”.",
      ],
    },
    {
      code: "5.2.3",
      title: "Proceso de Devolución y Cierre de Cobros",
      items: [
        "Al menos una vez por semana, el Controlador extraerá la data del sistema XPS identificando todos los contenedores arrendados en estado “Vacío”",
        "El Controlador enviará un listado formal al área Comercial consultando la liberación definitiva de estos equipos.",
        "El área Comercial tiene un plazo hasta el 25 de cada mes para reclamar el uso de un contenedor vacío justificando un negocio inminente, o bien, informar la no utilización del contenedor. En caso de no haber respuesta, se procederá con la devolución automática de la unidad.",
        "El área de Almacén Patio informará al proveedor (Spacewise, Contekner, etc.) sobre la devolución de la unidad, solicitando el lugar de entrega y gestionando la misma. La modificación de la OS y la carga de los tramos lo realizará el área de porteo una vez que el proveedor haya confirmado el lugar de entrega del contenedor vacío.",
        "Gate Control ejecuta la salida física (Gate Out). Inmediatamente, el Controlador coordina con Sistemas la eliminación/inactivación de la ubicación sistemática creada, asegurando el cese definitivo de la facturación por arriendo y almacenaje.",
      ],
    },
  ],
  registros: "El presente procedimiento no considera registros.",
  anexos: "El presente procedimiento no considera anexos.",
  controlCambios: [
    {
      version: "000",
      description: "Creación del documento",
      date: "22-09-2026",
    },
  ],
};

export function getOfficialDocumentData(codeOrUrl?: string): OfficialDocumentData {
  if (
    codeOrUrl &&
    (codeOrUrl.includes('POE') ||
      codeOrUrl.includes('poe') ||
      codeOrUrl.includes('arriendo') ||
      codeOrUrl.includes('contenedores'))
  ) {
    return POE_OP_001_DATA;
  }
  return PTS_SGI_009_DATA;
}

export function downloadOfficialDocument(data: OfficialDocumentData = PTS_SGI_009_DATA) {
  const isPoe = data.code.includes('POE');

  const htmlContent = isPoe
    ? `<!DOCTYPE html>
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
      padding: 14px 18px;
      text-align: center;
      font-weight: bold;
      font-size: 17px;
      margin-bottom: 35px;
    }
    .meta-table {
      width: 100%;
      margin-bottom: 30px;
      font-size: 15px;
    }
    .meta-table td { padding: 6px 0; }
    .signatures-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 25px;
      border: 1px solid #000;
    }
    .signatures-table th, .signatures-table td {
      border: 1px solid #000;
      padding: 10px;
      text-align: left;
      font-size: 13px;
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
    p, li { font-size: 13px; color: #1F2937; text-align: justify; }
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
        <td style="width: 160px; font-weight: bold;">Código:</td>
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
        <th style="width: 33.3%;">EMITE</th>
        <th style="width: 33.3%;">REVISA Y APRUEBA</th>
        <th style="width: 33.3%;">REVISA Y APRUEBA</th>
      </tr>
      <tr>
        <td>
          <p><strong>Nombre:</strong> M. Silva</p>
          <p><strong>Fecha:</strong></p>
          <p><strong>Firma:</strong></p>
        </td>
        <td>
          <p><strong>Nombre:</strong> J. Acuña</p>
          <p><strong>Fecha:</strong></p>
          <p><strong>Firma:</strong></p>
        </td>
        <td>
          <p><strong>Nombre:</strong> L. Muñoz</p>
          <p><strong>Fecha:</strong></p>
          <p><strong>Firma:</strong></p>
        </td>
      </tr>
      <tr>
        <th style="width: 33.3%;">REVISA Y APRUEBA</th>
        <th style="width: 33.3%;">REVISA Y APRUEBA</th>
        <th style="width: 33.3%; background: #fff; border-bottom: 0;"></th>
      </tr>
      <tr>
        <td>
          <p><strong>Nombre:</strong> F. Riffo</p>
          <p><strong>Fecha:</strong></p>
          <p><strong>Firma:</strong></p>
        </td>
        <td>
          <p><strong>Nombre:</strong> R. Mancilla</p>
          <p><strong>Fecha:</strong></p>
          <p><strong>Firma:</strong></p>
        </td>
        <td style="border-top: 0; background: #fafafa;"></td>
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
      <li><strong>5.</strong> ENTIDADES AFECTADAS</li>
      <li><strong>6.</strong> METODO</li>
      <li><strong>7.</strong> REGISTROS</li>
      <li><strong>8.</strong> ANEXOS</li>
      <li><strong>9.</strong> CONTROL DE CAMBIOS</li>
    </ul>

    <div class="stamp-box">
      <div style="font-size: 15px; margin-bottom: 4px;">COPIA CONTROLADA</div>
      <div style="font-size: 12px; font-style: italic;">“Documento impreso es copia No controlada”</div>
    </div>
  </div>

  <!-- PÁGINA 3: OBJETO, CAMPO, NORMAS, DEFINICIONES, RESPONSABILIDADES (1) -->
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
    <p style="font-weight: bold; margin-bottom: 4px;">Control de Gestión (Controlador):</p>
    <ul>
      <li>Gestionar con el Área de Sistemas la activación o desactivación de ubicaciones.</li>
      <li>Auditar constantemente el sistema XPS para detectar contenedores en estado “Vacío”.</li>
      <li>Mantener comunicación constante con las áreas involucradas respecto al estado de los contenedores.</li>
    </ul>

    <p style="font-weight: bold; margin-bottom: 4px;">Área Comercial (Customer Service):</p>
    <ul>
      <li>Solicitar servicios (consolidado/trasvasije/desconsolidado) directamente a Operaciones, sin gestionar contenedores directamente con los proveedores.</li>
    </ul>
  </div>

  <!-- PÁGINA 4: RESPONSABILIDADES (2) & ETAPAS (5.2.1) -->
  <div class="page">
    <div class="subsection-title">5.1 RESPONSABILIDADES (Continuación)</div>
    <p style="font-weight: bold; margin-bottom: 4px;">Área Comercial (Customer Service) - continuación:</p>
    <ul>
      <li>Responder dentro del plazo estipulado dentro del procedimiento a las notificaciones del área de control sobre contenedores vacíos.</li>
      <li>Abstenerse de retener contenedores “por si acaso” si no existe un negocio cerrado inminente.</li>
    </ul>

    <p style="font-weight: bold; margin-bottom: 4px;">Almacén Bodega:</p>
    <ul>
      <li>Modificar en sistema, en el campo de observaciones, si el contenedor se encuentra Full o Vacío.</li>
      <li>Informar oportunamente al área de control sobre la liberación de equipos físicos.</li>
    </ul>

    <p style="font-weight: bold; margin-bottom: 4px;">CFS:</p>
    <ul>
      <li>Ejecutar los movimientos físicos de los contenedores y faenas y registrar las tarjas en el sistema XPS al momento exacto de la operación.</li>
    </ul>

    <p style="font-weight: bold; margin-bottom: 4px;">Almacén Patio:</p>
    <ul>
      <li>Gestionar arriendo y devolución de las unidades.</li>
    </ul>

    <div class="subsection-title">5.2 DESCRIPCIÓN DE LAS ETAPAS DEL PROCESO</div>
    <div class="subsection-title" style="margin-left: 10px;">5.2.1 Solicitud de Contenedores y Servicios</div>
    <ul style="margin-left: 28px;">
      <li>El Área Comercial cierra un negocio que requiere extensión de bodega o trasvasije. Comercial envía la solicitud del servicio a Operaciones, indicando el volumen y requerimientos, sin contactar a proveedores de contenedores.</li>
      <li>Almacén Bodega debe corroborar primero, si tiene espacio en bodega para almacenar la carga, en caso de no ser así, se debe revisar si hay contenedores en arriendo disponible, y en caso de no ser así, Bodega informa a Comercial que no hay espacio, por lo que, se debe proceder a arrendar contenedores.</li>
      <li>Área Comercial debe informar a Área de Almacén Patio la cantidad de contenedores que se deben arrendar.</li>
    </ul>
  </div>

  <!-- PÁGINA 5: ETAPAS 5.2.1 (Cont.) & 5.2.2 -->
  <div class="page">
    <div class="subsection-title">5.2.1 Solicitud de Contenedores y Servicios (Continuación)</div>
    <ul style="margin-left: 28px;">
      <li>Almacén Patio debe gestionar con proveedor (Spacewise, Contekner, etc.) el arriendo y retiro del contenedor</li>
    </ul>
    <p style="margin-left: 28px; font-weight: bold; background: #fef3c7; padding: 8px 12px; border-left: 4px solid #f59e0b;">
      Importante: Se debe solicitar el arriendo de la unidad, a lo menos, con una semana de anticipación.
    </p>

    <div class="subsection-title" style="margin-top: 24px;">5.2.2 Ingreso, Trazabilidad Sistemática y Resguardo</div>
    <ul style="margin-left: 28px;">
      <li>Al ingresar el contenedor arrendado, Gate Control debe registrar el Gate In en el sistema XPS.</li>
      <li>Para contenedores destinados a extensión de bodega, el Controlador solicitará a Sistemas la creación de una ubicación específica (N° de contenedor). El contenedor se asignará a esta ubicación para separar claramente la “carga suelta” almacenada y evitar confusiones en auditorías aduaneras con cargas de exportación/tránsito. Esta información debe registrarse en la PR de carga suelta (Modificar Ubicación)</li>
      <li>Al realizar un trasvasije o desconsolidado, el tarjador de Operaciones (CFS) debe generar la tarja en el sistema, agregando en el campo de “Observaciones” el detalle de la mutación de la carga.</li>
      <li>Es de carácter imperativo que el área Comercial junto al área de Almacén Bodega modifique el estado de contenedor arrendado en sistema. El área Comercial debe modificar lo siguiente: En caso que el contenedor esté vacío, se debe registrar como cliente “Puerto Columbo”. Para los contenedores Full, en cliente se debe registrar, ya sea, extensión de bodega en caso de la carga retenida, y en caso que el contenedor tenga carga de cliente, se debe registrar el nombre del cliente, y esto debe realizarse en Administración OS.<br><br>El área de Almacén Bodega, debe modificar en el campo de observaciones de Parámetros de contenedores, si el contenedor se encuentra “Vacío” o “Full”.</li>
    </ul>
  </div>

  <!-- PÁGINA 6: 5.2.3, REGISTROS, ANEXOS, CONTROL DE CAMBIOS -->
  <div class="page">
    <div class="subsection-title">5.2.3 Proceso de Devolución y Cierre de Cobros</div>
    <ul style="margin-left: 28px;">
      <li>Al menos una vez por semana, el Controlador extraerá la data del sistema XPS identificando todos los contenedores arrendados en estado “Vacío”</li>
      <li>El Controlador enviará un listado formal al área Comercial consultando la liberación definitiva de estos equipos.</li>
      <li>El área Comercial tiene un plazo hasta el 25 de cada mes para reclamar el uso de un contenedor vacío justificando un negocio inminente, o bien, informar la no utilización del contenedor. En caso de no haber respuesta, se procederá con la devolución automática de la unidad.</li>
      <li>El área de Almacén Patio informará al proveedor (Spacewise, Contekner, etc.) sobre la devolución de la unidad, solicitando el lugar de entrega y gestionando la misma. La modificación de la OS y la carga de los tramos lo realizará el área de porteo una vez que el proveedor haya confirmado el lugar de entrega del contenedor vacío.</li>
      <li>Gate Control ejecuta la salida física (Gate Out). Inmediatamente, el Controlador coordina con Sistemas la eliminación/inactivación de la ubicación sistemática creada, asegurando el cese definitivo de la facturación por arriendo y almacenaje.</li>
    </ul>

    <div class="section-title">6. REGISTROS</div>
    <p>${data.registros || 'El presente procedimiento no considera registros.'}</p>

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
</html>`
    : `<!DOCTYPE html>
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
          <p><strong>Nombre:</strong> ${data.emite?.name || 'M. Silva'}</p>
          <p><strong>Fecha:</strong> ${data.emite?.date || '23-09-2026'}</p>
          <p><strong>Firma:</strong> <em>Registrada SGI</em></p>
        </td>
        <td>
          <p><strong>Nombre:</strong> ${data.revisa?.name || 'L. Muñoz'}</p>
          <p><strong>Fecha:</strong> ${data.revisa?.date || '23-09-2026'}</p>
          <p><strong>Firma:</strong> <em>Registrada SGI</em></p>
        </td>
        <td>
          <p><strong>Nombre:</strong> ${data.aprueba?.name || 'L. Muñoz'}</p>
          <p><strong>Fecha:</strong> ${data.aprueba?.date || '23-09-2026'}</p>
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

    ${data.aspectosAdicionales ? `
    <div class="section-title">6. ASPECTOS ADICIONALES</div>
    <ul>
      ${data.aspectosAdicionales.map((a) => `<li>${a}</li>`).join('')}
    </ul>` : ''}
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

