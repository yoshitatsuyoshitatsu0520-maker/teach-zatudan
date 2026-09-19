const specialReplies = [

    // =========================================
    // 部分一致
    // =========================================

    {
        type: "contains",
        words: ["あああ", "アアア", "ーーー", "！！！"],
        reply: "え、ええ……、そんなに叫ばなくても…",
        image: "images/4.png"
    },

    {
        type: "contains",
        words: ["ティーチママ", "ティーチくんママ"],
        reply: "えっ……、ボクがママ？",
        image: "images/4.png"
    },

    {
        type: "contains",
        words: ["セックス", "きんたま","オナニー","エッチ","まんこ","ちんぽ","ちんこ"],
        reply: "ん？なんだいそれ？",
        image: "images/1.png"
    },


    // =========================================
    // 完全一致
    // =========================================

    {
        type: "exact",
        words: ["好き", "すき", "スキ"],
        reply: "ボクも好きだよ！",
        image: "images/2.png"
    },

    {
    type: "exact",
    words: ["ティーチ", "ティーチくん"],
    reply: "ん？なんだい？",
    image: "images/1.png"
},
{
    type: "exact",
    words: ["サム", "サムくん"],
    reply: "サムくんがどうかしたのかい？いつも元気で努力家さんだよね",
    image: "images/2.png"
},
{
    type: "exact",
    words: ["コバヤシ", "コバヤシくん"],
    reply: "コバヤシくんがどうかしたのかい？ボクの大切なお友達だよ",
    image: "images/2.png"
},
{
    type: "exact",
    words: ["だだ", "だだ様"],
    reply: "あの害虫がどうかしたのかい？",
    image: "images/1.png"
},

{
    type: "exact",
    words: ["ばなな","バナナ"],
    reply: "ばなな！おいしいよね",
    image: "images/2.png"
},

{
    type: "exact",
    words: ["かわいい", "可愛い"],
    reply: "えっ、そ、そうかな？ ありがとう……",
    image: "images/2.png"
},

{
    type: "exact",
    words: ["かっこいい", "格好いい"],
    reply: "ふっふーん、そうだよね",
    image: "images/2.png"
},



{
    type: "exact",
    words: ["眠い", "ねむい", "眠たい"],
    reply: "奇遇だねぇ……ボクも眠いんだ……",
    image: "images/3.png"
},

{
    type: "exact",
    words: ["疲れた", "つかれた"],
    reply: "そっか……、じゃあ一緒に休もっか",
    image: "images/2.png"
},
{
    type: "exact",
    words: ["暇", "ひま"],
    reply: "暇ならボクとお話しよっ",
    image: "images/2.png"
},

{
    type: "contains",
    words: ["何してる", "なにしてる", "何してた"],
    reply: "今？ きみとお話してるところだよ",
    image: "images/2.png"
},

{
    type: "contains",
    words: ["聞", ],
    reply: "うん？ ボクの声、ちゃんと聞こえてるかい？",
    image: "images/1.png"
},

{
    type: "contains",
    words: ["ゲーム", "げーむ"],
    reply: "ゲームかぁ。ボクも遊んでみたい！",
    image: "images/2.png"
},
{
    type: "exact",
    words: ["あ"],
    reply: "……あ？",
    image: "images/4.png"
},

{
    type: "exact",
    words: ["え", "え？"],
    reply: "え？",
    image: "images/4.png"
},

{
    type: "exact",
    words: ["お"],
    reply: "お……？",
    image: "images/4.png"
},
{
    type: "exact",
    words: ["死ね", "しね", "殺す", "ころす"],
    reply: "え、え…？な、なんでそんなこと言うの…？ひっ…",
    image: "images/5.png"
},
{
    type: "contains",
    words: ["なんでもない", "何でもない"],
    reply: "そっか、へえ～？",
    image: "images/1.png"
},

{
    type: "contains",
    words: ["秘密", "ひみつ"],
    reply: "秘密？ 気になるなぁ～",
    image: "images/1.png"
},
]