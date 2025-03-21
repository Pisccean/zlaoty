"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTokenStore = exports.MemoryStore = exports.Store = void 0;
__exportStar(require("./CloudClient"), exports);
__exportStar(require("./types"), exports);
var store_1 = require("./store");
Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return store_1.Store; } });
Object.defineProperty(exports, "MemoryStore", { enumerable: true, get: function () { return store_1.MemoryStore; } });
Object.defineProperty(exports, "FileTokenStore", { enumerable: true, get: function () { return store_1.FileTokenStore; } });
