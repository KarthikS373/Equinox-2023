import Environment from "./three/environment.js";
import Preprocess from "./three/preprocess.js";

const __init__ = () => {
  console.clear();
  console.log(`
      ███████╗░██████╗░██╗░░░██╗██╗███╗░░██╗░█████╗░██╗░░██╗
      ██╔════╝██╔═══██╗██║░░░██║██║████╗░██║██╔══██╗╚██╗██╔╝
      █████╗░░██║██╗██║██║░░░██║██║██╔██╗██║██║░░██║░╚███╔╝░
      ██╔══╝░░╚██████╔╝██║░░░██║██║██║╚████║██║░░██║░██╔██╗░
      ███████╗░╚═██╔═╝░╚██████╔╝██║██║░╚███║╚█████╔╝██╔╝╚██╗
      ╚══════╝░░░╚═╝░░░░╚═════╝░╚═╝╚═╝░░╚══╝░╚════╝░╚═╝░░╚═╝
                                  Hand Crafted 2023
  
      Follow us:
          - Instagram : https://www.instagram.com/equinoxiiitl/
          - Twitter   : https://twitter.com/equinoxiiitl
          - Discord   : https://discord.com/invite/PytHHH8yxN
          - LinkedIn  : https://www.linkedin.com/company/equinox-iiitl/
  `);

  const canvas = document.querySelector("#webgl");
  window.dimensions = new Preprocess();
  window.environment = new Environment(canvas);
};

export default __init__;
