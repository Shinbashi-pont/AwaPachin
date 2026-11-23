// あわぱちん 公開用の設定
// Supabase の Project Settings → API Keys などで表示される値を貼り付けてください（README.md 参照）。
// 2つとも空のままだと、ランキングは「準備中」と表示され、登録欄も出ません。
window.AWA_CONFIG = {
  SUPABASE_URL: 'https://zcucylnnjdyyggxabxgz.supabase.co',        // 例: 'https://abcdefghijkl.supabase.co'
  SUPABASE_ANON_KEY: 'sb_publishable_4vDJ5ksscT-oLSW1G2HczQ_Hs4bqNjS',   // Publishable key（sb_publishable_ で始まる）か、Legacy の anon public キー（eyJ で始まる）。Secret key / service_role は絶対に入れない
  GAME_URL: 'https://shinbashi-pont.github.io/AwaPachin/',            // 公開URL。例: 'https://your-org.github.io/awapachin/'（空ならいま開いているページのURL）
  HASHTAG: 'あわぱちん'      // SNS投稿につけるハッシュタグ（# は不要）
};
