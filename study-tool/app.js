const cases = [
  {
    id: "EP-01",
    topic: "IAM",
    sourceGroup: "Escenarios de repaso",
    title: "Consultora con SaaS de proyectos",
    source: "Escenarios de repaso - Parcial Ciberseguridad.pdf, Escenario 1",
    status: "Validado",
    capture: "./assets/captures/escenarios-repaso-1.png",
    summary: "Baja fallida de un ex Project Manager que conserva acceso a propuestas comerciales activas y archivadas.",
    sections: [
      {
        title: "Lectura del caso",
        paragraphs: [
          "El incidente no se explica solo por una cuenta comprometida. La falla principal esta en el ciclo de vida IAM: alta manual, falta de modificacion/revision y deprovisioning incompleto.",
          "El rol de Project Manager tambien parece demasiado amplio porque permite llegar a proyectos activos y archivados sin necesidad vigente."
        ]
      },
      {
        title: "Fallas concretas",
        bullets: [
          "Las bajas no revocan accesos al SaaS ni sesiones activas.",
          "Los permisos se asignan manualmente al ingreso y no se revisan despues.",
          "El ex PM conserva acceso a propuestas sensibles y archivos historicos.",
          "Los logs existen, pero se usan tarde: sirven para investigar, no para detectar.",
          "La IP desconocida debio disparar alerta, challenge o bloqueo."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Fallas IAM: deprovisioning fallido, permisos manuales, falta de revision periodica, rol Project Manager excesivo, acceso a archivados sin necesidad y deteccion tardia.",
          "Principios afectados: ciclo de vida de identidades, minimo privilegio, need-to-know, accountability y control contextual.",
          "CIA: confidencialidad como impacto central, porque se accedio a propuestas comerciales sensibles.",
          "Proceso de baja: disparo desde RRHH, suspension en IdP/SSO, revocacion de sesiones/tokens, remocion de roles, transferencia de ownership y verificacion posterior.",
          "Controles: SSO/SCIM, RBAC por proyecto, acceso con vencimiento, alertas por IP/descargas y revisiones periodicas."
        ]
      },
      {
        title: "CIA y NIST",
        bullets: [
          "Confidencialidad es el impacto principal: propuestas comerciales accedidas por alguien no autorizado.",
          "Puede mencionarse integridad del proceso comercial, porque la licitacion queda distorsionada.",
          "Identify falla por no mapear cuentas y archivos criticos; Protect por baja y roles; Detect por alertas tardias; Respond por reaccion posterior al dano."
        ]
      },
      {
        title: "Proceso de baja tecnico",
        ordered: [
          "RRHH registra fecha de salida y dispara un evento/ticket automatico de baja.",
          "IT identifica todas las cuentas asociadas: IdP/SSO, SaaS, correo, repositorios, VPN, dispositivos y tokens.",
          "Se suspende la identidad principal en el IdP al momento de salida.",
          "Se revocan sesiones activas, refresh tokens, API tokens y dispositivos recordados.",
          "Se remueven grupos y roles, especialmente Project Manager.",
          "Se transfiere ownership de proyectos, tareas y propuestas a un responsable activo.",
          "Se bloquea acceso a proyectos archivados y archivos sensibles.",
          "Se conserva evidencia de la baja y se verifica que no queden accesos directos fuera del SSO."
        ]
      },
      {
        title: "Controles",
        bullets: [
          "SSO/IdP con deprovisioning automatico desde RRHH.",
          "SCIM o integracion IAM-SaaS para altas, cambios y bajas.",
          "RBAC por proyecto y acceso a propuestas con vencimiento.",
          "Revocacion de sesiones, refresh tokens y dispositivos recordados.",
          "Alertas por IP, horario, descargas masivas y cuentas sin manager."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "No responder solo 'faltaba MFA'. MFA ayuda, pero no corrige una cuenta que nunca debio seguir activa ni un rol con permisos excesivos."
      }
    ]
  },
  {
    id: "EP-02",
    topic: "Redes",
    sourceGroup: "Escenarios de repaso",
    title: "Macro, RAT, movimiento lateral y ransomware",
    source: "Escenarios de repaso - Parcial Ciberseguridad.pdf, Escenario 2",
    status: "Validado",
    capture: "./assets/captures/escenarios-repaso-2.png",
    summary: "Una macro instala un RAT, el atacante permanece tres semanas, filtra clientes y cifra produccion.",
    sections: [
      {
        title: "Cadena de ataque",
        ordered: [
          "Mail con factura maliciosa en formato .xlsx.",
          "Ejecucion de macro e instalacion de RAT.",
          "Persistencia durante tres semanas.",
          "Movimiento lateral hacia cobranzas y datos de clientes.",
          "Exfiltracion de base de clientes.",
          "Ransomware sobre servidores de produccion un viernes a la noche."
        ]
      },
      {
        title: "NIST CSF",
        bullets: [
          "Identify: faltan inventario, clasificacion de activos criticos y mapa de dependencias.",
          "Protect: fallan correo, macros, endpoint hardening, MFA, minimo privilegio y segmentacion.",
          "Detect: es la falla mas grave; tres semanas sin alerta accionable.",
          "Respond: no hubo aislamiento ni revocacion temprana.",
          "Recover: si el lunes no operan, backups y continuidad no eran suficientes."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Mapeo NIST: Identify, Protect, Detect, Respond y Recover fallan; la falla mas grave es Detect por tres semanas de permanencia sin alerta.",
          "Corte temprano: mail/adjunto/macro con gateway, sandbox, bloqueo de macros no firmadas y EDR.",
          "Corte intermedio: RAT y movimiento lateral con EDR/XDR, IDS, segmentacion, MFA y firewall este-oeste.",
          "Corte tardio: ransomware con deteccion conductual, aislamiento automatico, PAM/JIT, segmentacion de produccion y backups inmutables.",
          "CIA: confidencialidad por exfiltracion, integridad por cifrado no autorizado y disponibilidad por caida operativa.",
          "Friccion: macros, MFA, ZTNA, segmentacion y EDR agregan costo/usabilidad; se mitigan con SSO, excepciones controladas, tuning y playbooks."
        ]
      },
      {
        title: "Puntos de corte",
        bullets: [
          "Temprano: secure email gateway, sandbox, bloqueo de macros no firmadas y EDR.",
          "Intermedio: EDR/XDR, IDS interno, segmentacion, firewall este-oeste y MFA.",
          "Tardio: deteccion conductual de ransomware, aislamiento automatico, PAM/JIT y backups inmutables."
        ]
      },
      {
        title: "Arquitectura que facilito el movimiento lateral",
        bullets: [
          "Red interna demasiado plana: un endpoint administrativo pudo alcanzar cobranzas, base de clientes y produccion.",
          "Falta de separacion entre red de usuarios, sistemas internos, datos sensibles y servidores productivos.",
          "Ausencia de control de trafico este-oeste, por lo que moverse dentro de la red no genero friccion ni alerta.",
          "Permisos o credenciales probablemente demasiado amplios para sistemas de cobranzas y clientes.",
          "Trabajo remoto/hibrido sin enfoque Zero Trust o ZTNA: se confia demasiado en estar dentro de la red."
        ]
      },
      {
        title: "CIA y arquitectura",
        bullets: [
          "Confidencialidad: fuga de base de clientes.",
          "Integridad: cifrado no autorizado y posible alteracion de sistemas.",
          "Disponibilidad: produccion queda cifrada y la empresa no opera.",
          "La red parece plana: un endpoint administrativo logra alcanzar cobranzas, clientes y produccion."
        ]
      },
      {
        title: "Friccion operativa y mitigacion",
        bullets: [
          "Bloquear macros puede afectar facturas reales de proveedores; se resuelve con macros firmadas, sandbox, portal de carga o excepciones aprobadas.",
          "MFA/ZTNA/segmentacion puede hacer mas lento el acceso interno; se reduce con SSO, conditional access, roles claros y buenas reglas de excepcion.",
          "EDR y alertas pueden generar falsos positivos; se manejan con tuning, despliegue gradual y playbooks.",
          "PAM/JIT puede molestar a administradores; se compensa con flujos rapidos, accesos temporales y break-glass auditado.",
          "Backups inmutables y pruebas de restore consumen tiempo; deben automatizarse y calendarizarse porque son clave para Recover."
        ]
      },
      {
        type: "callout",
        title: "Respuesta defendible",
        text: "Aunque Protect falla en la entrada, Detect es la falla principal porque el dwell time de tres semanas convierte un incidente de endpoint en crisis de negocio."
      }
    ]
  },
  {
    id: "EP-03",
    topic: "AppSec",
    sourceGroup: "Escenarios de repaso",
    title: "JWT alg=none, IDOR y errores verbosos",
    source: "Escenarios de repaso - Parcial Ciberseguridad.pdf, Escenario 3",
    status: "Validado",
    capture: "./assets/captures/escenarios-repaso-3.png",
    summary: "Una fintech expone impersonacion por JWT, datos de otros usuarios por IDOR y stack traces en produccion.",
    sections: [
      {
        title: "Ataque concreto",
        paragraphs: [
          "Un atacante crea una cuenta, obtiene su JWT, cambia el header a alg=none, modifica el user_id o sub y elimina la firma. Como la API acepta tokens sin firma, queda autenticado como otra persona.",
          "Luego cambia IDs en endpoints de historial y accede a prestamos, pagos y datos personales de otros usuarios."
        ]
      },
      {
        title: "Impacto real",
        bullets: [
          "Fuga de informacion financiera y personal.",
          "Posible fraude si otros endpoints permiten operar como la victima.",
          "Incumplimiento regulatorio y perdida de confianza.",
          "Stack traces ayudan al atacante a conocer rutas, versiones y estructura interna."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Ataque concreto: modificar JWT con alg=none para impersonar usuarios y explotar IDOR cambiando IDs de historial.",
          "Impacto: acceso a datos financieros/personales, posible fraude, riesgo regulatorio y dano de confianza.",
          "SSDLC: JWT en diseno de AuthN y pruebas; IDOR en diseno de AuthZ por objeto y tests; stack traces en configuracion/hardening/QA.",
          "Cambios de proceso: threat modeling, pruebas AppSec automatizadas y security gates de release.",
          "Fix de emergencia: primero JWT, luego IDOR, luego errores verbosos, mas auditoria y rotacion porque estuvo tres meses expuesto."
        ]
      },
      {
        title: "SSDLC",
        bullets: [
          "JWT: diseno de autenticacion, threat modeling, code review y pruebas de seguridad.",
          "IDOR/BOLA: diseno de autorizacion por objeto y tests negativos.",
          "Stack traces: configuracion, QA, hardening y revision previa a produccion."
        ]
      },
      {
        title: "Tres cambios al proceso de desarrollo",
        ordered: [
          "Threat modeling obligatorio para APIs criticas antes de implementar: autenticacion, autorizacion por objeto, datos sensibles y errores.",
          "Pruebas automatizadas AppSec en CI/CD: tests negativos de JWT, tests IDOR/BOLA, SAST, DAST y revision de dependencias.",
          "Security gates antes del release: code review con checklist AppSec, configuracion segura por ambiente y bloqueo de salida ante fallas criticas."
        ]
      },
      {
        title: "Fix de emergencia",
        ordered: [
          "Corregir JWT: rechazar alg=none y validar firma, issuer, audience, expiracion y algoritmo esperado.",
          "Corregir IDOR: autorizacion server-side por objeto en cada request.",
          "Ocultar stack traces: errores genericos al cliente y detalle solo en logs internos.",
          "Auditar accesos y rotar tokens/secretos porque la app estuvo tres meses expuesta."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "JWT primero es defendible porque rompe la autenticacion base. IDOR tambien es critico, pero el token sin firma abre impersonacion amplia."
      }
    ]
  },
  {
    id: "EP-04",
    topic: "IA",
    sourceGroup: "Escenarios de repaso",
    title: "Poisoning y membership inference en aseguradora",
    source: "Escenarios de repaso - Parcial Ciberseguridad.pdf, Escenario 4",
    status: "Validado",
    capture: "./assets/captures/escenarios-repaso-4.png",
    summary: "Un proveedor entrega datos manipulados y un investigador infiere si una persona estuvo en el dataset con etiqueta de fraude.",
    sections: [
      {
        title: "Amenazas",
        bullets: [
          "Data poisoning por proveedor externo durante recoleccion e integracion de datos.",
          "Degradacion localizada: siniestros legitimos de una region marcados como fraude.",
          "Membership inference en runtime: consultas a la API revelan pertenencia al dataset.",
          "Uso excesivo de datos sensibles aumenta memorizacion y fuga."
        ]
      },
      {
        title: "CIA y ciclo de vida",
        bullets: [
          "Poisoning afecta integridad del dataset y del comportamiento del modelo.",
          "El sesgo regional afecta integridad de decisiones y acceso justo al proceso.",
          "Membership inference afecta confidencialidad y privacidad.",
          "La exposicion nace en diseno/preparacion, pero se materializa en inferencia."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: data poisoning del proveedor, sesgo/degradacion regional, membership inference y exposicion excesiva de datos sensibles.",
          "Ciclo de vida y CIA: poisoning ocurre en datos/entrenamiento y afecta integridad; inference ocurre en runtime y afecta confidencialidad.",
          "Controles del dataset: proveedor auditado, linaje, versionado, cuarentena, validacion estadistica, evaluacion por subgrupos y set limpio.",
          "Ataque del investigador: membership inference black-box; infiere pertenencia al entrenamiento y etiqueta privada de fraude consultando el modelo.",
          "Impacto real: human-in-the-loop, explicabilidad, trazabilidad, fairness, privacidad, monitoreo y mecanismo de apelacion."
        ]
      },
      {
        title: "Controles de dataset",
        bullets: [
          "Due diligence del proveedor, linaje y versionado de datos.",
          "Cuarentena de datos externos antes de mezclarlos.",
          "Validacion estadistica, drift, outliers y correlaciones por region.",
          "Evaluacion por subgrupos y set limpio independiente.",
          "Aprobacion formal antes de promover el modelo."
        ]
      },
      {
        title: "Ataque del investigador externo",
        paragraphs: [
          "Es un membership inference attack. Si solo consulta la API y observa respuestas, es una modalidad black-box.",
          "No extrae la base directamente: infiere si una persona especifica estuvo en el entrenamiento observando score, confianza o un comportamiento anormalmente seguro del modelo.",
          "La informacion filtrada tiene dos partes: pertenencia al dataset historico y etiqueta sensible asociada, es decir, que esa persona tuvo un siniestro resuelto como fraude."
        ]
      },
      {
        title: "Controles para impacto real",
        bullets: [
          "Human-in-the-loop para decisiones negativas.",
          "Explicabilidad, trazabilidad y versionado de modelo.",
          "Minimizacion, pseudonimizacion, rate limiting y limitacion de scores detallados.",
          "Monitoreo continuo y mecanismo de apelacion."
        ]
      },
      {
        title: "Controles contra inferencia y fuga",
        bullets: [
          "No exponer confianza/logits si no son necesarios para el perito.",
          "Rate limiting y deteccion de consultas repetidas sobre una misma identidad.",
          "Control de acceso fuerte a la API interna y logging por usuario.",
          "Minimizacion de datos personales en entrenamiento y evaluacion de privacidad antes del release.",
          "Tecnicas de privacidad como regularizacion, reduccion de sobreajuste o privacidad diferencial cuando aplique."
        ]
      },
      {
        type: "callout",
        title: "Frase clave",
        text: "El sesgo observado es consecuencia de un ataque de integridad al pipeline de datos, no solamente un problema etico abstracto."
      }
    ]
  },
  {
    id: "EP-05",
    topic: "Integrador",
    sourceGroup: "Escenarios de repaso",
    title: "Clinicas, portal, LLM externo y API interna",
    source: "Escenarios de repaso - Parcial Ciberseguridad.pdf, Escenario 5",
    status: "Validado",
    capture: "./assets/captures/escenarios-repaso-5.png",
    summary: "Tres incidentes en una cadena de clinicas: estudios enviados a paciente incorrecto, fuga de contexto en IA y DoS interno contra API.",
    sections: [
      {
        title: "Estrategia de respuesta",
        paragraphs: [
          "No conviene cerrar los tres incidentes con una unica causa sin evidencia. La respuesta mas fuerte propone la hipotesis mas economica por incidente y luego agrega una hipotesis integradora de compromiso persistente como linea de investigacion.",
          "La tesis principal es que hay fallas estructurales de gobierno de datos, trazabilidad, controles de acceso, monitoreo e IA segura."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Hipotesis por incidente: lunes falla de asociacion/autorizacion de estudios; miercoles fuga de contexto IA; viernes DoS interno o abuso de API.",
          "Lunes: falla concreta de integridad/asociacion de datos o BOLA; control con doble identificador, integridad referencial, autorizacion por objeto y links autenticados.",
          "Viernes: host comprometido, API key filtrada o script defectuoso; debio detectarse con API gateway, rate limiting, SIEM, NDR/IDS, EDR y alertas por volumen.",
          "Miercoles: amenaza de data leakage/cross-patient context leakage en IA; controles de aislamiento, autorizacion en retrieval, minimizacion y DLP.",
          "LLM externo: introduce tercero, retencion, logs, prompt injection, fuga de contexto, disponibilidad y jurisdiccion; controles contractuales, tecnicos y humanos.",
          "CISO: priorizar gobierno de datos clinicos, monitoreo/respuesta centralizada y programa de IA segura."
        ]
      },
      {
        title: "Lunes",
        bullets: [
          "Hipotesis principal: falla de integridad/asociacion de datos clinicos, no necesariamente intrusion.",
          "Puede haber carga manual mal vinculada, matching debil laboratorio-paciente o job de notificacion incorrecto.",
          "Controles: doble identificador, integridad referencial, conciliacion, logs auditables, autorizacion por objeto y links autenticados."
        ]
      },
      {
        title: "Miercoles",
        bullets: [
          "Amenaza: data leakage por contexto en sistema de IA.",
          "Causas posibles: sesiones mal aisladas, memoria compartida, RAG sin autorizacion o prompts con PHI excesiva.",
          "Controles: aislamiento por paciente/sesion, autorizacion en retrieval, minimizacion, DLP, no-retencion/no-training y revision humana."
        ]
      },
      {
        title: "Viernes",
        bullets: [
          "Hipotesis principal: DoS interno a nivel de API por host comprometido, API key filtrada o script defectuoso.",
          "Controles: API gateway, rate limiting, cuotas, circuit breakers, SIEM, EDR/NDR y alertas por volumen anomalo.",
          "Como alternativa, un actor persistente podria haber plantado el script, pero requiere evidencia adicional."
        ]
      },
      {
        title: "NIST por incidente",
        bullets: [
          "Lunes: Identify falla al no tratar estudios y envios como flujo critico; Protect falla por validaciones de asociacion/autorizacion; Detect falla por falta de trazabilidad clara.",
          "Miercoles: Identify falla al no clasificar prompts, contexto y respuestas como datos clinicos sensibles; Protect falla por aislamiento y minimizacion insuficientes; Detect falla por no monitorear outputs.",
          "Viernes: Identify falla si la API de laboratorios no era dependencia critica; Protect falla por falta de cuotas/rate limits/segmentacion; Detect falla por no alertar ante miles de requests; Respond debe aislar host y revocar credenciales."
        ]
      },
      {
        title: "Amenazas del LLM externo",
        bullets: [
          "Datos clinicos enviados a un tercero y posible retencion en logs del proveedor.",
          "Uso de prompts para entrenamiento si el contrato/configuracion no lo prohibe.",
          "Fuga o mezcla de contexto entre pacientes por memoria, cache, sesiones o RAG mal aislado.",
          "Prompt injection en textos clinicos que intenten alterar instrucciones o forzar divulgacion.",
          "Dependencia de disponibilidad, cambios de modelo y jurisdiccion del proveedor."
        ]
      },
      {
        title: "Controles para el LLM externo",
        bullets: [
          "Contrato y configuracion de no-retencion/no-training.",
          "Minimizacion, redaccion o pseudonimizacion de PHI antes de enviar prompts.",
          "Aislamiento por paciente/sesion y autorizacion en retrieval.",
          "DLP sobre prompts y respuestas, logging auditable y revision humana.",
          "Rate limiting, fallback operativo y evaluacion periodica del proveedor."
        ]
      },
      {
        title: "Cambios CISO",
        ordered: [
          "Gobierno de datos clinicos y autorizacion end-to-end.",
          "Monitoreo y respuesta centralizada con SIEM, EDR/NDR y API gateway.",
          "Programa formal de IA segura: proveedores, prompts, DLP, aislamiento de contexto y revision humana."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Hipotesis integradora",
        text: "Un atacante persistente es posible, pero debe presentarse como investigacion adicional: buscar cuentas comprometidas, logs alterados, cambios de configuracion y accesos anormales."
      }
    ]
  },
  {
    id: "C1-F1",
    topic: "Fundamentos",
    sourceGroup: "Practica 1",
    title: "Fintech con base de datos expuesta",
    source: "CyC parte 2 clase 1.pdf, Bloque 2",
    status: "Validado",
    capture: "./assets/captures/practica1-bloque2-consignas-09.png",
    summary: "Una base de datos financiera queda accesible por mala configuracion.",
    sections: [
      {
        title: "Consigna original",
        paragraphs: [
          "Empresa fintech con base de datos expuesta por error en la configuracion de la DB."
        ]
      },
      {
        title: "Como responder la consigna",
        paragraphs: [
          "La consigna pide completar activo, amenaza, vulnerabilidad, riesgo y controles. La respuesta no debe saltar directo al control: primero hay que mostrar que se entiende que la mala configuracion es la vulnerabilidad, no el riesgo."
        ]
      },
      {
        title: "Matriz de riesgo",
        matrix: [
          ["Activo", "Base de datos con datos financieros, personales, saldos, transacciones e identificadores."],
          ["Amenaza", "Actor externo escanea Internet, encuentra la DB expuesta y extrae o modifica datos."],
          ["Vulnerabilidad", "Puerto publico, firewall permisivo, autenticacion debil, credenciales por defecto o falta de monitoreo."],
          ["Riesgo", "Fuga de datos, fraude, sanciones regulatorias, dano reputacional y manipulacion de registros."],
          ["Controles", "Red privada, allowlist, IAM minimo privilegio, MFA administrativo, cifrado, CSPM, logs y alertas."]
        ]
      },
      {
        title: "CIA y NIST",
        bullets: [
          "Confidencialidad es el impacto principal si se filtran datos de clientes.",
          "Integridad se afecta si la DB permite escritura o modificacion.",
          "Disponibilidad se afecta si borran datos, saturan la DB o despliegan ransomware.",
          "NIST: Identify para inventario; Protect para cerrar acceso; Detect para alertas; Respond para aislar y rotar; Recover para validar y prevenir recurrencia."
        ]
      },
      {
        title: "Prioridad de respuesta",
        ordered: [
          "Contener quitando exposicion publica sin destruir evidencia.",
          "Preservar logs y snapshots.",
          "Rotar credenciales y claves asociadas.",
          "Revisar lectura, escritura o exfiltracion.",
          "Implementar IaC revisada, CSPM y alertas."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "No responder solo 'cifrar la base'. Si la credencial o app autorizada puede consultar datos, el cifrado en reposo no evita la fuga."
      }
    ]
  },
  {
    id: "C1-F2",
    topic: "Fundamentos",
    sourceGroup: "Practica 1",
    title: "Laboratorio con PCs sin parches",
    source: "CyC parte 2 clase 1.pdf, Bloque 2",
    status: "Validado",
    capture: "./assets/captures/practica1-bloque2-consignas-09.png",
    summary: "Equipos de laboratorio desactualizados y con acceso fisico libre combinan riesgo logico y fisico.",
    sections: [
      {
        title: "Consigna original",
        paragraphs: [
          "Laboratorio con PCs sin parches y acceso fisico libre."
        ]
      },
      {
        title: "Como responder la consigna",
        paragraphs: [
          "Aca hay que cubrir dos superficies a la vez: la tecnica, por equipos sin parches, y la fisica, por acceso libre al laboratorio. Una respuesta completa no se queda solo en antivirus o parches."
        ]
      },
      {
        title: "Matriz de riesgo",
        matrix: [
          ["Activo", "PCs de laboratorio, software critico, datos de experimentos, credenciales, instrumentos y red interna."],
          ["Amenaza", "Malware, persona no autorizada, insider o visitante que conecta USB o manipula equipos."],
          ["Vulnerabilidad", "Sistemas sin parches, falta de EDR, privilegios excesivos, USB/booteo sin control y sala abierta."],
          ["Riesgo", "Robo o alteracion de datos, interrupcion de experimentos, propagacion de malware y falta de atribucion."],
          ["Controles", "Parches, EDR, segmentacion, cuentas nominales, cifrado de disco, control fisico, NAC, logs y backups."]
        ]
      },
      {
        title: "Ataques concretos",
        bullets: [
          "Malware explota una vulnerabilidad conocida y se mueve hacia otros sistemas.",
          "Una persona conecta un USB, copia datos, instala un keylogger o arranca desde un medio externo.",
          "Alguien usa una sesion abierta y modifica resultados sin quedar identificado."
        ]
      },
      {
        title: "CIA y accountability",
        bullets: [
          "Confidencialidad: robo de datos, credenciales o resultados.",
          "Integridad: alteracion de resultados, configuraciones o software de instrumentos.",
          "Disponibilidad: equipos fuera de servicio por malware o manipulacion.",
          "Accountability: usuarios compartidos y falta de logs impiden atribucion."
        ]
      },
      {
        title: "NIST y respuesta",
        bullets: [
          "Identify: inventariar PCs, instrumentos, software legacy y datos experimentales.",
          "Protect: parches cuando sea posible; si no, controles compensatorios como segmentacion, allowlisting, bloqueo de USB y control fisico.",
          "Detect: EDR, logs, NAC, monitoreo de USB y registro de ingreso a la sala.",
          "Respond/Recover: aislar la PC, preservar evidencia, restaurar imagen limpia y validar si los resultados fueron alterados."
        ]
      },
      {
        type: "callout",
        title: "Trade-off",
        text: "Si no se puede parchear por compatibilidad con instrumentos, hay que compensar con red aislada, allowlisting, bloqueo de USB, snapshots, backups y mantenimiento programado."
      }
    ]
  },
  {
    id: "C1-F3",
    topic: "Fundamentos",
    sourceGroup: "Practica 1",
    title: "Influencer victima de phishing",
    source: "CyC parte 2 clase 1.pdf, Bloque 2",
    status: "Validado",
    capture: "./assets/captures/practica1-bloque2-consignas-09.png",
    summary: "Robo de cuenta de redes sociales con impacto en identidad, reputacion, audiencia y monetizacion.",
    sections: [
      {
        title: "Consigna original",
        paragraphs: [
          "Influencer victima de phishing en redes sociales."
        ]
      },
      {
        title: "Como responder la consigna",
        paragraphs: [
          "El activo no es solo la contrasena: es la identidad digital completa. Hay que incluir audiencia, reputacion, monetizacion y seguidores afectados por posibles estafas."
        ]
      },
      {
        title: "Matriz de riesgo",
        matrix: [
          ["Activo", "Cuenta de redes, identidad digital, mensajes privados, audiencia, contratos, monetizacion y reputacion."],
          ["Amenaza", "Phishing, robo de credenciales, secuestro de sesion o OAuth malicioso."],
          ["Vulnerabilidad", "Falta de verificacion de enlaces, ausencia de MFA fuerte, contrasenas reutilizadas o apps conectadas sin revisar."],
          ["Riesgo", "Suplantacion, estafas a seguidores, perdida de ingresos, dano reputacional, extorsion y fuga de mensajes."],
          ["Controles", "MFA resistente a phishing, passkeys, gestor de contrasenas, alertas, revision de sesiones/OAuth y plan de recuperacion."]
        ]
      },
      {
        title: "Ataque concreto",
        ordered: [
          "Mensaje falso de plataforma o marca con urgencia.",
          "Dominio parecido al real para capturar credenciales.",
          "Ingreso del atacante o fatiga/captura de MFA debil.",
          "Cambio de email/telefono, cierre de sesiones y publicaciones fraudulentas.",
          "Estafas a seguidores o extorsion."
        ]
      },
      {
        title: "CIA y autenticidad",
        bullets: [
          "Confidencialidad: mensajes privados, contratos y contactos.",
          "Integridad: publicaciones y mensajes emitidos por el atacante.",
          "Disponibilidad: perdida de acceso y monetizacion.",
          "Autenticidad/accountability: la audiencia cree que el atacante es el titular."
        ]
      },
      {
        title: "Respuesta",
        bullets: [
          "Revocar sesiones y apps conectadas.",
          "Cambiar credenciales y reforzar MFA/passkeys.",
          "Recuperar la cuenta con la plataforma.",
          "Comunicar por canal alternativo para advertir posibles estafas.",
          "Usar roles delegados para agencias o community managers, no contrasenas compartidas."
        ]
      },
      {
        title: "NIST y controles operativos",
        bullets: [
          "Identify: reconocer la cuenta como activo economico y reputacional.",
          "Protect: passkeys o MFA resistente a phishing, gestor de contrasenas y roles delegados para terceros.",
          "Detect: alertas por nuevo dispositivo, ubicacion rara, cambio de email/telefono o mensajes masivos.",
          "Respond: recuperar cuenta, revocar sesiones, informar a plataforma y avisar a seguidores.",
          "Recover: restaurar publicaciones, revisar dano, contactar marcas y monitorear estafas derivadas."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "No quedarse en 'activar 2FA'. Hay que considerar sesiones, OAuth, recuperacion de cuenta y el dano a seguidores."
      }
    ]
  },
  {
    id: "UA-01",
    topic: "IA",
    sourceGroup: "Casos agregados",
    title: "Hospital con asistente de IA generativa",
    source: "Caso agregado por usuario",
    status: "Validado",
    summary: "Medicos cargan historias clinicas completas en un asistente generativo cuyo proveedor no aclara retencion ni reentrenamiento.",
    prompt: {
      context: [
        "Un hospital incorpora un asistente basado en IA generativa para ayudar a medicos a resumir historias clinicas.",
        "Para mejorar las respuestas, algunos profesionales copian datos completos de pacientes, incluyendo nombre, DNI, diagnostico y tratamientos.",
        "El proveedor del sistema no deja claro si usa las conversaciones para reentrenar modelos. Tampoco existe una politica interna sobre que informacion puede cargarse."
      ],
      questions: [
        "Identifique las principales amenazas de seguridad y privacidad.",
        "Explique por que anonimizar o minimizar datos puede ser necesario.",
        "Proponga controles tecnicos y organizacionales.",
        "Indique al menos 3 preguntas que deberia hacer la institucion antes de contratar o usar ese sistema, explicando por que es importante preguntarlo.",
        "Explique que parte de la triada CIA se podria ver afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: fuga de datos clinicos al proveedor, uso de conversaciones para reentrenamiento, retencion en logs, acceso indebido interno, salida del modelo con datos de terceros, subprocesadores no controlados y falta de politica de uso.",
          "Minimizar/anonimizar es necesario porque el resumen medico no siempre requiere nombre, DNI u otros identificadores directos; reduce impacto si hay retencion, filtracion o reuso.",
          "Controles tecnicos: DLP, redaccion automatica, plantillas de prompt, cifrado, control de acceso, logging, tenant privado, no-training/no-retention y revision de outputs.",
          "Controles organizacionales: politica de uso, capacitacion, aprobacion de casos de uso, evaluacion legal/compliance, base legal/consentimiento cuando corresponda, contrato con proveedor y supervision medica.",
          "Preguntas al proveedor: si retiene datos, si entrena con conversaciones, donde procesa/almacena, quien accede a logs, como borra datos, que subprocesadores usa y que auditorias/certificaciones tiene.",
          "CIA: confidencialidad es la mas afectada; integridad puede afectarse si el resumen tiene errores o mezcla pacientes; disponibilidad puede afectarse si el proveedor cae."
        ]
      },
      {
        title: "Amenazas de seguridad y privacidad",
        bullets: [
          "Exposicion de datos personales y datos de salud a un tercero externo.",
          "Uso de prompts y conversaciones para entrenamiento o mejora del modelo sin consentimiento claro.",
          "Retencion de datos en logs del proveedor o en herramientas internas del hospital.",
          "Uso de subprocesadores no informados: otros proveedores pueden procesar o almacenar informacion clinica sin visibilidad del hospital.",
          "Falta de base legal, consentimiento o evaluacion de privacidad para enviar datos de salud a un tercero.",
          "Regurgitacion o fuga de informacion de un paciente en respuestas futuras.",
          "Acceso indebido de empleados o medicos que no deberian ver ciertos datos.",
          "Riesgo de errores clinicos si el resumen generado omite, inventa o mezcla informacion."
        ]
      },
      {
        title: "Minimizacion y anonimización",
        paragraphs: [
          "Minimizar significa cargar solo los datos necesarios para el objetivo. Si el medico necesita un resumen clinico, muchas veces no hace falta enviar nombre completo, DNI, telefono o numero de historia clinica.",
          "Anonimizar o pseudonimizar reduce el impacto si el proveedor retiene datos o si hay una fuga. No elimina todo el riesgo, porque un caso clinico raro puede reidentificar a una persona, pero baja la exposicion."
        ]
      },
      {
        title: "DLP, anonimizacion y pseudonimizacion",
        bullets: [
          "DLP significa Data Loss Prevention: controles que detectan, alertan, bloquean o redactan datos sensibles antes de que salgan por un canal no permitido.",
          "En este caso, un DLP podria detectar DNI, nombres, telefonos, numero de historia clinica, diagnosticos sensibles o patrones de datos personales en el prompt.",
          "Anonimizacion busca que no pueda identificarse a la persona; por ejemplo, reemplazar nombre y DNI por una descripcion general del caso.",
          "Pseudonimizacion reemplaza la identidad por un codigo, como Paciente 4821, manteniendo una tabla separada y protegida para reidentificar si hace falta.",
          "Minimizacion es mandar solo lo necesario: si el objetivo es resumir evolucion clinica, no deberia enviarse DNI, telefono o identificadores que no aportan al resumen."
        ]
      },
      {
        title: "Controles tecnicos",
        bullets: [
          "DLP o filtro previo que detecte DNI, nombres, telefonos y otros datos sensibles antes de enviar el prompt.",
          "Plantillas de carga que separen datos necesarios de datos prohibidos.",
          "Configuracion contractual y tecnica de no-retention y no-training.",
          "Cifrado en transito y en reposo, control de acceso por rol y logs auditables.",
          "Aislamiento por paciente/sesion para evitar mezcla de contexto.",
          "Monitoreo de prompts y respuestas para detectar PHI en lugares no permitidos."
        ]
      },
      {
        title: "Controles organizacionales",
        bullets: [
          "Politica interna sobre que datos se pueden cargar y cuales estan prohibidos.",
          "Capacitacion a profesionales sobre privacidad, prompt hygiene y uso seguro de IA.",
          "Evaluacion de impacto de privacidad antes del despliegue.",
          "Aprobacion formal de proveedores por legales, seguridad y compliance.",
          "Procedimiento de respuesta si se sube informacion indebida.",
          "Definir base legal, consentimiento y responsabilidades antes de procesar datos de salud con un tercero.",
          "Revision humana obligatoria: el modelo redacta borradores, no decide ni valida solo."
        ]
      },
      {
        title: "Preguntas antes de contratar",
        ordered: [
          "Usan prompts o conversaciones para reentrenar modelos? Es clave para saber si datos clinicos pueden quedar incorporados al modelo.",
          "Cuanto tiempo retienen prompts, respuestas y logs? Define riesgo de exposicion y obligaciones de borrado.",
          "Donde se almacenan y procesan los datos? Importa por jurisdiccion, regulacion y acceso de terceros.",
          "Quien dentro del proveedor puede acceder a los datos? Permite evaluar insider risk y controles de soporte.",
          "Existe opcion empresarial con no-training, no-retention, auditoria y borrado verificable? Es central para uso sanitario.",
          "Usan subprocesadores o terceros adicionales? Es importante porque amplian la cadena de exposicion y las obligaciones contractuales."
        ]
      },
      {
        title: "CIA",
        bullets: [
          "Confidencialidad: principal impacto, porque se exponen datos de salud, DNI, diagnosticos y tratamientos.",
          "Integridad: un resumen erroneo, incompleto, inventado o mezclado entre pacientes puede afectar decisiones medicas.",
          "Disponibilidad: si el proveedor no esta disponible, el flujo de resumen asistido puede interrumpirse, aunque no deberia bloquear la atencion clinica."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "Anonimizar ayuda, pero no alcanza si el caso clinico es reidentificable o si el proveedor retiene datos. La respuesta fuerte combina minimizacion, contrato, configuracion tecnica y politica interna."
      }
    ]
  },
  {
    id: "UA-02",
    topic: "IAM",
    sourceGroup: "Casos agregados",
    title: "Prepaga con proveedor externo por VPN",
    source: "Caso agregado por usuario",
    status: "Validado",
    summary: "Un proveedor administra turnos con cuenta generica compartida, sin MFA, VPN amplia y logs insuficientes.",
    prompt: {
      context: [
        "Una empresa de medicina prepaga contrata a un proveedor externo para administrar su sistema de turnos.",
        "Para facilitar el soporte, le entrega al proveedor una cuenta generica con acceso remoto a un servidor interno. Esa cuenta no tiene MFA y es compartida por varios tecnicos del proveedor.",
        "El proveedor tambien tiene acceso a una base de datos con nombre, DNI, telefono, mail, numero de afiliado y especialidad medica consultada. La conexion se realiza mediante VPN, pero no hay restricciones horarias ni limitacion por direccion IP.",
        "Los logs solo registran conexiones exitosas, pero no que consultas realiza cada usuario. Durante una revision interna se detectaron accesos nocturnos desde ubicaciones inusuales."
      ],
      questions: [
        "Identifique 4 riesgos de seguridad del escenario.",
        "Explique por que la afirmacion de que el acceso es seguro porque entra por VPN es incompleta. Mencione 3 controles adicionales.",
        "Proponga 4 controles detectivos e indique que evento deberia detectar cada uno y por que seria relevante.",
        "Explique que parte de la triada CIA se podria ver afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Riesgos: cuenta generica compartida, ausencia de MFA, acceso amplio a datos sensibles, VPN sin restricciones, logs insuficientes, accesos nocturnos/anomalos y riesgo de tercero/proveedor.",
          "La VPN solo crea un canal de conexion; no prueba identidad individual, no limita privilegios, no controla horarios/IPs ni registra consultas.",
          "Controles adicionales a VPN: cuentas nominales con MFA, allowlist de IP/horario, minimo privilegio, PAM/JIT, segmentacion, logging detallado, contrato con responsabilidades y revision periodica del proveedor.",
          "Detectivos: alertas por horario/ubicacion inusual, consultas masivas o sensibles, uso simultaneo de cuenta, cambios/exportaciones y accesos fallidos.",
          "CIA: confidencialidad es el impacto principal; integridad si modifican turnos/datos; disponibilidad si el servidor interno se ve afectado."
        ]
      },
      {
        title: "Cuatro riesgos de seguridad",
        bullets: [
          "Cuenta generica compartida: no hay identidad individual ni accountability.",
          "Sin MFA: una contrasena robada alcanza para entrar por VPN.",
          "Acceso a datos sensibles de salud/afiliacion sin evidencia de minimo privilegio.",
          "VPN sin restricciones de horario, ubicacion o IP, lo que permite accesos anormales.",
          "Logs insuficientes: se sabe que hubo conexion, pero no que consultas o acciones realizo cada tecnico.",
          "Riesgo de tercero: la seguridad depende tambien de practicas internas del proveedor."
        ]
      },
      {
        title: "Accountability y riesgo de tercero",
        paragraphs: [
          "El problema central no es solo que el proveedor entra a la red, sino que entra con una identidad compartida. Si ocurre una consulta indebida, la empresa puede saber que entro la cuenta del proveedor, pero no que tecnico real hizo la accion.",
          "Al ser un tercero, tambien hay que gestionar responsabilidades contractuales, baja de tecnicos, revision periodica de permisos, auditoria del proveedor y procedimiento de notificacion ante incidentes."
        ]
      },
      {
        title: "Por que VPN no alcanza",
        paragraphs: [
          "VPN protege el canal y permite llegar a la red interna, pero no reemplaza controles de identidad, autorizacion, monitoreo ni trazabilidad. Una VPN con una cuenta compartida y sin MFA puede convertir una credencial robada en acceso remoto legitimo."
        ],
        bullets: [
          "Debe acompanarse con cuentas nominales y MFA.",
          "Debe limitarse por origen, horario, dispositivo y necesidad operativa.",
          "Debe tener logs de acciones y consultas, no solo de conexion exitosa.",
          "Debe existir un owner interno del acceso del proveedor y revisiones periodicas de vigencia y alcance."
        ]
      },
      {
        title: "Controles detectivos",
        matrix: [
          ["Alerta por horario/ubicacion inusual", "Detecta accesos nocturnos o desde paises/IPs no habituales; ayuda a distinguir soporte legitimo de compromiso."],
          ["Auditoria de consultas a base de datos", "Detecta lectura masiva, busquedas por DNI o acceso a especialidades medicas; permite saber que datos pudieron filtrarse."],
          ["Deteccion de uso simultaneo de cuenta", "Detecta la misma cuenta generica activa desde multiples ubicaciones; evidencia abuso o cuenta compartida fuera de control."],
          ["Alertas por exportacion o cambios", "Detecta dumps, descargas grandes, modificaciones de turnos o datos; es clave para investigar impacto e integridad."],
          ["Registro de accesos fallidos", "Detecta fuerza bruta, password spraying o intentos previos al acceso exitoso."]
        ]
      },
      {
        title: "CIA",
        bullets: [
          "Confidencialidad: nombres, DNI, contacto, afiliacion y especialidad consultada son datos sensibles.",
          "Integridad: un proveedor o tercero podria modificar turnos, datos de afiliados o registros.",
          "Disponibilidad: un acceso remoto indebido podria afectar el servidor interno o el sistema de turnos."
        ]
      },
      {
        type: "callout",
        title: "Frase para parcial",
        text: "VPN no es sinonimo de acceso seguro: es un canal. La seguridad real requiere identidad individual, autorizacion granular, monitoreo, trazabilidad y gobierno del proveedor."
      }
    ]
  },
  {
    id: "UA-03",
    topic: "Redes",
    sourceGroup: "Casos agregados",
    title: "Nube, RDP abierto y ransomware",
    source: "Caso agregado por usuario",
    status: "Validado",
    summary: "Una migracion a nube deja RDP y base de datos expuestos; los backups no se prueban y aparece ransomware.",
    prompt: {
      context: [
        "Una empresa migro parte de sus sistemas a la nube. Para facilitar el trabajo remoto, dejo abierto a Internet un servidor con escritorio remoto.",
        "Tambien tiene una base de datos accesible desde cualquier IP porque todavia estan configurando la red. Los backups se hacen semanalmente, pero nunca se probo una restauracion.",
        "Un mes despues, varios archivos aparecen cifrados y la empresa recibe una nota de extorsion."
      ],
      questions: [
        "Identifique las decisiones que aumentaron la superficie de ataque.",
        "Explique que controles preventivos y detectivos podrian haber reducido el riesgo.",
        "Explique por que los backups son importantes ante ransomware, que condiciones deben cumplir y que limitaciones tienen.",
        "Distinga entre medidas de infraestructura, monitoreo y respuesta a incidentes."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Superficie de ataque: RDP abierto a Internet, DB accesible desde cualquier IP, configuracion temporal sin fecha de cierre/owner, falta de segmentacion y backups no probados.",
          "Preventivos: VPN/ZTNA o bastion, MFA, allowlist, red privada, hardening, minimo privilegio, patching, segmentacion y cierre de puertos.",
          "Detectivos: alertas por intentos RDP, login anomalo, escaneo, cambios de firewall/security groups, creacion de reglas publicas, actividad masiva de cifrado, EDR, SIEM y monitoreo cloud.",
          "Backups: permiten recuperar disponibilidad, pero deben ser inmutables/offline, frecuentes, cifrados, probados, versionados y separados de credenciales productivas.",
          "Limitaciones: backups no evitan exfiltracion, extorsion, robo de credenciales, reinfeccion ni perdida de datos desde el ultimo backup.",
          "Medidas: infraestructura reduce exposicion; monitoreo detecta; respuesta contiene, erradica y recupera."
        ]
      },
      {
        title: "Decisiones que aumentaron la superficie",
        bullets: [
          "Exponer RDP directamente a Internet para trabajo remoto.",
          "Base de datos abierta desde cualquier IP.",
          "Mantener una configuracion temporal insegura durante un mes.",
          "No poner owner, fecha de vencimiento ni revision automatica a reglas temporales abiertas.",
          "Ausencia de segmentacion entre servidor, usuarios y base de datos.",
          "Backups semanales sin prueba de restauracion.",
          "Probable falta de MFA, hardening, monitoreo y reglas cloud revisadas."
        ]
      },
      {
        title: "Preventivos y detectivos",
        bullets: [
          "Preventivos: cerrar RDP publico, usar VPN/ZTNA/bastion, MFA, allowlist de IPs, red privada para DB, grupos de seguridad restrictivos, patching y EDR.",
          "Detectivos: alertas por intentos de login RDP, IPs inusuales, escaneos, cambios en security groups, creacion de reglas publicas, actividad de cifrado, procesos sospechosos y acceso masivo a archivos.",
          "Cloud security posture management ayuda a detectar recursos expuestos a Internet antes del incidente."
        ]
      },
      {
        title: "Backups ante ransomware",
        bullets: [
          "Son importantes porque permiten recuperar disponibilidad sin depender del atacante.",
          "Deben ser probados: un backup que nunca se restauro es una suposicion, no un control confiable.",
          "Deben estar aislados o inmutables para que el ransomware no los cifre tambien.",
          "Deben tener frecuencia compatible con el RPO y tiempos de restauracion compatibles con el RTO.",
          "Deben protegerse con credenciales separadas, cifrado, versionado y monitoreo.",
          "RPO indica cuanta informacion se puede perder; con backups semanales podria perderse hasta una semana. RTO indica cuanto se tarda en volver a operar; si nunca se probo restore, no se conoce el RTO real."
        ]
      },
      {
        title: "Limitaciones de los backups",
        bullets: [
          "No evitan que el atacante entre.",
          "No evitan la exfiltracion previa de datos ni la extorsion por publicacion.",
          "No impiden que el atacante robe informacion antes de cifrarla; por eso ransomware tambien puede afectar confidencialidad.",
          "No corrigen la vulnerabilidad que permitio el ataque.",
          "No recuperan datos creados despues del ultimo backup.",
          "Pueden restaurar sistemas vulnerables si no se corrige la causa raiz.",
          "Si el atacante consigue credenciales de backup, puede borrar o cifrar copias; por eso se necesitan backups inmutables/offline y credenciales separadas."
        ]
      },
      {
        title: "Infraestructura, monitoreo y respuesta",
        matrix: [
          ["Infraestructura", "Red privada, segmentacion, bastion, VPN/ZTNA, MFA, firewall, hardening, backups inmutables."],
          ["Monitoreo", "SIEM, EDR, alertas cloud, logs de acceso, deteccion de cifrado masivo, cambios de configuracion y reglas publicas nuevas."],
          ["Respuesta", "Aislar hosts, cortar credenciales, preservar evidencia, determinar alcance, cerrar exposiciones, erradicar causa raiz y recien despues restaurar desde backups limpios."]
        ]
      }
    ]
  },
  {
    id: "UA-04",
    topic: "AppSec",
    sourceGroup: "Casos agregados",
    title: "Universidad con IDOR en notas",
    source: "Caso agregado por usuario",
    status: "Validado",
    summary: "Una app universitaria confia en id_alumno enviado por URL y permite ver notas de otro estudiante.",
    prompt: {
      context: [
        "Una universidad desarrolla una aplicacion para que los alumnos consulten notas, certificados y datos administrativos.",
        "La aplicacion tiene como parametro en cada endpoint el id_alumno que llega desde la URL, por ejemplo /mis-notas?id_alumno=12345.",
        "Durante la clase de Cripto y Seguridad, un alumno cambia el numero del parametro y accede a las notas de otro estudiante."
      ],
      questions: [
        "Explique que vulnerabilidades aparecen en el caso.",
        "Proponga al menos tres controles para reducir el riesgo de acceso indebido a documentos.",
        "Que evidencias o registros deberia guardar el sistema para detectar o investigar este tipo de uso?",
        "Explique que parte de la triada CIA se ve afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Vulnerabilidad principal: IDOR/BOLA. IDOR significa Insecure Direct Object Reference y BOLA significa Broken Object Level Authorization; el sistema confia en un identificador manipulable en la URL y no valida autorizacion por objeto.",
          "Tambien hay IDs predecibles, falta de validacion server-side y posible ausencia de alertas por enumeracion.",
          "Controles: derivar alumno desde la sesion/token, validar autorizacion por cada recurso, control por rol, fail-safe default, usar IDs opacos como defensa adicional, tests IDOR y rate limiting.",
          "Evidencias: usuario autenticado, id solicitado, endpoint, hora, IP, dispositivo, resultado, request/correlation ID, denegaciones y patrones de cambio de IDs.",
          "CIA: confidencialidad de notas/certificados/datos administrativos; integridad si pudiera modificar documentos."
        ]
      },
      {
        title: "Vulnerabilidades",
        bullets: [
          "IDOR significa Insecure Direct Object Reference: una referencia directa a un objeto, como id_alumno=12345, permite intentar acceder a recursos de terceros.",
          "BOLA significa Broken Object Level Authorization: falla la autorizacion a nivel de objeto, porque el servidor no verifica que ese recurso pertenezca al usuario autenticado.",
          "Confianza indebida en datos controlados por el cliente.",
          "IDs secuenciales o predecibles que facilitan enumeracion.",
          "Falta de autorizacion server-side por cada documento o nota.",
          "Posible falta de monitoreo de patrones de acceso anomalo."
        ]
      },
      {
        title: "Controles",
        bullets: [
          "No usar el id_alumno de la URL como fuente de verdad; derivar identidad desde sesion/token.",
          "Validar en servidor que el recurso solicitado pertenece al alumno autenticado o que el usuario tiene rol autorizado.",
          "Aplicar autorizacion por objeto en notas, certificados y datos administrativos.",
          "Implementar control por rol: alumno, docente y administrativo tienen permisos distintos; un alumno solo deberia ver sus propios datos.",
          "Aplicar fail-safe default: ante duda o falta de permiso explicito, denegar acceso.",
          "Usar IDs opacos/no secuenciales como capa adicional, sin reemplazar autorizacion.",
          "Agregar tests automatizados de IDOR/BOLA y pruebas negativas en QA.",
          "Rate limiting y alertas ante muchos IDs consultados en poco tiempo."
        ]
      },
      {
        title: "Evidencias y registros",
        bullets: [
          "Usuario autenticado y rol.",
          "id_alumno de la sesion y id_alumno solicitado.",
          "Endpoint, metodo, hora, IP, user-agent/dispositivo y resultado.",
          "Request ID o correlation ID para unir eventos de frontend, backend, API y base de datos.",
          "Eventos denegados por intento de acceder a recursos ajenos.",
          "Patrones de enumeracion: muchos IDs consecutivos, errores 403/404 repetidos o consultas fuera de horario.",
          "Acciones sobre documentos: vista, descarga, generacion o modificacion."
        ]
      },
      {
        title: "CIA",
        bullets: [
          "Confidencialidad es el impacto principal porque se exponen notas y datos academicos de otro estudiante.",
          "Integridad se afectaria si el mismo problema permitiera modificar notas, certificados o datos administrativos.",
          "Disponibilidad no es el impacto central del caso, salvo abuso masivo que degrade el servicio."
        ]
      },
      {
        type: "callout",
        title: "Punto fino",
        text: "Cambiar IDs por UUIDs no arregla el problema de fondo. Ayuda contra enumeracion, pero la defensa real es autorizacion por objeto en el servidor."
      }
    ]
  },
  {
    id: "UA-05",
    topic: "IAM",
    sourceGroup: "Casos agregados",
    title: "Fintech con cuenta compartida de soporte",
    source: "Caso agregado por usuario",
    status: "Validado",
    summary: "Soporte usa una cuenta administrativa compartida que permite ver datos, resetear contrasenas y modificar limites.",
    prompt: {
      context: [
        "Una fintech pequena permite que varios empleados del area de soporte accedan al panel administrativo usando una unica cuenta compartida.",
        "La contrasena se cambia cada seis meses y se guarda en un documento interno.",
        "El panel permite ver datos personales de clientes, resetear contrasenas y modificar limites de operacion."
      ],
      questions: [
        "Identifique al menos 4 amenazas de seguridad.",
        "Diferencie que problemas corresponden a autenticacion, autorizacion y trazabilidad.",
        "Proponga 4 controles concretos para mitigar las amenazas.",
        "Explique por que MFA no resuelve todos los problemas del escenario.",
        "Explique que parte de la triada CIA se podria ver afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: robo de la contrasena compartida, abuso interno, fuga del documento, reset indebido de cuentas, modificacion fraudulenta de limites, fraude/toma de cuenta y falta de atribucion.",
          "Autenticacion: cuenta compartida y contrasena guardada en documento; autorizacion: permisos excesivos para soporte; trazabilidad: no se sabe que empleado hizo cada accion.",
          "Controles: cuentas nominales, MFA, RBAC/minimo privilegio, PAM/JIT, gestor de secretos, logs por usuario, ticket obligatorio, alertas y segregacion de funciones.",
          "MFA no resuelve todo porque si la cuenta sigue compartida no hay accountability, los permisos siguen siendo excesivos y el secreto puede seguir mal gestionado.",
          "CIA: confidencialidad de datos personales, integridad de limites/contrasenas y disponibilidad si se bloquean cuentas o se abusa del panel."
        ]
      },
      {
        title: "Amenazas",
        bullets: [
          "Compromiso de la cuenta compartida por robo o filtracion de la contrasena.",
          "Abuso interno: un empleado puede ver datos o modificar limites sin quedar identificado individualmente.",
          "Fuga del documento interno que contiene la contrasena.",
          "Reset de contrasenas de clientes para tomar control de cuentas.",
          "Modificacion de limites de operacion para fraude o dano.",
          "Fraude financiero o toma de cuenta: combinar reset de contrasena y cambio de limites puede habilitar operaciones no autorizadas.",
          "Imposibilidad de investigar con precision porque todos usan la misma identidad."
        ]
      },
      {
        title: "AuthN, AuthZ y trazabilidad",
        matrix: [
          ["Autenticacion", "Una unica cuenta compartida y contrasena en documento interno; cambiarla cada seis meses no prueba quien entra."],
          ["Autorizacion", "El rol de soporte tiene permisos demasiado amplios: ver datos, resetear contrasenas y modificar limites."],
          ["Trazabilidad", "Los logs, si existen, atribuyen acciones a la cuenta compartida, no a la persona real."]
        ]
      },
      {
        title: "Controles concretos",
        bullets: [
          "Cuentas nominales para cada empleado con MFA individual.",
          "RBAC/minimo privilegio: separar ver datos, resetear contrasenas y modificar limites.",
          "PAM/JIT para acciones sensibles con aprobacion y expiracion.",
          "Gestor de secretos o eliminacion de contrasenas compartidas.",
          "Logs de auditoria por usuario real y alertas por acciones sensibles.",
          "Ticket o justificacion obligatoria para resets y cambios de limites.",
          "Registro detallado before/after: valor anterior, valor nuevo, cliente afectado, usuario, hora y motivo.",
          "Separacion de funciones: modificar limites altos o resetear cuentas sensibles puede requerir doble aprobacion."
        ]
      },
      {
        title: "Alertas administrativas",
        bullets: [
          "Muchos resets de contrasena por un mismo empleado o en poco tiempo.",
          "Cambios de limites fuera de horario o por montos inusuales.",
          "Acciones administrativas sin ticket asociado.",
          "Acceso del panel desde ubicaciones, dispositivos o redes no habituales.",
          "Ver datos de muchos clientes sin una razon operativa clara."
        ]
      },
      {
        title: "Por que MFA no alcanza",
        paragraphs: [
          "MFA mejora la autenticacion, pero no corrige autorizacion excesiva ni trazabilidad. Si todos siguen usando la misma cuenta, el sistema puede saber que entro la cuenta de soporte, pero no que empleado realizo cada accion.",
          "Tampoco resuelve que la contrasena este documentada ni que soporte tenga permisos que tal vez no necesita."
        ]
      },
      {
        title: "CIA",
        bullets: [
          "Confidencialidad: datos personales de clientes expuestos a demasiadas personas.",
          "Integridad: limites de operacion y credenciales pueden modificarse indebidamente.",
          "Disponibilidad: resets o bloqueos maliciosos pueden impedir que clientes accedan u operen.",
          "Accountability: aunque no es parte de CIA, es central; con una cuenta compartida no se puede atribuir cada accion a una persona real."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "La cuenta compartida rompe accountability. Aunque agregues MFA, si no hay usuarios nominales y permisos granulares, el riesgo central sigue vivo."
      }
    ]
  }
];

const state = {
  activeTopic: "Todos",
  query: "",
  selectedId: cases[0].id
};

const els = {
  caseCount: document.querySelector("#caseCount"),
  sourceCount: document.querySelector("#sourceCount"),
  searchInput: document.querySelector("#searchInput"),
  topicFilters: document.querySelector("#topicFilters"),
  caseList: document.querySelector("#caseList"),
  caseDetail: document.querySelector("#caseDetail")
};

const normalize = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const topics = ["Todos", ...Array.from(new Set(cases.map((item) => item.topic)))];

function getVisibleCases() {
  const q = normalize(state.query.trim());
  return cases.filter((item) => {
    const byTopic = state.activeTopic === "Todos" || item.topic === state.activeTopic;
    if (!byTopic) return false;
    if (!q) return true;
    const haystack = normalize([
      item.id,
      item.title,
      item.topic,
      item.source,
      item.summary,
      item.sections.map((section) => [
        section.title,
        section.text,
        section.paragraphs,
        section.bullets,
        section.ordered,
        section.matrix
      ].flat(3).join(" ")),
      item.prompt?.context,
      item.prompt?.questions
    ].join(" "));
    return haystack.includes(q);
  });
}

function renderFilters() {
  els.topicFilters.innerHTML = topics.map((topic) => `
    <button class="filter-button ${topic === state.activeTopic ? "active" : ""}" type="button" data-topic="${escapeHtml(topic)}">
      ${escapeHtml(topic)}
    </button>
  `).join("");
}

function renderList() {
  const visible = getVisibleCases();
  if (!visible.some((item) => item.id === state.selectedId)) {
    state.selectedId = visible[0]?.id || cases[0].id;
  }

  els.caseList.innerHTML = visible.map((item) => `
    <button class="case-button ${item.id === state.selectedId ? "active" : ""}" type="button" data-case="${escapeHtml(item.id)}">
      <strong>${escapeHtml(item.id)} - ${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.topic)} / ${escapeHtml(item.sourceGroup)}</span>
    </button>
  `).join("");

  if (visible.length === 0) {
    els.caseList.innerHTML = '<div class="case-empty">No hay casos para ese filtro.</div>';
  }
}

function renderSection(section) {
  if (section.type === "callout") {
    return `
      <section class="callout ${section.tone === "warning" ? "warning" : ""}">
        <strong>${escapeHtml(section.title)}</strong>
        <p>${escapeHtml(section.text)}</p>
      </section>
    `;
  }

  const paragraphs = section.paragraphs?.map((text) => `<p>${escapeHtml(text)}</p>`).join("") || "";
  const bullets = section.bullets?.length
    ? `<ul>${section.bullets.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul>`
    : "";
  const ordered = section.ordered?.length
    ? `<ol>${section.ordered.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ol>`
    : "";
  const matrix = section.matrix?.length
    ? `<dl class="matrix">${section.matrix.map(([label, value]) => `
        <div class="matrix-row">
          <dt>${escapeHtml(label)}</dt>
          <dd>${escapeHtml(value)}</dd>
        </div>
      `).join("")}</dl>`
    : "";

  return `
    <section class="case-section">
      <h3>${escapeHtml(section.title)}</h3>
      ${paragraphs}
      ${matrix}
      ${bullets}
      ${ordered}
    </section>
  `;
}

function renderSourcePanel(item) {
  if (item.capture) {
    return `
      <section class="source-panel" aria-label="Captura de la consigna original">
        <div class="source-head">
          <div>
            <p class="eyebrow">Consigna original</p>
            <h3>Captura del PDF</h3>
          </div>
          <p>${escapeHtml(item.source)}</p>
          <a class="capture-link" href="${escapeHtml(item.capture)}" target="_blank" rel="noopener">Abrir imagen</a>
        </div>
        <div class="capture-frame">
          <img src="${escapeHtml(item.capture)}" alt="Captura PDF de ${escapeHtml(item.id)}" loading="lazy">
        </div>
      </section>
    `;
  }

  const context = item.prompt?.context?.map((text) => `<p>${escapeHtml(text)}</p>`).join("") || "";
  const questions = item.prompt?.questions?.length
    ? `<ol>${item.prompt.questions.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ol>`
    : "";

  return `
    <section class="source-panel" aria-label="Consigna original cargada por usuario">
      <div class="source-head">
        <div>
          <p class="eyebrow">Consigna original</p>
          <h3>Texto del caso</h3>
        </div>
        <p>${escapeHtml(item.source)}</p>
      </div>
      <div class="prompt-frame">
        ${context}
        ${questions ? `<h4>Preguntas</h4>${questions}` : ""}
      </div>
    </section>
  `;
}

function renderDetail() {
  const item = cases.find((entry) => entry.id === state.selectedId) || cases[0];
  els.caseDetail.innerHTML = `
    <article>
      <header class="case-title">
        <p class="eyebrow">${escapeHtml(item.sourceGroup)}</p>
        <h2>${escapeHtml(item.id)} - ${escapeHtml(item.title)}</h2>
        <p class="case-summary">${escapeHtml(item.summary)}</p>
        <div class="meta-row">
          <span class="topic-pill">${escapeHtml(item.topic)}</span>
          <span class="status-pill">${escapeHtml(item.status)}</span>
          <span class="meta-pill">${escapeHtml(item.source)}</span>
        </div>
      </header>

      <div class="case-grid">
        ${renderSourcePanel(item)}

        <section class="analysis-panel" aria-label="Solucion y analisis">
          ${item.sections.map(renderSection).join("")}
        </section>
      </div>
    </article>
  `;
}

function render() {
  els.caseCount.textContent = cases.length;
  els.sourceCount.textContent = new Set(cases.map((item) => item.sourceGroup)).size;
  renderFilters();
  renderList();
  renderDetail();
}

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
  renderDetail();
});

els.topicFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-topic]");
  if (!button) return;
  state.activeTopic = button.dataset.topic;
  renderFilters();
  renderList();
  renderDetail();
});

els.caseList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-case]");
  if (!button) return;
  state.selectedId = button.dataset.case;
  renderList();
  renderDetail();
  els.caseDetail.focus({ preventScroll: true });
  if (window.matchMedia("(max-width: 1023px)").matches) {
    els.caseDetail.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

render();
