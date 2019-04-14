
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@activfinancial/cg-api')) :
    typeof define === 'function' && define.amd ? define(['@activfinancial/cg-api'], factory) :
    (global = global || self, factory(global.activ));
}(this, function (cgApi) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    /*
     * cg-api starter application.
     */
    // ---------------------------------------------------------------------------------------------------------------------------------
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            document.body.appendChild(document.createTextNode("Connecting..."));
            let str;
            try {
                const client = yield cgApi.connect({
                    userId: "USERNAME",
                    password: "PASSWORD",
                    url: "ams://cg-ny4-replay.activfinancial.com:9002/ContentGateway:Service"
                });
                str = "connected!";
                client.disconnect();
            }
            catch (error) {
                str = `failed to connect - ${error.toString()}`;
            }
            document.body.appendChild(document.createTextNode(str));
        });
    })();

}));
//# sourceMappingURL=index.js.map
