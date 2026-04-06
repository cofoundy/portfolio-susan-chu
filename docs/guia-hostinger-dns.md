---
title: "Guía: Conectar tu dominio de Hostinger a tu portfolio"
subtitle: "Paso a paso para vincular susanchu.com con tu portfolio profesional"
author: "Cofoundy"
date: "2026-02-27"
client: "Susan Chu Wu"
version: "1.0"
confidentiality: "client"
abstract: "Esta guía te explica cómo conectar tu dominio propio (susanchu.com) alojado en Hostinger con tu portfolio profesional. Tienes dos opciones: darnos acceso para que lo hagamos nosotros, o seguir los pasos tú misma. Ambas opciones toman menos de 10 minutos."
toc: true
toc-depth: 2
---

# Antes de empezar

Tu portfolio ya está publicado y funcionando en la dirección temporal:

> **susan-chu.cofoundy.dev**

Lo que vamos a hacer es conectar tu dominio propio (**susanchu.com**) para que cuando alguien escriba esa dirección en su navegador, vea tu portfolio profesional.

> [!NOTE]
> No necesitas mover ni cambiar tu hosting actual. Solo vamos a agregar unos registros DNS que apuntan tu dominio hacia donde está tu portfolio. Tu correo y otros servicios que uses con Hostinger **no se verán afectados**.

---pagebreak---

# Opción A: Danos acceso y lo hacemos nosotros

Esta es la opción más fácil. Nos das acceso a tu panel de Hostinger y nosotros configuramos todo en menos de 10 minutos.

## Paso 1: Ingresa a tu cuenta de Hostinger

1. Ve a **hpanel.hostinger.com** e inicia sesión con tu cuenta
2. En el panel principal, busca tu dominio **susanchu.com**

## Paso 2: Crea un acceso para nosotros

Hostinger permite compartir acceso de dos formas:

**Opción rápida — Compartir credenciales:**

1. Envíanos tu **usuario y contraseña** de Hostinger por WhatsApp
2. Nosotros entramos, configuramos los DNS y te avisamos cuando esté listo
3. Después puedes cambiar tu contraseña si lo prefieres

**Opción segura — Invitar como colaborador:**

1. En el panel de Hostinger, ve a **Cuenta → Compartir acceso**
2. Ingresa nuestro correo: **info@cofoundy.dev**
3. Selecciona permisos de **DNS / Dominios**
4. Haz clic en **Enviar invitación**

> [!TIP]
> Si no encuentras la opción de compartir acceso, simplemente envíanos tus credenciales por WhatsApp. Es lo más rápido y configuramos todo en minutos.

## Paso 3: Avísanos por WhatsApp

Envíanos un mensaje confirmando que ya tenemos acceso:

> "Hola! Ya les di acceso a Hostinger para configurar mi dominio susanchu.com"

Nosotros nos encargamos del resto y te confirmamos cuando esté listo.

> [!IMPORTANT]
> Después de configurar los DNS, el dominio puede tardar entre **5 minutos y 48 horas** en propagarse completamente. Normalmente tarda menos de 1 hora.

---pagebreak---

# Opción B: Configúralo tú misma

Si prefieres hacerlo tú misma, sigue estos pasos. Es un proceso sencillo que toma menos de 10 minutos.

## Paso 1: Ingresa al panel de DNS

1. Ve a **hpanel.hostinger.com** e inicia sesión
2. En el menú lateral, haz clic en **Dominios**
3. Selecciona **susanchu.com**
4. Haz clic en **DNS / Nameservers** (o "Zona DNS")

## Paso 2: Elimina registros existentes tipo A

Antes de agregar los nuevos, necesitas eliminar los registros tipo **A** que apunten a la IP de Hostinger:

1. Busca los registros de tipo **A** que tengan como nombre **@** o **susanchu.com**
2. Haz clic en el ícono de **eliminar** (basura) de cada uno
3. Confirma la eliminación

> [!WARNING]
> Solo elimina los registros tipo **A** que apunten al hosting. **No elimines** registros MX (correo), TXT, ni CNAME que no reconozcas.

## Paso 3: Agrega los nuevos registros A

Haz clic en **Agregar registro** y crea estos 4 registros tipo **A**, uno por uno:

| Tipo | Nombre | Contenido / Valor | TTL |
|------|--------|-------------------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

> [!NOTE]
> Estas 4 IPs son los servidores de GitHub Pages, donde está alojado tu portfolio. Son públicas y seguras.

## Paso 4: Agrega el registro CNAME para www

Agrega un registro **CNAME** para que **www.susanchu.com** también funcione:

| Tipo | Nombre | Contenido / Valor | TTL |
|------|--------|-------------------|-----|
| CNAME | www | cofoundy.github.io | 3600 |

## Paso 5: Verifica tu configuración

Tu zona DNS debería verse así al final:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | cofoundy.github.io |

Además de otros registros como MX (correo) y TXT que ya tenías y **no debes tocar**.

## Paso 6: Avísanos por WhatsApp

Una vez que hayas agregado los registros, envíanos un mensaje:

> "Hola! Ya configuré los DNS de susanchu.com como indica la guía"

Nosotros verificamos que todo esté correcto y activamos el HTTPS (candadito verde) de tu dominio.

> [!TIP]
> Puedes verificar tú misma si los DNS ya propagaron visitando **susanchu.com** en tu navegador. Si ves tu portfolio, todo está listo.

---pagebreak---

# Preguntas frecuentes

**1. ¿Mi correo de Hostinger se va a ver afectado?**

No. Solo estamos cambiando los registros A (que apuntan el sitio web). Los registros MX (correo) no se tocan.

**2. ¿Cuánto tarda en funcionar?**

Normalmente entre 5 minutos y 2 horas. En casos excepcionales puede tardar hasta 48 horas.

**3. ¿Pierdo mi hosting de Hostinger?**

No. Tu hosting sigue activo. Simplemente estamos redirigiendo tu dominio a donde está tu portfolio.

**4. ¿Puedo revertir los cambios?**

Sí. Si en algún momento quieres que tu dominio apunte de nuevo a Hostinger, solo tienes que restaurar los registros A originales.

**5. ¿El sitio tendrá HTTPS (candadito verde)?**

Sí. Una vez que los DNS propaguen, nosotros activamos el certificado SSL automático. Tu sitio se verá como **https://susanchu.com** con el candadito verde.

---pagebreak---

# Resumen visual

| | Opción A | Opción B |
|--|----------|----------|
| **Quién lo hace** | Nosotros | Tú |
| **Tiempo** | 10 min | 10 min |
| **Qué necesitas** | Darnos acceso | Seguir esta guía |
| **Dificultad** | Ninguna | Fácil |
| **Resultado** | Igual | Igual |

> [!TIP] Nuestra recomendación
> Si no te sientes cómoda tocando configuraciones técnicas, elige la **Opción A**. Nos encargamos de todo y te avisamos cuando esté listo. Sin costo adicional.

# Contacto

Si tienes alguna duda, escríbenos por WhatsApp:

- **WhatsApp:** +51 997 618 020
- **Email:** info@cofoundy.dev
- **Web:** cofoundy.dev
