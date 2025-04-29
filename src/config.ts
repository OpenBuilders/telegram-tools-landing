interface Config {
  isDev?: boolean;
  isProd?: boolean;
  CDN: string;
}

const devConfig: Config = {
  isDev: true,
  CDN: 'https://pub-afc0b291195b4529b0de88319506f30b.r2.dev',
};

const prodConfig: Config = {
  isProd: true,
  CDN: 'https://pub-afc0b291195b4529b0de88319506f30b.r2.dev',
};

let config;

switch (import.meta.env.MODE) {
  case 'production':
    config = { ...prodConfig };
    break;
  default:
    config = { ...devConfig };
}

export default config as Config;
