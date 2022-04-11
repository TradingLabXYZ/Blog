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
  default: () => Initial_evolution,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
var import_Header_5927a997 = require("../../chunks/Header-5927a997.js");
const prerender = true;
const Initial_evolution = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  return `<div>${(0, import_index_2dc61825.v)(import_Header_5927a997.H, "Header").$$render($$result, {}, {}, {})}
  <div class="${"grid xs:grid-cols-none sm:grid-cols-8 bg-universe py-12"}"><div class="${"xs:hidden sm:block sm:col-span-2"}"></div>
    <div class="${"xs:col-span-none sm:col-span-4 text-cream text-xl xs:px-8 sm:px-0 xs:text-left sm:text-justify tracking-wider space-y-6"}"><div class="${"text-6xl"}">Initial Evolution
      </div>
      <p>Despite we are only at the beginning,
        it has been an incredible journey so far.
        We have been able to transform a small idea
        into a basic yet fully functional working product.
        It is time to pause the experiments for a moment
        and make a few important considerations about what
        has been achieved till now and how we plan to manage
        the next steps.
      </p>
      <div class="${"font-bold text-3xl"}">It often starts with a problem</div>
      <p>The idea behind TradingLab took shape during the first months
        of 2021. At that time a wild crypto bull run was happening,
        and keeping track of a wallet became a critical activity
        in order to be able to optimize return as well as keeping
        everything in the right place.
        A first rough portfolio tracker version was created using
        Google Sheet, and a few macros behind it. Admiring its effectiveness,
        friends raised their hands asking something similar for their own,
        considering also  how the market was not offering anything enough
        easy to use in order to facilitate their life. Keeping track
        of a crypto portfolio still remains a struggle for many 
        newbies out there.
      </p>
      <p>The goal was clear: building a portfolio tracker disconnected
        from exchanges, allowing flexibility and ease of interaction, 
        with a minimal yet attractive user interface.
        After months of development, countless iterations starting from scratch,
        as well as the need to learn many new technologies, a first version
        of TradingLab was ready to rumble.
        In the meanwhile, removing complexities and features, leaving
        TradingLab as much naked as possible.
      </p>
      <div class="${"font-bold text-3xl"}">Celebrating achievements</div>
      <p>For the techies out there, TradingLab shines because of its simplicity:
        a Golang back-end, a Vuejs front-end, a web3 authentication system,
        a Postgresql database and a few CI/CD pipelines. There would be so much
        more to say about technology, but this might be a topic to address
        in a proper blog article.
      </p>
      <p>One other incredibly important aspect of this first phase of TradingLab
        has been the identification of an identify on which building a design
        and marketing strategy. It is almost embarassing to see the first versions
        of TradingLab, almost completely nonsense.
        During several design iterations it has been possible to create a really
        cool idea around a &quot;crypto laboratory&quot; in which creating any kind of experiment.
        After having accepted this, many things came easily: a new logo, a new 
        landing page, a youtube page, a twitter profile, a discord community,
        and now also this highly customised blog.
      </p>
      <div class="${"font-bold text-3xl"}">Now, what&#39;s next?</div>
      <p>We have identified three macro phases we need in order to fully fulfill
        our (initial) ambitions. The first one is the one you just read about,
        creating a lean working product potentially ready to scale with a fresh brand identity.
        Now starts the second one, which is fully about marketing.
        It is completely stupid keeping adding features or improving the codebase
        if no users are able to arrive to the platform starting using it.
        So it comes a really fascinating challenge, which is creating traffic.
        A few ideas are currently under evaluation, and one in particular 
        looks so exciting and promising that makes us all so thrilled about it.
        Stay tuned, more is coming.
      </p>
      <p>Above we mentioned three macro phases right? Well, the third one is
        to finally fully convert TradingLab into a Web3 toy regulated by
        smart contracts. A lot of time has been invested already in this direction,
        and we can&#39;t wait to be able to finally apply our knowledge into it.
      </p>
      <p class="${"font-bold"}">Thanks so much for finding the time to read these few words.
      </p></div></div>
  ${(0, import_index_2dc61825.v)(import_Header_5927a997.F, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
