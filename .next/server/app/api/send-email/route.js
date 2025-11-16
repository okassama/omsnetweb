"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fok%2FDeveloper%2Fomsnet_digital_fortress_cybersecurity_website_0o7r4g%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fok%2FDeveloper%2Fomsnet_digital_fortress_cybersecurity_website_0o7r4g&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fok%2FDeveloper%2Fomsnet_digital_fortress_cybersecurity_website_0o7r4g%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fok%2FDeveloper%2Fomsnet_digital_fortress_cybersecurity_website_0o7r4g&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_ok_Developer_omsnet_digital_fortress_cybersecurity_website_0o7r4g_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-email/route.ts */ \"(rsc)/./app/api/send-email/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"/Users/ok/Developer/omsnet_digital_fortress_cybersecurity_website_0o7r4g/app/api/send-email/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ok_Developer_omsnet_digital_fortress_cybersecurity_website_0o7r4g_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-email/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm9rJTJGRGV2ZWxvcGVyJTJGb21zbmV0X2RpZ2l0YWxfZm9ydHJlc3NfY3liZXJzZWN1cml0eV93ZWJzaXRlXzBvN3I0ZyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZvayUyRkRldmVsb3BlciUyRm9tc25ldF9kaWdpdGFsX2ZvcnRyZXNzX2N5YmVyc2VjdXJpdHlfd2Vic2l0ZV8wbzdyNGcmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9c3RhbmRhbG9uZSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2hEO0FBQzBGO0FBQzNCO0FBQy9EO0FBQ2lJO0FBQ2pJLDRCQUE0QixnSEFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLz9kNjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG4vLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVwbGFjZWQgYnkgd2VicGFjay90dXJib3BhY2sgbG9hZGVyXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL29rL0RldmVsb3Blci9vbXNuZXRfZGlnaXRhbF9mb3J0cmVzc19jeWJlcnNlY3VyaXR5X3dlYnNpdGVfMG83cjRnL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS50c1wiO1xuY29uc3QgQXBwUm91dGVSb3V0ZU1vZHVsZSA9IG1vZHVsZS5BcHBSb3V0ZVJvdXRlTW9kdWxlO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJzdGFuZGFsb25lXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmQtZW1haWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZW5kLWVtYWlsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL29rL0RldmVsb3Blci9vbXNuZXRfZGlnaXRhbF9mb3J0cmVzc19jeWJlcnNlY3VyaXR5X3dlYnNpdGVfMG83cjRnL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fok%2FDeveloper%2Fomsnet_digital_fortress_cybersecurity_website_0o7r4g%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fok%2FDeveloper%2Fomsnet_digital_fortress_cybersecurity_website_0o7r4g&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/send-email/route.ts":
/*!*************************************!*\
  !*** ./app/api/send-email/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   sendFollowUpEmail: () => (/* binding */ sendFollowUpEmail),\n/* harmony export */   sendWelcomeEmail: () => (/* binding */ sendWelcomeEmail)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\n// iCloud+ SMTP Configuration\nconst createTransporter = ()=>{\n    return nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n        host: \"smtp.mail.me.com\",\n        port: 587,\n        secure: false,\n        auth: {\n            user: process.env.ICLOUD_EMAIL,\n            pass: process.env.ICLOUD_APP_PASSWORD\n        },\n        tls: {\n            rejectUnauthorized: false\n        },\n        debug: true\n    });\n};\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const { to, subject, message, clientName } = body;\n        // Basic validation\n        if (!to || !subject || !message) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"To, subject, and message are required\"\n            }, {\n                status: 400\n            });\n        }\n        // Check if environment variables are set\n        if (!process.env.ICLOUD_EMAIL || !process.env.ICLOUD_APP_PASSWORD) {\n            console.warn(\"⚠️ iCloud email credentials not configured. Email will be logged instead.\");\n            // Log the email that would be sent\n            console.log(\"\\uD83D\\uDCE7 Email would be sent:\");\n            console.log(\"From: contact@omsnet.co.uk\");\n            console.log(\"To:\", to);\n            console.log(\"Subject:\", subject);\n            console.log(\"Message:\", message);\n            console.log(\"---\");\n            // Simulate email sending delay\n            await new Promise((resolve)=>setTimeout(resolve, 1000));\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                success: true,\n                message: \"Email logged (iCloud credentials not configured)\",\n                simulated: true\n            });\n        }\n        // For iCloud+ with custom domains, you might need to use your Apple ID email\n        // instead of the custom domain for authentication\n        console.log(\"\\uD83D\\uDD27 Attempting to send email via iCloud SMTP...\");\n        console.log(\"Using email:\", process.env.ICLOUD_EMAIL);\n        // Send actual email using iCloud SMTP\n        const transporter = createTransporter();\n        const mailOptions = {\n            from: `\"Omsnet Digital Fortress\" <contact@omsnet.co.uk>`,\n            to: to,\n            subject: subject,\n            html: message,\n            // Optional: Add text version for better compatibility\n            text: message.replace(/<[^>]*>/g, \"\")\n        };\n        const result = await transporter.sendMail(mailOptions);\n        console.log(\"✅ Email sent successfully via iCloud:\");\n        console.log(\"Message ID:\", result.messageId);\n        console.log(\"To:\", to);\n        console.log(\"Subject:\", subject);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true,\n            message: \"Email sent successfully via iCloud\",\n            messageId: result.messageId\n        });\n    } catch (error) {\n        console.error(\"❌ Email sending error:\", error);\n        // Provide helpful error messages\n        let errorMessage = \"Failed to send email\";\n        if (error instanceof Error) {\n            if (error.message.includes(\"Invalid login\")) {\n                errorMessage = \"Invalid iCloud email credentials. Please check your app password.\";\n            } else if (error.message.includes(\"ECONNREFUSED\")) {\n                errorMessage = \"Unable to connect to iCloud SMTP server. Please check your network.\";\n            } else {\n                errorMessage = error.message;\n            }\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: errorMessage\n        }, {\n            status: 500\n        });\n    }\n}\n// Additional email functions for enhanced features\nasync function sendWelcomeEmail(to, name) {\n    try {\n        const transporter = createTransporter();\n        const mailOptions = {\n            from: `\"Omsnet Digital Fortress\" <contact@omsnet.co.uk>`,\n            to: to,\n            subject: \"Welcome to Omsnet Digital Fortress\",\n            html: `\n        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\n          <h2 style=\"color: #2563eb;\">Welcome to Omsnet Digital Fortress</h2>\n          <p>Dear ${name},</p>\n          <p>Thank you for reaching out to Omsnet Digital Fortress. We've received your inquiry and our team will review it shortly.</p>\n          <p>In the meantime, here's what you can expect:</p>\n          <ul>\n            <li>Initial response within 24 hours</li>\n            <li>Comprehensive security assessment</li>\n            <li>Customized cybersecurity solutions</li>\n          </ul>\n          <p><strong>Best regards,</strong><br>\n          Omsnet Digital Fortress Team<br>\n          Phone: 0113 534 7445<br>\n          Email: contact@omsnet.co.uk</p>\n        </div>\n      `\n        };\n        await transporter.sendMail(mailOptions);\n        console.log(\"✅ Welcome email sent to:\", to);\n    } catch (error) {\n        console.error(\"Failed to send welcome email:\", error);\n    }\n}\nasync function sendFollowUpEmail(to, name, days) {\n    try {\n        const transporter = createTransporter();\n        const mailOptions = {\n            from: `\"Omsnet Digital Fortress\" <contact@omsnet.co.uk>`,\n            to: to,\n            subject: `Follow-up: Your Cybersecurity Consultation`,\n            html: `\n        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\n          <h2 style=\"color: #2563eb;\">Follow-up: Your Cybersecurity Consultation</h2>\n          <p>Dear ${name},</p>\n          <p>We wanted to follow up on your consultation request from ${days} day${days > 1 ? \"s\" : \"\"} ago.</p>\n          <p>Is there anything else we can assist you with regarding your cybersecurity needs?</p>\n          <p>Our team is ready to help you secure your digital assets.</p>\n          <p><strong>Best regards,</strong><br>\n          Omsnet Digital Fortress Team<br>\n          Phone: 0113 534 7445<br>\n          Email: contact@omsnet.co.uk</p>\n        </div>\n      `\n        };\n        await transporter.sendMail(mailOptions);\n        console.log(\"✅ Follow-up email sent to:\", to);\n    } catch (error) {\n        console.error(\"Failed to send follow-up email:\", error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bC9yb3V0ZS50cz85Mzc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcblxuLy8gaUNsb3VkKyBTTVRQIENvbmZpZ3VyYXRpb25cbmNvbnN0IGNyZWF0ZVRyYW5zcG9ydGVyID0gKCkgPT4ge1xuICByZXR1cm4gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIGhvc3Q6ICdzbXRwLm1haWwubWUuY29tJywgLy8gaUNsb3VkIFNNVFAgc2VydmVyXG4gICAgcG9ydDogNTg3LFxuICAgIHNlY3VyZTogZmFsc2UsIC8vIFVzZSBUTFNcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5JQ0xPVURfRU1BSUwsIC8vIFlvdXIgaUNsb3VkIGVtYWlsIChjb250YWN0QG9tc25ldC5jby51aylcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52LklDTE9VRF9BUFBfUEFTU1dPUkQsIC8vIEFwcC1zcGVjaWZpYyBwYXNzd29yZFxuICAgIH0sXG4gICAgdGxzOiB7XG4gICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLCAvLyBNYXkgYmUgbmVlZGVkIGZvciBzb21lIGlDbG91ZCBjb25maWd1cmF0aW9uc1xuICAgIH0sXG4gICAgZGVidWc6IHRydWUsIC8vIEVuYWJsZSBkZWJ1ZyBvdXRwdXRcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IHRvLCBzdWJqZWN0LCBtZXNzYWdlLCBjbGllbnROYW1lIH0gPSBib2R5O1xuXG4gICAgLy8gQmFzaWMgdmFsaWRhdGlvblxuICAgIGlmICghdG8gfHwgIXN1YmplY3QgfHwgIW1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ1RvLCBzdWJqZWN0LCBhbmQgbWVzc2FnZSBhcmUgcmVxdWlyZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIHNldFxuICAgIGlmICghcHJvY2Vzcy5lbnYuSUNMT1VEX0VNQUlMIHx8ICFwcm9jZXNzLmVudi5JQ0xPVURfQVBQX1BBU1NXT1JEKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBpQ2xvdWQgZW1haWwgY3JlZGVudGlhbHMgbm90IGNvbmZpZ3VyZWQuIEVtYWlsIHdpbGwgYmUgbG9nZ2VkIGluc3RlYWQuJyk7XG4gICAgICBcbiAgICAgIC8vIExvZyB0aGUgZW1haWwgdGhhdCB3b3VsZCBiZSBzZW50XG4gICAgICBjb25zb2xlLmxvZygn8J+TpyBFbWFpbCB3b3VsZCBiZSBzZW50OicpO1xuICAgICAgY29uc29sZS5sb2coJ0Zyb206IGNvbnRhY3RAb21zbmV0LmNvLnVrJyk7XG4gICAgICBjb25zb2xlLmxvZygnVG86JywgdG8pO1xuICAgICAgY29uc29sZS5sb2coJ1N1YmplY3Q6Jywgc3ViamVjdCk7XG4gICAgICBjb25zb2xlLmxvZygnTWVzc2FnZTonLCBtZXNzYWdlKTtcbiAgICAgIGNvbnNvbGUubG9nKCctLS0nKTtcblxuICAgICAgLy8gU2ltdWxhdGUgZW1haWwgc2VuZGluZyBkZWxheVxuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcblxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogJ0VtYWlsIGxvZ2dlZCAoaUNsb3VkIGNyZWRlbnRpYWxzIG5vdCBjb25maWd1cmVkKScsXG4gICAgICAgIHNpbXVsYXRlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZvciBpQ2xvdWQrIHdpdGggY3VzdG9tIGRvbWFpbnMsIHlvdSBtaWdodCBuZWVkIHRvIHVzZSB5b3VyIEFwcGxlIElEIGVtYWlsXG4gICAgLy8gaW5zdGVhZCBvZiB0aGUgY3VzdG9tIGRvbWFpbiBmb3IgYXV0aGVudGljYXRpb25cbiAgICBjb25zb2xlLmxvZygn8J+UpyBBdHRlbXB0aW5nIHRvIHNlbmQgZW1haWwgdmlhIGlDbG91ZCBTTVRQLi4uJyk7XG4gICAgY29uc29sZS5sb2coJ1VzaW5nIGVtYWlsOicsIHByb2Nlc3MuZW52LklDTE9VRF9FTUFJTCk7XG5cbiAgICAvLyBTZW5kIGFjdHVhbCBlbWFpbCB1c2luZyBpQ2xvdWQgU01UUFxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gY3JlYXRlVHJhbnNwb3J0ZXIoKTtcbiAgICBcbiAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgICAgIGZyb206IGBcIk9tc25ldCBEaWdpdGFsIEZvcnRyZXNzXCIgPGNvbnRhY3RAb21zbmV0LmNvLnVrPmAsXG4gICAgICB0bzogdG8sXG4gICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgaHRtbDogbWVzc2FnZSxcbiAgICAgIC8vIE9wdGlvbmFsOiBBZGQgdGV4dCB2ZXJzaW9uIGZvciBiZXR0ZXIgY29tcGF0aWJpbGl0eVxuICAgICAgdGV4dDogbWVzc2FnZS5yZXBsYWNlKC88W14+XSo+L2csICcnKSwgLy8gU3RyaXAgSFRNTCB0YWdzIGZvciBwbGFpbiB0ZXh0XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygn4pyFIEVtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IHZpYSBpQ2xvdWQ6Jyk7XG4gICAgY29uc29sZS5sb2coJ01lc3NhZ2UgSUQ6JywgcmVzdWx0Lm1lc3NhZ2VJZCk7XG4gICAgY29uc29sZS5sb2coJ1RvOicsIHRvKTtcbiAgICBjb25zb2xlLmxvZygnU3ViamVjdDonLCBzdWJqZWN0KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ0VtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IHZpYSBpQ2xvdWQnLFxuICAgICAgbWVzc2FnZUlkOiByZXN1bHQubWVzc2FnZUlkLFxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign4p2MIEVtYWlsIHNlbmRpbmcgZXJyb3I6JywgZXJyb3IpO1xuICAgIFxuICAgIC8vIFByb3ZpZGUgaGVscGZ1bCBlcnJvciBtZXNzYWdlc1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRmFpbGVkIHRvIHNlbmQgZW1haWwnO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnSW52YWxpZCBsb2dpbicpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9ICdJbnZhbGlkIGlDbG91ZCBlbWFpbCBjcmVkZW50aWFscy4gUGxlYXNlIGNoZWNrIHlvdXIgYXBwIHBhc3N3b3JkLic7XG4gICAgICB9IGVsc2UgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0VDT05OUkVGVVNFRCcpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9ICdVbmFibGUgdG8gY29ubmVjdCB0byBpQ2xvdWQgU01UUCBzZXJ2ZXIuIFBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogZXJyb3JNZXNzYWdlIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbi8vIEFkZGl0aW9uYWwgZW1haWwgZnVuY3Rpb25zIGZvciBlbmhhbmNlZCBmZWF0dXJlc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRXZWxjb21lRW1haWwodG86IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBjcmVhdGVUcmFuc3BvcnRlcigpO1xuICAgIFxuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgZnJvbTogYFwiT21zbmV0IERpZ2l0YWwgRm9ydHJlc3NcIiA8Y29udGFjdEBvbXNuZXQuY28udWs+YCxcbiAgICAgIHRvOiB0byxcbiAgICAgIHN1YmplY3Q6ICdXZWxjb21lIHRvIE9tc25ldCBEaWdpdGFsIEZvcnRyZXNzJyxcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87XCI+XG4gICAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMyNTYzZWI7XCI+V2VsY29tZSB0byBPbXNuZXQgRGlnaXRhbCBGb3J0cmVzczwvaDI+XG4gICAgICAgICAgPHA+RGVhciAke25hbWV9LDwvcD5cbiAgICAgICAgICA8cD5UaGFuayB5b3UgZm9yIHJlYWNoaW5nIG91dCB0byBPbXNuZXQgRGlnaXRhbCBGb3J0cmVzcy4gV2UndmUgcmVjZWl2ZWQgeW91ciBpbnF1aXJ5IGFuZCBvdXIgdGVhbSB3aWxsIHJldmlldyBpdCBzaG9ydGx5LjwvcD5cbiAgICAgICAgICA8cD5JbiB0aGUgbWVhbnRpbWUsIGhlcmUncyB3aGF0IHlvdSBjYW4gZXhwZWN0OjwvcD5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+SW5pdGlhbCByZXNwb25zZSB3aXRoaW4gMjQgaG91cnM8L2xpPlxuICAgICAgICAgICAgPGxpPkNvbXByZWhlbnNpdmUgc2VjdXJpdHkgYXNzZXNzbWVudDwvbGk+XG4gICAgICAgICAgICA8bGk+Q3VzdG9taXplZCBjeWJlcnNlY3VyaXR5IHNvbHV0aW9uczwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cD48c3Ryb25nPkJlc3QgcmVnYXJkcyw8L3N0cm9uZz48YnI+XG4gICAgICAgICAgT21zbmV0IERpZ2l0YWwgRm9ydHJlc3MgVGVhbTxicj5cbiAgICAgICAgICBQaG9uZTogMDExMyA1MzQgNzQ0NTxicj5cbiAgICAgICAgICBFbWFpbDogY29udGFjdEBvbXNuZXQuY28udWs8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICB9O1xuXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKCfinIUgV2VsY29tZSBlbWFpbCBzZW50IHRvOicsIHRvKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCB3ZWxjb21lIGVtYWlsOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZEZvbGxvd1VwRW1haWwodG86IHN0cmluZywgbmFtZTogc3RyaW5nLCBkYXlzOiBudW1iZXIpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IGNyZWF0ZVRyYW5zcG9ydGVyKCk7XG4gICAgXG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgICBmcm9tOiBgXCJPbXNuZXQgRGlnaXRhbCBGb3J0cmVzc1wiIDxjb250YWN0QG9tc25ldC5jby51az5gLFxuICAgICAgdG86IHRvLFxuICAgICAgc3ViamVjdDogYEZvbGxvdy11cDogWW91ciBDeWJlcnNlY3VyaXR5IENvbnN1bHRhdGlvbmAsXG4gICAgICBodG1sOiBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IG1heC13aWR0aDogNjAwcHg7IG1hcmdpbjogMCBhdXRvO1wiPlxuICAgICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjMjU2M2ViO1wiPkZvbGxvdy11cDogWW91ciBDeWJlcnNlY3VyaXR5IENvbnN1bHRhdGlvbjwvaDI+XG4gICAgICAgICAgPHA+RGVhciAke25hbWV9LDwvcD5cbiAgICAgICAgICA8cD5XZSB3YW50ZWQgdG8gZm9sbG93IHVwIG9uIHlvdXIgY29uc3VsdGF0aW9uIHJlcXVlc3QgZnJvbSAke2RheXN9IGRheSR7ZGF5cyA+IDEgPyAncycgOiAnJ30gYWdvLjwvcD5cbiAgICAgICAgICA8cD5JcyB0aGVyZSBhbnl0aGluZyBlbHNlIHdlIGNhbiBhc3Npc3QgeW91IHdpdGggcmVnYXJkaW5nIHlvdXIgY3liZXJzZWN1cml0eSBuZWVkcz88L3A+XG4gICAgICAgICAgPHA+T3VyIHRlYW0gaXMgcmVhZHkgdG8gaGVscCB5b3Ugc2VjdXJlIHlvdXIgZGlnaXRhbCBhc3NldHMuPC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+QmVzdCByZWdhcmRzLDwvc3Ryb25nPjxicj5cbiAgICAgICAgICBPbXNuZXQgRGlnaXRhbCBGb3J0cmVzcyBUZWFtPGJyPlxuICAgICAgICAgIFBob25lOiAwMTEzIDUzNCA3NDQ1PGJyPlxuICAgICAgICAgIEVtYWlsOiBjb250YWN0QG9tc25ldC5jby51azwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgIH07XG5cbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJ+KchSBGb2xsb3ctdXAgZW1haWwgc2VudCB0bzonLCB0byk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNlbmQgZm9sbG93LXVwIGVtYWlsOicsIGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiSUNMT1VEX0VNQUlMIiwicGFzcyIsIklDTE9VRF9BUFBfUEFTU1dPUkQiLCJ0bHMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJkZWJ1ZyIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJ0byIsInN1YmplY3QiLCJtZXNzYWdlIiwiY2xpZW50TmFtZSIsImVycm9yIiwic3RhdHVzIiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzdWNjZXNzIiwic2ltdWxhdGVkIiwidHJhbnNwb3J0ZXIiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJodG1sIiwidGV4dCIsInJlcGxhY2UiLCJyZXN1bHQiLCJzZW5kTWFpbCIsIm1lc3NhZ2VJZCIsImVycm9yTWVzc2FnZSIsIkVycm9yIiwiaW5jbHVkZXMiLCJzZW5kV2VsY29tZUVtYWlsIiwibmFtZSIsInNlbmRGb2xsb3dVcEVtYWlsIiwiZGF5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-email/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fok%2FDeveloper%2Fomsnet_digital_fortress_cybersecurity_website_0o7r4g%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fok%2FDeveloper%2Fomsnet_digital_fortress_cybersecurity_website_0o7r4g&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();