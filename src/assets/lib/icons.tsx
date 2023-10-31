import styled from "@emotion/styled";

export type IconProps = {
  style?: string;
};

const Icon = styled.svg<{ $style: string }>`
  ${(props) => props.$style}
`;

export const CardsIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="375"
    height="200"
    viewBox="0 0 375 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_59_153)">
      <rect
        x="27.5684"
        y="72.8982"
        width="94.9945"
        height="186.713"
        rx="23.29"
        transform="rotate(-15 27.5684 72.8982)"
        fill="url(#paint0_linear_59_153)"
      />
    </g>
    <g filter="url(#filter1_d_59_153)">
      <rect
        x="78.3101"
        y="36.303"
        width="94.7128"
        height="187.097"
        rx="23.29"
        fill="url(#paint1_linear_59_153)"
      />
    </g>
    <g filter="url(#filter2_d_59_153)">
      <rect
        x="126.807"
        y="21.2874"
        width="94.9945"
        height="186.713"
        rx="23.29"
        transform="rotate(8.87669 126.807 21.2874)"
        fill="url(#paint2_linear_59_153)"
      />
    </g>
    <g filter="url(#filter3_d_59_153)">
      <rect
        x="223.364"
        y="11.4604"
        width="128.652"
        height="252.868"
        rx="23.29"
        transform="rotate(28.0265 223.364 11.4604)"
        fill="url(#paint3_linear_59_153)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_59_153"
        x="0.96715"
        y="22.487"
        width="213.47"
        height="278.325"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10.0924" dy="10.8687" />
        <feGaussianBlur stdDeviation="20.961" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_59_153"
        x="46.4803"
        y="3.69692"
        width="178.557"
        height="270.941"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10.0924" dy="9.31602" />
        <feGaussianBlur stdDeviation="20.961" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_59_153"
        x="69.4769"
        y="-11.8888"
        width="199.889"
        height="276.356"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10.0924" dy="5.43434" />
        <feGaussianBlur stdDeviation="20.961" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_59_153"
        x="80.9249"
        y="-12.9379"
        width="299.811"
        height="351.094"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10.0924" dy="9.31602" />
        <feGaussianBlur stdDeviation="20.961" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_153"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_59_153"
        x1="55.6104"
        y1="148.215"
        x2="135.066"
        y2="-76.4487"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_59_153"
        x1="160.818"
        y1="231.546"
        x2="84.5045"
        y2="134.963"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E1E1E1" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_59_153"
        x1="170.345"
        y1="118.082"
        x2="1.70225"
        y2="-126.174"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_59_153"
        x1="316.01"
        y1="136.28"
        x2="255.7"
        y2="-106.542"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="#FFE7E0" />
      </linearGradient>
    </defs>
  </Icon>
);

export const BigCardsIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="600"
    height="400"
    viewBox="0 0 375 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_59_153)">
      <rect
        x="27.5684"
        y="72.8982"
        width="94.9945"
        height="186.713"
        rx="23.29"
        transform="rotate(-15 27.5684 72.8982)"
        fill="url(#paint0_linear_59_153)"
      />
    </g>
    <g filter="url(#filter1_d_59_153)">
      <rect
        x="78.3101"
        y="36.303"
        width="94.7128"
        height="187.097"
        rx="23.29"
        fill="url(#paint1_linear_59_153)"
      />
    </g>
    <g filter="url(#filter2_d_59_153)">
      <rect
        x="126.807"
        y="21.2874"
        width="94.9945"
        height="186.713"
        rx="23.29"
        transform="rotate(8.87669 126.807 21.2874)"
        fill="url(#paint2_linear_59_153)"
      />
    </g>
    <g filter="url(#filter3_d_59_153)">
      <rect
        x="223.364"
        y="11.4604"
        width="128.652"
        height="252.868"
        rx="23.29"
        transform="rotate(28.0265 223.364 11.4604)"
        fill="url(#paint3_linear_59_153)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_59_153"
        x="0.96715"
        y="22.487"
        width="213.47"
        height="278.325"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10.0924" dy="10.8687" />
        <feGaussianBlur stdDeviation="20.961" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_59_153"
        x="46.4803"
        y="3.69692"
        width="178.557"
        height="270.941"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10.0924" dy="9.31602" />
        <feGaussianBlur stdDeviation="20.961" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_59_153"
        x="69.4769"
        y="-11.8888"
        width="199.889"
        height="276.356"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10.0924" dy="5.43434" />
        <feGaussianBlur stdDeviation="20.961" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_59_153"
        x="80.9249"
        y="-12.9379"
        width="299.811"
        height="351.094"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10.0924" dy="9.31602" />
        <feGaussianBlur stdDeviation="20.961" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_153"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_59_153"
        x1="55.6104"
        y1="148.215"
        x2="135.066"
        y2="-76.4487"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_59_153"
        x1="160.818"
        y1="231.546"
        x2="84.5045"
        y2="134.963"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E1E1E1" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_59_153"
        x1="170.345"
        y1="118.082"
        x2="1.70225"
        y2="-126.174"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_59_153"
        x1="316.01"
        y1="136.28"
        x2="255.7"
        y2="-106.542"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="#FFE7E0" />
      </linearGradient>
    </defs>
  </Icon>
);

