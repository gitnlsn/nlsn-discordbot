import { ChatMessage } from "../../../DataTransfer/ChatMessage"

const discordMessages = [
  { author: "Michiko", content: "brb", date: "2023-04-08T16:27:34.606Z" },
  {
    author: "Deathsider",
    content: "idk where I am...",
    date: "2023-04-08T16:27:30.719Z",
  },
  {
    author: "Deathsider",
    content: "on accident..",
    date: "2023-04-08T16:27:25.137Z",
  },
  {
    author: "Deathsider",
    content: "i broke into the fourth dimension..",
    date: "2023-04-08T16:27:16.852Z",
  },
  {
    author: "! Nagiza𓅞Hazuki ♱♱",
    content:
      ".p https://open.spotify.com/track/6QbmvfGo73WMNx20RdGEM1?si=fede395fb8a340cd",
    date: "2023-04-08T16:27:10.297Z",
  },
  {
    author: "Obscardian",
    content:
      'Someone tell her theirself aint a word, it\'s "themself" <:ASohmahgawd:983268399624900628>',
    date: "2023-04-08T16:27:06.376Z",
  },
  {
    author: "WrathByPiece",
    content: "*Oh my, did the stories intrigue you?*",
    date: "2023-04-08T16:27:06.331Z",
  },
  {
    author: "Michiko",
    content: "*totally confused*",
    date: "2023-04-08T16:26:53.167Z",
  },
  { author: "Michiko", content: "LMAOOO", date: "2023-04-08T16:26:41.679Z" },
  {
    author: "WrathByPiece",
    content:
      "*You aren't supposed to break the fourth wall yet.*\n...\n*Cough cough.*",
    date: "2023-04-08T16:26:41.673Z",
  },
  { author: "Deathsider", content: "mhm.", date: "2023-04-08T16:26:38.445Z" },
  { author: "Michiko", content: "lmaoo", date: "2023-04-08T16:26:36.820Z" },
  {
    author: "Obscardian",
    content:
      "....ok enough discord for today <:ASsaikaExit:910910745062019143>",
    date: "2023-04-08T16:26:26.636Z",
  },
  {
    author: "! Nagiza𓅞Hazuki ♱♱",
    content:
      ".p https://open.spotify.com/track/0lZ71sfRot9tVIJF066hfR?si=d7bf5d22a3e1424a",
    date: "2023-04-08T16:26:08.834Z",
  },
  {
    author: "Michiko",
    content: "*indeed, they'll succeed. they believe in theirself*",
    date: "2023-04-08T16:25:31.600Z",
  },
  {
    author: "Michiko",
    content: "THE TOILET HERO <:ASkek:321029667266101250>",
    date: "2023-04-08T16:25:13.743Z",
  },
  {
    author: "Michiko",
    content: "OH SHEET <:ASkek:321029667266101250>",
    date: "2023-04-08T16:24:59.848Z",
  },
  {
    author: "WrathByPiece",
    content:
      '*The hero is fighting with all their might, will they succeed? This question will be answered in the next chapter of "The toilet hero saga"!*',
    date: "2023-04-08T16:24:45.161Z",
  },
  {
    author: "Renzu",
    content: ".p https://m.soundcloud.com/jun_kuroda/polaris",
    date: "2023-04-08T16:24:13.925Z",
  },
  {
    author: "Renzu",
    content: ".p https://m.soundcloud.com/jun_kuroda/polaris",
    date: "2023-04-08T16:24:08.174Z",
  },
  {
    author: "Obscardian",
    content: "I entered at the right time lmao",
    date: "2023-04-08T16:23:19.905Z",
  },
  {
    author: "Obscardian",
    content: "<:ASAJ:1019638371452190760>",
    date: "2023-04-08T16:23:12.717Z",
  },
  {
    author: "Obscardian",
    content: "Hell nah",
    date: "2023-04-08T16:23:07.222Z",
  },
  {
    author: "Michiko",
    content: "*elite role to defeat scar*",
    date: "2023-04-08T16:23:02.372Z",
  },
  {
    author: "Renzu",
    content: ".p https://youtu.be/p8ET-m6y6VU",
    date: "2023-04-08T16:22:43.755Z",
  },
  {
    author: "WrathByPiece",
    content: "*Grinding what, if i may ask?*",
    date: "2023-04-08T16:22:36.543Z",
  },
  {
    author: "Michiko",
    content: "*grinding*",
    date: "2023-04-08T16:22:20.474Z",
  },
  { author: "WrathByPiece", content: ".q", date: "2023-04-08T16:22:17.511Z" },
  {
    author: "WrathByPiece",
    content:
      "*The wandering hero has woken up from their slumber, what will happen next?*",
    date: "2023-04-08T16:21:57.651Z",
  },
  {
    author: "Renzu",
    content:
      ".p https://open.spotify.com/track/5RABLbc0whf2pVD7ISl3Yt?si=qrsbqPYzQ72HM1O0nr3iVg&utm_source=copy-link",
    date: "2023-04-08T16:21:11.572Z",
  },
  { author: "Michiko", content: "im awake", date: "2023-04-08T16:21:01.680Z" },
  {
    author: "Renzu",
    content:
      ".p https://open.spotify.com/track/3fUzflauDs1M71TSaJvnIl?si=FVWFwUHPTfikpnp3RYzr-Q&utm_source=copy-link",
    date: "2023-04-08T16:20:00.710Z",
  },
  { author: "Renzu", content: ".up", date: "2023-04-08T16:19:11.743Z" },
  {
    author: "!『ꜱ ᴇ ɴ ꜱ ᴇ ɪ 』 | Ray σ",
    content: ".ping",
    date: "2023-04-08T16:14:15.634Z",
  },
  {
    author: "WrathByPiece",
    content: "i know <:ASlife:630492780149473320>",
    date: "2023-04-08T16:13:44.404Z",
  },
  { author: "cirokiyy", content: "woke", date: "2023-04-08T16:12:03.315Z" },
  {
    author: "WrathByPiece",
    content: "I'll come back when someone wakes up",
    date: "2023-04-08T16:05:22.200Z",
  },
  {
    author: "WrathByPiece",
    content: "Everyone is asleep ig",
    date: "2023-04-08T16:04:34.591Z",
  },
  { author: "WrathByPiece", content: ".q", date: "2023-04-08T16:04:09.675Z" },
  {
    author: "WrathByPiece",
    content: "<:ASTsuSit:1003172908425809920>",
    date: "2023-04-08T16:03:23.342Z",
  },
  {
    author: "WrathByPiece",
    content: "Chill vibes here",
    date: "2023-04-08T16:03:08.274Z",
  },
  {
    author: "_Kakyoiinn ♱ | (Kiyoko)_",
    content: ".p https://youtu.be/f717iNkYNLk",
    date: "2023-04-08T15:56:51.859Z",
  },
  {
    author: "_Kakyoiinn ♱ | (Kiyoko)_",
    content: ".p https://youtu.be/NKJ-0I7I9AY",
    date: "2023-04-08T15:56:47.920Z",
  },
  { author: "Michiko", content: ".np", date: "2023-04-08T15:54:38.315Z" },
  { author: "Michiko", content: ".q", date: "2023-04-08T15:54:36.537Z" },
  {
    author: "! Nagiza𓅞Hazuki ♱♱",
    content: ".rm 5",
    date: "2023-04-08T15:53:20.789Z",
  },
  {
    author: "! Nagiza𓅞Hazuki ♱♱",
    content: ".swap 5 2",
    date: "2023-04-08T15:53:15.698Z",
  },
  {
    author: "! Nagiza𓅞Hazuki ♱♱",
    content: ".q",
    date: "2023-04-08T15:53:00.677Z",
  },
  {
    author: "! Nagiza𓅞Hazuki ♱♱",
    content: ".p https://youtu.be/CXO1m6_HsnM",
    date: "2023-04-08T15:52:59.043Z",
  },
  {
    author: "nlsn",
    content:
      ".p https://open.spotify.com/track/3a2ESsqxIk6vSCuvR0c15c?si=42fe539d9015491f",
    date: "2023-04-08T15:52:45.681Z",
  },
  {
    author: "nlsn",
    content:
      ".p https://open.spotify.com/track/4LxRUHZwymobcafJsIkB3F?si=d647c25e5a364be2",
    date: "2023-04-08T15:52:35.261Z",
  },
  { author: "nlsn", content: ".q", date: "2023-04-08T15:52:21.366Z" },
  { author: "Lui gucha", content: ".s", date: "2023-04-08T15:52:08.067Z" },
  { author: "Lui gucha", content: ".s", date: "2023-04-08T15:51:31.128Z" },
  {
    author: "! Nagiza𓅞Hazuki ♱♱",
    content: ".p owari no seraph X.U",
    date: "2023-04-08T15:50:35.248Z",
  },
  { author: "Lui gucha", content: ".q", date: "2023-04-08T15:50:33.658Z" },
  { author: "Lui gucha", content: ".q", date: "2023-04-08T15:50:27.025Z" },
  {
    author: "! Nagiza𓅞Hazuki ♱♱",
    content: ".p ginger karaoke",
    date: "2023-04-08T15:49:33.108Z",
  },
  { author: "Michiko", content: "gz", date: "2023-04-08T15:45:31.379Z" },
  {
    author: "Tatsu",
    content: "**<@!796705092686315531>** has earned the **`💜`** role!",
    date: "2023-04-08T15:44:24.636Z",
  },
  { author: "Lui gucha", content: ".q 3", date: "2023-04-08T15:44:22.745Z" },
]

export const mockedChatMessages = ChatMessage.fromJsonString(
  JSON.stringify(discordMessages)
)
