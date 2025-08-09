import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative z-[1] max-w-[1400px] mx-auto my-0 pt-0 pb-[50px] px-5">
      <div className="flex justify-center items-center shadow-[0_7px_0_0_#000] bg-[#FFE149] mb-10 px-[29px] py-[13px] rounded-lg border-2 border-solid border-black max-sm:px-5 max-sm:py-[15px]">
        <div className="text-2xl font-bold text-black text-center tracking-[0.96px] uppercase max-sm:text-lg max-sm:tracking-[0.5px]">
          You receive monthly usage + wellness reports It's plug-and-play. But powerful
        </div>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"1:604\" width=\"67\" height=\"66\" viewBox=\"0 0 67 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"bottom-icon\" style=\"position: absolute; bottom: 20px; right: 50px; width: 64px; height: 65px\"> <g clip-path=\"url(#clip0_1_604)\"> <path d=\"M57.1174 62.2648L57.044 57.8489L60.852 57.7855L60.9255 62.2014C60.9427 63.2369 60.1043 64.0903 59.0526 64.1078C58.0014 64.1253 57.1346 63.3003 57.1174 62.2648Z\" fill=\"black\"></path> <path d=\"M46.9205 62.4342L46.847 58.0183L50.6551 57.955L50.7285 62.3709C50.7457 63.4064 49.9074 64.2598 48.8557 64.2773C47.804 64.2948 46.9377 63.4697 46.9205 62.4342Z\" fill=\"black\"></path> <path d=\"M3.83934 2.89241L4.63256 50.5841C4.73046 56.4705 9.67383 61.1784 15.6522 61.079C21.6311 60.9796 26.4151 56.1098 26.3172 50.2234L25.7327 15.0823C25.6005 7.12828 32.0652 0.547693 40.1435 0.413333C48.2217 0.278974 54.9012 6.64094 55.0335 14.5949L55.2971 30.4384C61.0837 31.2442 65.5916 36.104 65.6903 42.0362L65.8572 52.0764C65.8745 53.1119 65.0361 53.9653 63.9844 53.9828L43.5899 54.322C42.5387 54.3395 41.6719 53.5144 41.6547 52.4789L41.4877 42.4388C41.389 36.5065 45.7329 31.4995 51.489 30.5018L51.2255 14.6583C51.1276 8.77137 46.1842 4.06338 40.2058 4.16281C34.2275 4.26225 29.4429 9.13204 29.5408 15.0189L30.1253 50.1601C30.2576 58.114 23.7933 64.6941 15.7146 64.8285C7.6363 64.9629 0.956785 58.6014 0.824492 50.6474L0.0312721 2.95575C0.0140494 1.92025 0.852443 1.06683 1.90412 1.04934C2.95581 1.03185 3.82212 1.85691 3.83934 2.89241Z\" fill=\"black\"></path> </g> <defs> <clipPath id=\"clip0_1_604\"> <rect width=\"64\" height=\"65\" fill=\"white\" transform=\"matrix(-0.01663 -0.999862 -0.999862 0.01663 66.0554 63.9912)\"></rect> </clipPath> </defs> </svg>",
          }}
        />
      </div>
    </section>
  );
};
