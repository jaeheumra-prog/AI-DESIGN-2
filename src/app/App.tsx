import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckCircle2,
  CirclePlay,
  Film,
  Globe2,
  Handshake,
  Languages,
  LayoutPanelTop,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRound,
  Users2,
} from "lucide-react";
import { Header } from "./components/Header";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const crisisStats = [
  {
    value: "23.7%",
    title: "청년 실업률",
    description: "사회 초년생이 첫 기회를 얻기까지 여전히 긴 대기 시간이 필요합니다.",
  },
  {
    value: "10개월",
    title: "평균 구직 기간",
    description: "원하는 직장을 찾기까지 준비와 지원, 대기 과정이 반복되고 있습니다.",
  },
  {
    value: "40%",
    title: "불완전 취업",
    description: "원하는 일자리보다 낮은 수준의 일에 머무는 청년이 많습니다.",
  },
];

const limitations = [
  {
    title: "텍스트만 있는 이력서",
    description: "학력, 자격증, 자기소개만으로는 실제 역량과 작업 스타일을 확인하기 어렵습니다.",
  },
  {
    title: "구직자에게만 쏠린 지원 부담",
    description: "구직자가 여러 공고에 일일이 지원해야 해서 시간과 에너지가 과도하게 소모됩니다.",
  },
  {
    title: "행동보다 스펙 위주의 검증",
    description: "실무를 잘하는 사람보다 문서가 잘 정리된 사람이 먼저 선택되는 구조가 반복됩니다.",
  },
];

const solutionSummary = [
  {
    icon: Film,
    title: "쇼폼 영상으로 능력을 증명",
    description: "최대 60초 영상으로 실무 능력을 자격증이 아닌 행동으로 보여줍니다.",
  },
  {
    icon: UserRound,
    title: "계정 프로필",
    description: "이력서, 개인정보, 쇼츠 영상까지 한 번에 보는 통합 프로필을 제공합니다.",
  },
  {
    icon: Building2,
    title: "채용사도 영상을 올린다",
    description: "공고를 영상으로 소개해 회사 문화와 직무 분위기를 더 생생하게 전달합니다.",
  },
  {
    icon: Handshake,
    title: "양방향 소통",
    description: "구직자와 채용사 모두 서로의 쇼츠를 확인하고 먼저 연결할 수 있습니다.",
  },
];

const compareRows = [
  ["이력서/프로필", "텍스트만 있는 이력서", "영상 포트폴리오 + 프로필 통합"],
  ["지원 구조", "단방향 지원", "양방향 매칭"],
  ["역량 검증", "자격증·문서 기반", "실제 능력 증명"],
  ["사용자 경험", "수동적 구직자", "능동적 채용사 발견"],
  ["매칭 품질", "스펙 중심", "역량·적합도 중심"],
];

const roadmapItems = [
  {
    icon: Globe2,
    title: "전세계 연동",
    bullets: ["국경 없는 채용 매칭", "글로벌 인재 풀 구축"],
  },
  {
    icon: BrainCircuit,
    title: "자동 번역 & AI",
    bullets: ["다국어 자동 번역", "AI 기반 역량 분석"],
  },
  {
    icon: Users2,
    title: "온라인 팀플 & 그룹 모집",
    bullets: ["프로젝트 기반 협업", "팀 구성원 모집 기능"],
  },
  {
    icon: Sparkles,
    title: "메타버스 통합",
    bullets: ["가상 면접 환경", "3D 포트폴리오 전시"],
  },
  {
    icon: Smartphone,
    title: "웹 → 앱 확장",
    bullets: ["모바일 앱 출시", "크로스 플랫폼 지원"],
  },
];

