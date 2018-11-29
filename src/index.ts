/*
 * cg-api starter application.
 */

import { connect } from "@activfinancial/cg-api";

// ---------------------------------------------------------------------------------------------------------------------------------

(async function () {
    document.body.appendChild(document.createTextNode("Connecting..."));

    let str: string;

    try {
        const client = await connect({
            userId: "USERNAME",
            password: "PASSWORD",
            url: "ams://cg-ny4-replay.activfinancial.com:9002/ContentGateway:Service"
        });

        str = "connected!";

        client.disconnect();
    } catch (error) {
        str = `failed to connect - ${error.toString()}`;
    }

    document.body.appendChild(document.createTextNode(str));
})();