export const BarIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="452"
    height="312"
    viewBox="0 0 452 312"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_71_195)">
      <rect
        x="41"
        y="174"
        width="124"
        height="334"
        rx="30"
        fill="url(#paint0_linear_71_195)"
      />
    </g>
    <g filter="url(#filter1_d_71_195)">
      <rect
        x="135"
        y="116"
        width="124"
        height="334"
        rx="30"
        fill="url(#paint1_linear_71_195)"
      />
    </g>
    <g filter="url(#filter2_d_71_195)">
      <rect
        x="213"
        y="78"
        width="119"
        height="334"
        rx="30"
        fill="url(#paint2_linear_71_195)"
      />
    </g>
    <g filter="url(#filter3_d_71_195)">
      <rect
        x="300"
        y="20"
        width="122"
        height="392"
        rx="30"
        fill="url(#paint3_linear_71_195)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_71_195"
        x="0"
        y="154"
        width="232"
        height="442"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="34" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_71_195"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_71_195"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_71_195"
        x="94"
        y="96"
        width="232"
        height="442"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="34" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_71_195"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_71_195"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_71_195"
        x="154"
        y="25"
        width="261"
        height="476"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="12" dy="18" />
        <feGaussianBlur stdDeviation="35.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_71_195"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_71_195"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_71_195"
        x="259"
        y="0"
        width="230"
        height="500"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="34" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_71_195"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_71_195"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_71_195"
        x1="165"
        y1="399"
        x2="74.3479"
        y2="196.697"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_71_195"
        x1="259"
        y1="341"
        x2="168.348"
        y2="138.697"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_71_195"
        x1="305.605"
        y1="369.5"
        x2="146.651"
        y2="58.5852"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_71_195"
        x1="278.5"
        y1="7.5"
        x2="450.644"
        y2="197.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBB8A4" />
        <stop offset="1" stopColor="#F1582C" />
        <stop offset="1" stopColor="#FF5522" />
      </linearGradient>
    </defs>
  </Icon>
);

export const DocsIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="433"
    height="426"
    viewBox="0 0 433 426"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_12_56)">
      <rect
        x="75"
        y="20"
        width="291"
        height="356"
        rx="30"
        fill="url(#paint0_linear_12_56)"
      />
    </g>
    <g filter="url(#filter1_d_12_56)">
      <rect
        x="5"
        y="39"
        width="303"
        height="370"
        rx="30"
        fill="url(#paint1_linear_12_56)"
        shapeRendering="crispEdges"
      />
    </g>
    <g filter="url(#filter2_d_12_56)">
      <rect x="27" y="114" width="242" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter3_d_12_56)">
      <rect x="27" y="162" width="199" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter4_d_12_56)">
      <rect x="27" y="366" width="63" height="21" rx="10.5" fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_d_12_56"
        x="34"
        y="0"
        width="399"
        height="464"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="34" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_12_56"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_12_56"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_12_56"
        x="0"
        y="13"
        width="349"
        height="416"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="18" dy="-3" />
        <feGaussianBlur stdDeviation="11.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_12_56"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_12_56"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_12_56"
        x="18"
        y="114"
        width="268"
        height="47"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_12_56"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_12_56"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_12_56"
        x="20"
        y="162"
        width="225"
        height="48"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="6" dy="14" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_12_56"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_12_56"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_d_12_56"
        x="21"
        y="366"
        width="89"
        height="47"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="7" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_12_56"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_12_56"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_12_56"
        x1="328.5"
        y1="391.5"
        x2="210.651"
        y2="150.661"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E1E1E1" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_12_56"
        x1="308"
        y1="450.5"
        x2="-128.439"
        y2="-614.789"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F24E1E" />
        <stop offset="1" stopColor="#FFC5B4" stopOpacity="0.37" />
      </linearGradient>
    </defs>
  </Icon>
);

