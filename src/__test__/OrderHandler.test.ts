import { expect } from "chai";

import { OrderHandler } from "../OrderHandler";
import { Handler } from "stentor";

const props: Handler = {
    type: "OrderHandler",
    appId: "appId",
    organizationId: "organizationId",
    intentId: "intentId",
    content: {}
}

describe(`${OrderHandler.name}`, () => {
    describe(`#constructor()`, () => {
        it(`returns an instance of`, () => {
            expect(new OrderHandler(props)).to.be.an.instanceOf(OrderHandler);
        });
    });
});
