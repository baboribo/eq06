export type HintMode = "off" | "on" | "auto";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export type QuizQuestion = {
  word: string;
  phonetic: string;
  options: string[];
  correct: number;
  hint: string;
  score: number;
};

export const gameConfig = {
  appTitle: "\uC601\uC5B4 \uB2E8\uC5B4 \uD034\uC988",
  completionTitle: "STAGE 6",
  githubUrl: "https://github.com/baboribo/eq06",
  questionCount: 100,
  timings: {
    correctNextDelayMs: 350,
    wrongRevealDelayMs: 300,
    wrongNextDelayMs: 1400,
    retryUnlockDelayMs: 650,
    introExitDelayMs: 1100,
    messageCorrectMs: 260,
    messageWrongMs: 700,
    scorePopupMs: 1000,
  },
  scoring: {
    recommendedNotToChange: true,
    lowScoreMax: 4,
    mediumScoreMax: 7,
    highScoreMin: 8,
    highScoreRetryCount: 1,
    correctScoreMultiplier: 1,
  },
  features: {
    soundEnabled: true,
    clickParticlesEnabled: true,
    showHint: false,
    showAnswer: false,
    autoHintForHighScoreRetry: true,
    highScoreRetryEnabled: true,
  },
  buttons: {
    start: "primary" as ButtonVariant,
    github: "secondary" as ButtonVariant,
    settings: "ghost" as ButtonVariant,
    save: "primary" as ButtonVariant,
    restart: "secondary" as ButtonVariant,
  },
} as const;