export const EllipseShape = ({ style }: IconProps) => (
  <Icon
    $style={`stroke:#F3673E; ${style}`}
    width="842"
    height="325"
    viewBox="0 0 842 325"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M838.217 101.206C844.909 126.182 839.442 153.192 823.743 180.681C808.042 208.173 782.124 236.111 747.983 262.9C679.703 316.477 578.615 365.398 460.902 396.94C343.188 428.481 231.183 436.658 145.262 424.399C102.301 418.269 65.8858 407.033 38.5427 391.075C11.2022 375.118 -7.03745 354.46 -13.7296 329.485C-20.4218 304.509 -14.9549 277.499 0.744365 250.01C16.4451 222.518 42.3636 194.58 76.5043 167.791C144.784 114.214 245.872 65.2927 363.586 33.7515C481.299 2.21023 593.305 -5.96679 679.225 6.2925C722.187 12.4223 758.602 23.6578 785.945 39.616C813.285 55.5726 831.525 76.2307 838.217 101.206Z" />
  </Icon>
);

export const WatchWithBeltIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="254"
    height="200"
    viewBox="0 0 254 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_60_154)">
      <ellipse
        cx="127"
        cy="130.5"
        rx="161.5"
        ry="118"
        transform="rotate(-90 127 130.5)"
        fill="url(#paint0_linear_60_154)"
        shapeRendering="crispEdges"
      />
    </g>
    <g filter="url(#filter1_d_60_154)">
      <ellipse
        cx="127"
        cy="130.5"
        rx="118.5"
        ry="118"
        transform="rotate(-90 127 130.5)"
        fill="white"
      />
    </g>
    <g filter="url(#filter2_d_60_154)">
      <ellipse
        cx="127"
        cy="121.5"
        rx="109.5"
        ry="109"
        transform="rotate(-90 127 121.5)"
        fill="white"
      />
    </g>
    <rect
      x="124"
      y="31"
      width="7"
      height="109"
      rx="3.5"
      fill="url(#paint1_linear_60_154)"
    />
    <rect
      x="156.195"
      y="84.0752"
      width="5.93742"
      height="63.5266"
      rx="2.96871"
      transform="rotate(30 156.195 84.0752)"
      fill="url(#paint2_linear_60_154)"
    />
    <defs>
      <filter
        id="filter0_d_60_154"
        x="0"
        y="-36"
        width="254"
        height="341"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_60_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_60_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_60_154"
        x="0"
        y="7"
        width="254"
        height="255"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_60_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_60_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_60_154"
        x="9"
        y="7"
        width="236"
        height="237"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_60_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_60_154"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_60_154"
        x1="44.0935"
        y1="145.787"
        x2="383.662"
        y2="-140.955"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1582C" />
        <stop offset="1" stopColor="#F1582C" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_60_154"
        x1="102"
        y1="149.561"
        x2="87.6769"
        y2="-4.18095"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="#F3673E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_60_154"
        x1="160.44"
        y1="144.074"
        x2="111.79"
        y2="42.6946"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="#F3673E" stopOpacity="0" />
      </linearGradient>
    </defs>
  </Icon>
);

export const WatchIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="254"
    height="200"
    viewBox="0 0 254 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter1_d_60_154)">
      <ellipse
        cx="127"
        cy="130.5"
        rx="118.5"
        ry="118"
        transform="rotate(-90 127 130.5)"
        fill="white"
      />
    </g>
    <g filter="url(#filter2_d_60_154)">
      <ellipse
        cx="127"
        cy="121.5"
        rx="109.5"
        ry="109"
        transform="rotate(-90 127 121.5)"
        fill="white"
      />
    </g>
    <rect
      x="124"
      y="31"
      width="7"
      height="109"
      rx="3.5"
      fill="url(#paint1_linear_60_154)"
    />
    <rect
      x="156.195"
      y="84.0752"
      width="5.93742"
      height="63.5266"
      rx="2.96871"
      transform="rotate(30 156.195 84.0752)"
      fill="url(#paint2_linear_60_154)"
    />
    <defs>
      <filter
        id="filter0_d_60_154"
        x="0"
        y="-36"
        width="254"
        height="341"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_60_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_60_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_60_154"
        x="0"
        y="7"
        width="254"
        height="255"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_60_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_60_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_60_154"
        x="9"
        y="7"
        width="236"
        height="237"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_60_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_60_154"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint1_linear_60_154"
        x1="102"
        y1="149.561"
        x2="87.6769"
        y2="-4.18095"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="#F3673E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_60_154"
        x1="160.44"
        y1="144.074"
        x2="111.79"
        y2="42.6946"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3673E" />
        <stop offset="1" stopColor="#F3673E" stopOpacity="0" />
      </linearGradient>
    </defs>
  </Icon>
);

