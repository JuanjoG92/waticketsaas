const messages = {
  pt: {
    translations: {
      signup: {
        title: "Registrarse",
        toasts: {
          success: "¡Usuario creado exitosamente! ¡¡¡Acceso!!!.",
          fail: "Error al crear el usuario. Verifique la información proporcionada.",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrarse",
          login: "¿Ya tienes una cuenta? ¡Entre!",
        },
      },
      login: {
        title: "Login",
        form: {
          email: "Email",
          password: "Contraseña",
        },
        buttons: {
          submit: "Entrar",
          register: "Registre-se, agora mesmo!",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuários",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Agendamientos",
          enabled: "Habilitadas",
          disabled: "Desabilitadas",
          clear: "Cancelar",
          delete: "Excluir",
          save: "Guardar",
          yes: "Si",
          no: "No",
          money: "$",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "¡Empresa creada exitosamente!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión exitoso!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Citas hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡Conexión de WhatsApp eliminada exitosamente!",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Estás seguro? Deberás escanear el código QR nuevamente.",
        },
        buttons: {
          add: "Adicionar WhatsApp",
          disconnect: "desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "QR CODE",
          newQr: "Nuevo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet e inténtelo nuevamente, o solicite un nuevo código QR. Code",
          },
            qrcode: {
                title: "Esperando leitura do QR Code",
                content:
                    "Clique no botão 'QR CODE' e leia o QR Code com o seu celular para iniciar a sessão",
            },
            connected: {
                title: "Conexão estabelecida!",
            },
            timeout: {
                title: "A conexão com o celular foi perdida",
                content:
                    "Certifique-se de que seu celular esteja conectado à internet e o WhatsApp esteja aberto, ou clique no botão 'Desconectar' para obter um novo QR Code",
          },
        },
        table: {
          name: "Nombre",
		  number: "Número",
          status: "Status",
          lastUpdate: "Última atualización",
          default: "Predeterminado",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Adicionar WhatsApp",
          edit: "Editar WhatsApp",
        },		
		 tabs: {
          general: "General",
          messages: "Mensajes",
          assessments: "Reseñas",
          integrations: "Integraciones",
          schedules: "Horario de oficina",
		 },
        form: {
          name: "Nombre",
          default: "Predeterminado",
          sendIdQueue: "Cola",
          timeSendQueue: "Redirecionar para la cola en X minutos",
          queueRedirection: "Redirecionamento de Cola",
		  outOfHoursMessage: "Mensaje fuera del horario laboral",
          queueRedirectionDesc: "Seleccione una cola para los contactos que no tienen una cola a la que ser redirigidos",
          prompt: "Prompt",
          //maxUseBotQueues: "Enviar bot x veces",
          //timeUseBotQueues: "Intervalo em minutos entre envio de bot",
          expiresTicket: "Cerrar chats abiertos después de x minutos",
          expiresInactiveMessage: "Mensaje de apagado por inactividad",
		  greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de finalización",
		  sendIdQueue: "Cola",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp guardado con éxito.",
      },
      qrCode: {
        message: "Escanee el código QR para iniciar la sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "Contacto eliminado exitosamente!",
		  deletedAll: "¡Todos los contactos eliminados exitosamente!",
        },
		  searchPlaceholder: "Para buscar...",
          confirmationModal: {
          deleteTitle: "Borrar ",
          deleteAllTitle: "Borrar Todos",
          importTitle: "Importar contactos",
          deleteMessage: "¿Estás seguro de que deseas eliminar este contacto? Se perderán todos los tickets relacionados.",
          deleteAllMessage: "¿Estás seguro de que deseas eliminar todos los contactos? Se perderán todos los tickets relacionados.",
          importMessage: "¿Quieres importar todos los contactos de tu teléfono?",
        },
		confirmationModal:{
			importTitlte: "Importar contatos",
			importMessage: "Esta acción importará los contactos guardados en la libreta de direcciones de WhatsApp. Algunos modelos pueden no permitir esta funcionalidad o no estar de acuerdo con su configuración de privacidad. ¡Verifique el resultado en 1 hora!",
			deleteTitle:"Borrar",
			deleteMessage:"¿Estás seguro de que deseas eliminar este contacto? Se perderán todas las citas relacionadas..",
		},
        buttons: {
          import: "Importar Contatos",
		  importSheet: "Import. Excel",
          add: "Adicionar Contato",
          export: "Exportar Contatos",
          delete: "Excluir Todos Contatos"
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Acción",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Adicionar proyecto",
          edit: "Editar proyecto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre de proyecto",
          language: "Idioma",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para que expire una conversación",
          typebotKeywordFinish: "Palabra para finalizar el ticket",
          typebotKeywordRestart: "Palabra para reiniciar el flujo",
          typebotRestartMessage: "Mensaje al reiniciar conversación",
          typebotUnknownMessage: "Mensaje de opción no válida",
          typebotDelayMessage: "Intervalo (ms) entre mensajes",   
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Probar Bot",
        },
        messages: {
          testSuccess: "¡Integración probada con éxito!",
          addSuccess: "Integración agregada exitosamente.",
          editSuccess: "Integración editada exitosamente.",
        },
      },
	  sideMenu: {
            name: "Menu Lateral Inicial",
            note: "Si está habilitado, el menú lateral se iniciará cerrado",
            options: {
              enabled: "Abierto",
              disabled: "Cerrado",
            },
          },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de Tokens por respuesta",
          temperature: "Temperatura",
          apikey: "API Key",
          max_messages: "Máximo de mensajes en el historial",
          voiceKey: "Chave da API de Voz",
          voiceRegion: "Región de voz",
        },
        success: "Prompt guardado exitosamente!",
        title: {
          add: "Adicionar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/cola",
          max_tokens: "Máximo Tokens Respuesta",
          actions: "Acción",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "¿Está seguro? Esta acción no se puede revertir!",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Datos de contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de Whatsapp",
          email: "Email",
          extraName: "Nombre del campo",
          extraValue: "Valor",
          whatsapp: "Conexión de origen: "
        },
        buttons: {
          addExtraInfo: "Añadir información",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado exitosamente",
      },
      queueModal: {
        title: {
          add: "Agregar cola",
          edit: "Editar cola",
        },
		confirmationModal: {
		  "deleteTitle": "Excluir",
		},
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de finalización",
          outOfHoursMessage: "Mensaje fuera del horario laboral",
          ratingMessage: "Mensaje de evaluación",
          token: "Token",
          orderQueue: "Orden de cola (Bot)",
          integrationId: "Integración",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
		  attach: "Adjuntar archivo",
        },
      },
      userModal: {
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraseña",
          profile: "Perfil",
          whatsapp: "Conexión predeterminada",

          allTicket: "Ticket sin cola [Invisible]",
          allTicketEnabled: "Habilitado",
          allTicketDesabled: "Desabilitado",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado exitosamente.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo Agendamiento",
          edit: "Editar Agendamento",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de Agendamento",
          sentAt: "Fecha de Envio",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Agendamiento guardada exitosamente.",
      },
      tagModal: {
        title: {
          add: "Nueva Tag",
          edit: "Editar Tag",
        },
        form: {
          name: "Nombre",
          color: "Cor",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Etiqueta guardada exitosamente",
      },
      chat: {
        noTicketMessage: "Seleccione un ticket para comenzar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTRE Y SUELTE ARCHIVOS EN EL CAMPO DE ABAJO",
          titleFileList: "Lista de archivo(s)"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
          closeallTicket: "Cerrar"
        },
      },
      ticketsQueueSelect: {
        placeholder: "Colas",
      },
      tickets: {
        inbox: {
          closedAllTickets: "Cerrar todos los tickets?",
          closedAll: "Cerrar Todos",
          newTicket: "Nuevo Ticket",
          yes: "SI",
          no: "NO",
          open: "Abiertos",
          resolverd: "Resuelto",
        },
        toasts: {
          deleted: "El atendimiento en el que estabas ha sido eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Abiertas" },
          closed: { title: "Resuelto" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Buscar atendimento y mensajes",
          filterConnections: "Filtrar por conexiones",
          filterContacts: "Filtro por contato",
          filterConections: "Filtrar por conexión",
          filterConectionsOptions: {
            open: "Abierto",
            closed: "Cerrado",
            pending: "Pendente",
          },
          filterUsers: "Filtro por Usuarios",
          ticketsPerPage: "Tickets por página"
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escriba para buscar usuarios",
        fieldQueueLabel: "Transferir para cola",
        fieldQueuePlaceholder: "Seleccione una cola",
        noOptions: "No se encontró ningún usuario con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Aguardando",
        assignedHeader: "Atendiendo",
        noTicketsTitle: "Nada aqui!",
        noTicketsMessage:
          "No se encontraron servicios con este estado o término de búsqueda",
        buttons: {
          accept: "Aceptar",
          closed: "Finalizar",
		  transfer: "Transferir",
          reopen: "Reabrir"
        },
      },
      newTicketModal: {
        title: "Crear ticket",
        fieldLabel: "Escribe para buscar contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          tickets: "Atenciones",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contactos",
          queues: "Colas & Chatbot",
          tags: "Tags",
          administration: "Administración",
          users: "Usuários",
          settings: "Configuraciones",
          helps: "Ajuda",
          messagesAPI: "API",
          schedules: "Agendamentos",
          campaigns: "Campañas",
          annoucements: "Informativos",
          chats: "Chat Interno",
          financeiro: "Financiero",
          files: "Lista de archivos",
          prompts: "Open.Ai",
		  reports: "Informes",
          queueIntegration: "Integraciones",
        },
        appBar: {
          notRegister:"Sin notificaciones",
          user: {
            profile: "Perfil",
            logout: "Salir",
          },
        },
      },
      queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre de Proyecto",
          language: "Idioma",
          lastUpdate: "Última actualización",
          actions: "Acción",
        },
        buttons: {
          add: "Agregar proyecto",
        },
        searchPlaceholder: "Para buscar...",
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "¿Está seguro? ¡Esta acción no se puede revertir! y serán eliminados de las colas y conexiones vinculadas",
        },
      },
	reports: {
        title: "Informes de Atendimentos",
        table: {
          id: "Ticket",
          user: "Usuário",
          dateOpen: "Fecha de Apertura",
          dateClose: "Fecha de cierre",
          NPS: "NPS",
          status: "Status",
          whatsapp: "Conexión",
          queue: "Cola",
          actions: "Acción",
          lastMessage: "Últ. Mensaje",
          contact: "Cliente",
          supportTime: "Tiempo de Atención"
        },
        buttons: {
          filter: "Aplicar Filtro",
        },
        searchPlaceholder: "Buscar...",
      },	  
      files: {
        title: "Lista de archivos",
        table: {
          name: "Nombre",
          contacts: "Contatos",
          actions: "Acción",
        },
        toasts: {
          deleted: "Lista eliminada exitosamente!",
          deletedAll: "Todas las listas se han eliminado correctamente!",
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Borrar Todos",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteAllTitle: "Borrar Todos",
          deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
          deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las listas?",
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre de archivo",
          media: "Archivo",
          token: "Token registrado",
        },
      },
      notifications: {
        noTickets: "Ninguna notificación.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "Sin anexo",
        confirmationModal: {
          deleteTitle: "Exclusión",
          deleteMessage: "¡Esta acción es irreversible! ¿Deseas continuar?",
        },
        buttons: {
          add: "Agregar",
          attach: "Anexar Archivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "¡Acceso directo añadido exitosamente!",
          deleted: "¡Acceso directo eliminado exitosamente!",
        },
        dialog: {
          title: "Mensaje rápido",
          shortcode: "Atajo",
          message: "Respuesta",
          save: "Guardar",
          cancel: "Cancelar",
          geral: "Permitir editar",
          add: "Agregar",
          edit: "Editar",
          visao: "Permitir la visión",
		  geral: 'Global',
        },
        table: {
          shortcode: "Atajo",
          message: "Mensaje",
          actions: "Acción",
          mediaName: "Nombre de Archivo",
          status: 'Global',
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactFirstName: "Primer Nombre",
          contactName: "Nombre",
          greeting: "Saludo",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
        },
      },
      contactLists: {
        title: "Listas de Contatos",
        table: {
          name: "Nome",
          contacts: "Contactos",
          actions: "Acción",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Acción",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Quieres importar contactos desde esta hoja de cálculo? ",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listas de Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de Contactos",
          status: "Status",
          scheduledAt: "Agendamento",
          completedAt: "Concluída",
          confirmation: "Confirmación",
          actions: "Acción",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Solo visualización",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de confirmación 1",
            confirmationMessage2: "Mensaje de confirmación 2",
            confirmationMessage3: "Mensaje de confirmación 3",
            confirmationMessage4: "Mensaje de confirmación 4",
            confirmationMessage5: "Mensaje de confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Status",
            scheduledAt: "Agendamento",
            confirmation: "Confirmación",
            contactList: "Lista de Contacto",
            tagList: "Lista de Tags",
            fileList: "Lista de Archivos"
          },
          buttons: {
            add: "Agregar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar Disparos",
            restart: "Reiniciar Disparos",
            close: "Cerrar",
            attach: "Anexar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        toasts: {
          success: "Operación completada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro excluído",
        },
      },
      announcements: {
        active: 'Activo',
        inactive: 'Inactivo',
        title: "Informativos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo Informativo",
          contactLists: "Listas de Informativos",
        },
        table: {
          priority: "Prioridad",
          title: "Title",
          text: "Texto",
          mediaName: "Archivo",
          status: "Status",
          actions: "Acción",
        },
        dialog: {
          edit: "Edición de Informativo",
          add: "Nuevo Informativo",
          update: "Editar Informativo",
          readonly: "Solo visualización",
          form: {
            priority: "Prioridad",
            title: "Title",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Status",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Anexar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        toasts: {
          success: "Operación completada con éxito",
          deleted: "Registro excluído",
        },
      },
      campaignsConfig: {
        title: "Configuración de campaña",
      },
      queues: {
        title: "Colas & Chatbot",
        table: {
		  id:"ID",
          name: "Nombre",
          color: "Cor",
          greeting: "Mensaje de saludo",
          actions: "Acción",
          orderQueue: "Ordenación de colas (bot)",
        },
        buttons: {
          add: "Agregar cola",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "¿Está seguro? ¡Esta acción no se puede revertir! Los servicios en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
        },
      },
      queueSelect: {
        inputLabel: "Colas",
      },
      users: {
        title: "Usuários",
        table: {
		  id: "ID",
          name: "Nombre",
		  status: "Status",
          email: "Email",
          profile: "Perfil",
          actions: "Acción",
        },
		status: {
          online: "Usuários online",
          offline: "Usuários offline",
        },
        buttons: {
          add: "Agregar usuário",
        },
        toasts: {
          deleted: "Usuario eliminado exitosamente.",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Se perderán todos los datos del usuario. Los atendimientos abiertos de este usuario se moverán a la cola.",
        },
      },
      helps: {
        title: "Central de Ayuda",
      },
      schedules: {
        title: "Citas",
        confirmationModal: {
          deleteTitle: "¿Estás seguro que deseas eliminar este cronograma?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de Agendamento",
          sentAt: "Fecha de Envio",
          status: "Status",
          actions: "Acción",
        },
        buttons: {
          add: "Nuevo Agendamiento",
        },
        toasts: {
          deleted: "Agendamiento excluído con éxito.",
        },
      },
      tags: {
        title: "Tags",
        confirmationModal: {
          deleteTitle: "¿Estás seguro que deseas eliminar esta etiqueta?",
          deleteMessage: "Esta acción no se puede revertir..",
		  deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las etiquetas?",
		  deleteAllTitle: "Borrar Todos",
        },
        table: {
          name: "Nombre",
          color: "Cor",
          tickets: "Registros Etiquetados",
          actions: "Acción",
        },
        buttons: {
          add: "Nueva Tag",
		  deleteAll: "Borrar Todas",
        },
        toasts: {
		  deletedAll: "Todas las etiquetas se eliminaron correctamente!",
          deleted: "Etiqueta eliminada exitosamente",
        },
      },
      settings: {
        success: "Configuración guardada exitosamente.",
        title: "Configuración",
        settings: {
          userCreation: {
            name: "Creación de usuarios",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Atribuido a:",
          buttons: {
            return: "Retornar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escribe un mensaje",
        placeholderClosed:
          "Por favor, vuelva a abrir o acepte este ticket para enviar un mensaje..",
        signMessage: "Asignar",
      },
      contactDrawer: {
        header: "Datos de contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otra información",
      },
      fileModal: {
        title: {
          add: "Agregar lista de archivos",
          edit: "Editar lista de archivos",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo",
        },
        form: {
          name: "Nombre da lista de archivos",
          message: "Detalles de lista",
          fileOptions: "Lista de archivos",
          extraName: "Mensaje para enviar con archivo",
          extraValue: "Valor de la opción",
        },
        success: "¡Lista de archivos guardada exitosamente!",
      },
      ticketOptionsMenu: {
        schedule: "Agendamento",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Observación de contacto",
        appointmentsModal: {
          title: "Observación de contacto",
          textarea: "Observación",
          placeholder: "Introduzca aquí la información que desea registrar",
        },
        confirmationModal: {
          title: "Eliminar el ticket",
		  titleFrom: "de contacto ",
          message:
            "¡Atención! Se perderán todos los mensajes relacionados con el ticket.",
        },
        buttons: {
          delete: "Excluir",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Borrar",
        reply: "Responder",
		edit: 'Editar Mensaje',
		forward: "Transferir",
        toForward: "Transferir",
		react: "Reaccionar",
        confirmationModal: {
          title: "¿Borrar mensaje?",
          message: "Esta acción no se puede revertir.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró ningún WhatsApp predeterminado. Consulte la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ??se ha inicializado. Consulte la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se puede verificar el contacto de WhatsApp. Consulta la página de conexiones",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pueden descargar medios de WhatsApp. Consulte la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Por favor, inténtalo de nuevo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Consulte la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se puede eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya existe un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "La sesión expiró. Por favor vuelve a ingresar",
        ERR_USER_CREATION_DISABLED:
          "El administrador ha deshabilitado la creación de usuarios.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontraron contactos con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontraron tickets con este ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al recuperar mensaje en WhatsApp, quizás sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elige otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una cola.",
      },
    },
  },
};

export { messages };
