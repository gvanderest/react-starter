import reducer, { createMonster } from "../monsters";

describe("monsters", () => {
    it("should handle creating monsters", () => {
        const store = {
            byId: {},
        };

        expect(Object.keys(store.byId).length).toBe(0);

        const action = createMonster("a goblin", "goblin");
        const newStore = reducer(store, action);

        const { byId } = newStore;
        expect(Object.keys(byId).length).toBe(1);

        const goblin = byId[Object.keys(byId)[0]];

        expect(goblin.name).toBe("a goblin");
        expect(goblin.race).toBe("goblin");
    });
});
