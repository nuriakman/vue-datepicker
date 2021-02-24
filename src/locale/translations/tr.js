const localeObject = {
  name: 'tr',
  weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
  weekdaysShort: 'Pzr_Pzt_Sal_Çar_Per_Cum_Cts'.split('_'),
  weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
  months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
  monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
  weekStart: 0,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'D MMMM YYYY dddd, HH:mm',
  },
  ordinal: (n) => {
    //const s = ['th', 'st', 'nd', 'rd'];
    //const v = n % 100;
    //return `[${n}${(s[(v - 20) % 10] || s[v] || s[0])}]`;
    return '';
  },
  buttonValidate: 'Tamam',
  buttonCancel: 'Vazgeç',
  rangeHeaderText: '%d - %d Arası',
};

export default localeObject;

