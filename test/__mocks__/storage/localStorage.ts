export const spyLocalStorage = () => {
    vi.mock("module/common/shared/utils/localStorage", {spy: true});
};
