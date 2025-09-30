import Marquee from "../molecules/Marquee";

// 배너 텍스트 데이터 정의
const firstBannerItems = [
  "Presentation Analysis Service ORATO",
  "Presentation Analysis Service ORATO",
  "Presentation Analysis Service ORATO",
];

const secondBannerItems = [
  "정한비",
  "천준범",
  "김소윤",
  "이윤지",
  "이형석",
  "변성우",
  "전승호",
];


export function CaptionBanner() {
  return <Marquee items={firstBannerItems} />;
}


export function NameBanner() {
  return <Marquee items={secondBannerItems} />;
}