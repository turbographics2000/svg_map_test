fetch('BlankMap-World6-Equirectangular.svg').then(res => res.text()).then(svgText => {
    var svg = document.createElement('svg');
    document.body.appendChild(svg);
    svg.outerHTML = svgText;
    setTimeout(setClickEvent);
});

function setClickEvent() {
    var lands = document.getElementsByClassName('land');
    Array.from(lands).forEach(land => land.onclick = function() {
        var code = this.className.baseVal.split(' ')[0].toLowerCase();
        console.log(codes[code]);
    });
}

var codes = {
    IS: 'アイスランド',
    IE: 'アイルランド',
    AZ: 'アゼルバイジャン',
    AF: 'アフガニスタン',
    US: 'アメリカ合衆国',
    VI: 'アメリカ領ヴァージン諸島',
    AS: 'アメリカ領サモア',
    AE: 'アラブ首長国連邦',
    DZ: 'アルジェリア',
    AR: 'アルゼンチン',
    AW: 'アルバ',
    AL: 'アルバニア',
    AM: 'アルメニア',
    AI: 'アンギラ',
    AO: 'アンゴラ',
    AG: 'アンティグア・バーブーダ',
    AD: 'アンドラ',
    YE: 'イエメン',
    GB: 'イギリス',
    IO: 'イギリス領インド洋地域',
    VG: 'イギリス領ヴァージン諸島',
    IL: 'イスラエル',
    IT: 'イタリア',
    IQ: 'イラク',
    IR: 'イラン',
    IN: 'インド',
    ID: 'インドネシア',
    WF: 'ウォリス・フツナ',
    UG: 'ウガンダ',
    UA: 'ウクライナ',
    UZ: 'ウズベキスタン',
    UY: 'ウルグアイ',
    EC: 'エクアドル',
    EG: 'エジプト',
    EE: 'エストニア',
    ET: 'エチオピア',
    ER: 'エリトリア',
    SV: 'エルサルバドル',
    AU: 'オーストラリア',
    AT: 'オーストリア',
    AX: 'オーランド諸島',
    OM: 'オマーン',
    NL: 'オランダ',
    GH: 'ガーナ',
    CV: 'カーボベルデ',
    GG: 'ガーンジー',
    GY: 'ガイアナ',
    KZ: 'カザフスタン',
    QA: 'カタール',
    UM: '合衆国領有小離島',
    CA: 'カナダ',
    GA: 'ガボン',
    CM: 'カメルーン',
    GM: 'ガンビア',
    KH: 'カンボジア',
    MP: '北マリアナ諸島',
    GN: 'ギニア',
    GW: 'ギニアビサウ',
    CY: 'キプロス',
    CU: 'キューバ',
    CW: 'キュラソー',
    GR: 'ギリシャ',
    KI: 'キリバス',
    KG: 'キルギス',
    GT: 'グアテマラ',
    GP: 'グアドループ',
    GU: 'グアム',
    KW: 'クウェート',
    CK: 'クック諸島',
    GL: 'グリーンランド',
    CX: 'クリスマス島_(オーストラリア)',
    GD: 'グレナダ',
    HR: 'クロアチア',
    KY: 'ケイマン諸島',
    KE: 'ケニア',
    CI: 'コートジボワール',
    CC: 'ココス諸島',
    CR: 'コスタリカ',
    KM: 'コモロ',
    CO: 'コロンビア',
    CG: 'コンゴ共和国',
    CD: 'コンゴ民主共和国',
    SA: 'サウジアラビア',
    GS: 'サウスジョージア・サウスサンドウィッチ諸島',
    WS: 'サモア',
    ST: 'サントメ・プリンシペ',
    BL: 'サン・バルテルミー島',
    ZM: 'ザンビア',
    PM: 'サンピエール島・ミクロン島',
    SM: 'サンマリノ',
    MF: 'サン・マルタン_(西インド諸島)',
    SL: 'シエラレオネ',
    DJ: 'ジブチ',
    GI: 'ジブラルタル',
    JE: 'ジャージー',
    JM: 'ジャマイカ',
    GE: 'ジョージア (国)',
    SY: 'シリア・アラブ共和国',
    SG: 'シンガポール',
    SX: 'シント・マールテン',
    ZW: 'ジンバブエ',
    CH: 'スイス',
    SE: 'スウェーデン',
    SD: 'スーダン',
    SJ: 'スヴァールバル諸島およびヤンマイエン島',
    ES: 'スペイン',
    SR: 'スリナム',
    LK: 'スリランカ',
    SK: 'スロバキア',
    SI: 'スロベニア',
    SZ: 'スワジランド',
    SC: 'セーシェル',
    GQ: '赤道ギニア',
    SN: 'セネガル',
    RS: 'セルビア',
    KN: 'セントクリストファー・ネイビス',
    VC: 'セントビンセント・グレナディーン',
    SH: 'セントヘレナ・アセンションおよびトリスタンダクーニャ',
    LC: 'セントルシア',
    SO: 'ソマリア',
    SB: 'ソロモン諸島',
    TC: 'タークス・カイコス諸島',
    TH: 'タイ王国',
    KR: '大韓民国',
    TW: '台湾',
    TJ: 'タジキスタン',
    TZ: 'タンザニア',
    CZ: 'チェコ',
    TD: 'チャド',
    CF: '中央アフリカ共和国',
    CN: '中華人民共和国',
    TN: 'チュニジア',
    KP: '朝鮮民主主義人民共和国',
    CL: 'チリ',
    TV: 'ツバル',
    DK: 'デンマーク',
    DE: 'ドイツ',
    TG: 'トーゴ',
    TK: 'トケラウ',
    DO: 'ドミニカ共和国',
    DM: 'ドミニカ国',
    TT: 'トリニダード・トバゴ',
    TM: 'トルクメニスタン',
    TR: 'トルコ',
    TO: 'トンガ',
    NG: 'ナイジェリア',
    NR: 'ナウル',
    NA: 'ナミビア',
    AQ: '南極',
    NU: 'ニウエ',
    NI: 'ニカラグア',
    NE: 'ニジェール',
    JP: '日本',
    EH: '西サハラ',
    NC: 'ニューカレドニア',
    NZ: 'ニュージーランド',
    NP: 'ネパール',
    NF: 'ノーフォーク島',
    NO: 'ノルウェー',
    HM: 'ハード島とマクドナルド諸島',
    BH: 'バーレーン',
    HT: 'ハイチ',
    PK: 'パキスタン',
    VA: 'バチカン',
    PA: 'パナマ',
    VU: 'バヌアツ',
    BS: 'バハマ',
    PG: 'パプアニューギニア',
    BM: 'バミューダ諸島',
    PW: 'パラオ',
    PY: 'パラグアイ',
    BB: 'バルバドス',
    PS: 'パレスチナ',
    HU: 'ハンガリー',
    BD: 'バングラデシュ',
    TL: '東ティモール',
    PN: 'ピトケアン諸島',
    FJ: 'フィジー',
    PH: 'フィリピン',
    FI: 'フィンランド',
    BT: 'ブータン',
    BV: 'ブーベ島',
    PR: 'プエルトリコ',
    FO: 'フェロー諸島',
    FK: 'フォークランド（マルビナス）諸島',
    BR: 'ブラジル',
    FR: 'フランス',
    GF: 'フランス領ギアナ',
    PF: 'フランス領ポリネシア',
    TF: 'フランス領南方・南極地域',
    BG: 'ブルガリア',
    BF: 'ブルキナファソ',
    BN: 'ブルネイ・ダルサラーム',
    BI: 'ブルンジ',
    VN: 'ベトナム',
    BJ: 'ベナン',
    VE: 'ベネズエラ',
    BY: 'ベラルーシ',
    BZ: 'ベリーズ',
    PE: 'ペルー',
    BE: 'ベルギー',
    PL: 'ポーランド',
    BA: 'ボスニア・ヘルツェゴビナ',
    BW: 'ボツワナ',
    BQ: 'ボネール、シント・ユースタティウスおよびサバ',
    BO: 'ボリビア多民族国',
    PT: 'ポルトガル',
    HK: '香港',
    HN: 'ホンジュラス',
    MH: 'マーシャル諸島',
    MO: 'マカオ',
    MK: 'マケドニア共和国',
    MG: 'マダガスカル',
    YT: 'マヨット',
    MW: 'マラウイ',
    ML: 'マリ共和国',
    MT: 'マルタ',
    MQ: 'マルティニーク',
    MY: 'マレーシア',
    IM: 'マン島',
    FM: 'ミクロネシア連邦',
    ZA: '南アフリカ共和国',
    SS: '南スーダン',
    MM: 'ミャンマー',
    MX: 'メキシコ',
    MU: 'モーリシャス',
    MR: 'モーリタニア',
    MZ: 'モザンビーク',
    MC: 'モナコ',
    MV: 'モルディブ',
    MD: 'モルドバ',
    MA: 'モロッコ',
    MN: 'モンゴル国',
    ME: 'モンテネグロ',
    MS: 'モントセラト',
    JO: 'ヨルダン',
    LA: 'ラオス',
    LV: 'ラトビア',
    LT: 'リトアニア',
    LY: 'リビア',
    LI: 'リヒテンシュタイン',
    LR: 'リベリア',
    RO: 'ルーマニア',
    LU: 'ルクセンブルク',
    RW: 'ルワンダ',
    LS: 'レソト',
    LB: 'レバノン',
    RE: 'レユニオン',
    RU: 'ロシア'
};
