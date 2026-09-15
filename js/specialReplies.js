const specialReplies = [

    // =========================================
    // 部分一致
    // =========================================

    {
        type: "contains",
        words: ["あああ", "アアア"],
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
        words: ["セックス", "きんたま","オナニー","エッチ","ちんぽ","ちんこ"],
        reply: "ん？なんだいそれ？",
        image: "images/1.png"
    },


    // =========================================
    // 完全一致
    // =========================================

    {
        type: "contains",
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

]