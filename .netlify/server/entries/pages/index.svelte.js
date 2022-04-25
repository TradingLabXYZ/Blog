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
var import_index_be5d7ba6 = require("../../chunks/index-be5d7ba6.js");
var import_MetaTags_0792d901 = require("../../chunks/MetaTags-0792d901.js");
const Articles = (0, import_index_be5d7ba6.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col xs:py-8 sm:py-12 bg-universe text-cream bottom-3"}"><h1 class="${"font-bold xs:text-3xl sm:text-4xl text-center"}">Crypto Community Laboratory
  </h1>
  <div class="${"text-justify flex flex-col mx-auto xs:w-4/5 sm:w-2/4 text-xl my-2 space-y-2"}"><p class="${""}">TradingLab aims to create a fun, entertaining, never ending experience in which a crypto community can grow and
      learn from each others simply sharing their crypto portfolio.
    </p>
    <p class="${""}">Here on this blog our crypto community can enjoy our latest updates, as well as learning interesting new things
      about the exciting crypto world. 
    </p></div>
  <div class="${"flex flex-col justify-center xs:space-y-8 sm:space-y-20 my-8 w-3/5 m-auto"}">
    <a href="${"/crypto_community_presentation"}" class="${"flex flex-col bg-sandpurple xs:p-2 sm:p-4 rounded-md"}"><div class="${"bg-oldpurple flex xs:flex-col sm:flex-row space-x-4 align-middle items-center justify-center"}"><h3 class="${"text-md"}">25 April 2022
        </h3>
        <h2 class="${"font-bold text-3xl"}">Crypto Community Presentation
        </h2></div>
      <div class="${"flex xs:flex-col sm:flex-row xs:text-md sm:text-xl justify-center align-middle items-center"}"><img src="${"/articles/3_CommunityPresentation/tradinglab.png"}" class="${"xs:h-20 sm:h-40 rounded-xl"}" alt="${"TradingLab hero section"}">
        <p class="${"xs:px-4 sm:px-12 space-y-4 xs:mt-4 sm:mt-8 text-justify sm:max-w-xl"}">They say that the first time is the most difficult one,
          not sure if it is true, but our first public speaking
          to a crypto community could not have been better.
          We have been invited from the Million Token
          community on their discord server to present 
          TradingLab. For a few days before we have...
        </p></div></a>

    
    <a href="${"/crypto_competition_announcement"}" class="${"flex flex-col bg-sandpurple xs:p-2 sm:p-4 rounded-md"}"><div class="${"bg-oldpurple flex xs:flex-col sm:flex-row space-x-4 align-middle items-center justify-center"}"><h3 class="${"text-md"}">17 April 2022
        </h3>
        <h2 class="${"font-bold text-3xl"}">Crypto competition announcement
        </h2></div>
      <div class="${"flex xs:flex-col sm:flex-row xs:text-md sm:text-xl justify-center align-middle items-center"}"><p class="${"xs:px-4 sm:px-12 space-y-4 xs:mt-4 sm:mt-8 text-justify sm:max-w-xl"}">Building a crypto community around an online 
          service requires the development of innovative
          marketing strategies. We are thrilled today
          to publicy announce to our crypto community
          how TradingLab has prepared a first crypto
          competition in which you are invited to...
        </p>
        <img src="${"/articles/2_FirstCompetition/btcmm.png"}" class="${"xs:h-20 sm:h-40 rounded-xl"}" alt="${"Bitcoin and Million Token"}"></div></a>

    
    <a href="${"/initial_evolution"}" class="${"flex flex-col bg-sandpurple xs:p-2 sm:p-4 rounded-md"}"><div class="${"bg-oldpurple flex xs:flex-col sm:flex-row space-x-4 align-middle items-center justify-center"}"><h3 class="${"text-md"}">07 April 2022
        </h3>
        <h2 class="${"font-bold text-3xl"}">Initial Evolution
        </h2></div>
      <div class="${"flex xs:flex-col sm:flex-row xs:text-md sm:text-xl justify-center align-middle items-center"}"><img src="${"/articles/1_EndFirstPhase/evolution.png"}" class="${"xs:h-20 sm:h-40 rounded-xl"}" alt="${"TradingLab Crypto Community Evolution"}">
        <p class="${"xs:px-4 sm:px-12 space-y-4 xs:mt-4 sm:mt-8 text-justify sm:max-w-xl"}">Despite we are only at the beginning,
          it has been an incredible journey so far.
          We have been able to transform a small idea
          into a basic yet fully functional crypto portfolio.
          It is time to pause the experiments for a moment
          and update our crypto community about a few important...
        </p></div></a></div></div>`;
});
const prerender = true;
const Routes = (0, import_index_be5d7ba6.c)(($$result, $$props, $$bindings, slots) => {
  return `<div>${(0, import_index_be5d7ba6.v)(import_MetaTags_0792d901.H, "Header").$$render($$result, {}, {}, {})}
  ${(0, import_index_be5d7ba6.v)(Articles, "Articles").$$render($$result, {}, {}, {})}
  ${(0, import_index_be5d7ba6.v)(import_MetaTags_0792d901.F, "Footer").$$render($$result, {}, {}, {})}</div>

${(0, import_index_be5d7ba6.v)(import_MetaTags_0792d901.M, "MetaTags").$$render($$result, {
    title: "TradingLab - Crypto Community Blog",
    description: "TradingLab aims to create a fun, entertaining, never ending user experience in which crypto passionate can converge, learning and earning from each others simply sharing their crypto portfolios.",
    canonical: "https://blog.tradinglab.xyz",
    openGraph: {
      url: "https://blog.tradinglab.xyz",
      type: "website",
      title: "TradingLab - Crypto Community Blog",
      description: "TradingLab aims to create a fun, entertaining, never ending user experience in which crypto passionate can converge, learning and earning from each others simply sharing their crypto portfolios.",
      images: [
        {
          url: "https://tradinglab.xyz/img/logo.181ac5cb.png",
          width: 617,
          height: 619,
          alt: "TradigingLab logo"
        }
      ]
    },
    twitter: {
      cardType: "summary",
      title: "TradingLab - Crypto Community Blog",
      description: "TradingLab aims to create a fun, entertaining, never ending user experience in which crypto passionate can converge, learning and earning from each others simply sharing their crypto portfolios.",
      image: "https://tradinglab.xyz/img/logo.181ac5cb.png",
      imageAlt: "TradingLab logo"
    }
  }, {}, {})}`;
});