export const BlackCardsIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="135"
    height="121"
    viewBox="0 0 135 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_74_210)">
      <rect
        x="30.9485"
        y="13.7513"
        width="124.082"
        height="189.064"
        rx="30"
        transform="rotate(-30 30.9485 13.7513)"
        fill="url(#paint0_linear_74_210)"
      />
    </g>
    <g filter="url(#filter1_d_74_210)">
      <rect
        x="72.7194"
        y="3.87582"
        width="124.082"
        height="203.971"
        rx="30"
        transform="rotate(-30 72.7194 3.87582)"
        fill="url(#paint1_linear_74_210)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_74_210"
        x="0.924316"
        y="-79.3138"
        width="288.038"
        height="311.823"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_210"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_210"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_74_210"
        x="42.6952"
        y="-89.1893"
        width="295.492"
        height="324.733"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_210"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_210"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_74_210"
        x1="33.6024"
        y1="169.813"
        x2="58.2345"
        y2="-19.3078"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C5C5C" />
        <stop offset="1" stopColor="#B4B4B4" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_74_210"
        x1="75.3733"
        y1="172.243"
        x2="103.965"
        y2="-31.2336"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C5C5C" />
        <stop offset="1" stopColor="#B4B4B4" />
      </linearGradient>
    </defs>
  </Icon>
);

export const GreenCardsIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="164"
    height="121"
    viewBox="0 0 164 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_74_211)">
      <rect
        width="99.8534"
        height="153.683"
        rx="30"
        transform="matrix(0.866025 -0.5 0.483361 0.875421 31 13.5405)"
        fill="url(#paint0_linear_74_211)"
      />
    </g>
    <g filter="url(#filter1_d_74_211)">
      <rect
        width="99.8534"
        height="163.522"
        rx="30"
        transform="matrix(0.866025 -0.5 0.483361 0.875421 65 6.92676)"
        fill="url(#paint1_linear_74_211)"
      />
    </g>
    <g filter="url(#filter2_d_74_211)">
      <rect
        width="99.8534"
        height="163.522"
        rx="30"
        transform="matrix(0.866025 -0.5 0.483361 0.875421 99 4.92676)"
        fill="url(#paint2_linear_74_211)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_74_211"
        x="0.722656"
        y="-67.3732"
        width="247.315"
        height="270.438"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_211"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_211"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_74_211"
        x="34.7227"
        y="-73.9869"
        width="252.07"
        height="279.051"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_211"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_211"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_74_211"
        x="68.7227"
        y="-75.9869"
        width="252.07"
        height="279.051"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_211"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_211"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_74_211"
        x1="22.9988"
        y1="89.333"
        x2="40.4898"
        y2="9.02741"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#99F33E" />
        <stop offset="1" stopColor="#D3FF9A" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_74_211"
        x1="22.9988"
        y1="95.0523"
        x2="42.6833"
        y2="10.1137"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#99F33E" />
        <stop offset="1" stopColor="#D3FF9A" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_74_211"
        x1="22.9988"
        y1="95.0523"
        x2="42.6833"
        y2="10.1137"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#99F33E" />
        <stop offset="1" stopColor="#D3FF9A" />
      </linearGradient>
    </defs>
  </Icon>
);

export const YellowCardsIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="119"
    height="121"
    viewBox="0 0 119 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_74_212)">
      <rect
        x="31"
        y="5.53662"
        width="139.073"
        height="182.482"
        rx="30"
        transform="rotate(-30 31 5.53662)"
        fill="url(#paint0_linear_74_212)"
      />
    </g>
    <g filter="url(#filter1_d_74_212)">
      <rect
        x="64.788"
        y="16.4899"
        width="139.073"
        height="170.961"
        rx="30"
        transform="rotate(-30 64.788 16.4899)"
        fill="url(#paint1_linear_74_212)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_74_212"
        x="0.975769"
        y="-95.0242"
        width="297.73"
        height="313.619"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_212"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_212"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_74_212"
        x="34.7638"
        y="-84.0709"
        width="291.97"
        height="303.641"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_212"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_212"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_74_212"
        x1="137.392"
        y1="36.37"
        x2="123.214"
        y2="116.765"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFF33E" />
        <stop offset="1" stopColor="#FFC123" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_74_212"
        x1="171.18"
        y1="45.3765"
        x2="158.69"
        y2="120.974"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFF33E" />
        <stop offset="1" stopColor="#FFC123" />
      </linearGradient>
    </defs>
  </Icon>
);

