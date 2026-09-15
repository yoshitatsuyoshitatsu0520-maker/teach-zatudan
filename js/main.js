const bgm =
    document.getElementById("bgm");

const bgmButton =
    document.getElementById("bgmButton");

let bgmPlaying = false;
const teachImage =
    document.getElementById("teachImage");

const dialogueBox =
    document.getElementById("dialogueBox");

const dialogueText =
    document.getElementById("dialogueText");

const inputArea =
    document.getElementById("inputArea");

const userInput =
    document.getElementById("userInput");

const sendButton =
    document.getElementById("sendButton");


let currentDialogue = null;
let gameStarted = false;
let greetingFinished = false;

const randomFoods = [

    "オムライス",
    "カレー",
    "ラーメン",
    "ハンバーグ",
    "おにぎり",
    "パスタ",
    "クレープ",
    "ピザ",
    "ばなな",

    "白ごはん",
    "炊き込みご飯",
    "チャーハン",
    "ピラフ",
    "ドリア",
    "リゾット",
    "お茶漬け",
    "雑炊",
    "おかゆ",
    "卵かけご飯",
    "そぼろ丼",
    "親子丼",
    "牛丼",
    "豚丼",
    "天丼",
    "カツ丼",
    "海鮮丼",
    "マグロ丼",
    "ねぎトロ丼",

    "うどん",
    "きつねうどん",
    "ざるうどん",
    "焼きうどん",
    "カレーうどん",
    "そば",
    "ざるそば",
    "天ぷらそば",
    "焼きそば",
    "塩焼きそば",
    "ラーメン",
    "醤油ラーメン",
    "味噌ラーメン",
    "塩ラーメン",
    "豚骨ラーメン",
    "つけ麺",
    "冷やし中華",
    "そうめん",

    "ハンバーグ",
    "チーズハンバーグ",
    "メンチカツ",
    "とんかつ",
    "チキンカツ",
    "唐揚げ",
    "焼き鳥",
    "つくね",
    "生姜焼き",
    "豚しゃぶ",
    "肉じゃが",
    "コロッケ",
    "クリームコロッケ",
    "エビフライ",
    "アジフライ",
    "とんかつ定食",
    "焼肉",
    "ステーキ",
    "ローストビーフ",

    "餃子",
    "水餃子",
    "春巻き",
    "シュウマイ",
    "麻婆豆腐",
    "チャプチェ",
    "酢豚",
    "青椒肉絲",
    "回鍋肉",
    "八宝菜",
    "エビチリ",
    "天津飯",
    "中華丼",
    "チャーハン",
    "肉まん",
    "あんまん",

    "サンドイッチ",
    "たまごサンド",
    "ツナサンド",
    "ハムサンド",
    "カツサンド",
    "ホットサンド",
    "トースト",
    "チーズトースト",
    "フレンチトースト",
    "食パン",
    "クロワッサン",
    "バゲット",
    "あんパン",
    "クリームパン",
    "メロンパン",
    "カレーパン",
    "ジャムパン",
    "チョココロネ",
    "ベーグル",

    "スパゲッティ",
    "ナポリタン",
    "ミートソースパスタ",
    "カルボナーラ",
    "ペペロンチーノ",
    "たらこパスタ",
    "明太子パスタ",
    "きのこパスタ",
    "ボンゴレビアンコ",
    "マカロニグラタン",
    "ラザニア",
    "ペンネ",

    "ピザ",
    "マルゲリータ",
    "チーズピザ",
    "照り焼きチキンピザ",
    "シーフードピザ",
    "コーンピザ",
    "ベーコンピザ",

    "お好み焼き",
    "広島風お好み焼き",
    "たこ焼き",
    "もんじゃ焼き",
    "焼きとうもろこし",
    "じゃがバター",
    "フライドポテト",
    "ポテトフライ",
    "アメリカンドッグ",
    "フランクフルト",
    "焼きとうもろこし",

    "寿司",
    "マグロの寿司",
    "サーモンの寿司",
    "たまご寿司",
    "いくら",
    "エビの寿司",
    "イカの寿司",
    "ネギトロ巻き",
    "かっぱ巻き",
    "鉄火巻き",
    "ちらし寿司",
    "いなり寿司",

    "味噌汁",
    "豚汁",
    "コーンスープ",
    "わかめスープ",
    "卵スープ",
    "コンソメスープ",
    "ミネストローネ",
    "クラムチャウダー",
    "シチュー",
    "クリームシチュー",
    "ビーフシチュー",

    "目玉焼き",
    "スクランブルエッグ",
    "ゆで卵",
    "だし巻き卵",
    "卵焼き",
    "茶碗蒸し",
    "オムレツ",
    "ポテトサラダ",
    "マカロニサラダ",
    "シーザーサラダ",
    "野菜サラダ",

    "クレープ",
    "パンケーキ",
    "ホットケーキ",
    "ワッフル",
    "ドーナツ",
    "シュークリーム",
    "エクレア",
    "ショートケーキ",
    "チーズケーキ",
    "モンブラン",
    "ロールケーキ",
    "プリン",
    "ゼリー",
    "杏仁豆腐",
    "みたらし団子",
    "三色団子",
    "わらび餅",
    "大福",
    "いちご大福",
    "どら焼き",
    "たい焼き",
    "今川焼き",
    "あんみつ",
    "ぜんざい",
    "おしるこ",
    "アイスクリーム",
    "ソフトクリーム",
    "かき氷",
    "チョコレート",
    "クッキー",
    "ビスケット",
    "マシュマロ",
    "ポップコーン",

    "ばなな",
    "りんご",
    "みかん",
    "オレンジ",
    "いちご",
    "ぶどう",
    "マスカット",
    "もも",
    "なし",
    "さくらんぼ",
    "メロン",
    "スイカ",
    "パイナップル",
    "マンゴー",
    "キウイ",
    "ブルーベリー",
    "ラズベリー",
    "柿",
    "栗",
    "アボカド",

    "おでん",
    "鍋",
    "寄せ鍋",
    "すき焼き",
    "しゃぶしゃぶ",
    "湯豆腐",
    "茶漬け",
    "冷奴",
    "納豆",
    "豆腐",
    "焼き魚",
    "鮭の塩焼き",
    "サバの味噌煮",
    "煮魚",
    "筑前煮",
    "きんぴらごぼう",
    "ひじきの煮物",
    "漬物",

    "オムそば",
    "オムカレー",
    "カレーパン",
    "カレーライス",
    "チーズカレー",
    "唐揚げ弁当",
    "幕の内弁当",
    "のり弁",
    "お子様ランチ",
    "駅弁",
    "ハンバーガー",
    "チーズバーガー",
    "フィッシュバーガー",
    "ホットドッグ",
    "チキンナゲット",
    "フライドチキン",

    "ポテトチップス",
    "じゃがりこ",
    "せんべい",
    "おかき",
    "柿の種",
    "うまい棒",
    "グミ",
    "ラムネ",
    "プリッツ",
    "ポッキー",
    "チョコパイ",
    "カステラ",
    "バウムクーヘン",
    "ラスク",

];
const randomActivities = [

    "ゲームし",
    "絵を描い",
    "音楽を聴い",
    "本を読んでい",
    "漫画を読んでい",
    "アニメを見",
    "映画を見",
    "動画を見",
    "テレビを見",
    "ネットを見",
    "お昼寝し",
    "二度寝し",
    "散歩し",
    "買い物し",
    "料理し",
    "お菓子作りをし",
    "掃除し",
    "部屋の片付けをし",
    "洗濯し",
    "勉強し",
    "宿題をし",
    "ゲーム実況を見",
    "猫と遊んでい",
    "ばななで遊んでい",
    "ぼーっとし",
    "のんびりし",
    "ゴロゴロし",
    "窓の外を見",
    "空を眺めてい",
    "雲を眺めてい",
    "雨を眺めてい",
    "音楽を作ってい",
    "歌ってい",
    "鼻歌を歌ってい",
    "落書きし",
    "写真を撮ってい",
    "インターネットを見",
    "おやつを食べ",
    "コーヒーを飲んでい",
    "お茶を飲んでい",
    "お菓子を食べてい",
    "昔の写真を見てい",
    "アルバムを見てい",
    "ゲームの攻略を考えてい",
    "新しいゲームを探してい",
    "面白い動画を探してい",
    "面白いことを考えてい",
    "何をするか考えてい",
    "何もせず過ごしてい",
    "部屋でゴロゴロし",
    "布団でゴロゴロし",
    "テレビをつけてぼーっとし",
    "音楽を流してのんびりし",
    "お絵描きし",
    "ぬり絵をし",
    "折り紙をし",
    "工作し",
    "パズルをし",
    "クイズを解いてい",
    "ゲームをしてい",
    "ゲームの練習をし",
    "ゲームの新しい遊び方を考えてい",
    "昔のゲームを遊んでい",
    "新しいゲームを遊んでい",
    "好きな曲を聴いてい",
    "知らない曲を探してい",
    "歌詞を眺めてい",
    "本屋さんを見て回ってい",
    "散歩しながら空を見てい",
    "公園を歩いてい",
    "外をぶらぶら歩いてい",
    "近所を散歩し",
    "コンビニに行ってい",
    "お店を見て回ってい",
    "お部屋でくつろいでい",
    "布団に寝転がってい",
    "椅子に座ってぼーっとし",
    "窓から外を眺めてい",
    "天気を調べてい",
    "時計を眺めてい",
    "スマホをいじってい",
    "パソコンをいじってい",
    "ゲーム機をいじってい",
    "絵を眺めてい",
    "写真を眺めてい",
    "昔のことを思い出してい",
    "明日のことを考えてい",
    "今日のことを考えてい",
    "これから何をするか考えてい",
    "新しいことを考えてい",
    "面白いアイデアを考えてい",
    "変なことを考えてい",
    "ばななのことを考えてい",
    "ばななを眺めてい",
    "ばななを食べてい",
    "ばななの絵を描いてい",
    "お腹を空かせてい",
    "お腹いっぱいになって休んでい",
    "眠気と戦ってい",
    "眠そうにしてい",
    "のんびりしてい",
    "ゆっくりしてい",
    "ひなたぼっこしてい",
    "日向でゴロゴロしてい",
    "何となく歩いてい",
    "何となくテレビを見てい",
    "何となく音楽を聴いてい",
    "何となく外を眺めてい",
    "何となくぼーっとしてい",
    "何かを探してい",
    "何かを作ってい",
    "何かを描いてい",
    "何かを読んでい",
    "何かを食べてい",
    "何かを考えてい",
    "何かを眺めてい",
    "ゆっくりお茶を飲んでい",
    "おいしいものを探してい",
    "おいしいものを食べてい",
    "おもしろいものを探してい",
    "かわいいものを眺めてい",
    "猫の写真を見てい",
    "猫の動画を見てい",
    "猫のことを考えてい",
    "猫を眺めてい",
    "静かに過ごしてい",
    "ひとりでのんびりしてい",
    "ゆったり過ごしてい",
    "休憩してい",
    "ちょっと休んでい",
    "眠ってい",
    "うとうとしてい",
    "ぼんやりしてい",
    "考え事をしてい",
    "何かを待ってい",
    "時計を見ながら待ってい",
    "外の音を聞いてい",
    "鳥の声を聞いてい",
    "雨の音を聞いてい",
    "静かな音楽を聴いてい",
    "好きな曲を歌ってい",
    "鼻歌を歌いながら歩いてい",
    "お絵描きをしてい",
    "新しい絵を描いてい",
    "キャラクターを描いてい",
    "落書きをしてい",
    "絵のアイデアを考えてい",
    "ゲームを作ってい",
    "ゲームのアイデアを考えてい",
    "プログラムを書いてい",
    "パソコンで遊んでい",
    "ネットで面白いものを探してい"

];
function getRandomFood() {

    return randomFoods[
        Math.floor(
            Math.random() *
            randomFoods.length
        )
    ];

}
function getRandomActivity() {

    return randomActivities[
        Math.floor(
            Math.random() *
            randomActivities.length
        )
    ];

}
function startBGM() {

    if (bgmPlaying) {
        return;
    }

    bgm.volume = 0.3;


}

bgmButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        if (bgm.paused) {

            startBGM();

        } else {

            bgm.pause();

            bgmPlaying = false;

            bgmButton.textContent =
                "🔇 BGM OFF";

        }

    }
);
function getGreeting() {

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 10) {

        return "おはよう！いい一日になるといいね";

    }

    if (hour >= 18 && hour < 24) {

        return "こんばんは、今日も一日がんばったね";

    }

    if (hour >= 0 && hour < 5) {

        return "眠れないのかい？じゃあのんびり雑談でもしようか";

    }

    return "やあ、ボクはティーチくんだよ";
}
function showDialogue(text) {
    dialogueBox.classList.remove("hidden");
    dialogueBox.classList.remove("disappearing");

    dialogueText.textContent = text;
}

function hideDialogue() {
    dialogueBox.classList.remove("disappearing");

    void dialogueBox.offsetWidth;

    dialogueBox.classList.add("disappearing");

    setTimeout(() => {
        dialogueBox.classList.add("hidden");
    }, 300);
}
function startGame() {

    bgm.volume = 0.3;

    setTimeout(() => {

        showDialogue(getGreeting());

        setTimeout(() => {

            greetingFinished = true;
            nextDialogue();

        }, 2000);

    }, 2000);
}
function nextDialogue() {

    teachImage.src = "images/1.png";

    inputArea.classList.add("hidden");

    const dialogue =
        dialogues[
            Math.floor(
                Math.random() *
                dialogues.length
            )
        ];

    // 今吹き出しが表示されている場合は、
    // いったん消してから次を表示する
    if (!dialogueBox.classList.contains("hidden")) {

        hideDialogue();

        setTimeout(() => {

            if (dialogue.type === "talk") {
                startTalk(dialogue);
            }

            else if (dialogue.type === "monologue") {
                startMonologue(dialogue);
            }

        }, 300);

    } else {

        if (dialogue.type === "talk") {
            startTalk(dialogue);
        }

        else if (dialogue.type === "monologue") {
            startMonologue(dialogue);
        }

    }
}
function startTalk(dialogue) {

    showDialogue(
        dialogue.question
    );

    // 質問するときの表情
    if (dialogue.image) {
        teachImage.src = dialogue.image;
    }

    inputArea.classList.remove("hidden");

    userInput.value = "";

    userInput.focus();

    currentDialogue = dialogue;
}
function sendReply() {

    const input =
        userInput.value.trim();

    if (input === "") {
        return;
    }

    const special =
        findSpecialReply(input);

    if (special) {

        showDialogue(
            special.reply
        );

        if (special.image) {

            teachImage.src =
                special.image;

        }

    } else {

        showDialogue(
    currentDialogue.reply
        .replace("{input}", input)
        .replace("{food}", getRandomFood())
        .replace("{activity}", getRandomActivity())

);

        // 返事を聞いたときの表情
        if (currentDialogue.replyImage) {

            teachImage.src =
                currentDialogue.replyImage;

        }

    }

    inputArea.classList.add("hidden");

    waitForNextDialogue();
}
function findSpecialReply(input) {
    return specialReplies.find(
        special => {
            return special.words.some(
                word => {
                    if (special.type === "exact") {
                        return input === word;
                    }

                    if (special.type === "contains") {
                        return input.includes(word);
                    }

                    return false;
                }
            );
        }
    );
}
function startMonologue(dialogue) {

    showDialogue(
        dialogue.text
    );

    // 独り言の表情
    if (dialogue.image) {
        teachImage.src = dialogue.image;
    }

    waitForNextDialogue();

}
let nextTimer = null;

function waitForNextDialogue() {

    clearTimeout(nextTimer);

    nextTimer = setTimeout(() => {

        nextDialogue();

    }, 10000);

}

document.addEventListener("click", () => {

    startBGM();

    // 最初の挨拶が終わるまでは
    // クリックで次のセリフへ進まない
    if (!greetingFinished) {
        return;
    }

    if (!inputArea.classList.contains("hidden")) {
        return;
    }

    clearTimeout(nextTimer);
    nextDialogue();
});
sendButton.addEventListener("click", (event) => {
    event.stopPropagation();
    sendReply();
});

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        sendReply();
    }
});
startGame();