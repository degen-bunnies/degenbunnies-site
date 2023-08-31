interface Menu {
  name: string;
  link: string;
  target: string;
  splashImage?: string;
}

export const menus: Menu[] = [
  {
    name: 'BUNNY LOUNGE', splashImage: '/images/DegenBunny-Droid.png', link: '/bunny-lounge', target: '_self',
  }, {
    name: 'ABOUT US', splashImage: '/images/Degen-Bunny-The-Dunk-Master.png', link: '/about-us', target: '_self',
  }, {
    name: 'DEGEN VALLEY', splashImage: '/images/Degen-Bunnies-The-Angel.png', link: 'https://vision.degenbunnies.com/', target: '_blank',
  }];

export const subMenus = [
  {
    name: 'HOME', splashImage: '', link: '/', target: '_self',
  }, ...menus];