export const RedCardsIcon = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="146"
    height="121"
    viewBox="0 0 146 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_74_213)">
      <rect
        x="31"
        y="13.7661"
        width="117.532"
        height="231.011"
        rx="30"
        transform="rotate(-30 31 13.7661)"
        fill="url(#paint0_linear_74_213)"
      />
    </g>
    <g filter="url(#filter1_d_74_213)">
      <rect
        x="59.7422"
        y="15.9385"
        width="117.532"
        height="231.011"
        rx="30"
        transform="rotate(-30 59.7422 15.9385)"
        fill="url(#paint1_linear_74_213)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_74_213"
        x="0.975769"
        y="-76.024"
        width="303.339"
        height="344.876"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_213"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_213"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_74_213"
        x="29.718"
        y="-73.8517"
        width="303.339"
        height="344.876"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="12" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_74_213"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_74_213"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_74_213"
        x1="33.5138"
        y1="204.453"
        x2="71.9127"
        y2="-24.0963"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F33E3E" />
        <stop offset="1" stopColor="#FFA98D" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_74_213"
        x1="62.256"
        y1="206.625"
        x2="100.655"
        y2="-21.9239"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F33E3E" />
        <stop offset="1" stopColor="#FFA98D" />
      </linearGradient>
    </defs>
  </Icon>
);

export const DocsCheck = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="433"
    height="426"
    viewBox="0 0 433 426"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_160_153)">
      <rect
        x="75"
        y="20"
        width="291"
        height="356"
        rx="30"
        fill="url(#paint0_linear_160_153)"
      />
    </g>
    <g filter="url(#filter1_d_160_153)">
      <rect
        x="5"
        y="39"
        width="303"
        height="370"
        rx="30"
        fill="url(#paint1_linear_160_153)"
        shape-rendering="crispEdges"
      />
    </g>
    <g filter="url(#filter2_d_160_153)">
      <rect x="27" y="114" width="242" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter3_d_160_153)">
      <rect x="27" y="162" width="199" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter4_d_160_153)">
      <rect x="27" y="366" width="63" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter5_d_160_153)">
      <path
        d="M191 286.151C210.81 307.491 230.017 326.702 248.481 351C268.554 311.25 289.1 271.362 323 228.166L313.866 224C285.241 254.224 263.001 282.834 243.677 316.834C230.239 304.782 208.522 287.727 195.262 278.964L191 286.151Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_160_153"
        x="34"
        y="0"
        width="399"
        height="464"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="34" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_160_153"
        x="0"
        y="13"
        width="349"
        height="416"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="18" dy="-3" />
        <feGaussianBlur stdDeviation="11.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_160_153"
        x="18"
        y="114"
        width="268"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_160_153"
        x="20"
        y="162"
        width="225"
        height="48"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="6" dy="14" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_d_160_153"
        x="21"
        y="366"
        width="89"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="7" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_153"
          result="shape"
        />
      </filter>
      <filter
        id="filter5_d_160_153"
        x="180"
        y="217"
        width="154"
        height="149"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_153"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_153"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_160_153"
        x1="328.5"
        y1="391.5"
        x2="210.651"
        y2="150.661"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E1E1E1" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_160_153"
        x1="308"
        y1="450.5"
        x2="-128.439"
        y2="-614.789"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F24E1E" />
        <stop offset="1" stop-color="#FFC5B4" stop-opacity="0.37" />
      </linearGradient>
    </defs>
  </Icon>
);

