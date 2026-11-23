export interface DocumentSignature {
  role: string;
  name: string;
  date?: string;
  signatureText?: string;
}

export interface SipocRow {
  id: number;
  fase: string;
  modulo: string;
  proveedor: string;
  input: string;
  proceso: string;
  output: string;
  cliente: string;
  sistema: string;
  sla: string;
  riesgo: string;
}

export interface OfficialDocumentData {
  title: string;
  subtitle?: string;
  code: string;
  version: string;
  year: string;
  pages: number;
  isSipocMatrix?: boolean;
  sipocColumns?: string[];
  sipocRows?: SipocRow[];
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
  signatures: [
    { role: "EMITE", name: "M. Silva", date: "" },
    { role: "REVISA Y APRUEBA", name: "J. Acuña", date: "" },
    { role: "REVISA Y APRUEBA", name: "L. Muñoz", date: "" },
    { role: "REVISA Y APRUEBA", name: "F. Riffo", date: "" },
    { role: "REVISA Y APRUEBA", name: "R. Mancilla", date: "" },
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

export const SIPOC_E2E_TVAP_DATA: OfficialDocumentData = {
  title: "PUERTO COLUMBO - MATRIZ SIPOC END-TO-END TVAP",
  subtitle: "Mapeo de Proveedores, Insumos, Procesos, Entregables y Clientes Internos por Módulo Operativo",
  code: "SIPOC-TVAP",
  version: "",
  year: "",
  pages: 1,
  isSipocMatrix: true,
  sipocColumns: [
    "ID",
    "Fase Cadena de Valor",
    "Módulo / Área",
    "Proveedor Interno / Ext.",
    "Entregable de Entrada (Input)",
    "Proceso / Actividad Clave",
    "Entregable de Salida (Output)",
    "Cliente Interno / Ext.",
    "Sistema / Soporte (XPS)",
    "SLA Objetivo",
    "Punto de Fricción / Riesgo",
  ],
  sipocRows: [
    {
      id: 1,
      fase: "1. Planificación y Arribo",
      modulo: "Comercial & Pricing",
      proveedor: "Gerencia Comercial / FFWW / Clientes",
      input: "Tarifas, rebates, condiciones de pago, volumen y acuerdos comerciales cargados en XPS",
      proceso: "Evaluación de margen (≥40%), creación de tipo de cliente en BD y carga de tarifas en XPS.",
      output: "Tarifas y Acuerdos Comerciales registrados en XPS.",
      cliente: "Customer Service, Control Documentos, Facturación.",
      sistema: "XPS Módulo Comercial",
      sla: "< 24 hrs post-solicitud",
      riesgo: "Inconsistencia entre tarifas acordadas y cargadas en XPS.",
    },
    {
      id: 2,
      fase: "1. Planificación y Arribo",
      modulo: "Customer Service (CS)",
      proveedor: "Cliente / Agente de Aduana / FFWW",
      input: "Solicitud de servicio (email/portal), BL, Booking, Free Days.",
      proceso: "Confirmación de requerimientos, creación y formalización de Orden de Servicio (OS) en XPS.",
      output: "Creación Orden de Servicio (OS) electrónica habilitada, para servicio comercial. En el caso de carga primaria se verifica (edita) OS.",
      cliente: "Control Documentos, Porteo, CFS, Bodega.",
      sistema: "XPS Módulo CS / Portal",
      sla: "< 30 min por solicitud",
      riesgo: "Información incompleta de carga o aviso tardío del cliente. Lo anterior genera problema en la programación del servicio y/o errores en la facturación",
    },
    {
      id: 3,
      fase: "1. Planificación y Arribo",
      modulo: "Control Documentos",
      proveedor: "Puertos (TPSV/TPV) / Aduana / CS",
      input: "Planificación naviera, Manifiesto de Aduana, OS.",
      proceso: "Verificación naviera, apertura B/L masters, generación de Providencias y segregación.",
      output: "Manifiesto oficializado, Listado Segregación, Providencias.",
      cliente: "Almacén Patio, CFS, Gate Control, AGA.",
      sistema: "XPS Sis. Documental / Aduana",
      sla: "< 48 hrs previa faena",
      riesgo: "Aclaraciones tardías de manifiesto o falta de providencia aduanera.",
    },
    {
      id: 4,
      fase: "2. Ingreso y Porteo",
      modulo: "Acceso",
      proveedor: "Transportista Externo / Almacén Patio",
      input: "Camión posicionado, Guía de despacho, Asignación horario de retiro",
      proceso: "Control de flujo en antepuerto, validación inicial de cita y asignación de turno.",
      output: "Turno de acceso habilitado en puerto.",
      cliente: "Gate Control",
      sistema: "XPS / OCR",
      sla: "< 15 min en espera",
      riesgo: "Congestionamiento vial en antepuerto y verificación manual de patentes, accidente en ruta",
    },
    {
      id: 5,
      fase: "2. Ingreso y Porteo",
      modulo: "Gate Control",
      proveedor: "Transportista",
      input: "Camión en Gate, EIR, Guía de despacho, Cédula / Identifica.",
      proceso: "Inspección física (sellos/daños), registro de Gate In en XPS.",
      output: "Registro Gate In / PR preliminar / planilla de control",
      cliente: "Jefe de patio / Almacén Patio",
      sistema: "XPS Gate / OCR",
      sla: "< 20 min por camión",
      riesgo: "Alertas OCR por superar límite de 20 min .",
    },
    {
      id: 6,
      fase: "3. Almacenaje y Patio",
      modulo: "Almacén Patio / Jefe de Patio",
      proveedor: "Gate Control / Coordinador Porteo",
      input: "Registro Gate In, Secuencia de entrega de puerto/Correo",
      proceso: "Asignación de zona acopio, actualización de planilla de control y coordinación con Reach Stacker.",
      output: "Ubicación física en planilla de control",
      cliente: "Operador Reach Stacker / Almacén Patio (Reefer)",
      sistema: "XPS Control Room / Planilla de Control",
      sla: "Inmediato post-Gate In",
      riesgo: "Descalce entre posición registrada en planilla de control y ubicación física real.",
    },
    {
      id: 7,
      fase: "3. Almacenaje y Patio",
      modulo: "Patio (Reach Stacker)",
      proveedor: "Almacenaje Patio/Gate Control",
      input: "Solicitud de posicionamiento / Planilla de Control/Correo",
      proceso: "Traslado, apilamiento y posicionamiento físico de contenedor en patio de acopio.",
      output: "Contenedor ubicado y confirmado en patio.",
      cliente: "Almacén Patio",
      sistema: "Planilla de Control",
      sla: "< 15 min por movimiento",
      riesgo: "Disponibilidad de maquinaria en horas pico y cálculo erróneo de manipuleos.",
    },
    {
      id: 8,
      fase: "3. Almacenaje y Patio",
      modulo: "Área Reefer",
      proveedor: "Gate Control / Control Documento / Almacén Patio/CS",
      input: "Contenedor Reefer posicionado.",
      proceso: "Conexión eléctrica, monitoreo continuo de temperatura y desconexión en XPS.",
      output: "Planilla de monitoreo / Registro de desconexión en XPS.",
      cliente: "Customer Service/Control Documento",
      sistema: "XPS Patio Actividades Reefer",
      sla: "Conexión < 10 min",
      riesgo: "Fallas en tomas eléctricas u omisión de registro de fin de conexión en XPS.",
    },
    {
      id: 9,
      fase: "4. Faenas CFS & Bodega",
      modulo: "CFS (Desconsolidado)",
      proveedor: "Almacenaje Patio /Customer Service/ Control Documentos",
      input: "Contenedor posicionado, OS, Providencia Aduanera.",
      proceso: "Apertura de contenedor, desconsolidación, grabación/fotografía y Tarja Electrónica.",
      output: "Tarja Electrónica en XPS / Notificación a FFWW.",
      cliente: "Bodega / Control Documentos / Customer Service/ FFWW",
      sistema: "XPS CFS / Tarja Electrónica",
      sla: "< 24 hrs post-arribo",
      riesgo: "Cortes rígidos de turno (14:30/16:30) y bultos ciegos o dañados sin pauta.",
    },
    {
      id: 10,
      fase: "4. Faenas CFS & Bodega",
      modulo: "CFS (Consolidado)",
      proveedor: "Customer Service / Bodega",
      input: "Carga en bodega, Booking, DUS, Providencia Consolidado.",
      proceso: "Estibado de carga, colocación de sello Columbo, pesaje VGM e inscripción en TPS/SILOGPORT.",
      output: "Contenedor consolidado / Tarja de Consolidado",
      cliente: "Almacén Patio /Customer Service",
      sistema: "XPS CFS / TPS / SILOGPORT",
      sla: "Según ventana Stacking",
      riesgo: "Rechazos en puerto por falta de visación previa o discrepancia en sello.",
    },
    {
      id: 11,
      fase: "4. Faenas CFS & Bodega",
      modulo: "CFS( Retiro Vacios)",
      proveedor: "Customer Service",
      input: "OS",
      proceso: "Coordinar retiro de Contendor vacío",
      output: "Contenedor vacio recepcionado para retirar",
      cliente: "Transportista / Cliente Final",
      sistema: "XPS/ Pag de depósitos",
      sla: "< 24 hrs post-Solicitud de Servicio",
      riesgo: "",
    },
    {
      id: 12,
      fase: "4. Faenas CFS & Bodega",
      modulo: "Almacén Bodega",
      proveedor: "CFS",
      input: "Carga desconsolidada / Carga recibida por camión.",
      proceso: "Almacenamiento, paletizado y resguardo en bodega",
      output: "Papeleta de Recepción (PR) / Ubicación en Bodega.",
      cliente: "Control Documentos / Customer Service / Cliente",
      sistema: "XPS Bodega / Recepción no man.",
      sla: "Inmediato post-tarja",
      riesgo: "Saturación de capacidad cubierta y demoras en picking recepción indirecto.",
    },
    {
      id: 13,
      fase: "4. Faenas CFS & Bodega",
      modulo: "Almacén Bodega",
      proveedor: "CFS /Customer Service",
      input: "Carga en bodega",
      proceso: "picking de carga y cubicación (m^3)",
      output: "Papeleta de Entrega (PE)",
      cliente: "Control Documentos / Customer Service / Transportista",
      sistema: "XPS Bodega / Despacho carga suelta",
      sla: "< 24 hrs post-Solicitud de Servicio",
      riesgo: "Cuando no se planifica con anticipación.",
    },
    {
      id: 14,
      fase: "5. Despacho y Salida",
      modulo: "Gate Out",
      proveedor: "Transportista",
      input: "Camión Cargado / PE / Guía Despacho",
      proceso: "Validación documental final, y revisión físca contenedor",
      output: "Registro Gate Out",
      cliente: "Transportista / Cliente Final",
      sistema: "XPS Gate Out",
      sla: "< 5 min por camión",
      riesgo: "Demoras en revisión física y documental",
    },
    {
      id: 15,
      fase: "5. Despacho y Salida",
      modulo: "CS / Control Docs",
      proveedor: "CFS / Bodega /Almacén Patio/ CS/Pricing",
      input: "Tarja Conforme / Servicios Realizados/Acuerdo Comercial Creado y aprobado(Pricing)",
      proceso: "Liquidación de tarifas, visación final y facturación",
      output: "Proforma(CS)/Factura emitida",
      cliente: "Cliente",
      sistema: "XPS Facturación / ERP",
      sla: "< 48 hrs. ( Control Doc.) menos de 5 días CS",
      riesgo: "Bloqueos por diferendos comerciales o falta de pago",
    },
  ],
  objeto: "",
  campoAplicacion: "",
  normasReferencias: "",
  definiciones: "",
  responsabilidades: [],
  etapas: [],
  anexos: "",
  controlCambios: [],
};

export function getOfficialDocumentData(codeOrUrl?: string): OfficialDocumentData {
  const norm = (codeOrUrl || '').toLowerCase();
  if (norm.includes('sipoc') || norm.includes('tvap')) {
    return SIPOC_E2E_TVAP_DATA;
  }
  if (
    norm.includes('poe') || 
    norm.includes('arriendo') || 
    norm.includes('devolucion') || 
    norm.includes('op-001')
  ) {
    return POE_OP_001_DATA;
  }
  return PTS_SGI_009_DATA;
}

export function downloadOfficialDocument(data: OfficialDocumentData = PTS_SGI_009_DATA) {
  if (data.isSipocMatrix && data.sipocColumns && data.sipocRows) {
    const sipocHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${data.title}</title>
  <style>
    @page { size: A4 landscape; margin: 10mm; }
    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #111827;
      background: #ffffff;
      margin: 0;
      padding: 20px;
    }
    .sheet {
      max-width: 1400px;
      margin: 0 auto;
      background: #ffffff;
    }
    .doc-title {
      color: #1B365D;
      font-size: 16px;
      font-weight: bold;
      margin: 0 0 4px 0;
      letter-spacing: 0.2px;
    }
    .doc-subtitle {
      color: #4B5563;
      font-size: 11px;
      font-style: italic;
      margin: 0 0 14px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10px;
      line-height: 1.35;
    }
    th {
      background-color: #1B365D;
      color: #ffffff;
      font-weight: bold;
      text-align: center;
      padding: 7px 6px;
      border: 1px solid #1B365D;
      vertical-align: middle;
    }
    td {
      border: 1px solid #CBD5E1;
      padding: 6px;
      vertical-align: middle;
      text-align: left;
      color: #111827;
    }
    tbody tr:nth-child(even) {
      background-color: #F8FAFC;
    }
    td.col-id {
      text-align: center;
      font-weight: bold;
      width: 28px;
    }
    td.col-fase {
      font-weight: bold;
    }
    @media print {
      body { padding: 0; }
      table { font-size: 8.5px; }
    }
  </style>
</head>
<body>
  <div class="sheet">
    <h1 class="doc-title">${data.title}</h1>
    <p class="doc-subtitle">${data.subtitle || ''}</p>
    <table>
      <thead>
        <tr>
          ${data.sipocColumns.map((col) => `<th>${col}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${data.sipocRows
          .map(
            (row) => `
          <tr>
            <td class="col-id">${row.id}</td>
            <td class="col-fase">${row.fase}</td>
            <td>${row.modulo}</td>
            <td>${row.proveedor}</td>
            <td>${row.input}</td>
            <td>${row.proceso}</td>
            <td>${row.output}</td>
            <td>${row.cliente}</td>
            <td>${row.sistema}</td>
            <td>${row.sla}</td>
            <td>${row.riesgo}</td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    </table>
  </div>
</body>
</html>`;

    const blob = new Blob([sipocHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Matriz_SIPOC_E2E_Puerto_Columbo_TVAP.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return;
  }

  const isPoe = data.code.includes('POE') || data.pages === 6;

  const signaturesHtml = isPoe
    ? `
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
          <th style="width: 33.3%; background: #fafafa;"></th>
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
          <td style="background: #fafafa;"></td>
        </tr>
      </table>
    `
    : `
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
    `;

  let pagesContent = '';

  if (isPoe) {
    // 6-page official document structure matching the original PDF exactly
    pagesContent = `
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
            <td style="width: 170px; font-weight: bold;">Código:</td>
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

        ${signaturesHtml}
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

      <!-- PÁGINA 3: OBJETO, CAMPO, NORMAS, DEFINICIONES, RESPONSABILIDADES P1 -->
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

      <!-- PÁGINA 4: RESPONSABILIDADES P2 & ETAPA 5.2.1 -->
      <div class="page">
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

        <div class="section-title">5.2 DESCRIPCIÓN DE LAS ETAPAS DEL PROCESO</div>
        <div class="subsection-title">5.2.1 Solicitud de Contenedores y Servicios</div>
        <ul>
          <li>El Área Comercial cierra un negocio que requiere extensión de bodega o trasvasije. Comercial envía la solicitud del servicio a Operaciones, indicando el volumen y requerimientos, sin contactar a proveedores de contenedores.</li>
          <li>Almacén Bodega debe corroborar primero, si tiene espacio en bodega para almacenar la carga, en caso de no ser así, se debe revisar si hay contenedores en arriendo disponible, y en caso de no ser así, Bodega informa a Comercial que no hay espacio, por lo que, se debe proceder a arrendar contenedores.</li>
          <li>Área Comercial debe informar a Área de Almacén Patio la cantidad de contenedores que se deben arrendar.</li>
        </ul>
      </div>

      <!-- PÁGINA 5: ETAPA 5.2.1 CONT & ETAPA 5.2.2 -->
      <div class="page">
        <ul>
          <li>Almacén Patio debe gestionar con proveedor (Spacewise, Contekner, etc.) el arriendo y retiro del contenedor</li>
        </ul>

        <p style="margin-top: 14px; margin-bottom: 20px;"><strong>Importante:</strong> Se debe solicitar el arriendo de la unidad, a lo menos, con <strong>una semana de anticipación</strong>.</p>

        <div class="subsection-title">5.2.2 Ingreso, Trazabilidad Sistemática y Resguardo</div>
        <ul>
          <li>Al ingresar el contenedor arrendado, Gate Control debe registrar el Gate In en el sistema XPS.</li>
          <li>Para contenedores destinados a extensión de bodega, el Controlador solicitará a Sistemas la creación de una ubicación específica (N° de contenedor). El contenedor se asignará a esta ubicación para separar claramente la “carga suelta” almacenada y evitar confusiones en auditorías aduaneras con cargas de exportación/tránsito. Esta información debe registrarse en la PR de carga suelta (Modificar Ubicación)</li>
          <li>Al realizar un trasvasije o desconsolidado, el tarjador de Operaciones (CFS) debe generar la tarja en el sistema, agregando en el campo de “Observaciones” el detalle de la mutación de la carga.</li>
          <li>Es de carácter imperativo que el área Comercial junto al área de Almacén Bodega modifique el estado de contenedor arrendado en sistema. El área Comercial debe modificar lo siguiente: En caso que el contenedor esté vacío, se debe registrar como cliente “Puerto Columbo”. Para los contenedores Full, en cliente se debe registrar, ya sea, extensión de bodega en caso de la carga retenida, y en caso que el contenedor tenga carga de cliente, se debe registrar el nombre del cliente, y esto debe realizarse en Administración OS.</li>
        </ul>
        <p style="margin-left: 20px; font-size: 13.5px;">El área de Almacén Bodega, debe modificar en el campo de observaciones de Parámetros de contenedores, si el contenedor se encuentra “Vacío” o “Full”.</p>
      </div>

      <!-- PÁGINA 6: ETAPA 5.2.3, REGISTROS, ANEXOS, CONTROL DE CAMBIOS -->
      <div class="page">
        <div class="subsection-title">5.2.3 Proceso de Devolución y Cierre de Cobros</div>
        <ul>
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
    `;
  } else {
    // 5-page structure for PTS-SGI-009
    pagesContent = `
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

        ${signaturesHtml}
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
    `;
  }

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
      margin-top: 40px;
      border: 1px solid #000;
    }
    .signatures-table th, .signatures-table td {
      border: 1px solid #000;
      padding: 10px;
      text-align: left;
      font-size: 13px;
    }
    .signatures-table th { background: #f3f4f6; }
    .signatures-table p { margin: 4px 0; }
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
  ${pagesContent}
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
