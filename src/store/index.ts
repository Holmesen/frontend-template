import { createPinia, Pinia } from "pinia";

const store: Pinia = createPinia();
export default store;

export * from './modules/base'