export const DocsX = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="433"
    height="426"
    viewBox="0 0 433 426"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_160_154)">
      <rect
        x="75"
        y="20"
        width="291"
        height="356"
        rx="30"
        fill="url(#paint0_linear_160_154)"
      />
    </g>
    <g filter="url(#filter1_d_160_154)">
      <rect
        x="5"
        y="39"
        width="303"
        height="370"
        rx="30"
        fill="url(#paint1_linear_160_154)"
        shape-rendering="crispEdges"
      />
    </g>
    <g filter="url(#filter2_d_160_154)">
      <rect x="27" y="114" width="242" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter3_d_160_154)">
      <rect x="27" y="162" width="199" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter4_d_160_154)">
      <rect x="27" y="366" width="63" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter5_d_160_154)">
      <path
        d="M27 223.065C33.3031 229.954 39.4146 236.156 45.2893 244C51.6763 231.167 58.2136 218.29 69 204.345L66.0936 203C56.9856 212.757 49.9095 221.994 43.761 232.97C39.4852 229.079 32.5752 223.573 28.356 220.744L27 223.065Z"
        fill="white"
      />
    </g>
    <g filter="url(#filter6_d_160_154)">
      <path
        d="M33.2698 300.664C32.8023 300.227 32.1841 299.989 31.5453 300C30.9065 300.012 30.297 300.271 29.8452 300.725C29.3934 301.178 29.1347 301.79 29.1234 302.431C29.1121 303.073 29.3492 303.693 29.7848 304.162L42.015 316.438L29.7848 328.714C29.5425 328.941 29.3482 329.214 29.2135 329.518C29.0787 329.821 29.0062 330.149 29.0004 330.481C28.9945 330.814 29.0554 331.144 29.1795 331.452C29.3035 331.76 29.4881 332.04 29.7222 332.275C29.9564 332.51 30.2353 332.695 30.5423 332.82C30.8493 332.944 31.1782 333.005 31.5093 333C31.8404 332.994 32.1669 332.921 32.4693 332.786C32.7718 332.65 33.044 332.455 33.2698 332.212L45.5 319.936L57.7302 332.212C57.956 332.455 58.2282 332.65 58.5307 332.786C58.8331 332.921 59.1596 332.994 59.4907 333C59.8218 333.005 60.1507 332.944 60.4577 332.82C60.7647 332.695 61.0436 332.51 61.2778 332.275C61.5119 332.04 61.6965 331.76 61.8205 331.452C61.9446 331.144 62.0055 330.814 61.9996 330.481C61.9938 330.149 61.9213 329.821 61.7865 329.518C61.6518 329.214 61.4575 328.941 61.2152 328.714L48.985 316.438L61.2152 304.162C61.6508 303.693 61.8879 303.073 61.8766 302.431C61.8653 301.79 61.6065 301.178 61.1548 300.725C60.703 300.271 60.0935 300.012 59.4547 300C58.8159 299.989 58.1977 300.227 57.7302 300.664L45.5 312.94L33.2698 300.664Z"
        fill="white"
      />
    </g>
    <g filter="url(#filter7_d_160_154)">
      <path
        d="M33.2698 256.664C32.8023 256.227 32.1841 255.989 31.5453 256C30.9065 256.012 30.297 256.271 29.8452 256.725C29.3934 257.178 29.1347 257.79 29.1234 258.431C29.1121 259.073 29.3492 259.693 29.7848 260.162L42.015 272.438L29.7848 284.714C29.5425 284.941 29.3482 285.214 29.2135 285.518C29.0787 285.821 29.0062 286.149 29.0004 286.481C28.9945 286.814 29.0554 287.144 29.1795 287.452C29.3035 287.76 29.4881 288.04 29.7222 288.275C29.9564 288.51 30.2353 288.695 30.5423 288.82C30.8493 288.944 31.1782 289.005 31.5093 289C31.8404 288.994 32.1669 288.921 32.4693 288.786C32.7718 288.65 33.044 288.455 33.2698 288.212L45.5 275.936L57.7302 288.212C57.956 288.455 58.2282 288.65 58.5307 288.786C58.8331 288.921 59.1596 288.994 59.4907 289C59.8218 289.005 60.1507 288.944 60.4577 288.82C60.7647 288.695 61.0436 288.51 61.2778 288.275C61.5119 288.04 61.6965 287.76 61.8205 287.452C61.9446 287.144 62.0055 286.814 61.9996 286.481C61.9938 286.149 61.9213 285.821 61.7865 285.518C61.6518 285.214 61.4575 284.941 61.2152 284.714L48.985 272.438L61.2152 260.162C61.6508 259.693 61.8879 259.073 61.8766 258.431C61.8653 257.79 61.6065 257.178 61.1548 256.725C60.703 256.271 60.0935 256.012 59.4547 256C58.8159 255.989 58.1977 256.227 57.7302 256.664L45.5 268.94L33.2698 256.664Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_160_154"
        x="34"
        y="0"
        width="399"
        height="464"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="34" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_160_154"
        x="0"
        y="13"
        width="349"
        height="416"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="18" dy="-3" />
        <feGaussianBlur stdDeviation="11.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_160_154"
        x="18"
        y="114"
        width="268"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_160_154"
        x="20"
        y="162"
        width="225"
        height="48"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="6" dy="14" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_d_160_154"
        x="21"
        y="366"
        width="89"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="7" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter5_d_160_154"
        x="16"
        y="196"
        width="64"
        height="63"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter6_d_160_154"
        x="25"
        y="300"
        width="41"
        height="41"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_154"
          result="shape"
        />
      </filter>
      <filter
        id="filter7_d_160_154"
        x="25"
        y="256"
        width="41"
        height="41"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_160_154"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_160_154"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_160_154"
        x1="328.5"
        y1="391.5"
        x2="210.651"
        y2="150.661"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E1E1E1" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_160_154"
        x1="308"
        y1="450.5"
        x2="-128.439"
        y2="-614.789"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F24E1E" />
        <stop offset="1" stop-color="#FFC5B4" stop-opacity="0.37" />
      </linearGradient>
    </defs>
  </Icon>
);
export const DocsEx = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="433"
    height="426"
    viewBox="0 0 433 426"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_176_152)">
      <rect
        x="75"
        y="20"
        width="291"
        height="356"
        rx="30"
        fill="url(#paint0_linear_176_152)"
      />
    </g>
    <g filter="url(#filter1_d_176_152)">
      <rect
        x="5"
        y="39"
        width="303"
        height="370"
        rx="30"
        fill="url(#paint1_linear_176_152)"
        shape-rendering="crispEdges"
      />
    </g>
    <g filter="url(#filter2_d_176_152)">
      <rect x="27" y="114" width="242" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter3_d_176_152)">
      <rect x="27" y="162" width="199" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter4_d_176_152)">
      <rect x="27" y="366" width="63" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter5_d_176_152)">
      <path
        d="M241.103 328.71H261.897C262.649 328.71 263.29 328.213 263.327 327.593L268.997 247.251C269.022 246.923 268.874 246.607 268.603 246.376C268.332 246.134 267.962 246 267.567 246H235.42C235.026 246 234.656 246.134 234.385 246.376C234.126 246.607 233.978 246.935 234.003 247.251L239.673 327.593C239.71 328.213 240.338 328.71 241.103 328.71ZM234.668 370.946C234.668 367.983 235.1 365.481 235.963 363.429C236.825 361.377 238.021 359.725 239.562 358.475C241.09 357.212 242.902 356.301 244.985 355.73C247.056 355.171 249.275 354.88 251.654 354.88C253.897 354.88 256.018 355.171 258.039 355.73C260.048 356.301 261.823 357.212 263.364 358.475C264.893 359.725 266.113 361.377 267.013 363.429C267.913 365.481 268.356 367.983 268.356 370.946C268.356 373.776 267.913 376.192 267.013 378.208C266.113 380.236 264.905 381.9 263.364 383.223C261.823 384.547 260.061 385.494 258.039 386.101C256.018 386.696 253.897 387 251.654 387C249.287 387 247.069 386.696 244.985 386.101C242.902 385.494 241.09 384.535 239.562 383.223C238.033 381.888 236.825 380.236 235.963 378.208C235.1 376.204 234.668 373.776 234.668 370.946Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_176_152"
        x="34"
        y="0"
        width="399"
        height="464"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="34" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_152"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_152"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_176_152"
        x="0"
        y="13"
        width="349"
        height="416"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="18" dy="-3" />
        <feGaussianBlur stdDeviation="11.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_152"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_152"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_176_152"
        x="18"
        y="114"
        width="268"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_152"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_152"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_176_152"
        x="20"
        y="162"
        width="225"
        height="48"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="6" dy="14" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_152"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_152"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_d_176_152"
        x="21"
        y="366"
        width="89"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="7" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_152"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_152"
          result="shape"
        />
      </filter>
      <filter
        id="filter5_d_176_152"
        x="206"
        y="236"
        width="91"
        height="197"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="18" />
        <feGaussianBlur stdDeviation="14" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_152"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_152"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_176_152"
        x1="328.5"
        y1="391.5"
        x2="210.651"
        y2="150.661"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E1E1E1" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_176_152"
        x1="308"
        y1="450.5"
        x2="-128.439"
        y2="-614.789"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F24E1E" />
        <stop offset="1" stop-color="#FFC5B4" stop-opacity="0.37" />
      </linearGradient>
    </defs>
  </Icon>
);
export const DocsQuestion = ({ style }: IconProps) => (
  <Icon
    $style={style || ""}
    width="433"
    height="426"
    viewBox="0 0 433 426"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_176_151)">
      <rect
        x="75"
        y="20"
        width="291"
        height="356"
        rx="30"
        fill="url(#paint0_linear_176_151)"
      />
    </g>
    <g filter="url(#filter1_d_176_151)">
      <rect
        x="5"
        y="39"
        width="303"
        height="370"
        rx="30"
        fill="url(#paint1_linear_176_151)"
        shape-rendering="crispEdges"
      />
    </g>
    <g filter="url(#filter2_d_176_151)">
      <rect x="27" y="114" width="242" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter3_d_176_151)">
      <rect x="27" y="162" width="199" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter4_d_176_151)">
      <rect x="27" y="366" width="63" height="21" rx="10.5" fill="white" />
    </g>
    <g filter="url(#filter5_d_176_151)">
      <path
        d="M256.847 304.491V302.595C256.896 293.795 257.722 286.795 259.327 281.593C260.98 276.391 263.313 272.21 266.327 269.05C269.342 265.841 273.012 262.9 277.339 260.226C280.305 258.378 282.954 256.361 285.288 254.173C287.67 251.937 289.542 249.457 290.903 246.735C292.264 243.964 292.945 240.876 292.945 237.473C292.945 233.633 292.046 230.302 290.247 227.483C288.448 224.663 286.017 222.475 282.954 220.919C279.94 219.364 276.561 218.586 272.818 218.586C269.366 218.586 266.084 219.339 262.973 220.846C259.91 222.305 257.358 224.541 255.316 227.555C253.322 230.521 252.204 234.289 251.961 238.859H226C226.243 229.622 228.479 221.892 232.709 215.669C236.987 209.446 242.627 204.779 249.628 201.667C256.677 198.556 264.456 197 272.964 197C282.249 197 290.417 198.629 297.466 201.886C304.564 205.143 310.082 209.786 314.02 215.815C318.007 221.794 320 228.892 320 237.109C320 242.651 319.101 247.61 317.302 251.985C315.552 256.361 313.048 260.25 309.791 263.653C306.533 267.056 302.668 270.095 298.196 272.769C294.258 275.2 291.025 277.728 288.497 280.353C286.017 282.978 284.17 286.065 282.954 289.614C281.787 293.115 281.18 297.442 281.131 302.595V304.491H256.847ZM269.536 349.996C265.161 349.996 261.393 348.44 258.233 345.329C255.073 342.217 253.493 338.425 253.493 333.953C253.493 329.577 255.073 325.834 258.233 322.722C261.393 319.611 265.161 318.055 269.536 318.055C273.863 318.055 277.606 319.611 280.766 322.722C283.975 325.834 285.58 329.577 285.58 333.953C285.58 336.918 284.826 339.617 283.319 342.047C281.86 344.478 279.916 346.423 277.485 347.881C275.103 349.291 272.453 349.996 269.536 349.996Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_176_151"
        x="34"
        y="0"
        width="399"
        height="464"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="13" dy="34" />
        <feGaussianBlur stdDeviation="27" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_151"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_151"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_176_151"
        x="0"
        y="13"
        width="349"
        height="416"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="18" dy="-3" />
        <feGaussianBlur stdDeviation="11.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_151"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_151"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_176_151"
        x="18"
        y="114"
        width="268"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_151"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_151"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_176_151"
        x="20"
        y="162"
        width="225"
        height="48"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="6" dy="14" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_151"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_151"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_d_176_151"
        x="21"
        y="366"
        width="89"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="7" dy="13" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_151"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_151"
          result="shape"
        />
      </filter>
      <filter
        id="filter5_d_176_151"
        x="195.577"
        y="197"
        width="154.846"
        height="213.842"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="30.4231" />
        <feGaussianBlur stdDeviation="15.2116" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_176_151"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_176_151"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_176_151"
        x1="328.5"
        y1="391.5"
        x2="210.651"
        y2="150.661"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E1E1E1" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_176_151"
        x1="308"
        y1="450.5"
        x2="-128.439"
        y2="-614.789"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F24E1E" />
        <stop offset="1" stop-color="#FFC5B4" stop-opacity="0.37" />
      </linearGradient>
    </defs>
  </Icon>
);
