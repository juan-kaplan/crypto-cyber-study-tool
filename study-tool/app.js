const cases = [
  {
    id: "GX-00",
    topic: "Transversal",
    sourceGroup: "Guia de respuesta",
    title: "Checklist comun para cualquier caso",
    source: "Guia general adjunta por usuario, revisada y condensada",
    status: "Revisado",
    sourceLabel: "Guia transversal",
    sourceTitle: "Uso antes de responder",
    summary: "Bloques que conviene revisar en casi todos los casos sin caer en una lista generica de controles.",
    prompt: {
      context: [
        "Usar esta guia antes de escribir la respuesta final. No obliga a mencionar todos los controles: sirve para detectar que piezas faltan y justificar cada una contra el caso concreto.",
        "La respuesta fuerte no enumera herramientas sueltas. Explica que riesgo reducen, que parte de CIA protegen y que evidencia permitiria comprobar el alcance."
      ],
      questions: [
        "Cual es el activo principal y que proceso depende de el?",
        "Que amenaza explota que vulnerabilidad y que riesgo produce?",
        "Que controles preventivos, detectivos y correctivos son defendibles para este caso?",
        "Hay datos sensibles, proveedores, IA, nube, cuentas compartidas o aplicaciones expuestas?",
        "Que punto fino evita una respuesta generica?"
      ]
    },
    sections: [
      {
        title: "Bloques que casi siempre suman",
        matrix: [
          ["Activo", "Nombrar el dato, sistema, identidad o proceso que se protege. El activo no suele ser solo el servidor: tambien puede ser continuidad, reputacion, decision o confianza."],
          ["Amenaza, vulnerabilidad y riesgo", "Separar quien causa dano, que debilidad lo permite y que impacto puede ocurrir. Evita mezclar 'base expuesta' con 'fuga de datos'."],
          ["CIA", "Indicar si el caso afecta confidencialidad, integridad, disponibilidad o mas de una a la vez, explicando el motivo."],
          ["Controles por funcion", "Ordenar medidas como preventivas, detectivas y correctivas. Una buena respuesta no se queda solo en prevenir."],
          ["Evidencia", "Decir que logs, auditorias o registros permitirian reconstruir quien hizo que, cuando, desde donde y sobre que recurso."],
          ["Limites del control", "Aclarar que MFA, VPN, cifrado o backups ayudan, pero no reemplazan autorizacion, minimo privilegio, monitoreo ni respuesta."]
        ]
      },
      {
        title: "Controles transversales a revisar",
        bullets: [
          "MFA para cuentas administrativas, accesos remotos, proveedores, correo, consolas cloud y sistemas con datos sensibles.",
          "Cuentas nominales, no compartidas, con baja inmediata, revocacion de sesiones y revision periodica de accesos.",
          "Minimo privilegio y necesidad de saber para usuarios, servicios, APIs, proveedores, cuentas tecnicas y asistentes de IA.",
          "Autorizacion por recurso: cada documento, turno, nota, factura, cliente, historia clinica o ID debe validarse del lado servidor.",
          "Logs utiles y alertas: no solo login exitoso, sino lectura, descarga, modificacion, exportacion, denegaciones, cambios de permisos y acciones administrativas.",
          "Segmentacion para limitar movimiento lateral entre usuarios, servidores, bases, backups, IoT, produccion y redes de proveedores.",
          "Backups aislados o inmutables, cifrados, versionados y probados con restauraciones reales.",
          "Cifrado en transito y en reposo con gestion segura de claves, entendiendo que no corrige permisos excesivos.",
          "Respuesta a incidentes: contener, preservar evidencia, identificar alcance, erradicar causa, recuperar y aprender."
        ]
      },
      {
        title: "Datos personales y sensibles",
        bullets: [
          "Identificar si hay salud, menores, biometria, finanzas, ubicacion, conducta escolar, medicamentos o datos que permitan inferir informacion sensible.",
          "Aplicar minimizacion: si un dato no es necesario para la finalidad, agrega riesgo innecesario.",
          "Definir finalidad, retencion, acceso, borrado, transparencia y base legal o consentimiento cuando corresponda.",
          "Usar DLP, redaccion, anonimizacion o pseudonimizacion cuando reduzcan exposicion sin romper el objetivo del proceso.",
          "Recordar que anonimizar no elimina todo el riesgo si el contexto permite reidentificar."
        ]
      },
      {
        title: "Si aparece este patron",
        matrix: [
          ["Proveedor", "Revisar datos compartidos, subprocesadores, retencion, ubicacion, contrato, auditoria, cuentas nominales, MFA, acceso temporal y logs."],
          ["IA", "Revisar prompts, datos sensibles, no-training/no-retention, aislamiento de contexto, autorizacion en retrieval, prompt injection, DLP, trazabilidad y revision humana."],
          ["Nube", "Buscar recursos publicos, IAM amplio, claves expuestas, logs desactivados, security groups permisivos, backups en el mismo entorno y falta de IaC/CSPM."],
          ["Web/API", "Validar AuthN, AuthZ por objeto, tokens, errores genericos, rate limiting, exposicion excesiva, logs y pruebas negativas de IDOR/BOLA."],
          ["Ransomware", "Cubrir entrada inicial, movimiento lateral, privilegios, EDR, segmentacion, exfiltracion, backups probados y plan de respuesta."],
          ["Cuenta compartida", "Marcar perdida de trazabilidad, imposibilidad de revocar a una persona, MFA individual imposible y abuso interno dificil de investigar."]
        ]
      },
      {
        title: "Formula de respuesta",
        ordered: [
          "Activo: que se protege y por que importa para la organizacion o la persona.",
          "Amenaza: quien o que podria causar el dano.",
          "Vulnerabilidad: que debilidad concreta permite el abuso.",
          "Riesgo: que impacto real produce si se explota.",
          "CIA: que propiedad se afecta y con que evidencia del caso.",
          "Preventivos: que controles reducen la probabilidad.",
          "Detectivos: que eventos deben registrarse o alertar.",
          "Correctivos: como contener, recuperar y evitar recurrencia.",
          "Privacidad o terceros: agregarlo si hay datos personales, IA, proveedor, nube o subprocesadores.",
          "Evidencia: que registros hacen posible investigar alcance y atribucion.",
          "Punto fino: aclarar el limite de una solucion obvia para demostrar criterio."
        ]
      },
      {
        title: "Frases comodin defendibles",
        bullets: [
          "MFA mejora la autenticacion, pero no reemplaza autorizacion granular, trazabilidad ni minimo privilegio.",
          "La VPN protege el canal, pero no resuelve identidad individual, permisos, monitoreo ni abuso de privilegios.",
          "El backend debe desconfiar de cualquier ID, parametro o token enviado por el cliente.",
          "Un log util no solo dice que alguien entro; dice que hizo despues de entrar.",
          "El backup no se valida cuando se crea; se valida cuando se restaura.",
          "Tercerizar una funcion no elimina la responsabilidad sobre los datos ni sobre el riesgo.",
          "La seguridad de una API no se basa en ocultar IDs, sino en verificar permisos en cada operacion.",
          "No existe un unico control que resuelva todo: hay que prevenir, detectar, responder y recuperar."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Como no usar esta guia",
        text: "No pegues todos los controles en todos los casos. Elegi los que el escenario justifica y explica que riesgo reducen; si no, la respuesta parece memorizada."
      }
    ]
  },
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
  },
  {
    id: "UA-06",
    topic: "Privacidad",
    sourceGroup: "Casos agregados",
    title: "Camaras inteligentes en residencia geriatrica",
    source: "Casos adjuntos por usuario, Caso 1",
    status: "Revisado",
    summary: "Una residencia usa camaras con IA que graban video y audio de forma continua, con procesamiento cloud y accesos internos sin justificacion clara.",
    prompt: {
      context: [
        "Una residencia geriatrica instala camaras inteligentes en pasillos y salas comunes para detectar caidas, desorientacion de pacientes y emergencias.",
        "El proveedor procesa imagenes en la nube. Para mejorar deteccion, las camaras graban video y audio de forma continua.",
        "Las grabaciones pueden ser vistas por enfermeria, supervisores y tecnicos del proveedor. Las familias reciben una explicacion general, pero no detalles sobre grabacion, retencion, accesos ni entrenamiento de algoritmos.",
        "Durante una revision se detecta que empleados acceden a grabaciones antiguas sin justificacion medica o asistencial clara."
      ],
      questions: [
        "Identifique las principales amenazas de seguridad y privacidad.",
        "Explique que problemas aparecen por el uso de video y audio en un contexto sensible.",
        "Proponga controles tecnicos y organizacionales para limitar accesos indebidos.",
        "Indique que informacion deberia recibir el paciente o su familia antes de implementar el sistema.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: exposicion de imagenes, voz, rutinas y datos de salud inferidos; vigilancia excesiva; accesos internos indebidos; acceso del proveedor; retencion excesiva; uso secundario para entrenamiento; filtracion o extorsion.",
          "Video y audio son especialmente invasivos porque capturan contexto completo: identidad, estado fisico, conversaciones, visitas, situaciones intimas y terceros que no necesariamente consintieron.",
          "Controles tecnicos: RBAC, MFA, logs auditables, alertas por accesos inusuales, retencion limitada, grabacion por evento, cifrado, segmentacion, procesamiento local o en borde y no-training contractual/tecnico.",
          "Controles organizacionales: politica de videovigilancia e IA, evaluacion de impacto de privacidad, capacitacion, procedimiento de autorizacion para ver grabaciones, revision periodica de accesos y contrato fuerte con proveedor.",
          "Informacion previa: zonas grabadas, si hay audio, finalidad, almacenamiento, plazo de retencion, quienes acceden, rol del proveedor, uso para entrenamiento, derechos y canal de reclamo.",
          "CIA: confidencialidad es la principal; integridad si se manipulan grabaciones o fallan alertas; disponibilidad si el sistema cae y se depende de el para emergencias."
        ]
      },
      {
        title: "Amenazas clave",
        bullets: [
          "Exposicion de datos personales y de salud inferidos, aunque no se trate de una historia clinica formal.",
          "Vigilancia continua desproporcionada frente a la finalidad asistencial.",
          "Acceso por curiosidad o abuso interno a grabaciones antiguas.",
          "Soporte externo con visibilidad sobre videos sin controles equivalentes a los internos.",
          "Uso de grabaciones para mejorar algoritmos sin autorizacion clara.",
          "Retencion prolongada que aumenta el impacto de una brecha."
        ]
      },
      {
        title: "Video y audio en contexto sensible",
        paragraphs: [
          "En una residencia geriatrica los residentes son personas vulnerables. Una grabacion puede revelar movilidad reducida, deterioro cognitivo, medicacion, conflictos familiares, visitas o conversaciones sobre diagnosticos.",
          "El audio agrava el riesgo porque captura conversaciones privadas y datos de terceros. Aunque sean espacios comunes, sigue existiendo expectativa razonable de privacidad."
        ]
      },
      {
        title: "Controles",
        bullets: [
          "Acceso por rol y necesidad asistencial: enfermeria, supervision y proveedor no deberian ver lo mismo.",
          "MFA, cifrado, segmentacion de red y hardening de camaras.",
          "Registro de quien vio que video, cuando, desde donde y con que justificacion.",
          "Alertas por accesos fuera de horario, volumen inusual o consultas sin relacion asistencial.",
          "Retencion corta y preservacion solo ante incidentes concretos.",
          "Preferir grabacion por evento y procesamiento local cuando sea posible."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "El fin de seguridad asistencial puede ser legitimo, pero no habilita vigilancia continua sin proporcionalidad, transparencia y control estricto de accesos."
      }
    ]
  },
  {
    id: "UA-07",
    topic: "IA",
    sourceGroup: "Casos agregados",
    title: "RRHH con evaluacion automatica de candidatos",
    source: "Casos adjuntos por usuario, Caso 2",
    status: "Revisado",
    summary: "Una plataforma externa analiza CV, entrevistas, voz y expresiones faciales para puntuar candidatos, con baja transparencia del modelo y del proveedor.",
    prompt: {
      context: [
        "Una empresa usa una plataforma externa para seleccionar personal. La herramienta analiza CV, entrevistas grabadas, tono de voz, expresiones faciales y respuestas tecnicas.",
        "El sistema asigna un puntaje automatico y recomienda si el candidato avanza. Los reclutadores suelen seguir la recomendacion sin revisar demasiado el criterio.",
        "La empresa carga datos personales, antecedentes laborales, pretensiones salariales, tests psicotecnicos y observaciones internas.",
        "El proveedor no explica claramente como funciona el modelo, si conserva videos para entrenar futuros sistemas ni si transfiere informacion a otros paises."
      ],
      questions: [
        "Identifique riesgos de seguridad, privacidad y uso indebido de datos.",
        "Explique por que la minimizacion de datos es importante.",
        "Proponga controles para reducir riesgos tecnicos, legales y eticos.",
        "Indique al menos 3 preguntas que la empresa deberia hacerle al proveedor antes de contratarlo.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Riesgos: exposicion de datos personales, tratamiento de datos sensibles o altamente invasivos, sesgos, decisiones opacas, uso para entrenamiento, transferencia internacional no controlada, retencion excesiva y dependencia ciega del puntaje.",
          "Minimizacion: la empresa debe recolectar solo datos vinculados al puesto; analizar rostro, tono o microgestos puede ser innecesario, invasivo y discriminatorio.",
          "Controles: cifrado, RBAC, MFA, logs, retencion limitada, no-training, explicabilidad minima, auditorias de sesgo, revision humana obligatoria y desactivacion de funciones invasivas.",
          "Controles legales/eticos: informacion clara al candidato, politica de IA en seleccion, criterios documentados, derecho a revision y contrato con seguridad, borrado, subprocesadores y auditoria.",
          "Preguntas al proveedor: si entrena con datos de candidatos, donde almacena/procesa, que variables usa, que auditorias de sesgo tiene, cuanto retiene, que subprocesadores intervienen y como elimina datos.",
          "CIA: confidencialidad por CV/videos/tests; integridad por puntajes erroneos o sesgados; disponibilidad si la plataforma cae y bloquea contrataciones."
        ]
      },
      {
        title: "Riesgos principales",
        bullets: [
          "Datos laborales, salariales, psicotecnicos y entrevistas pueden exponer informacion muy sensible.",
          "Analisis facial o de voz puede introducir sesgos por edad, genero, discapacidad, acento, aspecto fisico o forma de expresarse.",
          "El proveedor podria reutilizar videos o CV para fines no informados.",
          "La recomendacion automatica puede convertirse en decision de hecho si el humano no revisa.",
          "Las transferencias internacionales y subprocesadores amplian la superficie legal y tecnica."
        ]
      },
      {
        title: "Preguntas al proveedor",
        ordered: [
          "Usan CV, videos o entrevistas para entrenar modelos? Importa para evitar uso secundario no autorizado.",
          "Donde se almacenan y procesan los datos? Define jurisdiccion y transferencias internacionales.",
          "Que variables usa el sistema para puntuar? Permite detectar criterios invasivos o discriminatorios.",
          "Tienen auditorias de sesgo independientes? Sirve para evaluar justicia y calidad del modelo.",
          "Cuanto tiempo retienen datos y como los eliminan? Reduce exposicion futura.",
          "Que logs y reportes de auditoria entregan? Permite investigar accesos o decisiones cuestionadas."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "El riesgo no es solo una filtracion: tambien es descartar personas mediante un sistema opaco, posiblemente sesgado y alimentado con datos excesivos."
      }
    ]
  },
  {
    id: "UA-08",
    topic: "IoT",
    sourceGroup: "Casos agregados",
    title: "Sensores IoT industriales manipulados",
    source: "Casos adjuntos por usuario, Caso 3",
    status: "Revisado",
    summary: "Una fabrica deja sensores con credenciales por defecto y panel expuesto; los datos falsos ocultan fallas fisicas y terminan danando una linea.",
    prompt: {
      context: [
        "Una fabrica instala sensores IoT para controlar temperatura, humedad, vibracion y estado de maquinas criticas, enviando datos en tiempo real a una plataforma cloud.",
        "Muchos dispositivos quedan con credenciales por defecto. El panel de administracion es accesible desde Internet y permite modificar parametros de funcionamiento.",
        "Produccion decide detener equipos, hacer mantenimiento o continuar operando segun esos datos.",
        "Un dia, varios sensores muestran valores normales aunque las maquinas presentan fallas fisicas. Horas despues, una linea se detiene por dano mecanico."
      ],
      questions: [
        "Identifique las amenazas de seguridad presentes.",
        "Explique por que la manipulacion de sensores puede ser mas grave que la simple perdida de informacion.",
        "Proponga controles preventivos y detectivos para proteger dispositivos IoT y plataforma.",
        "Indique que registros serian utiles para investigar el incidente.",
        "Explique que parte de la triada CIA se ve afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: credenciales por defecto, panel expuesto a Internet, falta de MFA, toma de control de sensores, manipulacion de telemetria, sabotaje industrial, firmware vulnerable, falta de segmentacion y movimiento lateral.",
          "Manipular sensores puede ser peor que robar datos porque produce decisiones fisicas equivocadas: continuar una maquina que debe detenerse, omitir mantenimiento o generar dano y riesgo a personas.",
          "Preventivos: cambio de credenciales, credenciales unicas, MFA, panel no publico, VPN/ZTNA restringida, segmentacion OT/IoT/IT, certificados por dispositivo, firmware firmado, hardening, inventario y minimo privilegio.",
          "Detectivos: alertas por cambios de configuracion, telemetria congelada o incoherente, comparacion con sensores redundantes, IDS industrial, SIEM, reinicios inesperados y firmware modificado.",
          "Registros: accesos al panel, IP, usuario, horarios, comandos, configuracion anterior/nueva, firmware, lecturas historicas, alarmas silenciadas, reinicios y eventos de mantenimiento.",
          "CIA: integridad es la principal; disponibilidad por parada productiva; confidencialidad si se filtra informacion operativa."
        ]
      },
      {
        title: "Impacto operativo",
        paragraphs: [
          "En IoT industrial, el dato controla decisiones sobre procesos fisicos. Un valor falso puede crear una falsa sensacion de seguridad y provocar dano mecanico, produccion defectuosa o riesgo para operarios."
        ]
      },
      {
        title: "Controles detectivos a defender",
        matrix: [
          ["Cambios de configuracion", "Detecta modificacion de umbrales, reglas o parametros usados para ocultar fallas."],
          ["Anomalias de telemetria", "Detecta valores demasiado perfectos, congelados o incompatibles con el historial."],
          ["Sensores redundantes", "Compara mediciones esperadas entre dispositivos para descubrir discrepancias."],
          ["IDS industrial", "Detecta trafico anomalo entre sensores, maquinas y plataforma cloud."],
          ["Firmware/reinicios", "Detecta compromiso de dispositivo o mantenimiento no autorizado."]
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "En este caso el corazon no es confidencialidad sino integridad: datos falsos pueden romper maquinas y afectar seguridad fisica."
      }
    ]
  },
  {
    id: "UA-09",
    topic: "AppSec",
    sourceGroup: "Casos agregados",
    title: "Portal municipal con PDFs predecibles",
    source: "Casos adjuntos por usuario, Caso 4",
    status: "Revisado",
    summary: "Un municipio envia enlaces directos a documentos PDF sin login y con nombres secuenciales, permitiendo descargar certificados ajenos.",
    prompt: {
      context: [
        "Un municipio permite descargar certificados, multas, habilitaciones y constancias de pago.",
        "Cada documento queda como PDF en una carpeta cloud y se envia un enlace directo sin login, con estructura predecible como /documentos/certificado_2026_000348.pdf.",
        "Un vecino cambia el numero final y descarga certificados de otras personas y comercios con DNI, domicilio, CUIT, datos impositivos, deudas y observaciones.",
        "El municipio no tiene alertas por descargas masivas ni sabe cuantas personas accedieron a documentos ajenos."
      ],
      questions: [
        "Explique que vulnerabilidades aparecen.",
        "Identifique riesgos para ciudadanos y municipio.",
        "Proponga al menos 4 controles para evitar accesos indebidos.",
        "Indique que evidencias deberia conservar el sistema.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Vulnerabilidades: falta de autenticacion, falta de autorizacion por documento, enlaces publicos permanentes, nombres predecibles, IDOR/BOLA, almacenamiento cloud posiblemente publico, falta de rate limiting y monitoreo.",
          "Riesgos ciudadanos: exposicion de DNI, domicilio, CUIT, deudas y datos impositivos; robo de identidad, fraude, extorsion y estafas dirigidas.",
          "Riesgos municipio: dano reputacional, reclamos, sanciones, obligacion de investigar/notificar, perdida de confianza e interrupcion del portal.",
          "Controles: login obligatorio, autorizacion server-side por objeto, enlaces firmados temporales, almacenamiento privado, IDs no predecibles, rate limiting, alertas, minimizacion de PDFs y pruebas de IDOR.",
          "Evidencias: usuario, documento, titular, hora, IP, user-agent, resultado, token, descargas por usuario, intentos secuenciales y cambios de permisos cloud.",
          "CIA: confidencialidad es la principal; integridad si se modifican documentos; disponibilidad ante abuso masivo o cierre preventivo."
        ]
      },
      {
        title: "Control que no debe faltar",
        paragraphs: [
          "El punto central es la autorizacion por objeto. El servidor debe verificar que el usuario autenticado tenga permiso sobre ese PDF antes de entregarlo. Hacer el nombre menos predecible ayuda, pero no reemplaza la validacion de permisos."
        ]
      },
      {
        title: "Controles concretos",
        bullets: [
          "Descarga siempre mediada por la aplicacion, no por carpeta publica.",
          "Autorizacion del lado servidor contra titularidad, rol o expediente.",
          "Links firmados, temporales y de un solo uso cuando aplique.",
          "Rate limiting y alertas por secuencias numericas o descargas masivas.",
          "Logs de accesos permitidos y denegados para estimar alcance.",
          "Revisiones de configuracion cloud y pruebas de seguridad recurrentes."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "UUIDs o nombres aleatorios reducen enumeracion, pero la defensa real es verificar permisos antes de entregar cada documento."
      }
    ]
  },
  {
    id: "UA-10",
    topic: "IA",
    sourceGroup: "Casos agregados",
    title: "Asistente interno con permisos corporativos amplios",
    source: "Casos adjuntos por usuario, Caso 5",
    status: "Revisado",
    summary: "Un asistente de IA conectado a CRM, tickets, carpetas y reportes usa una cuenta tecnica global y revela datos que usuarios no deberian ver.",
    prompt: {
      context: [
        "Una empresa incorpora un asistente interno de IA para consultar ventas, contratos, clientes y reclamos.",
        "El asistente se conecta al CRM, tickets, carpetas compartidas y reportes financieros. Para simplificar, usa una cuenta tecnica con permisos amplios.",
        "Los empleados no acceden directamente a todas las fuentes, pero pueden preguntar al asistente. Un vendedor obtiene clientes de otras regiones, reclamos confidenciales y datos financieros.",
        "La empresa no registra claramente que documentos recupero el asistente ni que datos incluyo en cada respuesta."
      ],
      questions: [
        "Identifique las principales amenazas de seguridad y privacidad.",
        "Explique por que una cuenta tecnica amplia puede generar accesos indebidos.",
        "Proponga controles tecnicos para que el asistente respete permisos reales.",
        "Indique controles organizacionales de acompaniamiento.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: permisos excesivos, acceso indirecto a datos restringidos, fuga de datos de clientes/finanzas/reclamos, prompt injection, mezcla de contexto, errores del modelo y falta de trazabilidad.",
          "La cuenta tecnica rompe autorizacion: el asistente recupera documentos con permisos globales y los muestra a usuarios que no podrian acceder por vias normales.",
          "Controles tecnicos: autorizacion delegada por usuario, respeto de ACLs, RBAC/ABAC, minimo privilegio, filtros previos por fuente, DLP, logging de prompts/fuentes/respuestas, citas internas, separacion lectura/acciones y proteccion contra prompt injection.",
          "Controles organizacionales: politica de uso de IA, clasificacion de informacion, aprobacion de fuentes conectadas, duenos de datos, revision periodica de permisos, capacitacion, auditorias y plan de incidentes.",
          "CIA: confidencialidad es la principal; integridad por respuestas incorrectas o acciones indebidas; disponibilidad si se depende del asistente y falla."
        ]
      },
      {
        title: "Patron de falla",
        paragraphs: [
          "El asistente se convierte en una nueva capa de acceso. Aunque CRM, tickets y carpetas esten bien configurados, una cuenta global puede saltarse esos permisos y entregar informacion por una via indirecta."
        ]
      },
      {
        title: "Controles que deberian aparecer",
        bullets: [
          "Usar identidad del usuario real para consultar cada fuente.",
          "Excluir documentos que el usuario no puede ver antes de enviarlos al modelo.",
          "Registrar prompt, usuario, fuentes consultadas, fragmentos usados y respuesta.",
          "DLP para bloquear datos sensibles en prompts o salidas no autorizadas.",
          "Aprobacion adicional para acciones sensibles y separacion de lectura/escritura.",
          "Pruebas abusivas: pedir datos de otra region, finanzas o clientes restringidos."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "No tratarlo como un buscador comun: si conecta sistemas internos, debe respetar el modelo de permisos de cada usuario."
      }
    ]
  },
  {
    id: "UA-11",
    topic: "Privacidad",
    sourceGroup: "Casos agregados",
    title: "Turnos medicos con kioscos de autogestion",
    source: "Respuesta adjunta por usuario, Caso 6; consigna reconstruida",
    status: "Revisado",
    summary: "Kioscos fisicos para turnos medicos agregan riesgo de sesiones abiertas, exposicion visual, comprobantes abandonados y manipulacion del equipo.",
    prompt: {
      context: [
        "Una institucion de salud instala kioscos de autogestion en la recepcion para que pacientes consulten, confirmen, cancelen o modifiquen turnos.",
        "Para identificarse, el paciente ingresa DNI y fecha de nacimiento. La pantalla muestra nombre, obra social, especialidad, profesional, sede y horarios disponibles. El kiosco tambien puede imprimir comprobantes.",
        "Los equipos estan en un hall publico. Algunos pacientes abandonan la sesion abierta, quedan comprobantes en la bandeja y otras personas pueden mirar la pantalla desde la fila.",
        "El proveedor de mantenimiento tiene acceso fisico periodico a los kioscos. No esta claro si el equipo guarda datos localmente, si hay modo kiosco bloqueado ni que logs registra."
      ],
      questions: [
        "Identifique amenazas de seguridad y privacidad propias de este escenario fisico.",
        "Explique por que el kiosco no debe analizarse igual que una web privada usada desde el hogar.",
        "Proponga controles tecnicos y organizacionales para reducir el riesgo.",
        "Indique que evidencias deberia conservar el sistema para investigar accesos o cambios indebidos.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Lectura del caso",
        paragraphs: [
          "El activo no es solo el turno. Tambien son los datos de salud inferidos por la especialidad, la identidad del paciente, el comprobante impreso y la confianza en que nadie puede modificar turnos ajenos desde un equipo publico.",
          "La diferencia central frente a un portal web comun es el entorno fisico: pantalla visible, sesiones abandonadas, impresiones olvidadas, puertos accesibles y mantenimiento por terceros."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: shoulder surfing, sesiones abiertas, comprobantes abandonados, acceso a turnos de terceros, modificacion no autorizada, manipulacion fisica del equipo, malware por puertos expuestos y soporte/proveedor sin trazabilidad.",
          "Privacidad: especialidad, profesional, obra social, sede y horario pueden revelar datos de salud o rutinas aunque el sistema no muestre diagnosticos.",
          "Controles tecnicos: cierre automatico, boton visible de logout, pantalla de privacidad, enmascaramiento de datos, autenticacion proporcional, modo kiosco, bloqueo de USB, no guardar datos localmente, cifrado, hardening y logs por accion.",
          "Controles organizacionales: ubicacion que reduzca exposicion visual, retiro de comprobantes, carteleria clara, mantenimiento autorizado, contrato con proveedor, politica de datos impresos y revisiones periodicas.",
          "Evidencias: usuario/paciente autenticado, kiosco, accion realizada, turno afectado, hora, resultado, cambios before/after, errores de autenticacion y usuario tecnico si hubo mantenimiento.",
          "CIA: confidencialidad es principal; integridad si cambian turnos; disponibilidad si el kiosco queda inutilizado o impide operar recepcion."
        ]
      },
      {
        title: "Amenazas concretas",
        bullets: [
          "Un tercero usa una sesion abandonada para ver o cancelar turnos.",
          "Alguien observa DNI, especialidad o profesional desde la fila.",
          "Un comprobante impreso queda en la bandeja y revela datos personales o de salud inferidos.",
          "Una persona manipula teclado, puertos, navegador o sistema operativo si no existe modo kiosco.",
          "Un tecnico de soporte accede sin cuenta nominal ni registro detallado.",
          "El equipo almacena cache, documentos o logs locales sin cifrado."
        ]
      },
      {
        title: "Controles tecnicos",
        bullets: [
          "Timeout corto por inactividad y cierre de sesion al finalizar cualquier operacion.",
          "Minimizar pantalla e impresion: mostrar solo lo necesario y ocultar DNI, telefono o detalles sensibles.",
          "Modo kiosco bloqueado, allowlisting de aplicaciones, USB deshabilitado y disco cifrado.",
          "No guardar documentos, capturas ni datos de pacientes localmente salvo necesidad justificada.",
          "Autenticacion proporcional: no usar solo DNI si la accion permite modificar o cancelar turnos sensibles.",
          "Registro de lectura, modificacion, cancelacion, impresion y errores de autenticacion."
        ]
      },
      {
        title: "Controles organizacionales",
        bullets: [
          "Ubicar kioscos para evitar que la fila vea la pantalla; usar filtros de privacidad si hace falta.",
          "Definir que datos pueden mostrarse e imprimirse y cuanto detalle debe contener el comprobante.",
          "Retirar comprobantes abandonados y capacitar a recepcion para detectar sesiones abiertas.",
          "Autorizar mantenimiento con ticket, cuenta nominal y ventana horaria.",
          "Evaluar al proveedor: acceso fisico, hardening, actualizaciones, borrado seguro y notificacion de incidentes."
        ]
      },
      {
        title: "CIA y NIST",
        bullets: [
          "Confidencialidad: datos personales, obra social, especialidad y turnos quedan visibles o impresos.",
          "Integridad: un tercero podria modificar o cancelar turnos de otra persona.",
          "Disponibilidad: un kiosco bloqueado o manipulado puede afectar recepcion y atencion.",
          "NIST: Identify por inventario y datos mostrados; Protect por hardening y minimizacion; Detect por logs; Respond por bloqueo/revision; Recover por restaurar imagen limpia."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "No alcanza con decir 'poner login'. En un kiosco publico, privacidad visual, sesion, impresion y seguridad fisica son parte del riesgo."
      }
    ]
  },
  {
    id: "UA-12",
    topic: "Privacidad",
    sourceGroup: "Casos agregados",
    title: "Delivery farmaceutico con geolocalizacion",
    source: "Respuesta adjunta por usuario, Caso 7; consigna reconstruida",
    status: "Revisado",
    summary: "Una app de farmacia puede revelar medicamentos, ubicacion, rutinas y datos de salud inferidos a soporte, repartidores o terceros.",
    prompt: {
      context: [
        "Una cadena de farmacias lanza una app de delivery. Los usuarios cargan recetas, compran medicamentos, pagan desde la app y comparten direccion y geolocalizacion para coordinar la entrega.",
        "Farmacia, soporte, repartidores y un operador logistico externo acceden a distintas pantallas del pedido. En la practica, algunos perfiles pueden ver historial de compras, telefono, direccion exacta y detalle del producto.",
        "Las notificaciones muestran el nombre del medicamento en la pantalla bloqueada. La empresa tambien analiza historiales para promociones y no definio claramente cuanto tiempo conserva ubicaciones y recetas.",
        "Un error de entrega envia un pedido a otro domicilio y soporte consulta historiales completos para resolver reclamos."
      ],
      questions: [
        "Identifique amenazas de seguridad y privacidad.",
        "Explique por que los medicamentos, recetas y ubicacion pueden ser datos sensibles aunque no haya un diagnostico explicito.",
        "Proponga controles tecnicos y organizacionales, diferenciando que necesita ver farmacia, soporte y repartidor.",
        "Indique que evidencias y alertas deberia conservar la plataforma.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Lectura del caso",
        paragraphs: [
          "El dato sensible aparece por inferencia. Una compra puede revelar embarazo, anticoncepcion, salud mental, enfermedades cronicas, infecciones, tratamientos oncologicos o rutinas de una persona.",
          "El repartidor necesita entregar el paquete, no conocer el historial farmaceutico. Soporte necesita resolver un reclamo, no navegar compras antiguas sin justificacion."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: exposicion de medicamentos, recetas, direccion y ubicacion; inferencia de enfermedades; accesos indebidos de soporte/repartidores; notificaciones indiscretas; retencion excesiva; uso comercial secundario y entrega a persona equivocada.",
          "Sensibilidad: no hace falta guardar diagnostico para tratar datos de salud; producto, receta, farmacia, domicilio y frecuencia de compra pueden revelar informacion intima.",
          "Minimizacion por rol: farmacia ve receta y producto; repartidor ve direccion, contacto minimo y confirmacion; soporte ve solo lo necesario para el ticket; marketing no debe usar datos sensibles sin base valida.",
          "Controles tecnicos: RBAC/ABAC, MFA para perfiles internos, cifrado, logs de lectura, notificaciones discretas, token de entrega, retencion limitada, DLP y alertas por consultas masivas o fuera de rol.",
          "Controles organizacionales: politica de privacidad clara, capacitacion, contrato con logistica, prohibicion de usos secundarios no informados, procedimiento de entrega incorrecta y auditorias.",
          "CIA: confidencialidad es principal; integridad si se altera receta, pedido o direccion; disponibilidad si la app cae y retrasa medicamentos criticos."
        ]
      },
      {
        title: "Riesgos por actor",
        matrix: [
          ["Farmacia", "Debe validar receta y preparar pedido, pero no usar historiales completos para fines no vinculados sin justificacion."],
          ["Repartidor", "Necesita direccion y contacto operativo; no necesita diagnostico, receta completa ni historial del cliente."],
          ["Soporte", "Debe acceder por ticket y con motivo; historiales completos sin justificacion elevan riesgo de curiosidad o abuso interno."],
          ["Operador logistico", "Amplia la cadena de riesgo: contrato, subprocesadores, retencion, acceso nominal y notificacion de incidentes son claves."],
          ["Marketing", "El uso promocional de compras de medicamentos puede ser especialmente riesgoso por inferencias de salud."]
        ]
      },
      {
        title: "Controles tecnicos",
        bullets: [
          "Separar datos de salud, pago, identidad, ubicacion y logistica con permisos distintos.",
          "Enmascarar producto en notificaciones y etiquetas externas salvo necesidad operativa.",
          "Token, PIN o QR de entrega para reducir errores de destinatario.",
          "Logs de lectura de receta, historial, direccion y cambios de estado del pedido.",
          "Alertas por consulta masiva, acceso fuera de horario, soporte sin ticket o repartidor mirando pedidos no asignados.",
          "Retencion limitada de ubicacion en tiempo real, recetas y comprobantes."
        ]
      },
      {
        title: "Respuesta ante entrega incorrecta",
        ordered: [
          "Contener: bloquear acceso al pedido y contactar al destinatario incorrecto sin divulgar mas informacion.",
          "Preservar evidencia: pedido, usuario, repartidor, geolocalizacion, validacion de entrega y logs de soporte.",
          "Evaluar alcance: que datos vio el tercero y si hubo receta, medicamento o domicilio expuesto.",
          "Corregir causa: validacion de identidad, flujo de entrega, capacitacion y alertas.",
          "Notificar si corresponde segun sensibilidad y alcance."
        ]
      },
      {
        title: "CIA",
        bullets: [
          "Confidencialidad: medicamentos, recetas, ubicacion y domicilio revelan informacion de salud y rutina.",
          "Integridad: pedido, receta, direccion o estado de entrega incorrectos pueden afectar tratamiento.",
          "Disponibilidad: una caida puede demorar medicacion urgente o continuidad de tratamiento."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "No alcanza decir 'no guardamos diagnosticos'. En farmacia, el producto comprado puede ser el dato sensible."
      }
    ]
  },
  {
    id: "UA-13",
    topic: "Privacidad",
    sourceGroup: "Casos agregados",
    title: "Colegio con plataforma de conducta",
    source: "Respuesta adjunta por usuario, Caso 8; consigna reconstruida",
    status: "Revisado",
    summary: "Una plataforma escolar registra conducta de menores; errores, comentarios excesivos o accesos indebidos pueden afectar reputacion y trayectoria educativa.",
    prompt: {
      context: [
        "Un colegio implementa una plataforma para registrar observaciones de conducta, convivencia, sanciones, desempeno, informes de orientacion y comunicacion con familias.",
        "Docentes cargan comentarios libres. Directivos y preceptores pueden ver varios cursos; las familias acceden al perfil de sus hijos. Algunos registros quedan visibles por anos y pueden exportarse en PDF.",
        "Durante una revision, una familia ve por error una observacion de otro alumno. Tambien aparecen comentarios subjetivos o excesivos, como conflictos familiares o sospechas no verificadas.",
        "No hay una politica clara sobre que se puede escribir, cuanto tiempo se conserva ni como corregir registros equivocados."
      ],
      questions: [
        "Identifique amenazas de seguridad, privacidad e integridad de datos.",
        "Explique por que los datos sobre menores requieren proteccion reforzada.",
        "Proponga controles tecnicos y organizacionales.",
        "Indique que evidencias deberia registrar la plataforma para investigar accesos o cambios.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Lectura del caso",
        paragraphs: [
          "El problema no es solo que alguien pueda ver datos ajenos. Tambien importa que se registran datos sobre menores, con lenguaje subjetivo, posible permanencia larga y efectos reales sobre trato escolar, reputacion y trayectoria educativa.",
          "La integridad pesa tanto como la confidencialidad: un comentario falso, exagerado o fuera de contexto puede causar dano aunque nunca se filtre fuera del colegio."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: padres viendo datos de otros alumnos, docentes accediendo fuera de curso, comentarios excesivos o discriminatorios, registros falsos/no corregidos, exportaciones sin control, retencion indefinida y falta de trazabilidad.",
          "Menores: requieren proteccion reforzada porque tienen menor control sobre sus datos y los registros pueden afectar reputacion, vinculos, decisiones institucionales y trayectoria futura.",
          "Controles tecnicos: RBAC por curso/division/rol, MFA para perfiles administrativos, autorizacion por alumno, logs de lectura/edicion/exportacion, historial de cambios, cifrado, alertas y retencion limitada.",
          "Controles organizacionales: guia de redaccion, prohibicion de datos excesivos, proceso de correccion, informacion a familias, responsables por dato, revision periodica y capacitacion docente.",
          "Evidencias: quien vio o edito cada registro, alumno afectado, curso, cambio before/after, motivo, exportaciones, accesos denegados y alertas por consultas masivas.",
          "CIA: confidencialidad por datos de menores; integridad por registros incorrectos o injustos; disponibilidad si el sistema impide seguimiento o comunicaciones urgentes."
        ]
      },
      {
        title: "Problemas concretos",
        bullets: [
          "BOLA/IDOR si una familia cambia un parametro y accede a otro alumno.",
          "Permisos demasiado amplios si un docente ve cursos que no dicta.",
          "Comentarios libres sin guia que registran opiniones, sospechas o datos familiares innecesarios.",
          "Retencion excesiva que arrastra episodios viejos fuera de contexto.",
          "Exportaciones PDF o capturas que salen del control de la plataforma.",
          "Falta de mecanismo claro para corregir datos falsos o incompletos."
        ]
      },
      {
        title: "Controles tecnicos",
        bullets: [
          "Autorizacion server-side por alumno, curso y rol en cada lectura, edicion y exportacion.",
          "Separar observaciones comunes de registros sensibles de orientacion o convivencia.",
          "Historial de cambios con valor anterior, valor nuevo, usuario, fecha y motivo.",
          "Bloqueo o aprobacion adicional para exportaciones masivas.",
          "Alertas por docente consultando muchos alumnos fuera de su curso o familia con accesos denegados repetidos.",
          "Retencion y archivado por ciclo escolar con reglas claras de acceso posterior."
        ]
      },
      {
        title: "Controles organizacionales",
        bullets: [
          "Politica sobre que se puede registrar, con lenguaje factual y proporcional.",
          "Capacitacion a docentes y directivos sobre privacidad de menores.",
          "Circuito de correccion o impugnacion de registros equivocados.",
          "Informacion clara a familias sobre finalidad, accesos, retencion y derechos.",
          "Auditoria periodica de permisos y muestreo de observaciones sensibles."
        ]
      },
      {
        title: "CIA y punto de privacidad",
        bullets: [
          "Confidencialidad: se exponen conducta, desempeno, convivencia y datos familiares de menores.",
          "Integridad: un registro falso o desproporcionado puede afectar decisiones escolares.",
          "Disponibilidad: si la plataforma falla, puede bloquear comunicaciones o seguimiento de situaciones criticas.",
          "La calidad del dato es parte del riesgo: no todo dano nace de una filtracion."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "Con menores, privacidad e integridad se cruzan: un dato incorrecto o injusto puede producir dano aunque nunca se filtre."
      }
    ]
  },
  {
    id: "UA-14",
    topic: "IA",
    sourceGroup: "Casos agregados",
    title: "Chatbot publico conectado a conocimiento interno",
    source: "Respuesta adjunta por usuario, Caso 9; consigna reconstruida",
    status: "Revisado",
    summary: "Un chatbot publico conectado a bases internas puede filtrar documentos, contratos o datos de clientes mediante consultas o prompt injection.",
    prompt: {
      context: [
        "Una empresa publica un chatbot de atencion al cliente en su sitio web. Para responder mejor, lo conecta a una base de conocimiento que tambien usan empleados internos.",
        "El indice incluye manuales publicos, politicas internas, listas de precios especiales, contratos, tickets historicos y documentos con datos de clientes. No todo fue clasificado antes de indexarse.",
        "Usuarios externos descubren que el bot responde sobre documentos internos si formulan preguntas insistentes. Otros prueban prompt injection para pedirle que ignore reglas y muestre fuentes completas.",
        "La empresa no registra claramente que documentos recupero el sistema ni que fragmentos se usaron en cada respuesta."
      ],
      questions: [
        "Identifique amenazas de seguridad, privacidad e IA.",
        "Explique por que conectar una base interna a un chatbot publico cambia la superficie de ataque.",
        "Proponga controles tecnicos para que el bot solo use informacion aprobada para publico.",
        "Indique controles organizacionales y evidencias necesarias para investigar una filtracion.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Ataque concreto",
        ordered: [
          "El chatbot recibe una consulta publica.",
          "El retrieval busca en un indice mezclado con documentos internos y publicos.",
          "El modelo recibe fragmentos que el usuario externo no deberia ver.",
          "Una pregunta insistente o prompt injection intenta forzar salida de fuentes, contratos, precios o tickets.",
          "Como no hay logging de fuentes y fragmentos, despues es dificil saber que se filtro."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: documentos internos indexados por error, datos de clientes en tickets, contratos/precios expuestos, prompt injection, extraccion iterativa, respuestas inventadas, retencion de chats y falta de trazabilidad de fuentes.",
          "Cambio de superficie: el bot publico convierte un repositorio interno en una interfaz externa; si el indice no esta filtrado, preguntar equivale a intentar leer documentos.",
          "Controles tecnicos: indice publico separado, clasificacion previa, allowlist de fuentes, DLP, filtros de autorizacion antes del retrieval, redaccion, limites de respuesta, pruebas adversariales y logging de fuentes/fragmentos.",
          "Controles organizacionales: responsable por documento, flujo de aprobacion para publicar, revision legal/seguridad, proceso de baja urgente del indice, capacitacion y auditorias recurrentes.",
          "Evidencias: prompt, usuario/sesion, documentos candidatos, fragmentos enviados al modelo, respuesta, filtros aplicados, bloqueos y version del indice.",
          "CIA: confidencialidad es principal; integridad por respuestas manipuladas o falsas; disponibilidad si hay que apagar el bot o si queda inutilizable por abuso."
        ]
      },
      {
        title: "Por que no es solo un buscador",
        paragraphs: [
          "Un buscador interno normalmente exige identidad y permisos. Un chatbot publico conectado al mismo indice puede saltear esa barrera si recupera documentos con una cuenta tecnica o con permisos globales.",
          "La autorizacion debe aplicarse antes de enviar contexto al modelo. Filtrar despues de generar la respuesta es tarde, porque el dato sensible ya entro al prompt."
        ]
      },
      {
        title: "Amenazas de IA",
        bullets: [
          "Prompt injection que intenta revelar instrucciones, fuentes completas o datos no aprobados.",
          "Data exfiltration por preguntas iterativas, pidiendo pequenos fragmentos en muchas consultas.",
          "Cross-context leakage si sesiones, caches o memorias se mezclan.",
          "Hallucination: respuesta falsa que parece oficial y afecta decisiones de clientes.",
          "Retencion de conversaciones con datos personales cargados por usuarios externos."
        ]
      },
      {
        title: "Controles tecnicos",
        bullets: [
          "Separar fisicamente/logicamente el indice publico del interno.",
          "Clasificar documentos antes de indexar y excluir tickets, contratos y datos de clientes.",
          "Usar retrieval con filtros de autorizacion y allowlist de colecciones publicas.",
          "DLP y redaccion antes de indexar y antes de responder.",
          "Rate limiting y deteccion de consultas de extraccion.",
          "Pruebas de prompt injection y pruebas de regresion con preguntas prohibidas."
        ]
      },
      {
        title: "CIA y respuesta",
        bullets: [
          "Confidencialidad: contratos, tickets, precios y datos de clientes pueden salir por respuestas.",
          "Integridad: el bot puede responder informacion falsa o manipulada por prompt injection.",
          "Disponibilidad: un incidente puede obligar a desactivar el canal publico.",
          "Respuesta: despublicar indice, preservar logs, identificar documentos expuestos, rotar claves si aparecieron secretos y revisar aprobacion de fuentes."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "No alcanza con poner instrucciones al modelo. Si el retrieval le entrega documentos internos, el bot ya tiene material para filtrar."
      }
    ]
  },
  {
    id: "UA-15",
    topic: "IAM",
    sourceGroup: "Casos agregados",
    title: "Control de acceso fisico con reconocimiento facial",
    source: "Respuesta adjunta por usuario, Caso 10; consigna reconstruida",
    status: "Revisado",
    summary: "Un sistema de ingreso con reconocimiento facial usa biometria dificil de cambiar, con riesgos de filtracion, sesgo, falsos positivos y vigilancia laboral.",
    prompt: {
      context: [
        "Una organizacion reemplaza tarjetas de ingreso por reconocimiento facial para empleados, contratistas y visitantes frecuentes.",
        "El proveedor captura imagenes, genera plantillas biometricas y almacena registros de ingreso/egreso. Parte del procesamiento se realiza en la nube del proveedor.",
        "El sistema permite entrada automatica a oficinas y sectores restringidos. Algunos empleados son rechazados por falsos negativos y seguridad habilita una excepcion manual.",
        "No hay una alternativa no biometrica clara, no se explico cuanto tiempo se conservan plantillas ni si el proveedor puede usar imagenes para mejorar su algoritmo."
      ],
      questions: [
        "Identifique amenazas de seguridad, privacidad e IAM.",
        "Explique por que la biometria es especialmente delicada frente a una contrasena o tarjeta.",
        "Proponga controles tecnicos y organizacionales.",
        "Indique que evidencias deberia conservar el sistema y que eventos deberian alertar.",
        "Explique que parte de la triada CIA podria verse afectada."
      ]
    },
    sections: [
      {
        title: "Lectura del caso",
        paragraphs: [
          "El reconocimiento facial combina autenticacion, control fisico y privacidad. No es solo una mejora de comodidad: convierte el rostro y los movimientos de entrada/salida en datos persistentes.",
          "La decision debe justificarse por proporcionalidad. Si tarjetas, credenciales, PIN o MFA fisico alcanzan para el riesgo, la biometria puede ser excesiva."
        ]
      },
      {
        title: "Respuesta por consigna",
        ordered: [
          "Amenazas: filtracion de plantillas biometricas, uso secundario de rostros, suplantacion con foto/video, falsos positivos, falsos negativos, sesgos, vigilancia laboral excesiva, dependencia del proveedor y excepciones manuales sin control.",
          "Biometria: es delicada porque no se rota como una contrasena; si se filtra una plantilla facial, el impacto puede persistir y afectar otros sistemas que usen rostro.",
          "Controles tecnicos: plantillas protegidas, cifrado, procesamiento local cuando sea posible, deteccion de vida, pruebas anti-suplantacion, segmentacion, MFA o factor adicional en zonas criticas, logs, retencion limitada y borrado al egreso.",
          "Controles organizacionales: finalidad precisa, evaluacion de proporcionalidad, alternativa no biometrica, informacion clara, contrato con no-training/no-uso secundario, auditoria de sesgos y procedimiento de reclamo.",
          "Evidencias y alertas: intentos fallidos, ingresos fuera de horario, excepciones manuales, cambios de plantilla, altas/bajas, accesos a sectores criticos y actividad del proveedor.",
          "CIA: confidencialidad por plantillas y movimientos; integridad por decisiones incorrectas de acceso; disponibilidad si falsos negativos bloquean ingresos legitimos."
        ]
      },
      {
        title: "Amenazas concretas",
        bullets: [
          "Robo de plantillas biometricas en proveedor o sistema interno.",
          "Suplantacion con foto, video o mascara si no hay prueba de vida.",
          "Falso positivo que permite ingresar a una persona no autorizada.",
          "Falso negativo que bloquea a un empleado legitimo y fuerza excepciones.",
          "Uso de registros de ingreso/egreso para vigilancia laboral fuera de la finalidad declarada.",
          "Proveedor reutiliza imagenes para entrenamiento o mejora del servicio sin permiso claro."
        ]
      },
      {
        title: "Controles tecnicos",
        bullets: [
          "Almacenar plantillas, no imagenes crudas, salvo necesidad justificada.",
          "Cifrado en reposo/transito y gestion separada de claves.",
          "Procesamiento local o edge cuando reduzca exposicion al proveedor.",
          "Deteccion de vida y pruebas anti-suplantacion antes de habilitar ingreso automatico.",
          "Factor adicional para areas criticas: tarjeta, PIN o aprobacion de seguridad.",
          "Borrado de plantillas al egreso y revision periodica de identidades activas."
        ]
      },
      {
        title: "Controles organizacionales",
        bullets: [
          "Evaluar si la biometria es proporcional frente a alternativas menos invasivas.",
          "Informar finalidad, datos capturados, retencion, proveedor, derechos y canal de reclamo.",
          "Ofrecer alternativa no biometrica para casos justificados.",
          "Contrato con proveedor: no-training, no uso secundario, subprocesadores, auditoria, borrado y notificacion de incidentes.",
          "Medir falsos positivos/negativos por grupos para detectar sesgos.",
          "Definir reglas para excepciones manuales y revisarlas."
        ]
      },
      {
        title: "CIA y accountability",
        bullets: [
          "Confidencialidad: rostro, plantilla biometrica y patrones de movimiento son datos sensibles.",
          "Integridad: una decision de match incorrecta puede permitir o negar acceso indebidamente.",
          "Disponibilidad: una falla del proveedor o del modelo puede bloquear ingresos a sectores de trabajo.",
          "Accountability: cada excepcion manual debe quedar asociada a una persona de seguridad, motivo y aprobacion."
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Punto fino",
        text: "Una contrasena se rota; una cara no. Ese es el argumento fuerte para tratar la biometria con controles reforzados."
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
  const queryTerms = normalize(state.query.trim()).split(/\s+/).filter(Boolean);
  return cases.filter((item) => {
    const byTopic = state.activeTopic === "Todos" || item.topic === state.activeTopic;
    if (!byTopic) return false;
    if (queryTerms.length === 0) return true;
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
    return queryTerms.every((term) => haystack.includes(term));
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
    <section class="source-panel" aria-label="${escapeHtml(item.sourceLabel || "Consigna original")}">
      <div class="source-head">
        <div>
          <p class="eyebrow">${escapeHtml(item.sourceLabel || "Consigna original")}</p>
          <h3>${escapeHtml(item.sourceTitle || "Texto del caso")}</h3>
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
