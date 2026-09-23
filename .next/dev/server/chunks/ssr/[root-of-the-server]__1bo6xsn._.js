module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/app/plans/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlansPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$plans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/plans.ts [app-rsc] (ecmascript)");
;
;
;
function PlansPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 px-24 py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl font-bold text-slate-900",
                children: "Explorar planes"
            }, void 0, false, {
                fileName: "[project]/src/app/plans/page.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 gap-8 mt-12",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$plans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["plans"].map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/plans/${plan.id}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: plan.image,
                                alt: plan.title,
                                className: "w-full h-60 object-cover rounded-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/plans/page.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl text-slate-900 mt-3",
                                children: plan.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/plans/page.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500",
                                        children: [
                                            "Precio estimado: $",
                                            plan.price.toLocaleString("es-CO")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/plans/page.tsx",
                                        lineNumber: 19,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 2,
                                                stroke: "currentColor",
                                                className: "w-5 h-5 mr-1 text-red-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/plans/page.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/plans/page.tsx",
                                                lineNumber: 23,
                                                columnNumber: 17
                                            }, this),
                                            plan.likes
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/plans/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/plans/page.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        ]
                    }, plan.id, true, {
                        fileName: "[project]/src/app/plans/page.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/plans/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/plans/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/plans/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/plans/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/plans.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Datos de prueba mientras no tenemos el backend
__turbopack_context__.s([
    "plans",
    ()=>plans
]);
const plans = [
    {
        id: 1,
        title: "Cine bajo las estrellas",
        price: 25000,
        likes: 124,
        image: "https://picsum.photos/seed/cine/1200/700",
        category: "Cine",
        level: "Para todos",
        location: "Parque El Virrey • Zona verde",
        date: "Sábado, 24 de Mayo",
        time: "19:30",
        organizer: "Cine Club Bogotá",
        duration: "3 horas aprox.",
        maxPeople: 50,
        confirmed: 38,
        equipment: "Cobija incluida",
        description: "Trae a tus amigos y disfruta de una película clásica al aire libre. Habrá cojines, cobijas y crispetas para todos. Solo tienes que llegar y acomodarte bajo las estrellas."
    },
    {
        id: 2,
        title: "Ruta en kayak al atardecer",
        price: 80000,
        likes: 98,
        image: "https://picsum.photos/seed/kayak/1200/700",
        category: "Aventura Acuática",
        level: "Nivel Principiante",
        location: "Bahía de las Brisas • Muelle Norte",
        date: "Viernes, 30 de Mayo",
        time: "18:30",
        organizer: "Club Náutico Pacífico",
        duration: "2.5 horas aprox.",
        maxPeople: 16,
        confirmed: 11,
        equipment: "Incluido",
        description: "Desconéctate del bullicio urbano y súbete a bordo de una experiencia visual inigualable. Remaremos a un ritmo tranquilo mientras los últimos rayos de sol transforman el cielo. No se necesita experiencia previa: contaremos con instructores certificados."
    },
    {
        id: 3,
        title: "Taller de cerámica artesanal",
        price: 60000,
        likes: 45,
        image: "https://picsum.photos/seed/ceramica/1200/700",
        category: "Arte",
        level: "Nivel Principiante",
        location: "Taller Barro Vivo • Chapinero",
        date: "Sábado, 7 de Junio",
        time: "10:00",
        organizer: "Barro Vivo",
        duration: "3 horas aprox.",
        maxPeople: 12,
        confirmed: 9,
        equipment: "Materiales incluidos",
        description: "Aprende a moldear tu propia pieza en el torno con la guía de artesanos expertos. Al final del taller te llevas a casa lo que hiciste."
    },
    {
        id: 4,
        title: "Picnic y cata de café",
        price: 35000,
        likes: 76,
        image: "https://picsum.photos/seed/picnic/1200/700",
        category: "Gastronomía",
        level: "Para todos",
        location: "Parque de la 93 • Prado central",
        date: "Domingo, 15 de Junio",
        time: "11:00",
        organizer: "Café de Origen",
        duration: "2 horas aprox.",
        maxPeople: 20,
        confirmed: 14,
        equipment: "Café y snacks incluidos",
        description: "Un picnic relajado donde probaremos cafés de distintas regiones del país y aprenderemos a reconocer sus sabores."
    },
    {
        id: 5,
        title: "Concierto acústico íntimo",
        price: 50000,
        likes: 210,
        image: "https://picsum.photos/seed/concierto/1200/700",
        category: "Música",
        level: "Para todos",
        location: "Casa Loft • Usaquén",
        date: "Viernes, 20 de Junio",
        time: "20:00",
        organizer: "Sesiones Loft",
        duration: "2 horas aprox.",
        maxPeople: 40,
        confirmed: 35,
        equipment: "No aplica",
        description: "Una noche de música en vivo en un espacio pequeño y acogedor. Artistas locales tocarán sus canciones en formato acústico."
    },
    {
        id: 6,
        title: "Senderismo en la sierra",
        price: 40000,
        likes: 153,
        image: "https://picsum.photos/seed/senderismo/1200/700",
        category: "Naturaleza",
        level: "Nivel Intermedio",
        location: "Sierra Alta • Entrada principal",
        date: "Sábado, 28 de Junio",
        time: "06:00",
        organizer: "Caminantes Andinos",
        duration: "6 horas aprox.",
        maxPeople: 25,
        confirmed: 18,
        equipment: "Trae tus botas",
        description: "Una caminata por senderos de montaña con paisajes increíbles. Haremos paradas para descansar y tomar fotos."
    },
    {
        id: 7,
        title: "Noche de juegos y tapas",
        price: 30000,
        likes: 67,
        image: "https://picsum.photos/seed/juegos/1200/700",
        category: "Social",
        level: "Para todos",
        location: "Bar La Ficha • Teusaquillo",
        date: "Viernes, 4 de Julio",
        time: "19:00",
        organizer: "La Ficha",
        duration: "3 horas aprox.",
        maxPeople: 24,
        confirmed: 10,
        equipment: "Juegos incluidos",
        description: "Juegos de mesa, tapas y buena compañía. Ideal para conocer gente nueva."
    },
    {
        id: 8,
        title: "Sesión de fotografía urbana",
        price: 20000,
        likes: 39,
        image: "https://picsum.photos/seed/fotografia/1200/700",
        category: "Fotografía",
        level: "Nivel Principiante",
        location: "La Candelaria • Plaza del Chorro",
        date: "Sábado, 12 de Julio",
        time: "15:00",
        organizer: "Lente Urbano",
        duration: "2 horas aprox.",
        maxPeople: 15,
        confirmed: 6,
        equipment: "Trae tu cámara o celular",
        description: "Recorreremos las calles del centro buscando las mejores fotos. Aprenderás trucos básicos de composición y luz."
    },
    {
        id: 9,
        title: "Clase de salsa para principiantes",
        price: 25000,
        likes: 88,
        image: "https://picsum.photos/seed/salsa/1200/700",
        category: "Baile",
        level: "Nivel Principiante",
        location: "Academia Sabor • Galerías",
        date: "Viernes, 18 de Julio",
        time: "19:00",
        organizer: "Academia Sabor",
        duration: "1.5 horas aprox.",
        maxPeople: 30,
        confirmed: 22,
        equipment: "No aplica",
        description: "Aprende los pasos básicos de salsa en una clase divertida. No necesitas pareja ni experiencia."
    },
    {
        id: 10,
        title: "Mercado de pulgas vintage",
        price: 0,
        likes: 54,
        image: "https://picsum.photos/seed/mercado/1200/700",
        category: "Compras",
        level: "Para todos",
        location: "Usaquén • Calle 119",
        date: "Domingo, 20 de Julio",
        time: "09:00",
        organizer: "Pulgas Usaquén",
        duration: "Todo el día",
        maxPeople: 200,
        confirmed: 120,
        equipment: "No aplica",
        description: "Ropa, discos, muebles y objetos antiguos. Un plan perfecto para pasear y encontrar tesoros."
    },
    {
        id: 11,
        title: "Tour gastronómico por el centro",
        price: 90000,
        likes: 132,
        image: "https://picsum.photos/seed/gastronomia/1200/700",
        category: "Gastronomía",
        level: "Para todos",
        location: "Centro histórico • Plaza de Bolívar",
        date: "Sábado, 26 de Julio",
        time: "12:00",
        organizer: "Sabores Capitalinos",
        duration: "4 horas aprox.",
        maxPeople: 14,
        confirmed: 12,
        equipment: "Degustaciones incluidas",
        description: "Visitaremos restaurantes y puestos tradicionales para probar los platos más típicos de la ciudad."
    },
    {
        id: 12,
        title: "Yoga al amanecer en el parque",
        price: 15000,
        likes: 71,
        image: "https://picsum.photos/seed/yoga/1200/700",
        category: "Bienestar",
        level: "Para todos",
        location: "Parque Simón Bolívar • Lago",
        date: "Domingo, 3 de Agosto",
        time: "06:30",
        organizer: "Yoga Libre",
        duration: "1 hora aprox.",
        maxPeople: 40,
        confirmed: 17,
        equipment: "Trae tu tapete",
        description: "Empieza el día con una clase de yoga suave al aire libre. Apta para todos los niveles."
    },
    {
        id: 13,
        title: "Paseo en bicicleta nocturno",
        price: 10000,
        likes: 180,
        image: "https://picsum.photos/seed/bicicleta/1200/700",
        category: "Deporte",
        level: "Nivel Principiante",
        location: "Ciclovía • Calle 26",
        date: "Viernes, 8 de Agosto",
        time: "20:00",
        organizer: "Bici Noche",
        duration: "2 horas aprox.",
        maxPeople: 60,
        confirmed: 44,
        equipment: "Trae tu bici y casco",
        description: "Recorremos la ciudad de noche en grupo, con luces y música. Ritmo tranquilo para que nadie se quede atrás."
    },
    {
        id: 14,
        title: "Taller de cocina italiana",
        price: 70000,
        likes: 95,
        image: "https://picsum.photos/seed/cocina/1200/700",
        category: "Gastronomía",
        level: "Nivel Principiante",
        location: "Cucina Nonna • Chapinero Alto",
        date: "Sábado, 16 de Agosto",
        time: "16:00",
        organizer: "Cucina Nonna",
        duration: "3 horas aprox.",
        maxPeople: 10,
        confirmed: 8,
        equipment: "Ingredientes incluidos",
        description: "Prepara pasta fresca desde cero y una salsa casera. Al final nos sentamos todos a comer lo que cocinamos."
    },
    {
        id: 15,
        title: "Observación de estrellas",
        price: 45000,
        likes: 112,
        image: "https://picsum.photos/seed/estrellas/1200/700",
        category: "Ciencia",
        level: "Para todos",
        location: "Observatorio La Calera • Mirador",
        date: "Sábado, 23 de Agosto",
        time: "21:00",
        organizer: "Astro Club",
        duration: "2 horas aprox.",
        maxPeople: 20,
        confirmed: 15,
        equipment: "Telescopios incluidos",
        description: "Con telescopios y la guía de un astrónomo aprenderemos a reconocer constelaciones y planetas."
    },
    {
        id: 16,
        title: "Festival de música independiente",
        price: 120000,
        likes: 305,
        image: "https://picsum.photos/seed/festival/1200/700",
        category: "Música",
        level: "Para todos",
        location: "Parque Metropolitano • Escenario principal",
        date: "Domingo, 31 de Agosto",
        time: "14:00",
        organizer: "Indie Fest",
        duration: "8 horas aprox.",
        maxPeople: 500,
        confirmed: 410,
        equipment: "No aplica",
        description: "Un día completo de bandas independientes, comida y buen ambiente. Trae a tus amigos."
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bo6xsn._.js.map