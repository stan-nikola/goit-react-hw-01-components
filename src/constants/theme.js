export const theme = Object.freeze({
  colors: {
    cardBg: '#ffffff',
    itemBg: '#cad0fca8',
    itemBgSecondary: '#babcc7a8',
    avatar: '#1f89cb7e',
    friendsOnline: '#2fff00',
    friendsOffline: '#f20000',
    svgIcon: '#125782',
    statDocx: '#2d0bd0c5',
    statPdf: '#e63636c5',
    statMp3: '#191cc7;',
    statPsd: '#e3b624d3',
    statGif: '#36e671c5',
    statZip: '#e6ba36c5',
    statTxt: '#eee9d8c5',
    statXls: '#146d07c5',
    statDefault: '#e6367fc5',
    tableHead: '#7266d1',
  },
  spacing: value => `${4 * value}px`,
  boxShadow: {
    mainCard: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    statItem:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
    secondaryCard:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
  },
});