export const quizQuestions: QuizQuestion[] = [
  {
    "word": "send",
    "phonetic": "/send/ : 센드",
    "options": [
      "모래, 사막",
      "보내다, 파견하다",
      "감각, 지각",
      "동전, 잔돈"
    ],
    "correct": 1,
    "hint": "힌트: \"보내다, 파견하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /send/.",
    "score": 3
  },
  {
    "word": "nothing",
    "phonetic": "/ˈnʌθɪŋ/ : 나씽",
    "options": [
      "아무것도 없음",
      "간호하다",
      "알아차리다",
      "공지하다"
    ],
    "correct": 0,
    "hint": "힌트: \"아무것도 없음\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnʌθɪŋ/.",
    "score": 8
  },
  {
    "word": "seem",
    "phonetic": "/siːm/ : 심",
    "options": [
      "~처럼 보이다",
      "수영하다",
      "이음매",
      "증기"
    ],
    "correct": 0,
    "hint": "힌트: \"~처럼 보이다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /siːm/.",
    "score": 3
  },
  {
    "word": "mile",
    "phonetic": "/maɪl/ : 마일",
    "options": [
      "마일 (거리 단위)",
      "우편",
      "순한",
      "방앗간"
    ],
    "correct": 0,
    "hint": "힌트: \"마일 (거리 단위)\"와 가장 가까운 뜻을 고르세요. 발음 단서: /maɪl/.",
    "score": 3
  },
  {
    "word": "next",
    "phonetic": "/nekst/ : 넥스트",
    "options": [
      "목",
      "다음의",
      "둥지",
      "문자 메시지"
    ],
    "correct": 1,
    "hint": "힌트: \"다음의\"와 가장 가까운 뜻을 고르세요. 발음 단서: /nekst/.",
    "score": 3
  },
  {
    "word": "market",
    "phonetic": "/ˈmɑːrkɪt/ : 마켓",
    "options": [
      "시장",
      "재킷",
      "라켓",
      "바구니"
    ],
    "correct": 0,
    "hint": "힌트: \"시장\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmɑːrkɪt/.",
    "score": 5
  },
  {
    "word": "different",
    "phonetic": "/ˈdɪfrənt/ : 디퍼런트",
    "options": [
      "부서, 학과",
      "다른, 차이가 있는",
      "방어, 수비",
      "후식, 디저트"
    ],
    "correct": 1,
    "hint": "힌트: \"다른, 차이가 있는\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈdɪfrənt/.",
    "score": 10
  },
  {
    "word": "teenager",
    "phonetic": "/ˈtiːneɪdʒər/ : 틴에이저",
    "options": [
      "양철",
      "십대 (13~19세)",
      "요원",
      "나이"
    ],
    "correct": 1,
    "hint": "힌트: \"십대 (13~19세)\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈtiːneɪdʒər/.",
    "score": 8
  },
  {
    "word": "meat",
    "phonetic": "/miːt/ : 미트",
    "options": [
      "고기",
      "만나다",
      "미터",
      "박자"
    ],
    "correct": 0,
    "hint": "힌트: \"고기\"와 가장 가까운 뜻을 고르세요. 발음 단서: /miːt/.",
    "score": 3
  },
  {
    "word": "atlantic",
    "phonetic": "/ətˈlæntɪk/ : 어틀랜틱",
    "options": [
      "전설의 대륙",
      "대서양의",
      "다락방",
      "지도책"
    ],
    "correct": 1,
    "hint": "힌트: \"대서양의\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ətˈlæntɪk/.",
    "score": 8
  },
  {
    "word": "smart",
    "phonetic": "/smɑːrt/ : 스마트",
    "options": [
      "시작하다, 출발하다",
      "영리한, 똑똑한",
      "슈퍼마켓, 대형마트",
      "스포츠, 운동"
    ],
    "correct": 1,
    "hint": "힌트: \"영리한, 똑똑한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /smɑːrt/.",
    "score": 5
  },
  {
    "word": "spend",
    "phonetic": "/spend/ : 스펜드",
    "options": [
      "소비하다, 쓰다",
      "속도, 빠르기",
      "철자, 맞춤법",
      "섞다, 혼합하다"
    ],
    "correct": 0,
    "hint": "힌트: \"소비하다, 쓰다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /spend/.",
    "score": 5
  },
  {
    "word": "often",
    "phonetic": "/ˈɔːftən/ : 오프튼",
    "options": [
      "자주, 종종",
      "열다, 개봉하다",
      "상쇄하다, 벌충하다",
      "선택, 고르기"
    ],
    "correct": 0,
    "hint": "힌트: \"자주, 종종\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈɔːftən/.",
    "score": 5
  },
  {
    "word": "personal",
    "phonetic": "/ˈpɜːrsənl/ : 퍼스널",
    "options": [
      "인사부서",
      "개인적인",
      "목사",
      "사람"
    ],
    "correct": 1,
    "hint": "힌트: \"개인적인\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈpɜːrsənl/.",
    "score": 8
  },
  {
    "word": "plan",
    "phonetic": "/plæn/ : 플랜",
    "options": [
      "비행기, 항공기",
      "식물, 초목",
      "계획, 계획하다",
      "행성, 천체"
    ],
    "correct": 2,
    "hint": "힌트: \"계획, 계획하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /plæn/.",
    "score": 3
  },
  {
    "word": "zing",
    "phonetic": "/zɪŋ/ : 징",
    "options": [
      "지루함, 무기력",
      "활기, 생동감 있는 소리",
      "종소리, 울림",
      "날카롭게 비판하다"
    ],
    "correct": 1,
    "hint": "힌트: \"활기, 생동감 있는 소리\"와 가장 가까운 뜻을 고르세요. 발음 단서: /zɪŋ/.",
    "score": 3
  },
  {
    "word": "modern",
    "phonetic": "/ˈmɒdərn/ : 모던",
    "options": [
      "통신 장치, 모뎀",
      "현대의, 현대적인",
      "패션 모델, 모형",
      "방식, 형태"
    ],
    "correct": 1,
    "hint": "힌트: \"현대의, 현대적인\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmɒdərn/.",
    "score": 5
  },
  {
    "word": "icon",
    "phonetic": "/ˈaɪkɒn/ : 아이콘",
    "options": [
      "다리미, 쇠다",
      "도토리, 작은 열매",
      "우상, 상징, 아이콘",
      "원뿔, 뿔 모양"
    ],
    "correct": 2,
    "hint": "힌트: \"우상, 상징, 아이콘\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈaɪkɒn/.",
    "score": 3
  },
  {
    "word": "camera",
    "phonetic": "/ˈkæmərə/ : 카메라",
    "options": [
      "사진기, 촬영 장치",
      "카메오, 특별 출연",
      "낙타, 혹등 동물",
      "위장, 은폐"
    ],
    "correct": 0,
    "hint": "힌트: \"사진기, 촬영 장치\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈkæmərə/.",
    "score": 5
  },
  {
    "word": "need",
    "phonetic": "/niːd/ : 니드",
    "options": [
      "무릎, 다리 관절",
      "반죽하다, 주무르다",
      "필요하다, 필요",
      "이끌다, 안내하다"
    ],
    "correct": 2,
    "hint": "힌트: \"필요하다, 필요\"와 가장 가까운 뜻을 고르세요. 발음 단서: /niːd/.",
    "score": 3
  },
  {
    "word": "eclipse",
    "phonetic": "/ɪˈklɪps/ : 이클립스",
    "options": [
      "일출, 해돋이",
      "일몰, 해넘이",
      "일식, 월식",
      "황혼, 노을"
    ],
    "correct": 2,
    "hint": "힌트: \"일식, 월식\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪˈklɪps/.",
    "score": 8
  },
  {
    "word": "undeveloped",
    "phonetic": "/ˌʌndɪˈveləpt/ : 언디벨롭트",
    "options": [
      "미발견의",
      "미개발된",
      "소외된",
      "비공개의"
    ],
    "correct": 1,
    "hint": "힌트: \"미개발된\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˌʌndɪˈveləpt/.",
    "score": 10
  },
  {
    "word": "underwear",
    "phonetic": "/ˈʌndərwer/ : 언더웨어",
    "options": [
      "수중의",
      "속옷",
      "진행 중인",
      "소프트웨어"
    ],
    "correct": 1,
    "hint": "힌트: \"속옷\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈʌndərwer/.",
    "score": 10
  },
  {
    "word": "medium",
    "phonetic": "/ˈmiːdiəm/ : 미디엄",
    "options": [
      "경기장, 스타디움",
      "지루함, 따분함",
      "중간의, 매체",
      "최대치, 극대값"
    ],
    "correct": 2,
    "hint": "힌트: \"중간의, 매체\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmiːdiəm/.",
    "score": 5
  },
  {
    "word": "seaman",
    "phonetic": "/ˈsiːmən/ : 시맨",
    "options": [
      "시멘트, 접착제",
      "선원, 뱃사람",
      "시민, 주민",
      "의미론, 의미학"
    ],
    "correct": 1,
    "hint": "힌트: \"선원, 뱃사람\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsiːmən/.",
    "score": 5
  },
  {
    "word": "line",
    "phonetic": "/laɪn/ : 라인",
    "options": [
      "선, 줄",
      "사자, 맹수",
      "포도주, 와인",
      "덩굴, 넝쿨"
    ],
    "correct": 0,
    "hint": "힌트: \"선, 줄\"와 가장 가까운 뜻을 고르세요. 발음 단서: /laɪn/.",
    "score": 3
  },
  {
    "word": "must",
    "phonetic": "/mʌst/ : 머스트",
    "options": [
      "돛대",
      "~해야 한다",
      "사향",
      "녹"
    ],
    "correct": 1,
    "hint": "힌트: \"~해야 한다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /mʌst/.",
    "score": 3
  },
  {
    "word": "moon",
    "phonetic": "/muːn/ : 문",
    "options": [
      "슬퍼하다",
      "황무지",
      "달",
      "기분"
    ],
    "correct": 2,
    "hint": "힌트: \"달\"와 가장 가까운 뜻을 고르세요. 발음 단서: /muːn/.",
    "score": 3
  },
  {
    "word": "eardrum",
    "phonetic": "/ˈɪrdrʌm/ : 이어드럼",
    "options": [
      "귀",
      "고막",
      "드럼",
      "귀에 넣는 약"
    ],
    "correct": 1,
    "hint": "힌트: \"고막\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈɪrdrʌm/.",
    "score": 8
  },
  {
    "word": "happen",
    "phonetic": "/ˈhæpən/ : 해픈",
    "options": [
      "발생하다",
      "행복한",
      "행복하게",
      "피난처"
    ],
    "correct": 0,
    "hint": "힌트: \"발생하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈhæpən/.",
    "score": 5
  },
  {
    "word": "brain",
    "phonetic": "/breɪn/ : 브레인",
    "options": [
      "기차, 열차",
      "뇌, 두뇌",
      "배수구, 하수구",
      "곡물, 낟알"
    ],
    "correct": 1,
    "hint": "힌트: \"뇌, 두뇌\"와 가장 가까운 뜻을 고르세요. 발음 단서: /breɪn/.",
    "score": 5
  },
  {
    "word": "learn",
    "phonetic": "/lɜːrn/ : 런",
    "options": [
      "기대다, 의지하다",
      "유혹하다, 꾀다",
      "배우다, 학습하다",
      "태우다, 불태우다"
    ],
    "correct": 2,
    "hint": "힌트: \"배우다, 학습하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /lɜːrn/.",
    "score": 5
  },
  {
    "word": "include",
    "phonetic": "/ɪnˈkluːd/ : 인클루드",
    "options": [
      "경사지다",
      "수입",
      "인코딩하다",
      "포함하다"
    ],
    "correct": 3,
    "hint": "힌트: \"포함하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪnˈkluːd/.",
    "score": 8
  },
  {
    "word": "undesired",
    "phonetic": "/ˌʌndɪˈzaɪərd/ : 언디자이어드",
    "options": [
      "미발견의, 알려지지 않은",
      "원하지 않는, 바람직하지 않은",
      "바람직한, 이상적인",
      "불만족스러운, 부족한"
    ],
    "correct": 1,
    "hint": "힌트: \"원하지 않는, 바람직하지 않은\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˌʌndɪˈzaɪərd/.",
    "score": 10
  },
  {
    "word": "exam",
    "phonetic": "/ɪɡˈzæm/ : 이그잼",
    "options": [
      "예시",
      "배기가스",
      "시험",
      "정확한"
    ],
    "correct": 2,
    "hint": "힌트: \"시험\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪɡˈzæm/.",
    "score": 3
  },
  {
    "word": "even",
    "phonetic": "/ˈiːvən/ : 이븐",
    "options": [
      "오븐, 화덕",
      "사건, 일",
      "심지어, 짝수의",
      "언제나, 항상"
    ],
    "correct": 2,
    "hint": "힌트: \"심지어, 짝수의\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈiːvən/.",
    "score": 3
  },
  {
    "word": "funny",
    "phonetic": "/ˈfʌni/ : 퍼니",
    "options": [
      "재미있는, 우스운",
      "토끼, 깡충거리다",
      "돈, 화폐",
      "화창한, 맑은"
    ],
    "correct": 0,
    "hint": "힌트: \"재미있는, 우스운\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈfʌni/.",
    "score": 5
  },
  {
    "word": "army",
    "phonetic": "/ˈɑːrmi/ : 아미",
    "options": [
      "안락의자, 팔걸이 의자",
      "갑옷, 방어구",
      "팔, 신체 부위",
      "군대, 육군"
    ],
    "correct": 3,
    "hint": "힌트: \"군대, 육군\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈɑːrmi/.",
    "score": 3
  },
  {
    "word": "measure",
    "phonetic": "/ˈmeʒər/ : 메저",
    "options": [
      "즐거움, 쾌락",
      "측정하다, 치수",
      "여가, 휴식",
      "보물, 재물"
    ],
    "correct": 1,
    "hint": "힌트: \"측정하다, 치수\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmeʒər/.",
    "score": 8
  },
  {
    "word": "section",
    "phonetic": "/ˈsekʃən/ : 섹션",
    "options": [
      "회의, 모임",
      "부분, 구역",
      "선택, 고르기",
      "방향, 방위"
    ],
    "correct": 1,
    "hint": "힌트: \"부분, 구역\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsekʃən/.",
    "score": 8
  },
  {
    "word": "explain",
    "phonetic": "/ɪkˈspleɪn/ : 익스플레인",
    "options": [
      "평범한",
      "비행기",
      "폭발하다",
      "설명하다"
    ],
    "correct": 3,
    "hint": "힌트: \"설명하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪkˈspleɪn/.",
    "score": 8
  },
  {
    "word": "Miss",
    "phonetic": "/mɪs/ : 미스",
    "options": [
      "수수께끼, 미스터리",
      "안개, 연무",
      "그리워하다, 놓치다",
      "목록, 명단"
    ],
    "correct": 2,
    "hint": "힌트: \"그리워하다, 놓치다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /mɪs/.",
    "score": 3
  },
  {
    "word": "gamely",
    "phonetic": "/ˈɡeɪmli/ : 게임리",
    "options": [
      "용감하게, 씩씩하게",
      "천천히, 느릿느릿",
      "즐겁게, 유쾌하게",
      "조심스럽게, 신중하게"
    ],
    "correct": 0,
    "hint": "힌트: \"용감하게, 씩씩하게\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈɡeɪmli/.",
    "score": 5
  },
  {
    "word": "poem",
    "phonetic": "/ˈpoʊəm/ : 포엠",
    "options": [
      "거품",
      "방랑하다",
      "집",
      "시(詩)"
    ],
    "correct": 3,
    "hint": "힌트: \"시(詩)\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈpoʊəm/.",
    "score": 3
  },
  {
    "word": "shine",
    "phonetic": "/ʃaɪn/ : 샤인",
    "options": [
      "불평하다, 투덜거리다",
      "포도주, 와인",
      "빛나다, 광택",
      "성지, 신성한 곳"
    ],
    "correct": 2,
    "hint": "힌트: \"빛나다, 광택\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ʃaɪn/.",
    "score": 5
  },
  {
    "word": "introduce",
    "phonetic": "/ˌɪntrəˈdjuːs/ : 인트로듀스",
    "options": [
      "생산하다",
      "소개하다",
      "줄이다",
      "유도하다"
    ],
    "correct": 1,
    "hint": "힌트: \"소개하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˌɪntrəˈdjuːs/.",
    "score": 10
  },
  {
    "word": "underworld",
    "phonetic": "/ˈʌndərwɜːrld/ : 언더월드",
    "options": [
      "속옷, 내의",
      "수중의, 물속의",
      "진행 중인, 계속 중인",
      "지하 세계, 암흑가"
    ],
    "correct": 3,
    "hint": "힌트: \"지하 세계, 암흑가\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈʌndərwɜːrld/.",
    "score": 10
  },
  {
    "word": "watchman",
    "phonetic": "/ˈwɒtʃmən/ : 와치맨",
    "options": [
      "시계, 손목시계",
      "경비원, 파수꾼",
      "감시견, 경비견",
      "감시탑, 망루"
    ],
    "correct": 1,
    "hint": "힌트: \"경비원, 파수꾼\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈwɒtʃmən/.",
    "score": 8
  },
  {
    "word": "yen",
    "phonetic": "/jen/ : 옌",
    "options": [
      "외치다, 소리치다",
      "노란색, 황색",
      "일본 화폐, 갈망",
      "아직, 여전히"
    ],
    "correct": 2,
    "hint": "힌트: \"일본 화폐, 갈망\"와 가장 가까운 뜻을 고르세요. 발음 단서: /jen/.",
    "score": 3
  },
  {
    "word": "again",
    "phonetic": "/əˈɡen/ : 어겐",
    "options": [
      "반대하여, 맞서서",
      "요원, 행위자",
      "안건, 의제",
      "다시, 또"
    ],
    "correct": 3,
    "hint": "힌트: \"다시, 또\"와 가장 가까운 뜻을 고르세요. 발음 단서: /əˈɡen/.",
    "score": 5
  },
  {
    "word": "everyone",
    "phonetic": "/ˈevriwʌn/ : 에브리원",
    "options": [
      "모든 것",
      "어디나",
      "상록수",
      "모든 사람"
    ],
    "correct": 3,
    "hint": "힌트: \"모든 사람\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈevriwʌn/.",
    "score": 8
  },
  {
    "word": "friendly",
    "phonetic": "/ˈfrendli/ : 프렌들리",
    "options": [
      "자유롭게, 자유로이",
      "친절한, 우호적인",
      "친구, 벗",
      "열광, 흥분"
    ],
    "correct": 1,
    "hint": "힌트: \"친절한, 우호적인\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈfrendli/.",
    "score": 8
  },
  {
    "word": "xylophone",
    "phonetic": "/ˈzaɪləfəʊn/ : 자일로폰",
    "options": [
      "마이크",
      "색소폰",
      "실로폰",
      "전화기"
    ],
    "correct": 2,
    "hint": "힌트: \"실로폰\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈzaɪləfəʊn/.",
    "score": 10
  },
  {
    "word": "scream",
    "phonetic": "/skriːm/ : 스크림",
    "options": [
      "크림, 유지방",
      "시냇물, 개울",
      "소리치다, 비명",
      "꿈, 몽상"
    ],
    "correct": 2,
    "hint": "힌트: \"소리치다, 비명\"와 가장 가까운 뜻을 고르세요. 발음 단서: /skriːm/.",
    "score": 5
  },
  {
    "word": "compel",
    "phonetic": "/kəmˈpel/ : 컴펠",
    "options": [
      "경쟁하다, 다투다",
      "완성하다, 끝마치다",
      "편집하다, 작성하다",
      "강요하다, 억지로 시키다"
    ],
    "correct": 3,
    "hint": "힌트: \"강요하다, 억지로 시키다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /kəmˈpel/.",
    "score": 5
  },
  {
    "word": "openair",
    "phonetic": "/ˌoʊpənˈer/ : 오픈에어",
    "options": [
      "야외의, 노천의",
      "열다, 개방하다",
      "오페라, 가극",
      "병따개, 따개"
    ],
    "correct": 0,
    "hint": "힌트: \"야외의, 노천의\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˌoʊpənˈer/.",
    "score": 8
  },
  {
    "word": "mom",
    "phonetic": "/mɒm/ : 맘",
    "options": [
      "지도",
      "군중",
      "순간",
      "엄마"
    ],
    "correct": 3,
    "hint": "힌트: \"엄마\"와 가장 가까운 뜻을 고르세요. 발음 단서: /mɒm/.",
    "score": 3
  },
  {
    "word": "noise",
    "phonetic": "/nɔɪz/ : 노이즈",
    "options": [
      "코, 코끝",
      "올가미, 함정",
      "선택, 고르기",
      "소음, 시끄러운 소리"
    ],
    "correct": 3,
    "hint": "힌트: \"소음, 시끄러운 소리\"와 가장 가까운 뜻을 고르세요. 발음 단서: /nɔɪz/.",
    "score": 5
  },
  {
    "word": "than",
    "phonetic": "/ðæn/ : 댄",
    "options": [
      "그때",
      "~보다 (비교)",
      "구릿빛",
      "얇은"
    ],
    "correct": 1,
    "hint": "힌트: \"~보다 (비교)\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ðæn/.",
    "score": 3
  },
  {
    "word": "humorous",
    "phonetic": "/ˈhjuːmərəs/ : 휴머러스",
    "options": [
      "수많은, 무수한",
      "매력적인, 아름다운",
      "유머러스한, 재미있는",
      "떠들썩한, 시끄러운"
    ],
    "correct": 2,
    "hint": "힌트: \"유머러스한, 재미있는\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈhjuːmərəs/.",
    "score": 8
  },
  {
    "word": "suburb",
    "phonetic": "/ˈsʌbɜːrb/ : 서버브",
    "options": [
      "도심, 시내",
      "교외, 외곽 지역",
      "항구, 항만",
      "수도, 중심지"
    ],
    "correct": 1,
    "hint": "힌트: \"교외, 외곽 지역\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsʌbɜːrb/.",
    "score": 5
  },
  {
    "word": "soon",
    "phonetic": "/suːn/ : 순",
    "options": [
      "달, 월",
      "곧, 빨리",
      "혜택, 이익",
      "숟가락, 스푼"
    ],
    "correct": 1,
    "hint": "힌트: \"곧, 빨리\"와 가장 가까운 뜻을 고르세요. 발음 단서: /suːn/.",
    "score": 3
  },
  {
    "word": "newness",
    "phonetic": "/ˈnjuːnəs/ : 뉴니스",
    "options": [
      "사업, 비즈니스",
      "건강, 건강함",
      "새로움, 신선함",
      "목격자, 증인"
    ],
    "correct": 2,
    "hint": "힌트: \"새로움, 신선함\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnjuːnəs/.",
    "score": 8
  },
  {
    "word": "climber",
    "phonetic": "/ˈklaɪmər/ : 클라이머",
    "options": [
      "오르다, 올라가다",
      "기후, 날씨",
      "절정, 최고점",
      "등반가, 오르는 사람"
    ],
    "correct": 3,
    "hint": "힌트: \"등반가, 오르는 사람\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈklaɪmər/.",
    "score": 8
  },
  {
    "word": "vain",
    "phonetic": "/veɪn/ : 베인",
    "options": [
      "정맥, 혈관",
      "골칫거리, 귀찮은 것",
      "지팡이, 막대기",
      "허영심이 강한, 헛된"
    ],
    "correct": 3,
    "hint": "힌트: \"허영심이 강한, 헛된\"와 가장 가까운 뜻을 고르세요. 발음 단서: /veɪn/.",
    "score": 3
  },
  {
    "word": "semester",
    "phonetic": "/sɪˈmestər/ : 시메스터",
    "options": [
      "학기",
      "세미나",
      "상원의원",
      "선배"
    ],
    "correct": 0,
    "hint": "힌트: \"학기\"와 가장 가까운 뜻을 고르세요. 발음 단서: /sɪˈmestər/.",
    "score": 8
  },
  {
    "word": "pen",
    "phonetic": "/pen/ : 펜",
    "options": [
      "암탉, 어미 닭",
      "은신처, 숨는 곳",
      "숫자 10, 열(십)",
      "펜, 볼펜"
    ],
    "correct": 3,
    "hint": "힌트: \"펜, 볼펜\"와 가장 가까운 뜻을 고르세요. 발음 단서: /pen/.",
    "score": 3
  },
  {
    "word": "pardon",
    "phonetic": "/ˈpɑːrdən/ : 파든",
    "options": [
      "정원, 뜰",
      "부담, 짐",
      "용서하다, 사면",
      "교도관, 간수"
    ],
    "correct": 2,
    "hint": "힌트: \"용서하다, 사면\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈpɑːrdən/.",
    "score": 5
  },
  {
    "word": "event",
    "phonetic": "/ɪˈvent/ : 이벤트",
    "options": [
      "발명하다, 고안하다",
      "행사, 사건",
      "예방하다, 막다",
      "도래, 이벤트"
    ],
    "correct": 1,
    "hint": "힌트: \"행사, 사건\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪˈvent/.",
    "score": 5
  },
  {
    "word": "building",
    "phonetic": "/ˈbɪldɪŋ/ : 빌딩",
    "options": [
      "청구, 청구서",
      "10억, 십억",
      "당구, 당구공",
      "건물, 빌딩"
    ],
    "correct": 3,
    "hint": "힌트: \"건물, 빌딩\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈbɪldɪŋ/.",
    "score": 8
  },
  {
    "word": "dawn",
    "phonetic": "/dɔːn/ : 돈",
    "options": [
      "새벽, 동틀 무렵",
      "아래로, 아래쪽으로",
      "익사하다, 물에 빠지다",
      "왕관, 왕의 관"
    ],
    "correct": 0,
    "hint": "힌트: \"새벽, 동틀 무렵\"와 가장 가까운 뜻을 고르세요. 발음 단서: /dɔːn/.",
    "score": 3
  },
  {
    "word": "evening",
    "phonetic": "/ˈiːvnɪŋ/ : 이브닝",
    "options": [
      "사건",
      "전날 저녁",
      "심지어",
      "저녁"
    ],
    "correct": 3,
    "hint": "힌트: \"저녁\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈiːvnɪŋ/.",
    "score": 8
  },
  {
    "word": "enemy",
    "phonetic": "/ˈenəmi/ : 에너미",
    "options": [
      "에너지, 활력",
      "관장, 총책임자",
      "적, 원수",
      "말미잘, 바다 생물"
    ],
    "correct": 2,
    "hint": "힌트: \"적, 원수\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈenəmi/.",
    "score": 5
  },
  {
    "word": "national",
    "phonetic": "/ˈnæʃənl/ : 내셔널",
    "options": [
      "합리적인, 이성적인",
      "항해의, 항해에 관한",
      "선택적인, 임의의",
      "국가의, 전국적인"
    ],
    "correct": 3,
    "hint": "힌트: \"국가의, 전국적인\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnæʃənl/.",
    "score": 8
  },
  {
    "word": "temple",
    "phonetic": "/ˈtempəl/ : 템플",
    "options": [
      "떨다, 진동하다",
      "샘플, 본보기",
      "사원, 절",
      "예시, 보기"
    ],
    "correct": 2,
    "hint": "힌트: \"사원, 절\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈtempəl/.",
    "score": 5
  },
  {
    "word": "contest",
    "phonetic": "/ˈkɒntest/ : 콘테스트",
    "options": [
      "내용, 내용물",
      "맥락, 상황",
      "계약, 약정",
      "대회, 경쟁"
    ],
    "correct": 3,
    "hint": "힌트: \"대회, 경쟁\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈkɒntest/.",
    "score": 8
  },
  {
    "word": "giant",
    "phonetic": "/ˈdʒaɪənt/ : 자이언트",
    "options": [
      "거인, 거대한",
      "승인하다, 찬성하다",
      "기울다, 숙이다",
      "식물, 초목"
    ],
    "correct": 0,
    "hint": "힌트: \"거인, 거대한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈdʒaɪənt/.",
    "score": 5
  },
  {
    "word": "invent",
    "phonetic": "/ɪnˈvent/ : 인벤트",
    "options": [
      "사건",
      "발명하다",
      "예방하다",
      "투자하다"
    ],
    "correct": 1,
    "hint": "힌트: \"발명하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪnˈvent/.",
    "score": 5
  },
  {
    "word": "knife",
    "phonetic": "/naɪf/ : 나이프",
    "options": [
      "무릎 꿇다, 엎드리다",
      "기사, 騎士",
      "뜨개질하다, 짜다",
      "칼, 나이프"
    ],
    "correct": 3,
    "hint": "힌트: \"칼, 나이프\"와 가장 가까운 뜻을 고르세요. 발음 단서: /naɪf/.",
    "score": 5
  },
  {
    "word": "almost",
    "phonetic": "/ˈɔːlmoʊst/ : 올모스트",
    "options": [
      "최고의",
      "최대한의",
      "거의",
      "조금도"
    ],
    "correct": 2,
    "hint": "힌트: \"거의\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈɔːlmoʊst/.",
    "score": 5
  },
  {
    "word": "unicorn",
    "phonetic": "/ˈjuːnɪkɔːrn/ : 유니콘",
    "options": [
      "전설의 동물",
      "유니폼",
      "독특한",
      "노동조합"
    ],
    "correct": 0,
    "hint": "힌트: \"전설의 동물\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈjuːnɪkɔːrn/.",
    "score": 8
  },
  {
    "word": "dangerous",
    "phonetic": "/ˈdeɪndʒərəs/ : 데인저러스",
    "options": [
      "낯선 사람",
      "삼림관리원",
      "위험한",
      "위험"
    ],
    "correct": 2,
    "hint": "힌트: \"위험한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈdeɪndʒərəs/.",
    "score": 10
  },
  {
    "word": "burn",
    "phonetic": "/bɜːrn/ : 번",
    "options": [
      "타다, 불태우다",
      "헛간, 창고",
      "돌다, 회전하다",
      "벌다, 수입하다"
    ],
    "correct": 0,
    "hint": "힌트: \"타다, 불태우다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /bɜːrn/.",
    "score": 3
  },
  {
    "word": "cleanness",
    "phonetic": "/ˈkliːnnəs/ : 클린니스",
    "options": [
      "솔직함, 공정함",
      "청결함, 깨끗함",
      "명확함, 분명함",
      "신선함, 상쾌함"
    ],
    "correct": 1,
    "hint": "힌트: \"청결함, 깨끗함\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈkliːnnəs/.",
    "score": 10
  },
  {
    "word": "continue",
    "phonetic": "/kənˈtɪnjuː/ : 컨티뉴",
    "options": [
      "포함하다",
      "내용물",
      "계속하다",
      "계약"
    ],
    "correct": 2,
    "hint": "힌트: \"계속하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /kənˈtɪnjuː/.",
    "score": 8
  },
  {
    "word": "zoom",
    "phonetic": "/zuːm/ : 줌",
    "options": [
      "방, 공간",
      "폭발음, 빠른 소리",
      "베틀, 직조기",
      "확대하다, 빠르게 이동하다"
    ],
    "correct": 3,
    "hint": "힌트: \"확대하다, 빠르게 이동하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /zuːm/.",
    "score": 3
  },
  {
    "word": "women",
    "phonetic": "/ˈwɪmɪn/ : 위민",
    "options": [
      "여성(단수)",
      "양모의",
      "여성들",
      "나무의"
    ],
    "correct": 2,
    "hint": "힌트: \"여성들\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈwɪmɪn/.",
    "score": 5
  },
  {
    "word": "once",
    "phonetic": "/wʌns/ : 원스",
    "options": [
      "한 번, 일단",
      "온스, 무게 단위",
      "튀다, 튀어오르다",
      "덮치다, 공격하다"
    ],
    "correct": 0,
    "hint": "힌트: \"한 번, 일단\"와 가장 가까운 뜻을 고르세요. 발음 단서: /wʌns/.",
    "score": 3
  },
  {
    "word": "themselves",
    "phonetic": "/ðəmˈselvz/ : 뎀셀브즈",
    "options": [
      "그 스스로",
      "그들 스스로",
      "그녀 스스로",
      "당신 스스로"
    ],
    "correct": 1,
    "hint": "힌트: \"그들 스스로\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ðəmˈselvz/.",
    "score": 10
  },
  {
    "word": "problem",
    "phonetic": "/ˈprɒbləm/ : 프로블럼",
    "options": [
      "프로그램",
      "진전",
      "약속",
      "문제"
    ],
    "correct": 3,
    "hint": "힌트: \"문제\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈprɒbləm/.",
    "score": 8
  },
  {
    "word": "turn",
    "phonetic": "/tɜːrn/ : 턴",
    "options": [
      "돌다, 차례",
      "타다, 올라타다",
      "휘젓다, 젓다",
      "벌다, 수입하다"
    ],
    "correct": 0,
    "hint": "힌트: \"돌다, 차례\"와 가장 가까운 뜻을 고르세요. 발음 단서: /tɜːrn/.",
    "score": 3
  },
  {
    "word": "train",
    "phonetic": "/treɪn/ : 트레인",
    "options": [
      "배수구, 하수구",
      "기차, 훈련하다",
      "곡물, 낟알",
      "뇌, 두뇌"
    ],
    "correct": 1,
    "hint": "힌트: \"기차, 훈련하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /treɪn/.",
    "score": 5
  },
  {
    "word": "wedding",
    "phonetic": "/ˈwedɪŋ/ : 웨딩",
    "options": [
      "결혼식",
      "읽기",
      "제목",
      "침구"
    ],
    "correct": 0,
    "hint": "힌트: \"결혼식\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈwedɪŋ/.",
    "score": 8
  },
  {
    "word": "young",
    "phonetic": "/jʌŋ/ : 영",
    "options": [
      "노래",
      "긴",
      "징 (악기)",
      "젊은, 어린"
    ],
    "correct": 3,
    "hint": "힌트: \"젊은, 어린\"와 가장 가까운 뜻을 고르세요. 발음 단서: /jʌŋ/.",
    "score": 5
  },
  {
    "word": "money",
    "phonetic": "/ˈmʌni/ : 머니",
    "options": [
      "꿀",
      "돈",
      "재미있는",
      "화창한"
    ],
    "correct": 1,
    "hint": "힌트: \"돈\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmʌni/.",
    "score": 5
  },
  {
    "word": "prison",
    "phonetic": "/ˈprɪzən/ : 프리즌",
    "options": [
      "이유",
      "계절",
      "독",
      "감옥"
    ],
    "correct": 3,
    "hint": "힌트: \"감옥\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈprɪzən/.",
    "score": 5
  },
  {
    "word": "tonight",
    "phonetic": "/təˈnaɪt/ : 투나이트",
    "options": [
      "오늘 밤",
      "황혼",
      "달빛",
      "햇빛"
    ],
    "correct": 0,
    "hint": "힌트: \"오늘 밤\"와 가장 가까운 뜻을 고르세요. 발음 단서: /təˈnaɪt/.",
    "score": 8
  },
  {
    "word": "uprising",
    "phonetic": "/ˈʌpraɪzɪŋ/ : 업라이징",
    "options": [
      "양육, 키우기",
      "봉기, 반란",
      "업데이트, 갱신",
      "업그레이드, 상위 버전"
    ],
    "correct": 1,
    "hint": "힌트: \"봉기, 반란\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈʌpraɪzɪŋ/.",
    "score": 8
  },
  {
    "word": "entrance",
    "phonetic": "/ˈentrəns/ : 엔트런스",
    "options": [
      "출구",
      "입구",
      "거리",
      "물질"
    ],
    "correct": 1,
    "hint": "힌트: \"입구\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈentrəns/.",
    "score": 8
  },
  {
    "word": "open",
    "phonetic": "/ˈoʊpən/ : 오픈",
    "options": [
      "자주, 종종",
      "오븐, 화덕",
      "열다, 열린",
      "바다, 대양"
    ],
    "correct": 2,
    "hint": "힌트: \"열다, 열린\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈoʊpən/.",
    "score": 3
  },
  {
    "word": "something",
    "phonetic": "/ˈsʌmθɪŋ/ : 섬씽",
    "options": [
      "언젠가",
      "다소",
      "무언가",
      "어딘가"
    ],
    "correct": 2,
    "hint": "힌트: \"무언가\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsʌmθɪŋ/.",
    "score": 10
  },
  {
    "word": "jump",
    "phonetic": "/dʒʌmp/ : 점프",
    "options": [
      "도약하다, 뛰어오르다",
      "버리다, 포기하다",
      "막다, 방해하다",
      "충돌하다, 부딪히다"
    ],
    "correct": 0,
    "hint": "힌트: \"도약하다, 뛰어오르다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /dʒʌmp/.",
    "score": 3
  },
  {
    "word": "ring",
    "phonetic": "/rɪŋ/ : 링",
    "options": [
      "반지, 울리다",
      "왕, 임금",
      "노래하다, 부르다",
      "딩동 소리, 종소리"
    ],
    "correct": 0,
    "hint": "힌트: \"반지, 울리다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /rɪŋ/.",
    "score": 3
  },
  {
    "word": "become",
    "phonetic": "/bɪˈkʌm/ : 비컴",
    "options": [
      "~이 되다",
      "수입",
      "결과",
      "환영하다"
    ],
    "correct": 0,
    "hint": "힌트: \"~이 되다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /bɪˈkʌm/.",
    "score": 5
  },
  {
    "word": "dictionary",
    "phonetic": "/ˈdɪkʃəneri/ : 딕셔너리",
    "options": [
      "다큐멘터리",
      "디렉토리",
      "사전",
      "임의의"
    ],
    "correct": 2,
    "hint": "힌트: \"사전\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈdɪkʃəneri/.",
    "score": 10
  },
  {
    "word": "bedroom",
    "phonetic": "/ˈbedrʊm/ : 베드룸",
    "options": [
      "전시실",
      "교실",
      "욕실",
      "침실"
    ],
    "correct": 3,
    "hint": "힌트: \"침실\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈbedrʊm/.",
    "score": 8
  },
  {
    "word": "sunshine",
    "phonetic": "/ˈsʌnʃaɪn/ : 선샤인",
    "options": [
      "햇빛, 햇살",
      "달빛, 밀주",
      "선크림, 자외선 차단제",
      "햇볕에 탐, 그을리다"
    ],
    "correct": 0,
    "hint": "힌트: \"햇빛, 햇살\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsʌnʃaɪn/.",
    "score": 8
  },
  {
    "word": "mouth",
    "phonetic": "/maʊθ/ : 마우스",
    "options": [
      "입",
      "생쥐",
      "산, 올라타다",
      "남쪽"
    ],
    "correct": 0,
    "hint": "힌트: \"입\"와 가장 가까운 뜻을 고르세요. 발음 단서: /maʊθ/.",
    "score": 5
  },
  {
    "word": "babbling",
    "phonetic": "/ˈbæblɪŋ/ : 배블링",
    "options": [
      "도박, 내기",
      "산만한, 주의가 산만한",
      "기어오르다, 기다",
      "옹알이, 재잘거림"
    ],
    "correct": 3,
    "hint": "힌트: \"옹알이, 재잘거림\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈbæblɪŋ/.",
    "score": 8
  },
  {
    "word": "guidance",
    "phonetic": "/ˈɡaɪdns/ : 가이던스",
    "options": [
      "안내자, 가이드",
      "기타, 그 외",
      "조합, 연합",
      "안내, 지도"
    ],
    "correct": 3,
    "hint": "힌트: \"안내, 지도\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈɡaɪdns/.",
    "score": 8
  },
  {
    "word": "lantern",
    "phonetic": "/ˈlæntərn/ : 랜턴",
    "options": [
      "양초, 촛불",
      "손전등, 플래시",
      "가로등, 가로등불",
      "등불, 초롱"
    ],
    "correct": 3,
    "hint": "힌트: \"등불, 초롱\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈlæntərn/.",
    "score": 8
  },
  {
    "word": "newish",
    "phonetic": "/ˈnjuːɪʃ/ : 뉴이시",
    "options": [
      "오래된, 옛날의",
      "낡은, 못 쓰는",
      "새로운 편인, 비교적 새로운",
      "고전적인, 전통적인"
    ],
    "correct": 2,
    "hint": "힌트: \"새로운 편인, 비교적 새로운\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnjuːɪʃ/.",
    "score": 5
  },
  {
    "word": "undertone",
    "phonetic": "/ˈʌndətəʊn/ : 언더톤",
    "options": [
      "높은 음조, 고음",
      "큰 소리, 큰 목소리",
      "외침, 외치는 소리",
      "낮은 목소리, 기저음"
    ],
    "correct": 3,
    "hint": "힌트: \"낮은 목소리, 기저음\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈʌndətəʊn/.",
    "score": 10
  },
  {
    "word": "nickel",
    "phonetic": "/ˈnɪkl/ : 니클",
    "options": [
      "금화, 금으로 만든 동전",
      "지폐, 종이돈",
      "5센트 동전, 니켈",
      "은화, 은으로 만든 동전"
    ],
    "correct": 2,
    "hint": "힌트: \"5센트 동전, 니켈\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnɪkl/.",
    "score": 5
  },
  {
    "word": "sunny",
    "phonetic": "/ˈsʌni/ : 써니",
    "options": [
      "흐린, 구름 낀",
      "화창한, 맑은",
      "비가 오는, 비 내리는",
      "눈이 내리는, 설경의"
    ],
    "correct": 1,
    "hint": "힌트: \"화창한, 맑은\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsʌni/.",
    "score": 5
  },
  {
    "word": "astronomy",
    "phonetic": "/əˈstrɒnəmi/ : 어스트로너미",
    "options": [
      "천문학",
      "물리학",
      "생물학",
      "화학"
    ],
    "correct": 0,
    "hint": "힌트: \"천문학\"와 가장 가까운 뜻을 고르세요. 발음 단서: /əˈstrɒnəmi/.",
    "score": 10
  },
  {
    "word": "newspaper",
    "phonetic": "/ˈnjuːzpeɪpər/ : 뉴스페이퍼",
    "options": [
      "방송",
      "잡지",
      "소설",
      "신문"
    ],
    "correct": 3,
    "hint": "힌트: \"신문\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnjuːzpeɪpər/.",
    "score": 10
  },
  {
    "word": "magazine",
    "phonetic": "/ˌmæɡəˈziːn/ : 매거진",
    "options": [
      "신문",
      "잡지",
      "교과서",
      "사전"
    ],
    "correct": 1,
    "hint": "힌트: \"잡지\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˌmæɡəˈziːn/.",
    "score": 8
  },
  {
    "word": "amuse",
    "phonetic": "/əˈmjuːz/ : 어뮤즈",
    "options": [
      "즐겁게 하다, 웃기다",
      "화나게 하다, 성나게 하다",
      "슬프게 하다, 울리다",
      "놀라게 하다, 깜짝 놀라게 하다"
    ],
    "correct": 0,
    "hint": "힌트: \"즐겁게 하다, 웃기다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /əˈmjuːz/.",
    "score": 5
  },
  {
    "word": "scene",
    "phonetic": "/siːn/ : 씬",
    "options": [
      "배우, 연기자",
      "무대, 극장 무대",
      "관객, 구경꾼",
      "장면, 현장"
    ],
    "correct": 3,
    "hint": "힌트: \"장면, 현장\"와 가장 가까운 뜻을 고르세요. 발음 단서: /siːn/.",
    "score": 5
  },
  {
    "word": "weekend",
    "phonetic": "/ˌwiːkˈend/ : 위켄드",
    "options": [
      "방학",
      "공휴일",
      "주말",
      "평일"
    ],
    "correct": 2,
    "hint": "힌트: \"주말\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˌwiːkˈend/.",
    "score": 8
  },
  {
    "word": "blind",
    "phonetic": "/blaɪnd/ : 블라인드",
    "options": [
      "청각 장애의, 귀가 안 들리는",
      "눈이 먼, 맹목적인",
      "말을 못하는, 언어 장애의",
      "기억이 없는, 기억을 잃은"
    ],
    "correct": 1,
    "hint": "힌트: \"눈이 먼, 맹목적인\"와 가장 가까운 뜻을 고르세요. 발음 단서: /blaɪnd/.",
    "score": 5
  },
  {
    "word": "experience",
    "phonetic": "/ɪkˈspɪəriəns/ : 익스피리언스",
    "options": [
      "상상, 상상력",
      "이론, 학설",
      "경험, 체험",
      "지식, 앎"
    ],
    "correct": 2,
    "hint": "힌트: \"경험, 체험\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪkˈspɪəriəns/.",
    "score": 10
  },
  {
    "word": "gentleman",
    "phonetic": "/ˈdʒentlmən/ : 젠틀맨",
    "options": [
      "귀족",
      "악당",
      "어린이",
      "신사"
    ],
    "correct": 3,
    "hint": "힌트: \"신사\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈdʒentlmən/.",
    "score": 10
  },
  {
    "word": "banana",
    "phonetic": "/bəˈnɑːnə/ : 버나나",
    "options": [
      "사과",
      "바나나",
      "포도",
      "오렌지"
    ],
    "correct": 1,
    "hint": "힌트: \"바나나\"와 가장 가까운 뜻을 고르세요. 발음 단서: /bəˈnɑːnə/.",
    "score": 5
  },
  {
    "word": "windy",
    "phonetic": "/ˈwɪndi/ : 윈디",
    "options": [
      "바람이 많이 부는",
      "맑은",
      "흐린",
      "눈 내리는"
    ],
    "correct": 0,
    "hint": "힌트: \"바람이 많이 부는\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈwɪndi/.",
    "score": 5
  },
  {
    "word": "camp",
    "phonetic": "/kæmp/ : 캠프",
    "options": [
      "학교, 학원",
      "병원, 의원",
      "야영지, 캠프",
      "도서관, 열람실"
    ],
    "correct": 2,
    "hint": "힌트: \"야영지, 캠프\"와 가장 가까운 뜻을 고르세요. 발음 단서: /kæmp/.",
    "score": 3
  },
  {
    "word": "never",
    "phonetic": "/ˈnevər/ : 네버",
    "options": [
      "자주",
      "항상",
      "보통",
      "결코 ~않다"
    ],
    "correct": 3,
    "hint": "힌트: \"결코 ~않다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnevər/.",
    "score": 5
  },
  {
    "word": "boring",
    "phonetic": "/ˈbɔːrɪŋ/ : 보링",
    "options": [
      "지루한, 따분한",
      "재미있는, 즐거운",
      "흥미로운, 매력적인",
      "신나는, 설레는"
    ],
    "correct": 0,
    "hint": "힌트: \"지루한, 따분한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈbɔːrɪŋ/.",
    "score": 5
  },
  {
    "word": "civilian",
    "phonetic": "/sɪˈvɪliən/ : 시빌리언",
    "options": [
      "군인, 군사",
      "경찰관, 순경",
      "민간인, 일반 시민",
      "공무원, 관료"
    ],
    "correct": 2,
    "hint": "힌트: \"민간인, 일반 시민\"와 가장 가까운 뜻을 고르세요. 발음 단서: /sɪˈvɪliən/.",
    "score": 8
  },
  {
    "word": "inside",
    "phonetic": "/ˌɪnˈsaɪd/ : 인사이드",
    "options": [
      "바깥쪽, 외부",
      "안쪽, 내부",
      "위쪽, 상단",
      "아래쪽, 하단"
    ],
    "correct": 1,
    "hint": "힌트: \"안쪽, 내부\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˌɪnˈsaɪd/.",
    "score": 5
  },
  {
    "word": "myself",
    "phonetic": "/maɪˈself/ : 마이셀프",
    "options": [
      "나 자신",
      "너 자신",
      "그 자신",
      "우리 자신"
    ],
    "correct": 0,
    "hint": "힌트: \"나 자신\"와 가장 가까운 뜻을 고르세요. 발음 단서: /maɪˈself/.",
    "score": 5
  },
  {
    "word": "team",
    "phonetic": "/tiːm/ : 팀",
    "options": [
      "개인, 홀로",
      "팀, 단체",
      "경쟁자, 라이벌",
      "상대, 상대방"
    ],
    "correct": 1,
    "hint": "힌트: \"팀, 단체\"와 가장 가까운 뜻을 고르세요. 발음 단서: /tiːm/.",
    "score": 3
  },
  {
    "word": "earliness",
    "phonetic": "/ˈɜːrlinəs/ : 얼리니스",
    "options": [
      "이른 시기, 조기",
      "늦음, 지연",
      "지각, 늦게 도착",
      "연기, 미루기"
    ],
    "correct": 0,
    "hint": "힌트: \"이른 시기, 조기\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈɜːrlinəs/.",
    "score": 10
  },
  {
    "word": "silence",
    "phonetic": "/ˈsaɪləns/ : 사일런스",
    "options": [
      "소음, 잡음",
      "음악, 소리",
      "침묵, 고요함",
      "말소리, 목소리"
    ],
    "correct": 2,
    "hint": "힌트: \"침묵, 고요함\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsaɪləns/.",
    "score": 8
  },
  {
    "word": "understate",
    "phonetic": "/ˌʌndərˈsteɪt/ : 언더스테이트",
    "options": [
      "과장하다, 부풀리다",
      "축소하여 말하다, 과소평가하다",
      "강조하다, 부각시키다",
      "칭찬하다, 추켜세우다"
    ],
    "correct": 1,
    "hint": "힌트: \"축소하여 말하다, 과소평가하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˌʌndərˈsteɪt/.",
    "score": 10
  },
  {
    "word": "smell",
    "phonetic": "/smel/ : 스멜",
    "options": [
      "맛보다, 음미하다",
      "만지다, 접촉하다",
      "듣다, 귀 기울이다",
      "냄새, 냄새 맡다"
    ],
    "correct": 3,
    "hint": "힌트: \"냄새, 냄새 맡다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /smel/.",
    "score": 5
  },
  {
    "word": "master",
    "phonetic": "/ˈmɑːstər/ : 마스터",
    "options": [
      "학생, 배우는 사람",
      "초보자, 입문자",
      "견습생, 수련생",
      "주인, 달인, 숙달하다"
    ],
    "correct": 3,
    "hint": "힌트: \"주인, 달인, 숙달하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmɑːstər/.",
    "score": 5
  },
  {
    "word": "america",
    "phonetic": "/əˈmerɪkə/ : 어메리카",
    "options": [
      "미국, 아메리카",
      "유럽, 구대륙",
      "아시아, 동양",
      "아프리카, 대륙"
    ],
    "correct": 0,
    "hint": "힌트: \"미국, 아메리카\"와 가장 가까운 뜻을 고르세요. 발음 단서: /əˈmerɪkə/.",
    "score": 8
  },
  {
    "word": "jam",
    "phonetic": "/dʒæm/ : 잼",
    "options": [
      "버터, 유지",
      "잼, 혼잡",
      "치즈, 유제품",
      "마요네즈, 소스"
    ],
    "correct": 1,
    "hint": "힌트: \"잼, 혼잡\"와 가장 가까운 뜻을 고르세요. 발음 단서: /dʒæm/.",
    "score": 3
  },
  {
    "word": "town",
    "phonetic": "/taʊn/ : 타운",
    "options": [
      "숲, 삼림",
      "사막, 황야",
      "바다, 해양",
      "마을, 도시"
    ],
    "correct": 3,
    "hint": "힌트: \"마을, 도시\"와 가장 가까운 뜻을 고르세요. 발음 단서: /taʊn/.",
    "score": 3
  },
  {
    "word": "dream",
    "phonetic": "/driːm/ : 드림",
    "options": [
      "생각, 사고",
      "기억, 추억",
      "계획, 계획하다",
      "꿈, 꿈을 꾸다"
    ],
    "correct": 3,
    "hint": "힌트: \"꿈, 꿈을 꾸다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /driːm/.",
    "score": 5
  },
  {
    "word": "vacation",
    "phonetic": "/veɪˈkeɪʃn/ : 베이케이션",
    "options": [
      "휴가, 방학",
      "출근, 일하러 감",
      "수업, 학습",
      "노동, 일"
    ],
    "correct": 0,
    "hint": "힌트: \"휴가, 방학\"와 가장 가까운 뜻을 고르세요. 발음 단서: /veɪˈkeɪʃn/.",
    "score": 8
  },
  {
    "word": "company",
    "phonetic": "/ˈkʌmpəni/ : 컴퍼니",
    "options": [
      "학교, 교육기관",
      "병원, 의료기관",
      "회사, 동료",
      "가게, 상점"
    ],
    "correct": 2,
    "hint": "힌트: \"회사, 동료\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈkʌmpəni/.",
    "score": 8
  },
  {
    "word": "adventure",
    "phonetic": "/ədˈventʃər/ : 어드벤처",
    "options": [
      "안정",
      "모험",
      "평온",
      "휴식"
    ],
    "correct": 1,
    "hint": "힌트: \"모험\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ədˈventʃər/.",
    "score": 10
  },
  {
    "word": "another",
    "phonetic": "/əˈnʌðər/ : 어나더",
    "options": [
      "같은, 일치하는",
      "동일한, 변함없는",
      "하나의, 단 하나의",
      "또 다른, 다른 하나"
    ],
    "correct": 3,
    "hint": "힌트: \"또 다른, 다른 하나\"와 가장 가까운 뜻을 고르세요. 발음 단서: /əˈnʌðər/.",
    "score": 8
  },
  {
    "word": "move",
    "phonetic": "/muːv/ : 무브",
    "options": [
      "멈추다, 정지하다",
      "앉다, 착석하다",
      "움직이다, 이사하다",
      "자다, 잠들다"
    ],
    "correct": 2,
    "hint": "힌트: \"움직이다, 이사하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /muːv/.",
    "score": 3
  },
  {
    "word": "smartness",
    "phonetic": "/ˈsmɑːrtnəs/ : 스마트니스",
    "options": [
      "어리석음, 우둔함",
      "게으름, 나태함",
      "느림, 굼뜸",
      "영리함, 말쑥함"
    ],
    "correct": 3,
    "hint": "힌트: \"영리함, 말쑥함\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsmɑːrtnəs/.",
    "score": 10
  },
  {
    "word": "valiant",
    "phonetic": "/ˈvæliənt/ : 밸리언트",
    "options": [
      "용감한, 씩씩한",
      "겁 많은, 두려워하는",
      "나약한, 힘없는",
      "소심한, 자신감 없는"
    ],
    "correct": 0,
    "hint": "힌트: \"용감한, 씩씩한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈvæliənt/.",
    "score": 8
  },
  {
    "word": "mind",
    "phonetic": "/maɪnd/ : 마인드",
    "options": [
      "몸, 신체",
      "얼굴, 얼굴 표정",
      "마음, 정신",
      "손, 손바닥"
    ],
    "correct": 2,
    "hint": "힌트: \"마음, 정신\"와 가장 가까운 뜻을 고르세요. 발음 단서: /maɪnd/.",
    "score": 3
  },
  {
    "word": "license",
    "phonetic": "/ˈlaɪsns/ : 라이선스",
    "options": [
      "벌금, 과태료",
      "면허, 허가증",
      "영수증, 계산서",
      "증거, 증명"
    ],
    "correct": 1,
    "hint": "힌트: \"면허, 허가증\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈlaɪsns/.",
    "score": 8
  },
  {
    "word": "win",
    "phonetic": "/wɪn/ : 윈",
    "options": [
      "지다, 패배하다",
      "포기하다, 그만두다",
      "비기다, 무승부",
      "이기다, 승리하다"
    ],
    "correct": 3,
    "hint": "힌트: \"이기다, 승리하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /wɪn/.",
    "score": 3
  },
  {
    "word": "count",
    "phonetic": "/kaʊnt/ : 카운트",
    "options": [
      "세다, 계산하다",
      "지우다, 삭제하다",
      "나누다, 분리하다",
      "쓰다, 기록하다"
    ],
    "correct": 0,
    "hint": "힌트: \"세다, 계산하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /kaʊnt/.",
    "score": 5
  },
  {
    "word": "system",
    "phonetic": "/ˈsɪstəm/ : 시스템",
    "options": [
      "혼란, 혼돈",
      "체계, 시스템",
      "무질서, 엉망",
      "임의, 무작위"
    ],
    "correct": 1,
    "hint": "힌트: \"체계, 시스템\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsɪstəm/.",
    "score": 5
  },
  {
    "word": "neck",
    "phonetic": "/nek/ : 넥",
    "options": [
      "발",
      "손",
      "머리",
      "목"
    ],
    "correct": 3,
    "hint": "힌트: \"목\"와 가장 가까운 뜻을 고르세요. 발음 단서: /nek/.",
    "score": 3
  },
  {
    "word": "new",
    "phonetic": "/njuː/ : 뉴",
    "options": [
      "새로운",
      "오래된",
      "낡은",
      "중고의"
    ],
    "correct": 0,
    "hint": "힌트: \"새로운\"와 가장 가까운 뜻을 고르세요. 발음 단서: /njuː/.",
    "score": 3
  },
  {
    "word": "necessary",
    "phonetic": "/ˈnesəseri/ : 네서세리",
    "options": [
      "불필요한, 없어도 되는",
      "선택적인, 자유로운",
      "필요한, 필수적인",
      "임의의, 뜻대로의"
    ],
    "correct": 2,
    "hint": "힌트: \"필요한, 필수적인\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnesəseri/.",
    "score": 10
  },
  {
    "word": "chance",
    "phonetic": "/tʃɑːns/ : 챈스",
    "options": [
      "위험, 리스크",
      "실패, 실수",
      "결과, 결말",
      "기회, 가능성"
    ],
    "correct": 3,
    "hint": "힌트: \"기회, 가능성\"와 가장 가까운 뜻을 고르세요. 발음 단서: /tʃɑːns/.",
    "score": 5
  },
  {
    "word": "idiom",
    "phonetic": "/ˈɪdiəm/ : 이디엄",
    "options": [
      "단어, 낱말",
      "문장, 글",
      "발음, 소리내기",
      "관용구, 숙어"
    ],
    "correct": 3,
    "hint": "힌트: \"관용구, 숙어\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈɪdiəm/.",
    "score": 5
  },
  {
    "word": "sign",
    "phonetic": "/saɪn/ : 사인",
    "options": [
      "표지, 신호, 서명하다",
      "지우다, 삭제하다",
      "숨기다, 감추다",
      "무시하다, 모른 척하다"
    ],
    "correct": 0,
    "hint": "힌트: \"표지, 신호, 서명하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /saɪn/.",
    "score": 3
  },
  {
    "word": "enough",
    "phonetic": "/ɪˈnʌf/ : 이너프",
    "options": [
      "부족한, 모자란",
      "너무 많은, 과도한",
      "충분한, 충분히",
      "조금, 약간"
    ],
    "correct": 2,
    "hint": "힌트: \"충분한, 충분히\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪˈnʌf/.",
    "score": 5
  },
  {
    "word": "classmate",
    "phonetic": "/ˈklɑːsmeɪt/ : 클래스메이트",
    "options": [
      "선생님, 교사",
      "반 친구, 동급생",
      "교장, 교장 선생님",
      "부모, 어버이"
    ],
    "correct": 1,
    "hint": "힌트: \"반 친구, 동급생\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈklɑːsmeɪt/.",
    "score": 10
  },
  {
    "word": "marry",
    "phonetic": "/ˈmæri/ : 매리",
    "options": [
      "이별하다",
      "만나다",
      "데이트하다",
      "결혼하다"
    ],
    "correct": 3,
    "hint": "힌트: \"결혼하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmæri/.",
    "score": 5
  },
  {
    "word": "museum",
    "phonetic": "/mjuˈziːəm/ : 뮤지엄",
    "options": [
      "박물관, 미술관",
      "도서관, 열람실",
      "병원, 의원",
      "학교, 학원"
    ],
    "correct": 0,
    "hint": "힌트: \"박물관, 미술관\"와 가장 가까운 뜻을 고르세요. 발음 단서: /mjuˈziːəm/.",
    "score": 5
  },
  {
    "word": "front",
    "phonetic": "/frʌnt/ : 프런트",
    "options": [
      "뒤, 뒷면",
      "옆, 측면",
      "앞, 전면",
      "위, 상단"
    ],
    "correct": 2,
    "hint": "힌트: \"앞, 전면\"와 가장 가까운 뜻을 고르세요. 발음 단서: /frʌnt/.",
    "score": 5
  },
  {
    "word": "math",
    "phonetic": "/mæθ/ : 매스",
    "options": [
      "과학",
      "수학",
      "역사",
      "영어"
    ],
    "correct": 1,
    "hint": "힌트: \"수학\"와 가장 가까운 뜻을 고르세요. 발음 단서: /mæθ/.",
    "score": 3
  },
  {
    "word": "campfire",
    "phonetic": "/ˈkæmpfaɪər/ : 캠프파이어",
    "options": [
      "가로등, 가로등불",
      "촛불, 양초 불빛",
      "형광등, 형광 불빛",
      "모닥불, 캠프파이어"
    ],
    "correct": 3,
    "hint": "힌트: \"모닥불, 캠프파이어\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈkæmpfaɪər/.",
    "score": 8
  },
  {
    "word": "servant",
    "phonetic": "/ˈsɜːrvənt/ : 서번트",
    "options": [
      "하인, 종",
      "주인, 주인님",
      "귀족, 귀족 계층",
      "왕, 군주"
    ],
    "correct": 0,
    "hint": "힌트: \"하인, 종\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsɜːrvənt/.",
    "score": 8
  },
  {
    "word": "bathroom",
    "phonetic": "/ˈbɑːθruːm/ : 배스룸",
    "options": [
      "침실, 잠자는 방",
      "거실, 생활실",
      "욕실, 화장실",
      "부엌, 주방"
    ],
    "correct": 2,
    "hint": "힌트: \"욕실, 화장실\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈbɑːθruːm/.",
    "score": 8
  },
  {
    "word": "meal",
    "phonetic": "/miːl/ : 밀",
    "options": [
      "음료",
      "간식",
      "디저트",
      "식사"
    ],
    "correct": 3,
    "hint": "힌트: \"식사\"와 가장 가까운 뜻을 고르세요. 발음 단서: /miːl/.",
    "score": 3
  },
  {
    "word": "parent",
    "phonetic": "/ˈpeərənt/ : 페어런트",
    "options": [
      "부모",
      "자녀",
      "형제",
      "친구"
    ],
    "correct": 0,
    "hint": "힌트: \"부모\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈpeərənt/.",
    "score": 5
  },
  {
    "word": "promise",
    "phonetic": "/ˈprɒmɪs/ : 프로미스",
    "options": [
      "전제, 조건",
      "산문, 글",
      "약속, 약속하다",
      "프리즘, 삼각형 유리"
    ],
    "correct": 2,
    "hint": "힌트: \"약속, 약속하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈprɒmɪs/.",
    "score": 8
  },
  {
    "word": "net",
    "phonetic": "/net/ : 넷",
    "options": [
      "견과류, 너트",
      "그물, 인터넷",
      "둥지, 보금자리",
      "다음, 그다음"
    ],
    "correct": 1,
    "hint": "힌트: \"그물, 인터넷\"와 가장 가까운 뜻을 고르세요. 발음 단서: /net/.",
    "score": 3
  },
  {
    "word": "attraction",
    "phonetic": "/əˈtrækʃn/ : 어트랙션",
    "options": [
      "거부감, 반감",
      "혐오감, 역겨움",
      "무관심, 냉담함",
      "매력, 끌림"
    ],
    "correct": 3,
    "hint": "힌트: \"매력, 끌림\"와 가장 가까운 뜻을 고르세요. 발음 단서: /əˈtrækʃn/.",
    "score": 10
  },
  {
    "word": "wonderful",
    "phonetic": "/ˈwʌndərfl/ : 원더풀",
    "options": [
      "방황하다, 헤매다",
      "경이로움, 놀라움",
      "훌륭한, 놀라운",
      "방랑자, 유랑자"
    ],
    "correct": 2,
    "hint": "힌트: \"훌륭한, 놀라운\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈwʌndərfl/.",
    "score": 10
  },
  {
    "word": "matter",
    "phonetic": "/ˈmætər/ : 매터",
    "options": [
      "사소하다, 하찮다",
      "문제, 물질, 중요하다",
      "무시하다, 못 본 척하다",
      "포기하다, 그만두다"
    ],
    "correct": 1,
    "hint": "힌트: \"문제, 물질, 중요하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmætər/.",
    "score": 5
  },
  {
    "word": "same",
    "phonetic": "/seɪm/ : 세임",
    "options": [
      "다른, 차이 있는",
      "새로운, 신선한",
      "같은, 동일한",
      "반대의, 상반된"
    ],
    "correct": 2,
    "hint": "힌트: \"같은, 동일한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /seɪm/.",
    "score": 3
  },
  {
    "word": "upland",
    "phonetic": "/ˈʌplænd/ : 업랜드",
    "options": [
      "고지, 고원 지대",
      "저지대, 낮은 땅",
      "해안가, 해안 지대",
      "평야, 들판"
    ],
    "correct": 0,
    "hint": "힌트: \"고지, 고원 지대\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈʌplænd/.",
    "score": 5
  },
  {
    "word": "himself",
    "phonetic": "/hɪmˈself/ : 힘셀프",
    "options": [
      "찬송가",
      "그 자신",
      "선반",
      "도움"
    ],
    "correct": 1,
    "hint": "힌트: \"그 자신\"와 가장 가까운 뜻을 고르세요. 발음 단서: /hɪmˈself/.",
    "score": 8
  },
  {
    "word": "ground",
    "phonetic": "/ɡraʊnd/ : 그라운드",
    "options": [
      "땅, 지면",
      "하늘, 하늘 위",
      "바다, 바닷물",
      "벽, 담벼락"
    ],
    "correct": 0,
    "hint": "힌트: \"땅, 지면\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɡraʊnd/.",
    "score": 5
  },
  {
    "word": "nature",
    "phonetic": "/ˈneɪtʃər/ : 네이처",
    "options": [
      "도시, 도시 환경",
      "문명, 문화",
      "자연, 본성",
      "기술, 테크놀로지"
    ],
    "correct": 2,
    "hint": "힌트: \"자연, 본성\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈneɪtʃər/.",
    "score": 5
  },
  {
    "word": "narrow",
    "phonetic": "/ˈnærəʊ/ : 내로우",
    "options": [
      "넓은, 너른",
      "좁은, 좁히다",
      "깊은, 심오한",
      "높은, 키 큰"
    ],
    "correct": 1,
    "hint": "힌트: \"좁은, 좁히다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnærəʊ/.",
    "score": 5
  },
  {
    "word": "mommy",
    "phonetic": "/ˈmɒmi/ : 마미",
    "options": [
      "엄마",
      "아빠",
      "할머니",
      "언니"
    ],
    "correct": 0,
    "hint": "힌트: \"엄마\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmɒmi/.",
    "score": 5
  },
  {
    "word": "finish",
    "phonetic": "/ˈfɪnɪʃ/ : 피니시",
    "options": [
      "시작하다, 출발하다",
      "계속하다, 이어가다",
      "준비하다, 대비하다",
      "끝내다, 마치다"
    ],
    "correct": 3,
    "hint": "힌트: \"끝내다, 마치다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈfɪnɪʃ/.",
    "score": 5
  },
  {
    "word": "behind",
    "phonetic": "/bɪˈhaɪnd/ : 비하인드",
    "options": [
      "뒤에, 뒤처진",
      "앞에, 앞쪽에",
      "옆에, 곁에",
      "위에, 위쪽에"
    ],
    "correct": 0,
    "hint": "힌트: \"뒤에, 뒤처진\"와 가장 가까운 뜻을 고르세요. 발음 단서: /bɪˈhaɪnd/.",
    "score": 5
  },
  {
    "word": "wisdom",
    "phonetic": "/ˈwɪzdəm/ : 위즈덤",
    "options": [
      "어리석음, 우둔함",
      "무지, 모름",
      "지혜, 현명함",
      "혼란, 혼돈"
    ],
    "correct": 2,
    "hint": "힌트: \"지혜, 현명함\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈwɪzdəm/.",
    "score": 5
  },
  {
    "word": "painter",
    "phonetic": "/ˈpeɪntər/ : 페인터",
    "options": [
      "포인터, 마우스 커서",
      "인쇄기, 프린터",
      "화가, 페인터",
      "표범, 큰 고양이"
    ],
    "correct": 2,
    "hint": "힌트: \"화가, 페인터\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈpeɪntər/.",
    "score": 8
  },
  {
    "word": "question",
    "phonetic": "/ˈkwestʃən/ : 퀘스천",
    "options": [
      "질문, 문제",
      "답변, 대답",
      "설명, 해설",
      "침묵, 고요함"
    ],
    "correct": 0,
    "hint": "힌트: \"질문, 문제\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈkwestʃən/.",
    "score": 8
  },
  {
    "word": "sound",
    "phonetic": "/saʊnd/ : 사운드",
    "options": [
      "색깔, 빛깔",
      "냄새, 향기",
      "소리, 건강한",
      "촉감, 느낌"
    ],
    "correct": 2,
    "hint": "힌트: \"소리, 건강한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /saʊnd/.",
    "score": 5
  },
  {
    "word": "nick",
    "phonetic": "/nɪk/ : 닉",
    "options": [
      "수리하다, 고치다",
      "청소하다, 닦다",
      "만들다, 제작하다",
      "흠집, 새기다"
    ],
    "correct": 3,
    "hint": "힌트: \"흠집, 새기다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /nɪk/.",
    "score": 3
  },
  {
    "word": "print",
    "phonetic": "/prɪnt/ : 프린트",
    "options": [
      "쓰다, 기록하다",
      "지우다, 삭제하다",
      "인쇄하다, 출력물",
      "읽다, 독서하다"
    ],
    "correct": 2,
    "hint": "힌트: \"인쇄하다, 출력물\"와 가장 가까운 뜻을 고르세요. 발음 단서: /prɪnt/.",
    "score": 5
  },
  {
    "word": "piano",
    "phonetic": "/piˈænəʊ/ : 피아노",
    "options": [
      "광장",
      "피아노",
      "피아니스트",
      "안뜰"
    ],
    "correct": 1,
    "hint": "힌트: \"피아노\"와 가장 가까운 뜻을 고르세요. 발음 단서: /piˈænəʊ/.",
    "score": 5
  },
  {
    "word": "network",
    "phonetic": "/ˈnetwɜːrk/ : 네트워크",
    "options": [
      "단절, 분리",
      "개인, 개인 행동",
      "고립, 격리",
      "네트워크, 연결망"
    ],
    "correct": 3,
    "hint": "힌트: \"네트워크, 연결망\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnetwɜːrk/.",
    "score": 8
  },
  {
    "word": "rainy",
    "phonetic": "/ˈreɪni/ : 레이니",
    "options": [
      "비가 오는, 우천의",
      "맑은, 화창한",
      "흐린, 구름 낀",
      "눈 내리는, 설경의"
    ],
    "correct": 0,
    "hint": "힌트: \"비가 오는, 우천의\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈreɪni/.",
    "score": 5
  },
  {
    "word": "warn",
    "phonetic": "/wɔːrn/ : 원",
    "options": [
      "격려하다",
      "칭찬하다",
      "무시하다",
      "경고하다"
    ],
    "correct": 3,
    "hint": "힌트: \"경고하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /wɔːrn/.",
    "score": 3
  },
  {
    "word": "important",
    "phonetic": "/ɪmˈpɔːrtənt/ : 임포턴트",
    "options": [
      "수입하다",
      "사기꾼",
      "중요한",
      "불멸의"
    ],
    "correct": 2,
    "hint": "힌트: \"중요한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪmˈpɔːrtənt/.",
    "score": 10
  },
  {
    "word": "angry",
    "phonetic": "/ˈæŋɡri/ : 앵그리",
    "options": [
      "기쁜",
      "화난, 성난",
      "슬픈",
      "두려운"
    ],
    "correct": 1,
    "hint": "힌트: \"화난, 성난\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈæŋɡri/.",
    "score": 5
  },
  {
    "word": "pretend",
    "phonetic": "/prɪˈtend/ : 프리텐드",
    "options": [
      "가장하다, ~인 척하다",
      "솔직하다",
      "고백하다",
      "인정하다"
    ],
    "correct": 0,
    "hint": "힌트: \"가장하다, ~인 척하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /prɪˈtend/.",
    "score": 8
  },
  {
    "word": "upon",
    "phonetic": "/əˈpɒn/ : 어폰",
    "options": [
      "~위에, ~에 관하여",
      "~아래에",
      "~옆에",
      "~뒤에"
    ],
    "correct": 0,
    "hint": "힌트: \"~위에, ~에 관하여\"와 가장 가까운 뜻을 고르세요. 발음 단서: /əˈpɒn/.",
    "score": 3
  },
  {
    "word": "stadium",
    "phonetic": "/ˈsteɪdiəm/ : 스테이디엄",
    "options": [
      "학교",
      "병원",
      "경기장, 스타디움",
      "공원"
    ],
    "correct": 2,
    "hint": "힌트: \"경기장, 스타디움\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsteɪdiəm/.",
    "score": 8
  },
  {
    "word": "main",
    "phonetic": "/meɪn/ : 메인",
    "options": [
      "부수적인",
      "주요한, 주된",
      "보조적인",
      "사소한"
    ],
    "correct": 1,
    "hint": "힌트: \"주요한, 주된\"와 가장 가까운 뜻을 고르세요. 발음 단서: /meɪn/.",
    "score": 3
  },
  {
    "word": "assent",
    "phonetic": "/əˈsent/ : 어센트",
    "options": [
      "반대하다, 반박하다",
      "거절하다, 거부하다",
      "무시하다, 외면하다",
      "동의하다, 찬성"
    ],
    "correct": 3,
    "hint": "힌트: \"동의하다, 찬성\"와 가장 가까운 뜻을 고르세요. 발음 단서: /əˈsent/.",
    "score": 5
  },
  {
    "word": "marathon",
    "phonetic": "/ˈmærəθən/ : 매러선",
    "options": [
      "단거리 달리기",
      "수영",
      "사이클",
      "장거리 달리기"
    ],
    "correct": 3,
    "hint": "힌트: \"장거리 달리기\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈmærəθən/.",
    "score": 8
  },
  {
    "word": "mark",
    "phonetic": "/mɑːrk/ : 마크",
    "options": [
      "지우다, 삭제하다",
      "숨기다, 감추다",
      "표시, 점수, 표시하다",
      "무시하다, 외면하다"
    ],
    "correct": 2,
    "hint": "힌트: \"표시, 점수, 표시하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /mɑːrk/.",
    "score": 3
  },
  {
    "word": "sentence",
    "phonetic": "/ˈsentəns/ : 센턴스",
    "options": [
      "단어, 낱말",
      "문장, 형벌",
      "문단, 단락",
      "글자, 문자"
    ],
    "correct": 1,
    "hint": "힌트: \"문장, 형벌\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsentəns/.",
    "score": 8
  },
  {
    "word": "center",
    "phonetic": "/ˈsentər/ : 센터",
    "options": [
      "끝, 종착점",
      "가장자리, 테두리",
      "중심, 중앙",
      "모서리, 꼭짓점"
    ],
    "correct": 2,
    "hint": "힌트: \"중심, 중앙\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈsentər/.",
    "score": 5
  },
  {
    "word": "uncle",
    "phonetic": "/ˈʌŋkl/ : 엉클",
    "options": [
      "이모, 고모",
      "형제, 남자 형제",
      "사촌, 친척",
      "삼촌, 아저씨"
    ],
    "correct": 3,
    "hint": "힌트: \"삼촌, 아저씨\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈʌŋkl/.",
    "score": 5
  },
  {
    "word": "vacant",
    "phonetic": "/ˈveɪkənt/ : 베이컨트",
    "options": [
      "비어있는, 공석의",
      "가득 찬, 꽉 찬",
      "붐비는, 북적이는",
      "바쁜, 분주한"
    ],
    "correct": 0,
    "hint": "힌트: \"비어있는, 공석의\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈveɪkənt/.",
    "score": 5
  },
  {
    "word": "smile",
    "phonetic": "/smaɪl/ : 스마일",
    "options": [
      "울다, 눈물 흘리다",
      "찡그리다, 인상 쓰다",
      "미소, 미소 짓다",
      "소리치다, 외치다"
    ],
    "correct": 2,
    "hint": "힌트: \"미소, 미소 짓다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /smaɪl/.",
    "score": 5
  },
  {
    "word": "basement",
    "phonetic": "/ˈbeɪsmənt/ : 베이스먼트",
    "options": [
      "지하실",
      "다락방",
      "거실",
      "옥상"
    ],
    "correct": 0,
    "hint": "힌트: \"지하실\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈbeɪsmənt/.",
    "score": 8
  },
  {
    "word": "famous",
    "phonetic": "/ˈfeɪməs/ : 페이머스",
    "options": [
      "평범한",
      "무명의",
      "유명한",
      "알려지지 않은"
    ],
    "correct": 2,
    "hint": "힌트: \"유명한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈfeɪməs/.",
    "score": 5
  },
  {
    "word": "number",
    "phonetic": "/ˈnʌmbər/ : 넘버",
    "options": [
      "문자, 알파벳",
      "숫자, 번호",
      "색깔, 빛깔",
      "도형, 모양"
    ],
    "correct": 1,
    "hint": "힌트: \"숫자, 번호\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈnʌmbər/.",
    "score": 5
  },
  {
    "word": "engage",
    "phonetic": "/ɪnˈɡeɪdʒ/ : 인게이지",
    "options": [
      "탈퇴하다, 그만두다",
      "회피하다, 피하다",
      "무시하다, 외면하다",
      "참여하다, 약혼하다"
    ],
    "correct": 3,
    "hint": "힌트: \"참여하다, 약혼하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ɪnˈɡeɪdʒ/.",
    "score": 5
  },
  {
    "word": "homey",
    "phonetic": "/ˈhəʊmi/ : 호미",
    "options": [
      "가정적인, 아늑한",
      "차가운, 냉담한",
      "딱딱한, 딱딱함",
      "낯선, 이상한"
    ],
    "correct": 0,
    "hint": "힌트: \"가정적인, 아늑한\"와 가장 가까운 뜻을 고르세요. 발음 단서: /ˈhəʊmi/.",
    "score": 5
  },
  {
    "word": "may",
    "phonetic": "/meɪ/ : 메이",
    "options": [
      "~해야 한다, 필수",
      "~할 수 없다, 불가능",
      "~이다, 존재",
      "~일 수도 있다, 5월"
    ],
    "correct": 3,
    "hint": "힌트: \"~일 수도 있다, 5월\"와 가장 가까운 뜻을 고르세요. 발음 단서: /meɪ/.",
    "score": 3
  },
  {
    "word": "note",
    "phonetic": "/nəʊt/ : 노트",
    "options": [
      "메모, 음표, 주목하다",
      "지우다, 삭제하다",
      "잊다, 기억 못하다",
      "무시하다, 외면하다"
    ],
    "correct": 0,
    "hint": "힌트: \"메모, 음표, 주목하다\"와 가장 가까운 뜻을 고르세요. 발음 단서: /nəʊt/.",
    "score": 3
  }
];