const improvementItems = [
  {
    icon: ShieldCheck,
    title: "신뢰도 시스템 강화",
    description: "영상 진위 여부 검증, 피드백 기반 신뢰 점수 도입",
  },
  {
    icon: LayoutPanelTop,
    title: "접근성 개선",
    description: "자막 자동 생성, 장애인 구직자 지원 기능 추가",
  },
  {
    icon: BarChart3,
    title: "데이터 기반 인사이트",
    description: "구직자 역량 트렌드 분석 리포트 제공",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-4">
      {eyebrow ? (
        <Badge
          variant="outline"
          className="border-[#e3b556]/40 bg-white/80 px-4 py-1 text-[11px] tracking-[0.28em] text-[#a67c26]"
        >
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[#1f1915] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="max-w-3xl text-lg leading-8 text-[#5f554b]">{description}</p> : null}
    </div>
  );
}

function AppPhoneDemo() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] rounded-[2.4rem] border border-white/80 bg-[#121212] p-3 shadow-[0_30px_80px_rgba(17,12,7,0.22)]">
      <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black/85" />
      <div className="overflow-hidden rounded-[2rem] bg-black">
        <video
          className="aspect-[9/19] w-full object-cover"
          src="./shorts/videos/video-1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="pointer-events-none absolute inset-x-6 bottom-8 flex items-end justify-between text-white">
        <div className="max-w-[62%] space-y-2">
          <p className="text-sm font-semibold">@LeeSeungHoe</p>
          <p className="text-xs leading-5 text-white/85">
            Blender 작업 기록 #3D Designer #Blender #Shorts
          </p>
        </div>
        <div className="space-y-4 text-center text-[10px] font-medium">
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full border-2 border-white/80 bg-[#6f6f6f] p-2">
              <UserRound className="h-4 w-4" />
            </div>
            <span>프로필</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full bg-black/50 p-2">
              <Briefcase className="h-4 w-4" />
            </div>
            <span>56</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full bg-black/50 p-2">
              <MessageSquareText className="h-4 w-4" />
            </div>
            <span>연락</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePreview() {
  const profileMeta = [
    "라재흠 · 21세",
    "경기 안성 거주",
    "웹 개발 · 디자인 보조 희망",
    "주 3일 / 장기 가능",
  ];

  const profileTags = ["#영상편집가능", "#Blender입문", "#빠른적응", "#고객응대가능"];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <Card className="border-[#ead9b4] bg-white/95 shadow-[0_20px_60px_rgba(31,25,21,0.08)]">
        <CardContent className="space-y-6 p-7">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b1714] text-white">
                <UserRound className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xl font-semibold text-[#1f1915]">계정 프로필 하나에 핵심 정보 통합</p>
                <p className="text-sm text-[#7d7062]">이력서, 개인정보, 쇼츠 영상, 대표 작업물을 한 페이지에서 확인</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {profileMeta.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#efe4cf] bg-[#fbf7ee] px-4 py-3 text-sm font-medium text-[#3d332b]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {profileTags.map((tag) => (
              <Badge key={tag} className="rounded-full bg-[#e3b556] px-3 py-1 text-[#1f1915]">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-[#ead9b4] bg-[linear-gradient(180deg,#fffefb_0%,#faf4e8_100%)] shadow-[0_20px_60px_rgba(31,25,21,0.08)]">
        <CardContent className="space-y-5 p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#b4882f]">profile view</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#1f1915]">채용사가 한눈에 파악</h3>
            </div>
            <SearchCheck className="h-8 w-8 text-[#d8a53b]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "이력서·개인정보", text: "로그인 시 작성" },
              { title: "쇼폼 영상 모음", text: "대표 영상 / 작업물" },
              { title: "근무 가능 조건", text: "요일 · 시간 · 기간" },
              { title: "연락 액션", text: "바로 저장 / 연락 / 제안" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#efe4cf] bg-white/90 p-4">
                <p className="text-sm font-semibold text-[#28211c]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#706455]">{item.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CompanyVideoPreview() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <Card className="overflow-hidden border-[#ead9b4] bg-[#f6efe2] shadow-[0_20px_60px_rgba(31,25,21,0.08)]">
        <CardContent className="p-0">
          <div className="relative flex min-h-[360px] items-center justify-center bg-[radial-gradient(circle_at_top,#f2d18b,transparent_45%),linear-gradient(135deg,#4a3a31,#1f1714)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.16))]" />
            <CirclePlay className="relative z-10 h-20 w-20 text-white/95" />
            <div className="absolute bottom-0 left-0 right-0 space-y-3 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16 text-white">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/70">recruiting clip</p>
              <h3 className="text-2xl font-semibold">채용 공고도 영상으로 소개</h3>
              <p className="max-w-md text-sm leading-6 text-white/85">
                회사 문화, 팀 분위기, 실제 업무 환경까지 공고 한 장보다 더 직관적으로 전달합니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {[
          {
            title: "채용공고 영상",
            text: "구직자가 읽는 공고가 아니라 보는 공고로 전환해 정보 전달력을 높입니다.",
          },
          {
            title: "회사 문화·직무 소개",
            text: "업무 환경과 역할을 한눈에 보여줘 구직자의 이해도를 높이고 이탈을 줄입니다.",
          },
          {
            title: "구직자 이해도 향상",
            text: "회사도 영상을 통해 매력을 어필하고, 지원 전 단계에서 더 잘 맞는 인재를 모읍니다.",
          },
        ].map((item) => (
          <Card
            key={item.title}
            className="border-[#ead9b4] bg-white/92 shadow-[0_16px_40px_rgba(31,25,21,0.06)]"
          >
            <CardContent className="flex items-start gap-4 p-6">
              <div className="rounded-2xl bg-[#f5e4b8] p-3 text-[#8b6520]">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-[#1f1915]">{item.title}</p>
                <p className="text-base leading-7 text-[#6a5d50]">{item.text}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MatchFlow() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {[
        {
          title: "구직자",
          subtitle: "영상 프로필 업로드",
          body: "스펙만 올리는 대신 실제 실무 장면과 작업 태도를 먼저 공개합니다.",
        },
        {
          title: "채용사",
          subtitle: "관심 인재 먼저 발견",
          body: "지원을 기다리는 게 아니라, 원하는 역량의 인재를 피드에서 먼저 발견합니다.",
        },
        {
          title: "구직자",
          subtitle: "수동 지원 아닌 능동 선택",
          body: "제안을 받은 뒤 회사 영상을 확인하고, 더 잘 맞는 곳과 양방향으로 연결됩니다.",
        },
      ].map((step, index) => (
        <Card
          key={`${step.title}-${index}`}
          className="relative overflow-hidden border-[#ead9b4] bg-white/95 shadow-[0_16px_40px_rgba(31,25,21,0.06)]"
        >
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#d9a83f] via-[#f1d38d] to-transparent" />
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-[#1f1915]">{step.title}</p>
              <div className="rounded-full border border-[#e6cf9c] bg-[#fbf4e6] px-3 py-1 text-sm font-medium text-[#b4882f]">
                0{index + 1}
              </div>
            </div>
            <p className="text-lg font-medium text-[#3e342d]">{step.subtitle}</p>
            <p className="text-base leading-7 text-[#6a5d50]">{step.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf7ef] text-[#1f1915]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-[#f2d48f]/45 blur-3xl" />
        <div className="absolute right-[-8%] top-32 h-80 w-80 rounded-full bg-[#f0c96c]/30 blur-3xl" />
        <div className="absolute bottom-24 left-[12%] h-96 w-96 rounded-full bg-[#f6e6bc]/30 blur-3xl" />
      </div>

      <Header />

      <main className="pb-20">
        <section id="intro" className="relative overflow-hidden pt-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="space-y-8">
              <Badge className="rounded-full bg-[#f2d18b] px-4 py-1.5 text-[#1f1915]">
                AI DESIGN · 영상 기반 채용 경험
              </Badge>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#1f1915] md:text-6xl md:leading-[1.06]">
                  글이 아닌 <span className="text-[#d7ab4a]">영상</span>으로,
                  <br />
                  수동이 아닌 <span className="text-[#d7ab4a]">양방향</span>으로
                  <br />
                  청년 채용 경험을 다시 설계합니다.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[#655a4f]">
                  청년 취업 위기의 현실과 기존 채용 앱의 구조적 한계를 바탕으로, 실무 능력을 쇼폼으로 증명하고
                  채용사도 먼저 연결할 수 있는 새로운 채용 웹 경험을 제안합니다.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="h-12 rounded-full bg-[#1f1915] px-6 text-base text-white hover:bg-[#312922]"
                >
                  핵심 기능 보기
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
                  className="h-12 rounded-full border-[#ddc38a] bg-white/70 px-6 text-base text-[#1f1915] hover:bg-[#f7edd5]"
                >
                  문제부터 보기
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "쇼츠 피드에서 실무 능력 확인",
                  "프로필에 이력서·영상·근무 정보 통합",
                  "채용사 영상과 양방향 매칭까지 연결",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#ead9b4] bg-white/85 px-4 py-4 text-sm font-medium leading-6 text-[#4b4037] shadow-[0_12px_30px_rgba(31,25,21,0.05)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,#f3d794,transparent_38%),radial-gradient(circle_at_bottom_left,#f0c15f,transparent_28%)] blur-2xl" />
              <Card className="relative overflow-hidden rounded-[2rem] border-[#ead9b4] bg-white/88 shadow-[0_30px_80px_rgba(24,18,12,0.14)]">
                <CardContent className="space-y-8 p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.26em] text-[#b4882f]">core promise</p>
                      <h2 className="mt-3 text-2xl font-semibold text-[#1f1915]">발표 자료의 핵심 메시지를 실제 서비스 화면으로</h2>
                    </div>
                    <div className="rounded-2xl bg-[#f6e6bc] p-3 text-[#b4882f]">
                      <Sparkles className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {[
                      ["문제 인식", "청년 취업 위기와 채용 구조의 비효율"],
                      ["제품 해결", "영상 기반 능력 증명 + 통합 프로필 + 양방향 매칭"],
                      ["기대 효과", "구직자는 덜 지치고, 채용사는 더 빨리 적합한 인재를 발견"],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-[#efe3ca] bg-[#fffdf8] px-5 py-4"
                      >
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a67c26]">{label}</p>
                          <p className="mt-2 text-base leading-7 text-[#4e4339]">{text}</p>
                        </div>
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d7ab4a]" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="problem" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Reality"
            title="청년 취업 위기: 현실과 통계"
            description="사회 초년생의 일자리 진입은 여전히 어렵습니다. 채용 시장은 경험을 요구하지만, 정작 청년들은 이를 쌓을 기회조차 부족한 상황입니다."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {crisisStats.map((stat) => (
              <Card
                key={stat.title}
                className="border-[#ead9b4] bg-white/92 shadow-[0_20px_50px_rgba(31,25,21,0.07)]"
              >
                <CardContent className="space-y-4 p-8 text-center">
                  <p className="text-5xl font-semibold tracking-tight text-[#1f1915] md:text-6xl">{stat.value}</p>
                  <p className="text-2xl font-semibold text-[#2c241f]">{stat.title}</p>
                  <p className="text-base leading-7 text-[#6a5d50]">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="limits" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Challenge"
            title="기존 채용 앱, 무엇이 문제인가?"
            description="청년 고용 위기 속에서, 텍스트 중심 채용 플랫폼이 왜 실제 역량 검증과 좋은 매칭에 실패하는지 구조적으로 보여줍니다."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <Card className="overflow-hidden border-[#ead9b4] bg-white/94 shadow-[0_24px_60px_rgba(31,25,21,0.08)]">
              <CardContent className="space-y-5 p-8">
                <div className="mx-auto w-full max-w-[320px] rounded-[2.5rem] border border-[#efe3ca] bg-white p-5 shadow-[0_20px_40px_rgba(31,25,21,0.08)]">
                  <div className="mx-auto h-7 w-32 rounded-full bg-[#171310]" />
                  <div className="mt-7 space-y-6">
                    {[
                      ["경력사항", "신입"],
                      ["희망근무조건", "경기 전체, 매장관리·판매 등"],
                      ["자기소개·스킬·강점", "자소서, 자격증, MBTI"],
                    ].map(([title, value]) => (
                      <div key={title} className="space-y-2 border-b border-[#efe6d3] pb-4">
                        <p className="text-sm font-semibold text-[#1f1915]">{title}</p>
                        <p className="text-sm text-[#8b7f73]">{value}</p>
                      </div>
                    ))}
                    <div className="rounded-xl border border-dashed border-[#f0d696] bg-[#fff7e9] px-4 py-3 text-center text-sm text-[#a67c26]">
                      추가정보를 입력하고 강점을 어필해보세요!
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5">
              {limitations.map((item, index) => (
                <Card
                  key={item.title}
                  className="border-[#ead9b4] bg-white/95 shadow-[0_18px_45px_rgba(31,25,21,0.06)]"
                >
                  <CardContent className="flex gap-5 p-7">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f4ddb0] text-[#986f1e]">
                      <span className="text-sm font-semibold">0{index + 1}</span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-2xl font-semibold text-[#1f1915]">{item.title}</p>
                      <p className="text-base leading-7 text-[#675a4d]">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Solution"
            title="우리의 해결책"
            description="핵심 기능 4가지로 구직과 채용을 더 빠르고 직관적으로 연결합니다."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {solutionSummary.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-[#ead9b4] bg-white/95 shadow-[0_20px_50px_rgba(31,25,21,0.07)]"
                >
                  <CardContent className="space-y-5 p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6e6bc] text-[#b4882f]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-3xl font-semibold text-[#1f1915]">{item.title}</p>
                      <p className="text-base leading-8 text-[#65594d]">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl scroll-mt-28 space-y-24 px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <SectionHeader
              eyebrow="Feature 01"
              title="핵심 기능 ① 쇼폼 영상으로 능력을 증명하다"
              description="최대 60초 영상으로 실무 능력을 표현하고, 자격증이 아닌 행동으로 역량을 보여줍니다."
            />
            <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
              <AppPhoneDemo />
              <Card className="border-[#ead9b4] bg-white/95 shadow-[0_24px_60px_rgba(31,25,21,0.08)]">
                <CardContent className="space-y-6 p-8">
                  <h3 className="text-3xl font-semibold text-[#1f1915]">채용사가 한눈에 파악</h3>
                  <ul className="space-y-4 text-lg leading-8 text-[#5f554b]">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d7ab4a]" />
                      최대 60초 영상으로 실무 능력 표현
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d7ab4a]" />
                      자격증 아닌 ‘행동’으로 증명
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d7ab4a]" />
                      채용사가 피드에서 빠르게 역량과 태도 확인
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-10">
            <SectionHeader
              eyebrow="Feature 02"
              title="핵심 기능 ② 계정 프로필"
              description="프로필 하나에 이력서, 개인정보, 쇼폼 영상, 근무 가능 조건이 모두 담깁니다."
            />
            <ProfilePreview />
          </div>

          <div className="space-y-10">
            <SectionHeader
              eyebrow="Feature 03"
              title="핵심 기능 ③ 채용사도 영상을 올린다"
              description="채용공고를 영상으로 소개해 회사 문화와 직무를 더 생생하게 전달합니다."
            />
            <CompanyVideoPreview />
          </div>

          <div className="space-y-10">
            <SectionHeader
              eyebrow="Feature 04"
              title="핵심 기능 ④ 양방향 매칭 — 먼저 연락하는 채용사"
              description="지원을 기다리는 구조를 넘어, 채용사와 구직자가 서로 먼저 발견하고 연결되는 흐름을 만듭니다."
            />
            <MatchFlow />
          </div>
        </section>

        <section id="compare" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Comparison"
            title="기존 앱 vs 우리 앱 — 완전히 다른 접근"
            description="텍스트 중심의 단방향 채용 구조를, 영상과 양방향 매칭 중심의 경험으로 바꿉니다."
          />

          <Card className="mt-12 overflow-hidden border-[#ead9b4] bg-white/96 shadow-[0_24px_60px_rgba(31,25,21,0.08)]">
            <div className="grid grid-cols-[1.15fr_1.2fr_1.2fr] border-b border-[#efe5d2] bg-[#fcf6ea] px-6 py-5 text-lg font-semibold text-[#2b241e] md:px-8">
              <div>비교 항목</div>
              <div>기존 채용 앱</div>
              <div className="text-[#a57920]">우리 앱</div>
            </div>
            <div>
              {compareRows.map(([label, legacy, next]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1.15fr_1.2fr_1.2fr] gap-4 border-b border-[#f3eadb] px-6 py-5 last:border-b-0 md:px-8"
                >
                  <div className="font-semibold text-[#2b241e]">{label}</div>
                  <div className="text-[#5e5246]">{legacy}</div>
                  <div className="font-medium text-[#8e6318]">{next}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section id="roadmap" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Roadmap"
            title="향후 아이디어 방향성"
            description="글로벌 확장과 혁신 기능을 포함해, 채용 앱을 더 넓은 연결 플랫폼으로 발전시킬 수 있습니다."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {roadmapItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-[#ead9b4] bg-white/95 shadow-[0_18px_45px_rgba(31,25,21,0.06)]"
                >
                  <CardContent className="space-y-5 p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5e4b8] text-[#b4882f]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-2xl font-semibold text-[#1f1915]">{item.title}</p>
                      <ul className="space-y-2 text-base leading-7 text-[#65594d]">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#d7ab4a]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="closing" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Closing"
            title="개선 방향 & 마무리"
            description="지속적인 신뢰도 개선과 접근성 확장, 데이터 인사이트를 통해 실제 채용 서비스로 진화시킵니다."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.96fr]">
            <div className="grid gap-5">
              {improvementItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="border-[#ead9b4] bg-white/95 shadow-[0_18px_45px_rgba(31,25,21,0.06)]"
                  >
                    <CardContent className="flex items-start gap-5 p-7">
                      <div className="rounded-2xl bg-[#f4ddb0] p-3 text-[#a57920]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-2xl font-semibold text-[#1f1915]">{item.title}</p>
                        <p className="text-base leading-7 text-[#65594d]">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-[#e3b556] bg-[#f4d792] text-[#1f1915] shadow-[0_26px_70px_rgba(183,137,40,0.22)]">
              <CardContent className="space-y-8 p-8">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8d6116]">핵심 메시지</p>
                  <h3 className="text-3xl font-semibold leading-tight">
                    사회 초년생의 취업 어려움을 해결하기 위해, 실무 능력을 <span className="underline decoration-[#a57920]/60 underline-offset-4">영상으로 보여주는</span> 채용 앱을 만들었습니다.
                  </h3>
                </div>
                <div className="space-y-4 text-lg leading-8 text-[#3f3327]">
                  <p>
                    글이 아닌 <strong>영상</strong>으로, 수동이 아닌 <strong>양방향</strong>으로, 스펙이 아닌
                    <strong> 실력</strong>으로 채용의 패러다임을 바꿉니다.
                  </p>
                  <p>
                    발표 자료의 모든 핵심 요소는 이제 웹사이트 안에서 실제 제품 흐름과 함께 확인할 수 있습니다.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                    className="h-11 rounded-full bg-[#1f1915] px-5 text-base text-white hover:bg-[#2f2721]"
                  >
                    기능 다시 보기
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("compare")?.scrollIntoView({ behavior: "smooth" })}
                    className="h-11 rounded-full border-[#af7f28] bg-white/65 px-5 text-base text-[#1f1915] hover:bg-white"
                  >
                    비교표 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
