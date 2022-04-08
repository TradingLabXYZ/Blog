var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
var import_Header_5927a997 = require("../../chunks/Header-5927a997.js");
const Articles = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col h-full w-full xs:py-8 sm:py-12 bg-universe text-cream"}"><div class="${"m-auto font-bold xs:text-3xl sm:text-4xl text-center"}">Laboratory Notebook
  </div>
  <div class="${"flex justify-center xs:space-y-8 sm:space-y-20 xs:my-8 sm:my-20"}">
    <a href="${"/initial_evolution"}" class="${"flex flex-col bg-sandpurple xs:p-2 sm:p-4 rounded rounded-md"}"><div class="${"bg-oldpurple flex xs:flex-col sm:flex-row xs:space-y-2 sm:space-x-4 align-middle items-center justify-center rounded rounded-md xs:py-2 sm:py-4"}"><div class="${"text-md"}">07 April 2022
        </div>
        <div class="${"font-bold text-3xl"}">Initial Evolution
        </div></div>
      <div class="${"flex xs:flex-col sm:flex-row xs:text-md sm:text-xl justify-center align-middle items-center"}"><img src="${"/articles/1_EndFirstPhase/evolution.png"}" class="${"xs:h-20 sm:h-40 rounded rounded-xl"}" alt="${"Evolution"}">
        <div class="${"xs:px-4 sm:px-12 space-y-4 xs:mt-4 sm:mt-8 text-justify sm:max-w-xl"}">Despite we are only at the beginning,
          it has been an incredible journey so far.
          We have been able to transform a small idea
          into a basic yet fully functional working product.
          It is time to pause the experiments for a moment
          and make a few important considerations about...
        </div></div></a></div></div>`;
});
const prerender = true;
const Routes = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  return `<div>${(0, import_index_2dc61825.v)(import_Header_5927a997.H, "Header").$$render($$result, {}, {}, {})}
  ${(0, import_index_2dc61825.v)(Articles, "Articles").$$render($$result, {}, {}, {})}
  ${(0, import_index_2dc61825.v)(import_Header_5927a997.F, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
